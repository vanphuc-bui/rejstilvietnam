# Hanoi SEO research - 15 September 2026

This document records the search-intent evidence used to build the Hanoi content hub on RejsTilVietnam.dk.

## Method

The architecture below is based on live Danish-language Google/SERP checks and current pages already ranking for the relevant intents. Search intent was cross-checked against official Vietnam Tourism sources where factual travel information was needed.

Ubersuggest is connected to the ChatGPT workspace, but its callable keyword-metrics endpoint did not surface in the current execution session. Therefore this report deliberately does **not** invent search-volume, CPC or keyword-difficulty numbers. Those metrics can be added later without changing the URL/intent map below.

## Intent map

| Priority | Primary keyword / intent | Supporting searches | SERP evidence | URL decision |
| --- | --- | --- | --- | --- |
| P1 | `Hanoi seværdigheder` | `oplevelser i Hanoi`, `hvad skal man se i Hanoi`, `ting at lave i Hanoi` | Tripadvisor.dk has a dedicated Hanoi attractions SERP page; Check Point Travel and Wanderlog also publish dedicated Danish attraction guides. | `/destinationer/hanoi/sevaerdigheder/` |
| P1 | `hvor skal man bo i Hanoi` | `bedste område Hanoi`, `Old Quarter eller Tay Ho`, `Hanoi kvarterer` | Dedicated Danish pages compare Old Quarter, French Quarter, Tay Ho and Ba Dinh. | Keep `/destinationer/hanoi/hvor-skal-man-bo/` |
| P1 | `bedste hoteller i Hanoi` | `hoteller Hanoi`, `hotel Hanoi Old Quarter` | Tripadvisor.dk has a dedicated “bedste hoteller i Hanoi” page; clear commercial intent. | Keep `/destinationer/hanoi/bedste-hoteller/` |
| P1 | `Train Street Hanoi` | `Hanoi Train Street`, `tog gade Hanoi`, `Train Street åbningstider` | Check Point Travel has a dedicated Danish Train Street guide with location, access and video. | `/destinationer/hanoi/train-street/` |
| P1 | `3 dage i Hanoi` | `Hanoi 3 dage`, `Hanoi rejseplan`, `hvor mange dage Hanoi` | Danish itinerary pages and travel guides expose 1-5 day Hanoi planning; several guides recommend roughly 2-3 days for a first visit. | `/destinationer/hanoi/3-dage-i-hanoi/` |
| P1 | `mad i Hanoi` | `street food Hanoi`, `hvad skal man spise i Hanoi`, `Hanoi food guide` | Current SERP has dedicated street-food guides; Danish competition is thinner, creating a useful topical-authority opportunity. | `/destinationer/hanoi/mad-i-hanoi/` |
| P2 | `Hanoi lufthavn centrum` | `Noi Bai til Old Quarter`, `bus 86 Hanoi`, `Hanoi airport Old Quarter` | Current search results contain dedicated airport-to-centre guides; Bus 86 is a recurring sub-intent. | `/destinationer/hanoi/lufthavn-til-centrum/` |
| P2 | `Ninh Binh fra Hanoi` | `dagstur Ninh Binh fra Hanoi`, `Hanoi Ninh Binh` | Vietnam Tourism explicitly presents Ninh Binh as a Hanoi side trip; Danish operators also combine Hanoi and Ninh Binh. | `/destinationer/hanoi/ninh-binh-fra-hanoi/` |
| P2 | `Ha Long Bay fra Hanoi` | `dagstur Ha Long Bay fra Hanoi`, `Ha Long cruise fra Hanoi` | Vietnam Tourism explicitly presents Ha Long Bay as a convenient trip from Hanoi; day trip and overnight cruise are separate decision intents. | `/destinationer/hanoi/ha-long-bay-fra-hanoi/` |
| Hub | `Hanoi rejseguide` | `rejse til Hanoi`, `Hanoi guide`, `Hanoi ferie` | Broad intent overlaps several subtopics. The hub should summarize and route users into the dedicated pages rather than try to rank every intent itself. | `/destinationer/hanoi/` |

## SERP sources checked

- Tripadvisor Denmark - Hanoi attractions: https://www.tripadvisor.dk/Attractions-g293924-Activities-Hanoi.html
- HotelsVetted Denmark - where to stay in Hanoi: https://hotelsvetted.com/da/where-to-stay/hanoi-where-to-stay/
- Check Point Travel Denmark - Train Street: https://www.cpt.dk/artikler/train-street/
- Wanderlog Denmark - things to do in Hanoi: https://wanderlog.com/da/list/geoCategory/104394/top-ting-at-g%C3%B8re-og-sev%C3%A6rdigheder-i-hanoi
- Vietnam Tourism - Hanoi attractions: https://vietnam.travel/things-to-do/11-must-see-attractions-ha-noi
- Vietnam Tourism - Hanoi day trips: https://vietnam.travel/node/1170
- Vietnam Tourism - Ninh Binh: https://vietnam.travel/node/196
- Vietnam Tourism - Ha Long: https://vietnam.travel/node/57

## Cannibalization rules

1. The Hanoi hub targets broad travel-guide intent only and gives short summaries of attractions, food, accommodation, transport and day trips.
2. The attractions page owns `Hanoi seværdigheder` and related “what to see/do” terms.
3. Train Street gets its own page because the SERP shows a distinct practical-information intent. The attractions page links to it but does not try to answer all Train Street questions.
4. The hotel page owns hotel-selection intent; the area page owns neighbourhood-selection intent.
5. The 3-day itinerary owns sequence/planning intent rather than becoming another attractions list.
6. Ninh Binh and Ha Long pages own “from Hanoi” transport/decision intent and link onward to future destination hubs if those are created later.

## Visual-content standard

Every high-priority page should contain at least one useful real photograph with attribution where required. Video is embedded only when it materially improves understanding, such as a walking tour for the Hanoi hub or a current Train Street access/example video. Maps are used when spatial context helps the decision. No decorative AI imagery is required.

## Affiliate rule for this build

No new affiliate links are added in this phase. Content and internal-link architecture are built first. Commercial links can be inserted later only after the pages have traffic and the relevant affiliate programmes have been selected.
