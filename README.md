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
