import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/pages');
const strictEditorial = process.argv.includes('--strict-editorial');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && full.endsWith('.astro') ? [full] : [];
  });
}

function normalizeImage(url) {
  const noQuery = url.split('?')[0];
  try { return decodeURIComponent(noQuery); } catch { return noQuery; }
}

const imagePattern = /https:\/\/(?:images\.unsplash\.com\/[^'"\s)]+|commons\.wikimedia\.org\/wiki\/Special:FilePath\/[^'"\s)]+)/g;
const uses = new Map();

for (const file of walk(root)) {
  const source = fs.readFileSync(file, 'utf8');
  const editorial = source.includes("import EditorialArticle") || source.includes('import EditorialArticle');
  const rel = path.relative(process.cwd(), file).replaceAll('\\', '/');

  for (const match of source.matchAll(imagePattern)) {
    const raw = match[0];
    const key = normalizeImage(raw);
    const arr = uses.get(key) ?? [];
    arr.push({ file: rel, editorial, raw });
    uses.set(key, arr);
  }
}

const duplicates = [...uses.entries()]
  .map(([image, entries]) => ({
    image,
    entries,
    files: [...new Set(entries.map((x) => x.file))],
  }))
  .filter((x) => x.files.length > 1 || x.entries.length > 1)
  .sort((a, b) => b.entries.length - a.entries.length);

if (duplicates.length === 0) {
  console.log('✓ Image audit: no duplicate remote editorial images found.');
  process.exit(0);
}

let errors = 0;
for (const dup of duplicates) {
  const touchesEditorial = dup.entries.some((x) => x.editorial);
  const level = strictEditorial && touchesEditorial ? 'ERROR' : 'WARN';
  if (level === 'ERROR') errors += 1;

  console.log(`\n[${level}] Duplicate image: ${dup.image}`);
  for (const entry of dup.entries) {
    console.log(`  - ${entry.file}${entry.editorial ? ' [EditorialArticle]' : ''}`);
  }
}

if (errors > 0) {
  console.error(`\nImage audit failed: ${errors} duplicate image group(s) touch EditorialArticle pages.`);
  console.error('Choose a genuinely different photo; changing only ?width= or crop parameters is not enough.');
  process.exit(1);
}

console.log('\nImage audit completed with legacy warnings only.');
