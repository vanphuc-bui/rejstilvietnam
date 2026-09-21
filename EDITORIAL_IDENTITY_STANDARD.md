# Editorial identity, authorship and date standard

Last reviewed: 21 September 2026

This standard protects the site's E-E-A-T signals from becoming artificial or inconsistent.

## Public people entities

### Van-Phuc Bui
- Role: co-founder; research, structure, technical development and editorial review.
- Canonical profile: `/om/van-phuc-bui/`
- External identity reference: `https://vanphucbui.com/`
- Default role on travel articles: **author**.

### Lê Huỳnh Như Thảo
- Role: co-founder and travel-industry editor/reviewer.
- Background: educated in tourism in Vietnam with several years of professional experience in the travel industry.
- Canonical profile: `/om/le-huynh-nhu-thao/`
- Default role on travel articles: **reviewedBy**.
- All current travel articles have been reviewed by Lê Huỳnh Như Thảo for accuracy, local context and usefulness to Danish travellers.

Do not shorten, reorder or replace these public names in structured data without an explicit editorial decision.

## Article schema

For every page that is emitted as `Article`:

- `author` resolves to a `Person`, not the site organization.
- `author.url` / Person `@id` resolves to the dedicated profile page.
- The corresponding `WebPage` uses `reviewedBy` and resolves it to Lê Huỳnh Như Thảo's Person entity.
- The Article includes `datePublished` and `dateModified` only when they are backed by real editorial history.
- A representative `image` is included only when the page supplies a real article/hero image. Never use the logo, favicon or a generic placeholder as an Article image.
- The visible byline should agree with the structured data.

## Publication date policy

`datePublished` is the first known day that the article or its content cluster was published in the repository/production workflow.

For existing pages, `src/data/editorialMetadata.js` records the first known publication day from Git history.

Important:
- Do not stagger dates to make the site look older or more “human”.
- Do not backdate content.
- Do not invent a clock time. Day-level ISO dates are preferred when only the day is known.
- A renamed URL keeps the publication date of the original article when the content is materially the same.

## Modified date policy

`dateModified` is the most recent meaningful editorial change that readers could reasonably consider an update.

Examples that can justify a new modified date:
- factual corrections,
- updated visa/transport/pricing information,
- substantial rewrites,
- new sections, maps or decision-support content,
- material changes to recommendations.

Normally do **not** bump `dateModified` for:
- a deployment with no content change,
- CI-only changes,
- schema-only maintenance,
- whitespace/formatting,
- tiny CSS changes that do not affect the editorial content.

When a real editorial update happens, update the corresponding route/cluster entry in `src/data/editorialMetadata.js`.

## Visible trust signals

Travel articles should show:
- `Af Van-Phuc Bui`
- `Rejsefagligt gennemgået af Lê Huỳnh Như Thảo`
- publication date
- modified date only when it differs from publication date.

The sidebar may show the same roles in compact form. Both names link to their dedicated profile pages.

## QA

`scripts/audit-site.mjs` blocks publication of an Article page if:
- datePublished is missing,
- dateModified is missing,
- the author does not resolve to a named Person with a profile URL,
- the WebPage reviewer does not resolve to a named Person with a profile URL,
- dateModified predates datePublished.

This is intentional. New article families must be added to the editorial metadata resolver before release.
