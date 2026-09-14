# Destination hub SEO research — 15 September 2026

This file records why the non-Hanoi destination clusters were created. The goal is to avoid inventing pages from intuition alone.

## Method

1. Live Danish-language SERP checks were run for destination + intent combinations such as `seværdigheder`, `hoteller`, `hvor skal man bo`, beaches, day trips and transport.
2. Danish SERP evidence was cross-checked with official Vietnam Tourism destination/itinerary pages and current Tripadvisor Denmark category pages.
3. A page was created only where the intent is distinct enough to deserve its own URL and not cannibalize the destination hub.
4. No search-volume, CPC or keyword-difficulty number is claimed here because a reliable volume endpoint was not available in the current execution session. The architecture is based on observed SERP intent and official destination evidence, not fabricated metrics.

## Hoi An

Evidence:
- Tripadvisor Denmark exposes a dedicated current hotel result set for Hoi An: https://www.tripadvisor.dk/Hotels-g298082-Hoi_An_Quang_Nam_Province-Hotels.html
- Vietnam Tourism maintains dedicated Hoi An destination and activity guides: https://vietnam.travel/node/99 and https://vietnam.travel/node/1332
- Official Hoi An content separately discusses Old Town, beaches, cycling, food and tailoring, confirming that these are independent trip-planning decisions.

Cluster URLs:
- `/destinationer/hoi-an/` — broad Hoi An travel-guide intent
- `/destinationer/hoi-an/sevaerdigheder/` — what to see/do
- `/destinationer/hoi-an/3-dage-i-hoi-an/` — itinerary intent
- `/destinationer/hoi-an/hvor-skal-man-bo/` — neighbourhood/area decision
- `/destinationer/hoi-an/bedste-hoteller/` — hotel-selection commercial intent
- `/destinationer/hoi-an/strande/` — An Bang/Cua Dai beach intent
- `/destinationer/hoi-an/mad-i-hoi-an/` — local food intent
- `/destinationer/hoi-an/da-nang-til-hoi-an/` — airport/transfer intent

## Ho Chi Minh City

Evidence:
- Tripadvisor Denmark has dedicated Ho Chi Minh City attraction categories and surfaces Cu Chi, Central Post Office, Reunification Palace, Nguyen Hue and other major attractions: https://www.tripadvisor.dk/Attractions-g293925-Activities-c47-Ho_Chi_Minh_City.html
- Danish Tripadvisor tour results separately expose Cu Chi and Mekong Delta products, indicating distinct day-trip intent.
- Vietnam Tourism material treats District 1, city history, food and southern Vietnam weather as distinct planning topics.

The city receives a 10-page structure, matching Hanoi in scale:
- `/destinationer/ho-chi-minh-city/`
- `/destinationer/ho-chi-minh-city/sevaerdigheder/`
- `/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/`
- `/destinationer/ho-chi-minh-city/hvor-skal-man-bo/`
- `/destinationer/ho-chi-minh-city/bedste-hoteller/`
- `/destinationer/ho-chi-minh-city/mad-i-ho-chi-minh-city/`
- `/destinationer/ho-chi-minh-city/cu-chi-tunneler-fra-ho-chi-minh-city/`
- `/destinationer/ho-chi-minh-city/mekong-delta-fra-ho-chi-minh-city/`
- `/destinationer/ho-chi-minh-city/lufthavn-til-centrum/`
- `/destinationer/ho-chi-minh-city/bedste-rejsetid/`

## Phu Quoc

Evidence:
- Vietnam Tourism has a dedicated Phu Quoc page separating beaches/nature, culture and weather: https://vietnam.travel/node/150
- Official weather guidance explicitly separates the clearer October–June period from the stormier July–September period.
- Current web results have multiple dedicated 2026 beach-comparison pages, indicating strong beach-selection intent.
- Hotel and area choice are structurally important because the island is large and resort zones are geographically separated.

Cluster URLs:
- `/destinationer/phu-quoc/`
- `/destinationer/phu-quoc/bedste-strande/`
- `/destinationer/phu-quoc/hvor-skal-man-bo/`
- `/destinationer/phu-quoc/bedste-hoteller/`
- `/destinationer/phu-quoc/sevaerdigheder/`
- `/destinationer/phu-quoc/4-dage-i-phu-quoc/`
- `/destinationer/phu-quoc/vejr-og-bedste-rejsetid/`
- `/destinationer/phu-quoc/lufthavn-og-transport/`

## Da Nang

Evidence:
- Tripadvisor Denmark has dedicated Da Nang attraction and hotel SERPs, with Marble Mountains, My Khe, Son Tra and Ba Na Hills repeatedly surfaced.
- Vietnam Tourism has dedicated pages for Da Nang, Ba Na Hills, must-visit attractions and a standalone “3 perfect days in Danang” itinerary: https://vietnam.travel/node/1843, https://vietnam.travel/node/1366, https://vietnam.travel/node/128
- Hoi An is explicitly presented as a nearby destination, validating a separate Da Nang ↔ Hoi An transport/planning page.

Cluster URLs:
- `/destinationer/da-nang/`
- `/destinationer/da-nang/sevaerdigheder/`
- `/destinationer/da-nang/3-dage-i-da-nang/`
- `/destinationer/da-nang/hvor-skal-man-bo/`
- `/destinationer/da-nang/bedste-hoteller/`
- `/destinationer/da-nang/bedste-strande/`
- `/destinationer/da-nang/ba-na-hills/`
- `/destinationer/da-nang/da-nang-til-hoi-an/`

## Nha Trang

Evidence:
- Tripadvisor Denmark maintains a dedicated Nha Trang destination page highlighting beach, mud baths, Po Nagar and food: https://www.tripadvisor.dk/Tourism-g293928-Nha_Trang_Khanh_Hoa_Province-Vacations.html
- Vietnam Tourism separately highlights Po Nagar, Dam Market, mud baths, water activities and islands: https://beta-v2.vietnam.travel/vi/places-to-go/central-vietnam/nha-trang
- The strongest initial intents are therefore attractions, area/hotel choice, beaches and a compact itinerary. The cluster is intentionally smaller than Hanoi/HCMC until Search Console provides query evidence for further expansion.

Cluster URLs:
- `/destinationer/nha-trang/`
- `/destinationer/nha-trang/sevaerdigheder/`
- `/destinationer/nha-trang/hvor-skal-man-bo/`
- `/destinationer/nha-trang/bedste-hoteller/`
- `/destinationer/nha-trang/bedste-strande/`
- `/destinationer/nha-trang/3-dage-i-nha-trang/`

## Cannibalization rules

- Destination hub owns broad `destination + rejseguide/rejse` intent.
- `sevaerdigheder` pages own “what to see/do” terms.
- `hvor-skal-man-bo` owns neighbourhood/area selection; `bedste-hoteller` owns hotel-selection intent.
- Itinerary pages own sequence/day-planning intent and should link to, not duplicate, full attraction guides.
- Day-trip pages (Cu Chi, Mekong, Ba Na) own destination-specific excursion intent.
- Transport pages own airport/city-to-city logistics.
- Weather pages are only split where season materially changes the product (Phu Quoc) or destination-scale search intent is strong enough (HCMC).

## Expansion rule after launch

Do not add additional thin pages simply because a topic sounds useful. Use Google Search Console impressions/queries to decide the next expansions. Candidates such as `Hoi An skrædder`, `Phu Quoc med børn`, `Nha Trang mudderbad`, `Da Nang med børn` and `shopping i Ho Chi Minh City` should be promoted to standalone URLs only when query evidence justifies it.
