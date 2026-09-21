# RejsTilVietnam.dk - standard for én indholdsside

Denne fil er den faste arbejdsskabelon til nye sider og større opdateringer. Brug den sammen med `STYLE_GUIDE.md` og `IMAGE_STANDARD.md`.

## 1. Før siden skrives

- Definér ét konkret søgeformål og ét valg, siden skal hjælpe læseren med.
- Afgør om siden er en destination, rejseplan, praktisk guide, hotelguide, turguide eller aktivitetsguide.
- Find de oplysninger, der kan ændre sig: priser, åbningstider, adgang, vejr, transport, regler og sikkerhed. Brug officielle eller troværdige kilder.
- Vurder om aktiv ferie er relevant. Det er relevant på destinationer, rejseplaner, natur-, strand- og oplevelsessider. Det er normalt ikke relevant på visum-, eSIM- og rene betalingssider.

## 2. Fast rækkefølge

1. Én tydelig H1.
2. `Kort svar` på 2-4 sætninger direkte under H1.
3. Forfatter og opdateringsdato.
4. Unik hero eller en anden tydelig, relevant visuel forklaring.
5. Hurtigt overblik med facts, kort eller sammenligning, når det hjælper beslutningen.
6. H2-sektioner bygget efter læserens reelle valg.
7. Relevante billeder, video og kort mellem tekstsektionerne.
8. `Aktiv ferie` når destinationen eller emnet egner sig til det.
9. Officielle kilder og interne links til næste naturlige trin.
10. Kommerciel CTA først efter at siden har hjulpet læseren med at vælge.

## 3. Aktiv ferie-blokken

En activity-card skal give nok information til, at en dansk læser kan vurdere oplevelsen uden at gætte. Medtag:

- aktivitetstype: løb, cykling, vandring, kajak, SUP, snorkling eller lignende
- konkret rute eller område
- distance eller et ærligt interval
- realistisk tidsforbrug
- sværhedsgrad
- bedste tidspunkt på dagen eller året
- startområde
- trafik, varme, underlag, bølger eller andre relevante forhold
- ét konkret sikkerheds- eller planlægningstip
- kortlink til startområdet

Brug `ActiveOutdoor.astro` og data i `src/data/activeOutdoor.js` til destinationer, der allerede findes. Udvid den fælles datafil frem for at kopiere kortene ind på flere sider.

Kortlinket må ikke fremstilles som en færdig GPS-rute, hvis det kun viser startområdet. GPX eller Strava-link må kun bruges, når ruten er kontrolleret. Skriv ikke bare "du kan også cykle her".

## 4. Dansk relevans

Forklar især det, der kan være anderledes end i Danmark:

- varme og høj luftfugtighed
- behov for at starte tidligt
- trafik og manglende cykelinfrastruktur
- glatte sten, trapper og stier efter regn
- redningsvest, vejr og bølger ved vandaktiviteter
- leje af cykel eller udstyr og om en guide reelt hjælper
- om aktiviteten fungerer med børn
- afstand fra hotelområdet og behov for transport

Hold tonen nøgtern. Outdoor-indhold skal hjælpe med et valg - ikke få alle destinationer til at lyde perfekte til alle aktiviteter.

## 5. Visuel standard

- Brug oplevelsesbilleder med mennesker i aktivitet, når de findes med ordentlig licens.
- Vis landskabet og de faktiske forhold, ikke kun et generisk landmark.
- Løb, cykling og vandring har særlig gavn af kort eller en tydelig startmarkør.
- En lang side skal normalt have 2-4 visuelle typer, fx foto, kort, video og sammenligningskort.
- Følg altid de tekniske og licensmæssige krav i `IMAGE_STANDARD.md`.

## 6. Mobile krav

- Activity-cards skal blive til én kolonne uden vandret scroll.
- Distance, tid, tidspunkt og start skal kunne aflæses uden zoom.
- Kortlinks og CTA'er skal være mindst 40 px høje.
- Tabellen må ikke være den eneste måde at forstå ruten på.
- Hero, kort og video må ikke blive højere end nødvendigt i første viewport.

## 7. Affiliate

- Match produktet med aktiviteten og siden. En cykeltur hører til på cykel- eller destinationindhold, ikke på en tilfældig hotelguide.
- Vis pris i DKK kun når den er kontrolleret og skriv datoen for priseksemplet.
- Forklar hvad turen løser: udstyr, transport, rutevalg, sikkerhed eller lokal viden.
- Marker aktive links med `Annoncelink` og brug `rel="sponsored noopener noreferrer"`.
- Bevar muligheden for at gøre oplevelsen selv, når det er realistisk.

## 8. QA før udgivelse

- [ ] H1 og kort svar matcher sidens søgeformål
- [ ] Dansk lyder naturligt og ikke som reklame
- [ ] Alle tidsfølsomme oplysninger er kontrolleret
- [ ] Outdoor-blokken er med, når den er relevant
- [ ] Hver aktivitet har distance, tid, sværhedsgrad, bedste tidspunkt, start, forhold og kort
- [ ] Ingen kortlink lover mere end det faktisk viser
- [ ] Unik hero og relevante section-billeder
- [ ] Ingen døde billeder, links eller video-embeds
- [ ] Mobilvisning har ingen overflow eller for små klikmål
- [ ] Interne links fører til næste naturlige trin
- [ ] Affiliate-indhold er relevant og tydeligt markeret
- [ ] `npm run build` og `npm run audit:browser` er kørt
