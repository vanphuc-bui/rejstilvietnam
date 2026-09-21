import fs from 'node:fs';
import path from 'node:path';
import { editorialVisuals } from '../src/data/editorialVisuals.js';

const pagesRoot = path.resolve('src/pages');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && full.endsWith('.astro') ? [full] : [];
  });
}

const rules = [
  {
    intent: 'food',
    heading: /\b(mad|food|street[- ]?food|spis|spise|restaurant|retter|kaffe|café|cafe)\b/i,
    visual: /\b(mad|food|måltid|meal|ret|dish|phở|pho|bún|bun|bánh|banh|chả|cha|cơm|com|nudl|noodle|kaffe|coffee|restaurant|marked|market|seafood|fisk|fish|kød|meat|ris|rice|grill|cuisine)\b/i,
  },
  {
    intent: 'transport',
    heading: /\b(transport|lufthavn|airport|tog|train|bus|taxi|transfer|færge|ferry|komme rundt)\b/i,
    visual: /\b(transport|lufthavn|airport|tog|train|rail|jernbane|bus|taxi|transfer|bil|car|road|vej|færge|ferry|station|terminal|scooter|motorcykel|motorbike)\b/i,
  },
  {
    intent: 'marine',
    heading: /\b(strand|beach|snork|dyk|diving|vandsport|vandaktiv|ø[- ]?hop|island|marine|bugt|bay)\b/i,
    visual: /\b(strand|beach|snork|dyk|diving|vand|water|hav|sea|ø|island|bugt|bay|båd|boat|kajak|kayak|kyst|coast|rev|reef)\b/i,
  },
  {
    intent: 'active',
    heading: /\b(aktiv|trek|vandring|hiking|cyk|løb|running|kajak|kayak)\b/i,
    visual: /\b(aktiv|trek|vandring|hiking|trail|sti|cyk|bike|bicycle|løb|running|kajak|kayak|bjerg|mountain|dal|valley|terrasse|terrace|natur|nature)\b/i,
  },
];

function plainText(value = '') {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function visualFromSpread(tag) {
  const match = tag.match(/\{\.\.\.v\.([A-Za-z0-9_]+)\.([A-Za-z0-9_]+)\}/);
  if (!match) return null;
  const [, group, key] = match;
  const visual = editorialVisuals?.[group]?.[key];
  if (!visual) return { descriptor: `${group} ${key}`, ref: `v.${group}.${key}`, unresolved: true };
  return {
    descriptor: [group, key, visual.alt, visual.caption].filter(Boolean).join(' '),
    ref: `v.${group}.${key}`,
    unresolved: false,
  };
}

function visualFromLiteralProps(tag) {
  const alt = tag.match(/\balt\s*=\s*["']([^"']+)["']/i)?.[1] ?? '';
  const caption = tag.match(/\bcaption\s*=\s*["']([^"']+)["']/i)?.[1] ?? '';
  if (!alt && !caption) return null;
  return { descriptor: `${alt} ${caption}`, ref: alt || caption, unresolved: false };
}

const errors = [];
const warnings = [];

for (const file of walk(pagesRoot)) {
  const source = fs.readFileSync(file, 'utf8');
  const rel = path.relative(process.cwd(), file).replaceAll('\\', '/');
  const headings = [...source.matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/gi)];

  for (let index = 0; index < headings.length; index += 1) {
    const current = headings[index];
    const next = headings[index + 1];
    const attrs = current[1] ?? '';
    const headingText = plainText(current[2] ?? '');
    const id = attrs.match(/\bid\s*=\s*["']([^"']+)["']/i)?.[1] ?? '';
    const headingDescriptor = `${id} ${headingText}`;

    const rule = rules.find((candidate) => candidate.heading.test(headingDescriptor));
    if (!rule) continue;

    const start = (current.index ?? 0) + current[0].length;
    const end = next?.index ?? source.length;
    const section = source.slice(start, end);
    const mediaTags = [...section.matchAll(/<SectionMedia\b[\s\S]*?\/>/gi)];

    for (const mediaMatch of mediaTags) {
      const tag = mediaMatch[0];
      const visual = visualFromSpread(tag) ?? visualFromLiteralProps(tag);
      if (!visual) {
        warnings.push(`${rel}: "${headingText}" contains SectionMedia whose visual meaning cannot be statically verified.`);
        continue;
      }
      if (visual.unresolved) {
        errors.push(`${rel}: "${headingText}" references unresolved visual ${visual.ref}.`);
        continue;
      }
      if (!rule.visual.test(visual.descriptor)) {
        errors.push(
          `${rel}: section "${headingText}" has intent "${rule.intent}" but visual "${visual.ref}" does not describe that topic.`
        );
      }
    }
  }
}

for (const warning of warnings) console.warn(`[WARN] ${warning}`);

if (errors.length) {
  for (const error of errors) console.error(`[ERROR] ${error}`);
  console.error(`\nSemantic image audit failed: ${errors.length} topic mismatch(es).`);
  console.error('Choose an image that depicts the exact section topic, not merely the same destination.');
  process.exit(1);
}

console.log(`✓ Semantic image audit: no strong section-topic mismatches found (${warnings.length} unverifiable visual(s) reported as warnings).`);
