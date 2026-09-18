# RejsTilVietnam.dk

Danish-first Vietnam travel guide built with Astro and deployed as static assets on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production build is blocked when it finds broken internal links, missing local assets,
invalid canonicals or structured data, orphan pages, inaccessible H1/alt markup, or a required
visitor journey that no longer works.

## Visitor-agent QA

The repository includes 24 ethical visitor profiles in `qa/visitor-personas.json`. They model
common Danish travel intents (first trip, family, budget, Hanoi hotels, Hoi An food, Phu Quoc
beaches, tours and more) without sending fake traffic to Google.

```bash
npm run audit:site
npm run preview -- --host 127.0.0.1
npm run audit:browser
```

- `audit:site` checks every generated page, the full internal-link graph, SEO/indexing markup,
  image/accessibility basics, affiliate-link safety and whether each profile can reach its goal.
- `audit:browser` opens every route at mobile, tablet and desktop sizes and checks rendered images,
  horizontal overflow, page errors and touch-target/readability warnings.
- GitHub Actions runs the full browser audit on each push/PR and every Monday. JSON reports are
  attached to the workflow as `site-quality-report`.

## Cloudflare Workers

The repository includes `wrangler.jsonc` for a static Astro deployment.

- Build command: `npm run build`
- Deploy command: `npx wrangler@latest deploy`
- Production branch: `main`

For the temporary Workers preview, keep `public/robots.txt` set to `Disallow: /` so Google does not index the preview URL.

When `rejstilvietnam.dk` is connected:

1. Change `public/robots.txt` to `Allow: /` and add the sitemap URL.
2. Set the Cloudflare build environment variable `SITE_URL=https://rejstilvietnam.dk` (the Astro config already defaults to this URL).
3. Submit the generated sitemap in Google Search Console.

## Affiliate links

`src/components/AffiliateCard.astro` is prepared for Viator/TourRadar links and renders the Danish disclosure label `Annoncelink`. Replace placeholder `href="#"` values only after affiliate accounts are active.
