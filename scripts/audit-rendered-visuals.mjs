import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const reportDir = path.resolve('.site-audit');
const reportFile = path.join(reportDir, 'visual-report.json');

const watchedPrefixes = [
  'destinationer/',
  'ture/',
  'rejseplaner/',
  'rejseguide/',
  'bedste-hoteller/',
  'book-rejsen/',
];

const hubRoutes = new Set([
  '/destinationer/',
  '/rejseguide/',
  '/rejseplaner/',
  '/ture/',
  '/bedste-hoteller/',
  '/book-rejsen/',
]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith('.html') ? [full] : [];
  });
}

function routeFor(file) {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function editorialRoute(route) {
  if (hubRoutes.has(route)) return false;
  return (
    /^\/destinationer\/[^/]+\//.test(route) ||
    /^\/rejseguide\/[^/]+\//.test(route) ||
    /^\/rejseplaner\/[^/]+\//.test(route) ||
    /^\/ture\/[^/]+\//.test(route)
  );
}

function wantsVideo(route) {
  return (
    /^\/destinationer\/[^/]+\/$/.test(route) ||
    /\/(sevaerdigheder|mad-i-[^/]+|3-dage-i-[^/]+|4-dage-i-[^/]+|bedste-strande|strande|halong-bay-cruise|o-hop-og-snorkling|o-ture-og-snorkling|vandsport-og-[^/]+)\/$/.test(route)
  );
}

function editorialContent(html) {
  const proseStart = /<article\b[^>]*class="[^"]*\bprose\b[^"]*"[^>]*>/i.exec(html);
  if (proseStart) {
    const start = proseStart.index + proseStart[0].length;
    const rest = html.slice(start);
    const sidebarStart = /<aside\b[^>]*class="[^"]*\barticle-sidebar\b[^"]*"[^>]*>/i.exec(rest);
    return sidebarStart ? rest.slice(0, sidebarStart.index) : rest;
  }

  const mainStart = /<main\b[^>]*>/i.exec(html);
  if (mainStart) {
    const start = mainStart.index + mainStart[0].length;
    const rest = html.slice(start);
    const footerStart = /<footer\b/i.exec(rest);
    return footerStart ? rest.slice(0, footerStart.index) : rest;
  }

  return html;
}

function sectionVisualStats(html) {
  const article = editorialContent(html);
  const pieces = article.split(/(?=<h2\b)/i).filter((piece) => /^<h2\b/i.test(piece.trim()));
  let maxTextOnlyRun = 0;
  let currentRun = 0;
  let visualSections = 0;

  for (const piece of pieces) {
    const hasVisual = /<img\b|<iframe\b|<table\b|class="[^"]*(?:place-map|hotel-map|route-map|visual-highlights|activity-grid|active-grid|video-block|fact-grid|hotel-list|area-list|route-grid|timeline|comparison-grid|day-route|priority-grid|provider-grid|agency-list|check-list|food-grid|link-list)[^"]*"/i.test(piece);
    if (hasVisual) {
      visualSections += 1;
      currentRun = 0;
    } else {
      currentRun += 1;
      maxTextOnlyRun = Math.max(maxTextOnlyRun, currentRun);
    }
  }
  return { sections: pieces.length, visualSections, maxTextOnlyRun };
}

const pages = walk(dist);
const errors = [];
const warnings = [];
const stats = [];

for (const file of pages) {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  if (!watchedPrefixes.some((prefix) => rel.startsWith(prefix))) continue;

  const route = routeFor(file);
  const html = fs.readFileSync(file, 'utf8');
  const mainHtml = editorialContent(html);
  const images = count(html, /<img\b[^>]*\bsrc=(?:"[^"]+"|'[^']+')/gi);
  const contentImages = count(mainHtml, /<img\b[^>]*\bsrc=(?:"[^"]+"|'[^']+')/gi);
  const structuredVisuals = count(mainHtml, /class=(?:"[^"]*\bactive-grid\b[^"]*"|'[^']*\bactive-grid\b[^']*')/gi);
  const contentVisuals = contentImages + structuredVisuals;
  const h2s = count(mainHtml, /<h2\b/gi);
  const videos = count(mainHtml, /class=(?:"[^"]*\bvideo-block\b[^"]*"|'[^']*\bvideo-block\b[^']*')/gi);
  const density = sectionVisualStats(html);
  const isEditorial = editorialRoute(route);

  if (images === 0) {
    errors.push({ route, message: 'Travel page renders without any image.' });
  }

  if (isEditorial && h2s >= 4 && contentVisuals < 2) {
    errors.push({ route, message: `Only ${contentVisuals} in-content visual(s) for ${h2s} H2 sections; minimum is 2 outside the global shell/hero.` });
  }

  if (isEditorial && h2s >= 7 && contentVisuals < 3) {
    errors.push({ route, message: `Only ${contentVisuals} in-content visual(s) for a long ${h2s}-section guide; minimum is 3 outside the global shell/hero.` });
  }

  if (isEditorial && density.maxTextOnlyRun > 2) {
    warnings.push({ route, message: `${density.maxTextOnlyRun} consecutive major sections have no image/video/map visual break.` });
  }

  if (wantsVideo(route) && videos === 0) {
    warnings.push({ route, message: 'This visual page family has no embedded video yet.' });
  }

  stats.push({ route, h2s, images, contentImages, structuredVisuals, contentVisuals, videos, ...density });
}

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportFile, JSON.stringify({
  generatedAt: new Date().toISOString(),
  pagesChecked: stats.length,
  errors,
  warnings,
  pages: stats,
}, null, 2) + '\n');

if (warnings.length) {
  console.log('\nVisual QA opportunities:');
  for (const item of warnings.slice(0, 40)) console.log(`[WARN] ${item.route} ${item.message}`);
  if (warnings.length > 40) console.log(`...and ${warnings.length - 40} more warning(s) in .site-audit/visual-report.json`);
}

if (errors.length) {
  console.error('\n[ERROR] Editorial visual standard failed:');
  for (const item of errors) console.error(`  - ${item.route} ${item.message}`);
  console.error('\nSee EDITORIAL_VISUAL_STANDARD.md and .site-audit/visual-report.json.');
  process.exit(1);
}

console.log(`✓ Visual audit: ${stats.length} travel pages checked; visual-density blocking rules passed. Warnings: ${warnings.length}.`);
