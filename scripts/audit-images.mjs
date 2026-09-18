import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/pages');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && full.endsWith('.astro') ? [full] : [];
  });
}

function normalizeImage(url) {
  const noHash = url.split('#')[0];
  const noQuery = noHash.split('?')[0];
  try { return decodeURIComponent(noQuery); } catch { return noQuery; }
}

function extractImageUrls(source) {
  const urls = [];
  const patterns = [
    /\bsrc\s*=\s*["'](https:\/\/[^"']+)["']/g,
    /\bsrc\s*:\s*["'](https:\/\/[^"']+)["']/g,
    /\bimage\s*:\s*["'](https:\/\/[^"']+)["']/g,
  ];
  for (const pattern of patterns) {
    for (const match of source.matchAll(pattern)) urls.push(match[1]);
  }
  return urls;
}

const uses = new Map();

for (const file of walk(root)) {
  const source = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replaceAll('\\', '/');

  for (const raw of extractImageUrls(source)) {
    const key = normalizeImage(raw);
    const arr = uses.get(key) ?? [];
    arr.push({ file: rel, raw });
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
  console.log('✓ Image audit: every remote image in src/pages is unique.');
  process.exit(0);
}

for (const dup of duplicates) {
  console.error(`\n[ERROR] Duplicate image: ${dup.image}`);
  for (const entry of dup.entries) console.error(`  - ${entry.file}`);
}

console.error(`\nImage audit failed: ${duplicates.length} duplicate image group(s).`);
console.error('Use a genuinely different photo, remove the duplicate visual, or replace it with a non-photo graphic. Query/crop changes do not count as a new image.');
process.exit(1);
