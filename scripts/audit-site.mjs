import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root = process.cwd();
const dist = path.join(root, 'dist');
const reportDir = path.join(root, '.site-audit');
const reportFile = path.join(reportDir, 'site-report.json');
const siteOrigin = 'https://rejstilvietnam.dk';
const personaFile = path.join(root, 'qa', 'visitor-personas.json');

if (!fs.existsSync(dist)) {
  console.error('[ERROR] dist/ is missing. Run the Astro build before audit:site.');
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function decodeEntities(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function stripTags(html = '') {
  return decodeEntities(html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
}

function parseAttributes(source = '') {
  const attributes = {};
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of source.matchAll(pattern)) {
    const key = match[1].toLowerCase();
    attributes[key] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? '');
  }
  return attributes;
}

function tags(html, name) {
  // Audit rendered markup only. Inline JS/CSS may legitimately contain strings
  // such as "<img>" or "<a>", which must not be mistaken for DOM elements.
  const markup = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ');
  const pattern = new RegExp(`<${name}\\b([^>]*)>`, 'gi');
  return [...markup.matchAll(pattern)].map((match) => ({ raw: match[0], attrs: parseAttributes(match[1]) }));
}

function firstText(html, tag) {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
  return match ? stripTags(match[1]) : '';
}

function routeFor(file) {
  const relative = path.relative(dist, file).replaceAll('\\', '/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

function normalizeRoute(pathname) {
  if (!pathname || pathname === '/') return '/';
  const clean = pathname.replace(/\/{2,}/g, '/');
  if (/\.[a-z0-9]{1,8}$/i.test(clean)) return clean;
  return clean.endsWith('/') ? clean : `${clean}/`;
}

function internalTarget(raw, fromRoute) {
  if (!raw || raw.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(raw)) return null;
  try {
    const url = new URL(raw, new URL(fromRoute, siteOrigin));
    if (url.origin !== siteOrigin) return null;
    return { route: normalizeRoute(url.pathname), hash: url.hash };
  } catch {
    return { invalid: true, route: raw, hash: '' };
  }
}

function externalHost(raw, fromRoute) {
  if (!raw || raw.startsWith('#') || /^(mailto:|tel:|javascript:|data:)/i.test(raw)) return null;
  try {
    const url = new URL(raw, new URL(fromRoute, siteOrigin));
    return url.origin === siteOrigin ? null : url.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

function resolveDistPath(route) {
  const clean = decodeURIComponent(route.split('#')[0].split('?')[0]).replace(/^\/+/, '');
  const candidates = [];
  if (!clean) candidates.push(path.join(dist, 'index.html'));
  else if (/\.[a-z0-9]{1,8}$/i.test(clean)) candidates.push(path.join(dist, clean));
  else {
    candidates.push(path.join(dist, clean, 'index.html'));
    candidates.push(path.join(dist, `${clean}.html`));
  }
  return candidates.find((candidate) => fs.existsSync(candidate));
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const publicPages = htmlFiles.filter((file) => path.basename(file) !== '404.html');
const routeSet = new Set(htmlFiles.map(routeFor));
const pageData = new Map();
const issues = [];
const activeDestinationHubs = new Set([
  '/destinationer/hanoi/',
  '/destinationer/hoi-an/',
  '/destinationer/da-nang/',
  '/destinationer/nha-trang/',
  '/destinationer/ho-chi-minh-city/',
  '/destinationer/phu-quoc/',
]);

function addIssue({ severity = 'warning', category, route = '', message, impact = 'medium', effort = 'small' }) {
  issues.push({ severity, category, route, message, impact, effort });
}

for (const file of publicPages) {
  const route = routeFor(file);
  const html = fs.readFileSync(file, 'utf8');
  const title = firstText(html, 'title');
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => stripTags(match[1]));
  const metas = tags(html, 'meta').map(({ attrs }) => attrs);
  const links = tags(html, 'link').map(({ attrs }) => attrs);
  const anchors = tags(html, 'a').map(({ attrs }) => attrs);
  const images = tags(html, 'img').map(({ attrs }) => attrs);
  const description = metas.find((meta) => meta.name?.toLowerCase() === 'description')?.content ?? '';
  const robots = metas.find((meta) => meta.name?.toLowerCase() === 'robots')?.content ?? '';
  const canonical = links.find((link) => link.rel?.toLowerCase().split(/\s+/).includes('canonical'))?.href ?? '';
  const lang = html.match(/<html\b[^>]*\blang=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i)?.slice(1).find(Boolean) ?? '';
  const ids = new Set([...html.matchAll(/\bid=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/gi)].map((match) => match.slice(1).find(Boolean)));
  const internalLinks = new Set();
  const externalHosts = new Set();

  if (!title) addIssue({ severity: 'error', category: 'seo', route, message: 'Missing <title>.', impact: 'high' });
  else if (title.length < 25 || title.length > 65) addIssue({ category: 'seo', route, message: `Title length is ${title.length}; aim for roughly 25–65 characters.` });

  if (!description) addIssue({ severity: 'error', category: 'seo', route, message: 'Missing meta description.', impact: 'high' });
  else if (description.length < 90 || description.length > 175) addIssue({ category: 'seo', route, message: `Meta description length is ${description.length}; aim for roughly 90–175 characters.` });

  if (!canonical) addIssue({ severity: 'error', category: 'seo', route, message: 'Missing canonical URL.', impact: 'high' });
  else {
    try {
      const canonicalUrl = new URL(canonical);
      if (canonicalUrl.origin !== siteOrigin || normalizeRoute(canonicalUrl.pathname) !== normalizeRoute(route)) {
        addIssue({ severity: 'error', category: 'seo', route, message: `Canonical does not match this page: ${canonical}`, impact: 'high' });
      }
    } catch {
      addIssue({ severity: 'error', category: 'seo', route, message: `Canonical is not a valid URL: ${canonical}`, impact: 'high' });
    }
  }

  if (lang.toLowerCase() !== 'da') addIssue({ severity: 'error', category: 'accessibility', route, message: `Expected html lang="da", found "${lang || 'missing'}".`, impact: 'high' });
  if (!/index/i.test(robots)) addIssue({ severity: 'error', category: 'indexing', route, message: 'Robots meta does not allow indexing.', impact: 'high' });
  if (h1s.length !== 1) addIssue({ severity: 'error', category: 'content', route, message: `Expected exactly one H1, found ${h1s.length}.`, impact: 'high' });

  const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)];
  const structuredNodes = [];
  if (jsonLdBlocks.length === 0) addIssue({ category: 'structured-data', route, message: 'No JSON-LD block found.' });
  for (const [, json] of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(decodeEntities(json));
      if (Array.isArray(parsed?.['@graph'])) structuredNodes.push(...parsed['@graph']);
      else structuredNodes.push(parsed);
    } catch {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Invalid JSON-LD.', impact: 'high' });
    }
  }

  const typeIncludes = (node, type) => {
    const value = node?.['@type'];
    return Array.isArray(value) ? value.includes(type) : value === type;
  };
  const articleNode = structuredNodes.find((node) => ['Article', 'BlogPosting', 'NewsArticle'].some((type) => typeIncludes(node, type)));
  if (articleNode) {
    if (!articleNode.datePublished) {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Article is missing factual datePublished metadata.', impact: 'medium', effort: 'tiny' });
    }
    if (!articleNode.dateModified) {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Article is missing factual dateModified metadata.', impact: 'medium', effort: 'tiny' });
    }
    if (articleNode.datePublished && articleNode.dateModified && articleNode.dateModified < articleNode.datePublished) {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Article dateModified is earlier than datePublished.', impact: 'medium', effort: 'tiny' });
    }

    const authorRef = articleNode.author?.['@id'];
    const authorPerson = authorRef
      ? structuredNodes.find((node) => node?.['@id'] === authorRef && typeIncludes(node, 'Person'))
      : null;
    if (!authorPerson?.name || !authorPerson?.url) {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Article author must resolve to a named Person with a profile URL.', impact: 'high', effort: 'small' });
    }

    const webpageRef = articleNode.mainEntityOfPage?.['@id'];
    const webpageNode = webpageRef
      ? structuredNodes.find((node) => node?.['@id'] === webpageRef && typeIncludes(node, 'WebPage'))
      : structuredNodes.find((node) => typeIncludes(node, 'WebPage'));
    const reviewerRef = webpageNode?.reviewedBy?.['@id'];
    const reviewerPerson = reviewerRef
      ? structuredNodes.find((node) => node?.['@id'] === reviewerRef && typeIncludes(node, 'Person'))
      : null;
    if (!reviewerPerson?.name || !reviewerPerson?.url) {
      addIssue({ severity: 'error', category: 'structured-data', route, message: 'Article WebPage must resolve reviewedBy to a named Person with a profile URL.', impact: 'high', effort: 'small' });
    }
  }

  for (const anchor of anchors) {
    const raw = anchor.href;
    if (!raw) continue;
    const internal = internalTarget(raw, route);
    if (internal?.invalid) {
      addIssue({ severity: 'error', category: 'links', route, message: `Invalid internal URL: ${raw}`, impact: 'high', effort: 'tiny' });
      continue;
    }
    if (internal) {
      if (internal.route === route && internal.hash && !ids.has(internal.hash.slice(1))) {
        addIssue({ severity: 'error', category: 'links', route, message: `Broken on-page anchor: ${raw}`, impact: 'medium', effort: 'tiny' });
      }
      if (!resolveDistPath(internal.route)) {
        addIssue({ severity: 'error', category: 'links', route, message: `Broken internal link: ${raw}`, impact: 'high', effort: 'tiny' });
      } else if (routeSet.has(internal.route)) {
        internalLinks.add(internal.route);
      }
    } else {
      const host = externalHost(raw, route);
      if (host) externalHosts.add(host);
      const rel = new Set((anchor.rel ?? '').toLowerCase().split(/\s+/).filter(Boolean));
      if (anchor.target === '_blank' && !rel.has('noopener')) {
        addIssue({ severity: 'error', category: 'links', route, message: `External target="_blank" link is missing rel="noopener": ${raw}`, impact: 'medium', effort: 'tiny' });
      }
      if (rel.has('sponsored') && (!rel.has('noopener') || !rel.has('noreferrer'))) {
        addIssue({ severity: 'error', category: 'affiliate', route, message: `Sponsored link is missing noopener/noreferrer: ${raw}`, impact: 'high', effort: 'tiny' });
      }
    }
  }

  const shouldHaveEditorialVisual =
    /^\/destinationer\/[^/]+\//.test(route) ||
    /^\/rejseguide\/[^/]+\//.test(route) ||
    /^\/rejseplaner\/[^/]+\//.test(route) ||
    /^\/ture\/[^/]+\//.test(route);
  if (shouldHaveEditorialVisual && images.length === 0) {
    addIssue({ severity: 'error', category: 'images', route, message: 'Editorial guide has no image at all.', impact: 'high', effort: 'small' });
  }

  images.forEach((image, index) => {
    if (!('alt' in image)) addIssue({ severity: 'error', category: 'accessibility', route, message: `Image ${index + 1} is missing an alt attribute.`, impact: 'medium', effort: 'tiny' });
    const runtimeImage = /^\/media\/home-hero-(480|640|800|960|1280|1600)\.webp$/.test(image.src ?? '');
    if (image.src?.startsWith('/') && !runtimeImage && !resolveDistPath(image.src)) {
      addIssue({ severity: 'error', category: 'images', route, message: `Missing local image: ${image.src}`, impact: 'high', effort: 'tiny' });
    }
  });
  // Destination cards are visual navigation. A missing photo falls back to generic artwork,
  // which is useful as a runtime safety net but should never ship as the normal state.
  const destinationCardPattern = new RegExp('<a\\b[^>]*class="[^"]*\\bdestination\\b[^"]*"[^>]*>([\\s\\S]*?)<\\/a>', 'gi');
  const destinationCards = [...html.matchAll(destinationCardPattern)];
  destinationCards.forEach((match, index) => {
    if (!new RegExp('<img\\b', 'i').test(match[1])) {
      addIssue({ severity: 'error', category: 'images', route, message: `Destination card ${index + 1} has no real image and would render the fallback artwork.`, impact: 'high', effort: 'tiny' });
    }
  });

  const eagerRemoteImages = images.filter((image, index) => index > 0 && /^https:\/\//i.test(image.src ?? '') && image.loading !== 'lazy');
  if (eagerRemoteImages.length > 3) {
    addIssue({ category: 'performance', route, message: `${eagerRemoteImages.length} non-hero remote images are loaded eagerly; consider lazy-loading below-the-fold media.`, impact: 'low', effort: 'small' });
  }

  const wordCount = stripTags(html).split(/\s+/).filter(Boolean).length;
  if (wordCount < 180 && !['/', '/destinationer/', '/rejseguide/', '/rejseplaner/', '/ture/', '/book-rejsen/'].includes(route)) {
    addIssue({ category: 'content', route, message: `Page has only about ${wordCount} rendered words; review for thin content.`, impact: 'medium', effort: 'medium' });
  }

  if (activeDestinationHubs.has(route)) {
    const activeCards = (html.match(/class="[^"]*active-card(?:\s|\")/g) ?? []).length;
    if (!html.includes('data-active-outdoor=')) {
      addIssue({ severity: 'error', category: 'active-outdoor', route, message: 'Destination hub is missing its Active & Outdoor block.', impact: 'high', effort: 'small' });
    } else if (activeCards < 3) {
      addIssue({ severity: 'error', category: 'active-outdoor', route, message: `Destination hub has only ${activeCards} activity card(s); expected at least 3.`, impact: 'high', effort: 'small' });
    }
  }

  if (route === '/aktiv-ferie-i-vietnam/') {
    const destinationBlocks = (html.match(/data-active-outdoor=/g) ?? []).length;
    const requiredLabels = ['Distance', 'Tid', 'Bedst', 'Start', 'Forhold:'];
    if (destinationBlocks < activeDestinationHubs.size) {
      addIssue({ severity: 'error', category: 'active-outdoor', route, message: `Active-travel hub covers only ${destinationBlocks} destinations; expected ${activeDestinationHubs.size}.`, impact: 'high', effort: 'small' });
    }
    for (const label of requiredLabels) {
      if (!html.includes(label)) addIssue({ severity: 'error', category: 'active-outdoor', route, message: `Active-travel template is missing the required field "${label}".`, impact: 'high', effort: 'tiny' });
    }
  }

  if (/^\/rejseplaner\/[^/]+\/$/.test(route) && !html.includes('data-active-trip-callout')) {
    addIssue({ severity: 'error', category: 'active-outdoor', route, message: 'Detailed itinerary is missing its active-travel route option.', impact: 'medium', effort: 'tiny' });
  }

  pageData.set(route, { route, title, description, canonical, h1s, images: images.length, internalLinks, externalHosts, wordCount });
}

const canonicalOwners = new Map();
const titleOwners = new Map();
for (const page of pageData.values()) {
  if (page.canonical) canonicalOwners.set(page.canonical, [...(canonicalOwners.get(page.canonical) ?? []), page.route]);
  if (page.title) titleOwners.set(page.title, [...(titleOwners.get(page.title) ?? []), page.route]);
}
for (const [canonical, routes] of canonicalOwners) {
  if (routes.length > 1) addIssue({ severity: 'error', category: 'seo', message: `Duplicate canonical ${canonical}: ${routes.join(', ')}`, impact: 'high' });
}
for (const [title, routes] of titleOwners) {
  if (routes.length > 1) addIssue({ category: 'seo', message: `Duplicate title "${title}": ${routes.join(', ')}`, impact: 'medium', effort: 'small' });
}

const reachableFromHome = new Set(['/']);
const queue = ['/'];
while (queue.length) {
  const current = queue.shift();
  for (const next of pageData.get(current)?.internalLinks ?? []) {
    if (!reachableFromHome.has(next)) {
      reachableFromHome.add(next);
      queue.push(next);
    }
  }
}
for (const route of pageData.keys()) {
  if (!reachableFromHome.has(route)) addIssue({ severity: 'error', category: 'information-architecture', route, message: 'Page is orphaned from the homepage link graph.', impact: 'high', effort: 'small' });
}

function pagesWithin(start, maxHops) {
  const visited = new Set([start]);
  const work = [{ route: start, hops: 0 }];
  while (work.length) {
    const current = work.shift();
    if (current.hops >= maxHops) continue;
    for (const next of pageData.get(current.route)?.internalLinks ?? []) {
      if (!visited.has(next)) {
        visited.add(next);
        work.push({ route: next, hops: current.hops + 1 });
      }
    }
  }
  return visited;
}

const personas = JSON.parse(fs.readFileSync(personaFile, 'utf8'));
const journeyResults = [];
for (const persona of personas) {
  let passed = true;
  const outcomes = [];
  if (!pageData.has(persona.entry)) {
    addIssue({ severity: 'error', category: 'journey', route: persona.entry, message: `${persona.name}: entry page does not exist.`, impact: 'high' });
    journeyResults.push({ ...persona, passed: false, outcomes: [] });
    continue;
  }

  for (const outcome of persona.outcomes) {
    const visiblePages = pagesWithin(persona.entry, outcome.maxHops ?? 0);
    let found = false;
    if (outcome.type === 'route') found = visiblePages.has(normalizeRoute(outcome.value));
    if (outcome.type === 'external-domain') {
      found = [...visiblePages].some((route) => [...(pageData.get(route)?.externalHosts ?? [])]
        .some((host) => host === outcome.value || host.endsWith(`.${outcome.value}`)));
    }
    outcomes.push({ ...outcome, found });
    if (!found) {
      const required = outcome.required !== false;
      if (required) passed = false;
      addIssue({
        severity: required ? 'error' : 'opportunity',
        category: 'journey',
        route: persona.entry,
        message: `${persona.name} cannot reach ${outcome.type} "${outcome.value}" within ${outcome.maxHops ?? 0} hop(s).`,
        impact: required ? 'high' : 'medium',
        effort: 'small',
      });
    }
  }
  journeyResults.push({ id: persona.id, name: persona.name, device: persona.device, intent: persona.intent, entry: persona.entry, passed, outcomes });
}

const sitemapFiles = walk(dist).filter((file) => /sitemap.*\.xml$/i.test(file));
const sitemapXml = sitemapFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
for (const route of pageData.keys()) {
  const expected = new URL(route, siteOrigin).toString();
  if (sitemapXml && !sitemapXml.includes(expected)) addIssue({ severity: 'error', category: 'indexing', route, message: 'Page is missing from the generated sitemap.', impact: 'high', effort: 'tiny' });
}

const impactValue = { high: 3, medium: 2, low: 1 };
const effortValue = { tiny: 1, small: 2, medium: 3, large: 4 };
for (const issue of issues) issue.priority = Number(((impactValue[issue.impact] ?? 1) / (effortValue[issue.effort] ?? 2)).toFixed(2));
issues.sort((a, b) => {
  const severityOrder = { error: 0, warning: 1, opportunity: 2 };
  return (severityOrder[a.severity] - severityOrder[b.severity]) || (b.priority - a.priority) || a.route.localeCompare(b.route);
});

const summary = {
  generatedAt: new Date().toISOString(),
  pages: pageData.size,
  images: [...pageData.values()].reduce((sum, page) => sum + page.images, 0),
  internalLinks: [...pageData.values()].reduce((sum, page) => sum + page.internalLinks.size, 0),
  personas: personas.length,
  journeysPassed: journeyResults.filter((journey) => journey.passed).length,
  errors: issues.filter((issue) => issue.severity === 'error').length,
  warnings: issues.filter((issue) => issue.severity === 'warning').length,
  opportunities: issues.filter((issue) => issue.severity === 'opportunity').length,
};

fs.mkdirSync(reportDir, { recursive: true });
fs.writeFileSync(reportFile, `${JSON.stringify({ summary, issues, journeys: journeyResults }, null, 2)}\n`);

console.log(`\nVisitor-agent audit: ${summary.personas} profiles, ${summary.pages} pages, ${summary.internalLinks} internal links.`);
console.log(`Journeys passed: ${summary.journeysPassed}/${summary.personas}. Errors: ${summary.errors}. Warnings: ${summary.warnings}. Opportunities: ${summary.opportunities}.`);

for (const issue of issues.slice(0, 35)) {
  const marker = issue.severity === 'error' ? 'ERROR' : issue.severity === 'opportunity' ? 'OPPORTUNITY' : 'WARN';
  console.log(`[${marker}]${issue.route ? ` ${issue.route}` : ''} ${issue.message}`);
}
if (issues.length > 35) console.log(`...and ${issues.length - 35} more item(s) in ${path.relative(root, reportFile)}.`);
console.log(`Full report: ${path.relative(root, reportFile)}`);

if (summary.errors > 0) process.exit(1);
console.log('✓ Site audit passed all blocking checks.');
