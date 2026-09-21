# Image standard for RejsTilVietnam.dk

This is the visual checklist for every new page and every major update.

## 1. Uniqueness

- Every article must have its own hero image. A hero image is never reused on another page.
- Editorial section images should be unique whenever practical. A specific landmark/food/transport photo may be reused across closely related guides only when it is genuinely the clearest illustration; do not create obvious repetition across adjacent pages.
- Do not reuse a destination hub hero as the hero of a child article.
- Do not reuse the same photo with another crop, width or query string and treat it as a new image.
- Listing-card thumbnails are allowed to be simpler, but when a suitable alternative exists they should also be unique.

## 2. Visual mix

Long guides should normally contain 2-4 different visual types, for example:

- wide destination/landscape
- street or local-life scene
- food or market detail
- transport / practical scene
- landmark or cultural detail
- map when geography matters
- one useful video on larger pillar guides
- activity photography showing running, cycling, hiking or water activities when outdoor is part of the page intent

Avoid making every page a sequence of generic landscape photos.
For active-travel content, prefer a photo that shows the actual terrain, traffic, coast or trail conditions. A generic landmark photo is not enough when the text is helping the reader judge an activity.

## 3. Relevance

- The image must match the **exact place and exact topic** discussed in the surrounding section.
- Same destination is not enough: a generic Hanoi street photo must not illustrate a Hanoi food section; a skyline must not illustrate airport transport; a generic beach must not illustrate a specific diving activity when a diving image is available.
- Use the nearest H2 as the semantic contract for the image. The photo should still make editorial sense if the reader sees only the H2 + image.
- Event/holiday images are only used on event/holiday content.
- Do not use a Ha Long Bay photo to decorate an unrelated generic Vietnam section.
- Prefer real destination photography over generic stock-style imagery.

## 4. Sources and attribution

Preferred sources:

1. Wikimedia Commons with a clear reusable licence
2. Unsplash
3. official tourism / authority media when reuse is appropriate

For Wikimedia images, include a caption, credit and source URL when practical. Do not copy random images from travel blogs or commercial photo sites.

## 5. Technical format

- Hero: normally 16:7 or 16:8.
- In-article landscape: normally 16:9 or 16:10.
- Portrait images are used only when the composition benefits from portrait format.
- Alt text describes what is visible, not the target keyword.
- Captions add context instead of repeating the alt text.
- Keep image URLs large enough for desktop displays; current remote images normally request 1400-1800 px width.

## 6. Article checklist before publishing

- [ ] Hero is not used anywhere else on the site
- [ ] Section images are unique where practical, and any reuse is editorially justified rather than decorative
- [ ] At least 2 visual types are present on a long guide
- [ ] Every image matches the exact H2 topic, not only the destination
- [ ] Alt text is descriptive
- [ ] Caption is useful
- [ ] Credit/source is included when required
- [ ] No event-specific image is used as generic decoration
- [ ] Video is relevant and from a trustworthy channel
- [ ] Run `npm run audit:images`
- [ ] Run `npm run audit:image-context`

## Automated guard

`scripts/audit-images.mjs` normalizes Unsplash and Wikimedia image URLs (so changing only width/crop does not bypass the check).

The build fails when any page under `src/pages/` reuses the same remote image, including reuse inside the same page. Changing only width, crop or query parameters does not count as a new image.

The build also runs `scripts/audit-image-context.mjs`. For strong semantic sections such as food, transport, marine/beach and active travel, it blocks clear cases where the selected image's alt/caption/curated metadata does not match the section topic.

Legacy data-driven destination articles deliberately use maps, timelines, comparison cards and video instead of a shared photographic hero. Shared cluster photos are not rendered on those pages; a photo should only be reintroduced when that exact page has its own unique, relevant image.


## Site-wide cleanup completed

The September 2026 cleanup applies these ownership rules:

- Homepage destination thumbnails are treated as homepage-only visuals.
- Destination hubs own their own hero/section photography.
- Dedicated Hanoi food, Ninh Binh and Ha Long guides own their subject-specific photos; overview cards use graphic treatments instead of copying them.
- Index pages for destinations, hotels, itineraries and tours use graphic cards rather than repeating article photography.
- Data-driven destination subguides may use curated section imagery from the destination visual library when it improves the reading flow. Avoid obvious repetition, and combine photography with maps, cards, tables and video.
- Every production build runs the strict image audit before Astro builds.


## Runtime image fallback

All remote images are protected by the site-wide runtime fallback in `BaseLayout.astro`.
If a remote host, hotlink rule or deleted file causes an image request to fail, the browser replaces the broken image with a branded RejsTilVietnam visual instead of leaving a grey or broken box.

Destination cards use an additional built-in scenic fallback behind the photo, so their layout never appears empty while an image is loading or if the remote image fails.

Data-driven destination subguides retain `GuideCover.astro` as the guaranteed local fallback, while curated photographic hero/section media can be added when the page has an appropriate visual. See `EDITORIAL_VISUAL_STANDARD.md` for density and video rules.


## Related standard

For section-level visual density, videos, maps and page rhythm, also read `EDITORIAL_VISUAL_STANDARD.md`.
