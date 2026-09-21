# EDITORIAL_VISUAL_STANDARD.md

## Purpose

This file is the working standard for all future RejsTilVietnam.dk content and visual QA.

Agents should read this file together with:
- `STYLE_GUIDE.md`
- `IMAGE_STANDARD.md`

The goal is not merely that every page has an image. The goal is that a travel page helps the reader **see the trip while reading it**.

---

## 1. Core page template

For destination, itinerary, activity and practical travel guides, use this rhythm unless there is a strong reason not to:

1. Hero image
2. Kort svar / quick answer
3. Quick facts or a compact comparison
4. H2 section
5. Contextual image
6. H2 section
7. Contextual image, gallery or map
8. H2 section
9. Video if the topic benefits from motion
10. H2 section
11. Contextual image
12. FAQ / related guides / CTA

Do not publish a long travel article where the hero is the only visual.

---

## 2. Visual density

### Blocking minimum

For editorial travel pages with 4 or more H2 sections:

- At least **3 rendered images total**.
- At least **2 images outside the hero**.
- There should normally be a visual break after every **1–2 major sections**.
- Pages with 7+ H2 sections should normally have **4+ rendered images**.

A map, table or card grid is useful, but it does **not** replace all contextual photography.

### Destination and experience pages

For:
- destination pillars
- seværdigheder
- mad
- strande
- 3/4-day itineraries
- cruises
- island/snorkelling/activity pages

Target:
- hero
- 3–6 contextual images
- map when geography matters
- video when motion materially helps understanding

### Practical guides

For:
- visa
- insurance
- vaccination
- packing
- money
- transport
- eSIM
- culture/etiquette

Target:
- hero
- 2–4 contextual visuals
- tables/checklists where useful
- video only when it genuinely explains something better than text

Do not add decorative video merely to satisfy a quota.

---

## 3. Video standard

Video is strongly recommended for pages where movement, scale or atmosphere matters:

- destination pillars
- seværdigheder
- food/street-food guides
- beaches/islands
- cruise/boat pages
- 3/4-day destination itineraries
- walking/old-town pages

Use `VideoEmbed.astro` and YouTube privacy-enhanced embeds.

Video rules:
- The video must be directly relevant to the page.
- Prefer recent, high-quality walking tours, aerial tours, official tourism or established travel channels.
- Do not use a video as the only visual.
- Captions must explain **why the video is useful**.
- Never copy claims about prices/opening hours from a video without separate verification.

---

## 4. Images

Use `SectionMedia.astro` for editorial images.

Every image needs:
- descriptive `alt`
- useful caption
- credit
- source/credit URL when applicable
- deliberate crop/position on mobile

Prefer:
1. Wikimedia Commons with clear attribution/licensing
2. Unsplash when appropriate
3. Original/user-owned images when available

Avoid:
- generic stock-looking photos
- watermarked images
- unrelated decorative photos
- repeated hero photos across multiple pages
- the same image repeated several times on one page unless there is a strong editorial reason

Use `IMAGE_STANDARD.md` for the detailed image rules.

---

## 4.1 Semantic visual relevance — blocking rule

A visual must illustrate the **exact section it sits under**, not merely the same city or destination.

Examples:
- Under `Mad i Hanoi`, use a dish, food stall, kitchen, market-food scene or dining scene. A generic Old Quarter street photo is **not** acceptable.
- Under an airport/transport section, show the airport, station, train, bus, road, taxi or transfer context. A skyline is not enough.
- Under a beach/snorkelling/diving section, show the beach, water, reef, boat or the actual activity.
- Under an active-travel section, show the trail, terrain or activity itself.

Decision rule before inserting a photo:

> If the H2 were shown without its paragraph text, would the image still make sense as an illustration of that H2?

If the answer is no, choose another image.

Being geographically correct is necessary but **not sufficient**. A photo of Hanoi is not automatically relevant to every Hanoi section.

### Automated guard

`npm run audit:image-context` checks strong visual-intent sections such as food, transport, marine/beach and active travel. It compares the H2 topic with the image alt/caption or curated visual metadata and blocks clear mismatches.

Do not weaken the audit to make a mismatched image pass. Fix the image or its editorial placement instead.

## 5. Section-specific guidance

### Seværdigheder
Each major place should normally have its own image.
If there are 5 named attractions, do not illustrate only the first one.

### Mad
Show the actual dish or food environment being discussed.
For regional food pages, visually separate north / central / south when possible.

### Hvor skal man bo
Illustrate the actual neighbourhood/area, not just a generic city skyline.
Add a map when there are 3+ areas.

### Bedste hoteller
Show the area or hotel context for each recommendation group.
Avoid a page that is only hotel names + text + one city hero.

### Rejseplaner
Each major stop should have a visual.
Route order should be easy to understand at a glance.

### Transport
Use airport/station/train/bus/road visuals where they explain the choice.
Do not use random city photography for transport sections.

### Beaches / islands / marine activities
Use real beach/island/water imagery, activity cards, map and video.
These pages should be among the most visual pages on the site.

---

## 6. Maps

Use maps when the user benefits from understanding relative location:
- hotel areas
- beaches
- attractions
- day-trip stops
- island activities
- route planning

A map is supplemental. It does not replace contextual images.

---

## 7. Mobile rules

Every visual change must be checked at mobile width.

Required:
- no horizontal overflow
- hero not excessively tall
- important subject not badly cropped
- captions do not dominate the screen
- video keeps 16:9 ratio
- map/card grids collapse cleanly
- visual blocks have comfortable spacing

---

## 8. QA rules

The CI must catch regressions, not just missing files.

Blocking checks should include:
- editorial travel page renders at least one image
- pages with 4+ H2 sections render at least 3 images
- pages with 4+ H2 sections render at least 2 non-hero images
- pages with 7+ H2 sections render at least 4 images
- destination cards must use real images, not fallback artwork
- no broken local images
- all images have alt text
- duplicate page-level remote images remain blocked by `audit-images.mjs`
- mobile/tablet/desktop browser QA must pass

Video should be a blocking requirement only for explicitly visual page families once the relevant pages have been upgraded. Otherwise report it as an opportunity, not a build failure.

---

## 9. Agent workflow

Before editing visual content:

1. Read this file.
2. Read `STYLE_GUIDE.md`.
3. Read `IMAGE_STANDARD.md`.
4. Inspect the existing page and nearest equivalent good page.
5. Prefer existing components:
   - `SectionMedia.astro`
   - `VideoEmbed.astro`
   - `PlaceMap.astro`
   - `VisualHighlights.astro`
   - `ActivityCardGrid.astro`
6. Use unique, relevant visuals.
7. Run full build + image audit + visual audit + site audit + viewport QA.
8. Do not merge while CI is red.

---

## 10. Reference pages

Use the richer marine guides as reference implementations because they combine:
- hero
- contextual imagery
- activity cards
- gallery
- map
- video
- related guides

Good references:
- `/destinationer/phu-quoc/o-hop-og-snorkling/`
- `/destinationer/phu-quoc/vandsport-og-aktiviteter/`
- `/destinationer/nha-trang/o-ture-og-snorkling/`
- `/destinationer/nha-trang/vandsport-og-dykning/`

The target is not to make every page identical. The target is a consistent **visual reading experience**.
