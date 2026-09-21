import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { chromium } from 'playwright';

const root = process.cwd();
const dist = path.join(root, 'dist');
const reportDir = path.join(root, '.site-audit');
const reportFile = path.join(reportDir, 'browser-report.json');
const baseUrl = process.env.AUDIT_BASE_URL ?? 'http://127.0.0.1:4321';
const concurrency = Math.max(1, Number(process.env.AUDIT_CONCURRENCY ?? 6));

const viewports = [
  { name: 'mobile-small', width: 360, height: 800, isMobile: true, hasTouch: true },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
  { name: 'tablet', width: 768, height: 1024, isMobile: true, hasTouch: true },
  { name: 'desktop', width: 1440, height: 900, isMobile: false, hasTouch: false },
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function routeFor(file) {
  const relative = path.relative(dist, file).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

if (!fs.existsSync(dist)) {
  console.error('[ERROR] dist/ is missing. Run npm run build first.');
  process.exit(1);
}

const routes = walk(dist)
  .filter((file) => file.endsWith('.html') && path.basename(file) !== '404.html')
  .map(routeFor)
  .sort();

const browser = await chromium.launch({ headless: true });
const results = [];

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    isMobile: viewport.isMobile,
    hasTouch: viewport.hasTouch,
    locale: 'da-DK',
    reducedMotion: 'reduce',
  });
  let cursor = 0;

  async function worker() {
    const page = await context.newPage();
    while (cursor < routes.length) {
      const route = routes[cursor++];
      const consoleErrors = [];
      const failedRequests = [];
      const onConsole = (message) => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      };
      const onRequestFailed = (request) => {
        failedRequests.push({ url: request.url(), reason: request.failure()?.errorText ?? 'failed' });
      };
      page.on('console', onConsole);
      page.on('requestfailed', onRequestFailed);

      const result = { route, viewport: viewport.name, errors: [], warnings: [] };
      try {
        const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'networkidle', timeout: 30_000 });
        if (!response || response.status() >= 400) result.errors.push(`HTTP ${response?.status() ?? 'no response'}`);

        const metrics = await page.evaluate(() => {
          const visible = (element) => {
            const style = getComputedStyle(element);
            const rect = element.getBoundingClientRect();
            return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
          };
          const importantControls = [...document.querySelectorAll('a.btn, button, [role="button"], .affiliate-button, .nav-cta')]
            .filter(visible)
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return { text: (element.textContent ?? '').trim().slice(0, 80), width: rect.width, height: rect.height };
            });
          const tinyText = [...document.querySelectorAll('main p, main li, main a, main button')]
            .filter(visible)
            .filter((element) => Number.parseFloat(getComputedStyle(element).fontSize) < 12)
            .length;
          const overflowElements = [...document.querySelectorAll('body *')]
            .filter(visible)
            .map((element) => {
              const rect = element.getBoundingClientRect();
              return {
                label: `${element.tagName.toLowerCase()}${element.id ? '#' + element.id : ''}${element.classList.length ? '.' + [...element.classList].slice(0, 3).join('.') : ''}`,
                left: Math.round(rect.left),
                right: Math.round(rect.right),
                width: Math.round(rect.width),
              };
            })
            .filter((item) => item.left < -2 || item.right > window.innerWidth + 2)
            .slice(0, 8);
          const h1 = document.querySelector('h1');
          const h1Metrics = h1 && visible(h1) ? (() => {
            const style = getComputedStyle(h1);
            const lineHeight = Number.parseFloat(style.lineHeight) || Number.parseFloat(style.fontSize) * 1.1;
            const rect = h1.getBoundingClientRect();
            return { lines: Math.round(rect.height / lineHeight), height: Math.round(rect.height) };
          })() : null;
          return {
            documentWidth: document.documentElement.scrollWidth,
            viewportWidth: window.innerWidth,
            h1Count: document.querySelectorAll('h1').length,
            brokenImages: [...document.images]
              .filter((image) => image.complete && image.naturalWidth === 0)
              .map((image) => image.currentSrc || image.src)
              // These responsive homepage hero variants are served by the Cloudflare
              // Worker in production, not by Astro's static local preview.
              .filter((src) => {
                try {
                  return !/^\/media\/home-hero-\d+\.webp$/.test(new URL(src).pathname);
                } catch {
                  return true;
                }
              }),
            fallbackImages: [...document.images]
              .filter((image) => image.dataset.rtvFallbackStage === 'photo' || image.dataset.rtvFallbackStage === 'svg')
              .map((image) => ({
                alt: image.alt || '',
                stage: image.dataset.rtvFallbackStage,
                src: image.currentSrc || image.src,
              })),
            missingViewportMeta: !document.querySelector('meta[name="viewport"]'),
            importantControls,
            tinyText,
            overflowElements,
            h1Metrics,
          };
        });

        if (metrics.documentWidth > metrics.viewportWidth + 2) {
          const offenders = metrics.overflowElements.map((item) => `${item.label} [${item.left},${item.right}] w=${item.width}`).join('; ');
          result.errors.push(`Horizontal overflow: document ${metrics.documentWidth}px vs viewport ${metrics.viewportWidth}px.${offenders ? ' Likely offenders: ' + offenders : ''}`);
        }
        if (metrics.h1Count !== 1) result.errors.push(`Expected one H1, found ${metrics.h1Count}.`);
        if (metrics.missingViewportMeta) result.errors.push('Missing viewport meta tag.');
        if (metrics.brokenImages.length) result.errors.push(`${metrics.brokenImages.length} broken rendered image(s).`);
        if (metrics.fallbackImages.length) {
          const labels = metrics.fallbackImages.slice(0, 4).map((image) => `${image.alt || 'image'} → ${image.stage}`).join('; ');
          result.errors.push(`${metrics.fallbackImages.length} image(s) required runtime fallback. ${labels}`);
        }
        if (metrics.tinyText) result.warnings.push(`${metrics.tinyText} visible text element(s) render below 12px.`);

        if (viewport.isMobile) {
          const smallControls = metrics.importantControls.filter((control) => control.height < 42 || control.width < 42);
          if (smallControls.length) result.warnings.push(`${smallControls.length} important control(s) are smaller than 42×42px.`);
          if (metrics.h1Metrics?.lines > 4) result.warnings.push(`H1 wraps to about ${metrics.h1Metrics.lines} lines on ${viewport.name}.`);
        }

        const localFailures = failedRequests.filter((request) => request.url.startsWith(baseUrl));
        const remoteFailures = failedRequests.filter((request) => !request.url.startsWith(baseUrl));
        if (localFailures.length) result.errors.push(`${localFailures.length} local request(s) failed.`);
        if (remoteFailures.length) result.warnings.push(`${remoteFailures.length} external request(s) failed during the test.`);
        if (consoleErrors.length) result.warnings.push(`${consoleErrors.length} browser console error(s).`);
      } catch (error) {
        result.errors.push(error instanceof Error ? error.message : String(error));
      } finally {
        page.off('console', onConsole);
        page.off('requestfailed', onRequestFailed);
      }
      results.push(result);
    }
    await page.close();
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, routes.length) }, () => worker()));
  await context.close();
}

await browser.close();

const failures = results.filter((result) => result.errors.length);
const warnings = results.filter((result) => result.warnings.length);
const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  routes: routes.length,
  viewports: viewports.map(({ name, width, height }) => ({ name, width, height })),
  sessions: results.length,
  failures: failures.length,
  warnings: warnings.length,
  results,
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportFile, `${JSON.stringify(report, null, 2)}\n`);

console.log(`Browser-agent audit: ${report.sessions} local sessions across ${report.routes} routes and ${report.viewports.length} viewports.`);
console.log(`Failures: ${report.failures}. Sessions with warnings: ${report.warnings}.`);
for (const failure of failures.slice(0, 30)) console.error(`[ERROR] ${failure.viewport} ${failure.route}: ${failure.errors.join(' ')}`);
if (failures.length > 30) console.error(`...and ${failures.length - 30} more failing session(s).`);
console.log(`Full report: ${path.relative(root, reportFile)}`);

if (failures.length) process.exit(1);
console.log('✓ Browser audit passed all blocking checks.');
