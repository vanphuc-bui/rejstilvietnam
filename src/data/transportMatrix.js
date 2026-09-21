// Planning data for the interactive Vietnam transport matrix.
// Prices are broad September 2026 planning ranges, not live fares.
// Times are realistic city-to-city / door-to-door estimates unless explicitly labelled as flight time.

export const transportSources = [
  {
    label:'Vietnam Tourism – transport within Vietnam',
    href:'https://vietnam.travel/plan-your-trip/transport-within-vietnam',
  },
  {
    label:'Vietnam Airlines – domestic route information',
    href:'https://www.vietnamairlines.com/en-vn/',
  },
  {
    label:'12Go – current bus/train market checks',
    href:'https://12go.asia/en',
  },
  {
    label:'RedBus Vietnam – limousine/bus market checks',
    href:'https://www.redbus.vn/',
  },
];

export const transportMatrix = [
  {
    from:'Hanoi', to:'Ninh Binh', key:'hanoi-ninh-binh', bidirectional:true,
    mode:'Limousine', modeIcon:'🚐', duration:'1 t 45 min–2 t 30 min', minutes:125,
    priceMin:175000, priceMax:300000, priceBasis:'pr. person',
    best:'Bedste balance', comfort:4, hassle:1,
    note:'Dør-til-dør til Tam Coc/Trang An er ofte mere praktisk end tog til Ninh Binh station.',
    source:'RedBus / aktuelle 2026-operatørpriser',
  },
  {
    from:'Hanoi', to:'Ha Long Bay', key:'hanoi-ha-long', bidirectional:true,
    mode:'Shuttle / limousine', modeIcon:'🚐', duration:'2 t 30 min–3 t 30 min', minutes:180,
    priceMin:300000, priceMax:500000, priceBasis:'pr. person',
    best:'Bedst til cruise', comfort:4, hassle:1,
    note:'Book helst transfer sammen med cruiset, så havn og check-in matcher.',
    source:'Cruise/shuttle market range',
  },
  {
    from:'Hanoi', to:'Sapa', key:'hanoi-sapa', bidirectional:true,
    mode:'Limousine / bus', modeIcon:'🚌', duration:'5 t 30 min–6 t 30 min', minutes:360,
    priceMin:350000, priceMax:500000, priceBasis:'pr. person',
    best:'Hurtigst uden fly', comfort:3, hassle:2,
    note:'Nattog går til Lao Cai, ikke Sapa; læg ca. 1 time ekstra transfer til bjerget oveni.',
    source:'Rome2Rio / 2026 bus schedules',
  },
  {
    from:'Hanoi', to:'Ha Giang', key:'hanoi-ha-giang', bidirectional:true,
    mode:'Sleeper / limousine', modeIcon:'🚌', duration:'5 t 30 min–7 t', minutes:375,
    priceMin:300000, priceMax:450000, priceBasis:'pr. person',
    best:'Praktisk før loop', comfort:3, hassle:2,
    note:'Ankom helst med en nat i Ha Giang før selve loopet, især hvis du kommer sent.',
    source:'Operator market range',
  },
  {
    from:'Ninh Binh', to:'Ha Long Bay', key:'ninh-binh-ha-long', bidirectional:true,
    mode:'Shuttle / limousine', modeIcon:'🚐', duration:'3 t 30 min–4 t 30 min', minutes:240,
    priceMin:350000, priceMax:550000, priceBasis:'pr. person',
    best:'Undgå retur til Hanoi', comfort:3, hassle:2,
    note:'En direkte turistshuttle sparer et unødvendigt hotelskift tilbage i Hanoi.',
    source:'Operator market range',
  },
  {
    from:'Hanoi', to:'Da Nang', key:'hanoi-da-nang', bidirectional:true,
    mode:'Fly', modeIcon:'✈️', duration:'1 t 20–25 min fly · ca. 4–5 t dør-til-dør', minutes:270,
    priceMin:700000, priceMax:1500000, priceBasis:'pr. person',
    best:'Klart bedst på 10–14 dage', comfort:4, hassle:2,
    note:'Toget er en oplevelse, men omkring 15–17 timer er dyrt i ferietid på en kort rejse.',
    source:'Vietnam Airlines / Vietnam Tourism',
  },
  {
    from:'Hanoi', to:'Ho Chi Minh City', key:'hanoi-hcmc', bidirectional:true,
    mode:'Fly', modeIcon:'✈️', duration:'ca. 2 t 10–20 min fly · ca. 5 t dør-til-dør', minutes:300,
    priceMin:1200000, priceMax:2500000, priceBasis:'pr. person',
    best:'Flyv', comfort:4, hassle:2,
    note:'Vietnam Tourism angiver, at tog nord–syd kan tage op mod 30 timer.',
    source:'Vietnam Airlines / Vietnam Tourism',
  },
  {
    from:'Da Nang', to:'Hoi An', key:'da-nang-hoi-an', bidirectional:true,
    mode:'Bil / Grab / transfer', modeIcon:'🚕', duration:'45–60 min', minutes:55,
    priceMin:300000, priceMax:500000, priceBasis:'pr. bil',
    best:'Nem transfer', comfort:5, hassle:1,
    note:'Ingen grund til at skifte til bus med bagage, medmindre budgettet er meget stramt.',
    source:'Local transfer market range',
  },
  {
    from:'Hoi An', to:'Hue', key:'hoi-an-hue', bidirectional:true,
    mode:'Shuttle / privat bil', modeIcon:'🚐', duration:'2 t 30 min–3 t 30 min', minutes:180,
    priceMin:250000, priceMax:550000, priceBasis:'pr. person / delt transfer',
    best:'Kyst- og bjergstræk', comfort:4, hassle:1,
    note:'Privat bil giver mulighed for stop ved Hai Van Pass; delt shuttle er billigere.',
    source:'Local transfer market range',
  },
  {
    from:'Hoi An', to:'Ho Chi Minh City', key:'hoi-an-hcmc', bidirectional:true,
    mode:'Fly via Da Nang', modeIcon:'✈️', duration:'1 t 30 min fly · ca. 4–5 t dør-til-dør', minutes:270,
    priceMin:800000, priceMax:1700000, priceBasis:'pr. person',
    best:'Flyv', comfort:4, hassle:2,
    note:'Regn transfer Hoi An → DAD med; sammenlign ikke kun selve flytiden.',
    source:'Vietnam Airlines / local transfer range',
  },
  {
    from:'Hoi An', to:'Nha Trang', key:'hoi-an-nha-trang', bidirectional:true,
    mode:'Tog via Da Nang', modeIcon:'🚆', duration:'ca. 9–11 t inkl. transfer', minutes:600,
    priceMin:400000, priceMax:800000, priceBasis:'pr. person',
    best:'Nattog hvis du vil spare hotelnat', comfort:3, hassle:3,
    note:'Fly kan være hurtigere, men frekvensen varierer. Toget er mere forudsigeligt som overland-løsning.',
    source:'Vietnam Railways market timetable range',
  },
  {
    from:'Hoi An', to:'Phu Quoc', key:'hoi-an-phu-quoc', bidirectional:true,
    mode:'Fly fra Da Nang', modeIcon:'✈️', duration:'ca. 5–8 t samlet afhængigt af direkte/forbindelse', minutes:390,
    priceMin:1400000, priceMax:3000000, priceBasis:'pr. person',
    best:'Planlæg som transporthalvdag', comfort:3, hassle:3,
    note:'Direkte forbindelser og frekvens kan ændre sig; tjek den konkrete dato før du låser hotelnætter.',
    source:'Vietnam Airlines route information',
  },
  {
    from:'Nha Trang', to:'Da Lat', key:'nha-trang-da-lat', bidirectional:true,
    mode:'Bus / privat bil', modeIcon:'🚐', duration:'3–4 t', minutes:210,
    priceMin:200000, priceMax:350000, priceBasis:'pr. person / delt transfer',
    best:'Bedste overland-hop', comfort:3, hassle:1,
    note:'Bjergvejen er smuk, men svinget. Vælg dagtransport hvis du let bliver køresyg.',
    source:'Operator market range',
  },
  {
    from:'Nha Trang', to:'Ho Chi Minh City', key:'nha-trang-hcmc', bidirectional:true,
    mode:'Tog', modeIcon:'🚆', duration:'7–9 t', minutes:480,
    priceMin:350000, priceMax:800000, priceBasis:'pr. person',
    best:'Tog hvis tiden er til det', comfort:3, hassle:2,
    note:'Fly er hurtigere, men Cam Ranh-lufthavnen ligger uden for Nha Trang; dør-til-dør-forskellen er mindre end flytiden antyder.',
    source:'Vietnam Railways / Vietnam Airlines',
  },
  {
    from:'Da Lat', to:'Ho Chi Minh City', key:'da-lat-hcmc', bidirectional:true,
    mode:'Bus / limousine', modeIcon:'🚌', duration:'6–7 t', minutes:390,
    priceMin:300000, priceMax:450000, priceBasis:'pr. person',
    best:'Budgetvenligt', comfort:3, hassle:2,
    note:'Fly kan spare tid, men bus er ofte enklere, hvis du medregner begge lufthavnstransfers.',
    source:'Operator market range',
  },
  {
    from:'Ho Chi Minh City', to:'Mekong Delta', key:'hcmc-mekong', bidirectional:true,
    mode:'Bus / transfer', modeIcon:'🚐', duration:'2–3 t 30 min afhængigt af My Tho/Ben Tre/Can Tho', minutes:165,
    priceMin:200000, priceMax:450000, priceBasis:'pr. person',
    best:'Dagstur eller 1–2 nætter', comfort:3, hassle:2,
    note:'“Mekong” er ikke ét stop: Can Tho kræver markant længere transport end My Tho eller Ben Tre.',
    source:'Regional bus/transfer market range',
  },
  {
    from:'Ho Chi Minh City', to:'Phu Quoc', key:'hcmc-phu-quoc', bidirectional:true,
    mode:'Fly', modeIcon:'✈️', duration:'ca. 1 t fly · ca. 3–4 t dør-til-dør', minutes:210,
    priceMin:900000, priceMax:1800000, priceBasis:'pr. person',
    best:'Klart lettest', comfort:4, hassle:2,
    note:'Vietnam Airlines angiver ca. 1 times flyvetid. Pris varierer tydeligt med weekend, bagage og sæson.',
    source:'Vietnam Airlines',
  },
  {
    from:'Hanoi', to:'Phu Quoc', key:'hanoi-phu-quoc', bidirectional:true,
    mode:'Fly', modeIcon:'✈️', duration:'ca. 2 t 05 min fly · ca. 5 t dør-til-dør', minutes:300,
    priceMin:1000000, priceMax:2500000, priceBasis:'pr. person',
    best:'Direkte hvis ruten kræver det', comfort:4, hassle:2,
    note:'God løsning når du vil kombinere Nordvietnam direkte med strand uden ekstra stop i syd.',
    source:'Vietnam Airlines',
  },
];

export const transportPlaces = [...new Set(transportMatrix.flatMap((item) => [item.from, item.to]))].sort((a,b) => a.localeCompare(b, 'da'));

export function transportLookup(a, b) {
  return transportMatrix.find((item) =>
    (item.from === a && item.to === b) ||
    (item.bidirectional && item.from === b && item.to === a)
  );
}
