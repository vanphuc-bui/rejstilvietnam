# Image standard for RejsTilVietnam.dk

This is the visual checklist for every new page and every major update.

## 1. Uniqueness

- Every article must have its own hero image. A hero image is never reused on another page.
- Editorial section images should also be unique site-wide.
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

Avoid making every page a sequence of generic landscape photos.

## 3. Relevance

- The image must match the exact place or topic discussed in the surrounding section.
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
- [ ] Section images are not used on another editorial page
- [ ] At least 2 visual types are present on a long guide
- [ ] Every image matches the exact section
- [ ] Alt text is descriptive
- [ ] Caption is useful
- [ ] Credit/source is included when required
- [ ] No event-specific image is used as generic decoration
- [ ] Video is relevant and from a trustworthy channel
- [ ] Run `npm run audit:images`

## Automated guard

`scripts/audit-images.mjs` normalizes Unsplash and Wikimedia image URLs (so changing only width/crop does not bypass the check).

The build fails when any page under `src/pages/` reuses the same remote image, including reuse inside the same page. Changing only width, crop or query parameters does not count as a new image.

Legacy data-driven destination articles deliberately use maps, timelines, comparison cards and video instead of a shared photographic hero. Shared cluster photos are not rendered on those pages; a photo should only be reintroduced when that exact page has its own unique, relevant image.


## Site-wide cleanup completed

The September 2026 cleanup applies these ownership rules:

- Homepage destination thumbnails are treated as homepage-only visuals.
- Destination hubs own their own hero/section photography.
- Dedicated Hanoi food, Ninh Binh and Ha Long guides own their subject-specific photos; overview cards use graphic treatments instead of copying them.
- Index pages for destinations, hotels, itineraries and tours use graphic cards rather than repeating article photography.
- Data-driven legacy destination subguides do not render shared cluster photos. Maps, structured cards and videos provide visual context without duplicating imagery.
- Every production build runs the strict image audit before Astro builds.
