import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const watchedPrefixes = [
  'destinationer/',
  'ture/',
  'rejseplaner/',
  'rejseguide/',
  'bedste-hoteller/',
  'book-rejsen/',
];

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

const pages = walk(dist);
const problems = [];

for (const file of pages) {
  const rel = path.relative(dist, file).replaceAll('\\', '/');
  const watched = watchedPrefixes.some((prefix) => rel.startsWith(prefix));
  if (!watched) continue;

  const html = fs.readFileSync(file, 'utf8');
  const hasImage = /<img\b[^>]*\bsrc=(?:"[^"]+"|'[^']+')/i.test(html);
  if (!hasImage) problems.push(routeFor(file));
}

if (problems.length) {
  console.error('\n[ERROR] Travel pages rendered without any image:');
  for (const route of problems) console.error('  - ' + route);
  console.error('\nEvery main travel page should render at least one image. Add a hero, contextual image, or GuideCover photo.');
  process.exit(1);
}

console.log(`✓ Visual audit: ${pages.length} rendered HTML files checked; all watched travel pages include an image.`);
