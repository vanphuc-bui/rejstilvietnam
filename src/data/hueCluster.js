const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Citadel%20of%20Hue.jpg?width=1800',
  alt:'Det kejserlige citadel i Hue',
  caption:'Hue er en destination, hvor historie, mad og floden hænger tættere sammen end en klassisk seværdighedsliste antyder.',
  credit:'qiv / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Citadel_of_Hue.jpg',
};

const sources = [
  { label:'Vietnam Tourism - Hue', href:'https://vietnam.travel/node/101' },
  { label:'UNESCO - Complex of Hué Monuments', href:'https://whc.unesco.org/en/list/678/' },
];

const hotelSources = [
  ...sources,
  { label:'Hue tourism portal', href:'https://visithue.vn/' },
];

const relatedBase = [
  { href:'/destinationer/hue/', title:'Hue rejseguide', text:'Tilbage til den samlede guide til Hue.' },
  { href:'/destinationer/hoi-an/', title:'Hoi An', text:'Fortsæt sydpå til gammel by, strand og mad.' },
];

export const huePages = {
  'sevaerdigheder': {
    destinationName:'Hue',
    title:'Hue seværdigheder 2026 | Citadel, grave og pagoder',
    description:'Guide til de vigtigste seværdigheder i Hue: Citadellet, Minh Mang, Khai Dinh, Tu Duc, Thien Mu og Perfume River med forslag til prioritering.',
    eyebrow:'Hue · Seværdigheder',
    heading:'Seværdigheder i Hue: vælg Citadellet og 1-2 grave, ikke alt på én dag',
    intro:'Hue belønner et langsommere program. Vi ville begynde med Citadellet og derefter vælge grave efter arkitektur og placering frem for at forsøge at samle dem alle.',
    hero, sources,
    quickFacts:[
      {label:'Første stop',value:'Citadellet'},
      {label:'Hvis du vælger én grav',value:'Minh Mang eller Khai Dinh'},
      {label:'Roligt ekstra stop',value:'Thien Mu'}
    ],
    sections:[
      {id:'citadel',heading:'Citadellet og Imperial City',paragraphs:['Citadellet er det vigtigste sted for at forstå Hues rolle som kejserlig hovedstad. Området er stort, så sæt mindst en halv dag af og kom gerne tidligt.','Fokuser på hovedaksen, paladsområderne og de restaurerede dele i stedet for at forsøge at læse hvert skilt.']},
      {id:'minh-mang',heading:'Minh Mang-graven',paragraphs:['Minh Mang er et godt førstevalg, hvis du vil se en stor, symmetrisk grav integreret i landskab og vand.','Den ligger uden for centrum, så kombiner den med højst én anden grav samme halvdag.']},
      {id:'khai-dinh',heading:'Khai Dinh-graven',paragraphs:['Khai Dinh er mere kompakt og visuelt dekorativ. Det gør den oplagt, hvis du har mindre tid eller allerede har set et større gravanlæg.','Der er trapper, så den varmeste del af dagen er mindre behagelig.']},
      {id:'tu-duc',heading:'Tu Duc-graven',paragraphs:['Tu Duc føles mere som et landskabeligt park- og pavillonområde end en monumental grav.','Vælg den, hvis ro og grønne omgivelser tiltaler dig mere end den stærke symmetri ved Minh Mang.']},
      {id:'thien-mu',heading:'Thien Mu-pagoden og Perfume River',paragraphs:['Thien Mu ligger ved floden og er let at kombinere med en rolig eftermiddag.','Vi ville ikke bygge en hel dag omkring en bådtur på Perfume River, men floden er et godt visuelt bindeled mellem byens historiske stop.']},
    ],
    mapPlaces:[
      {name:'Hue Imperial City',detail:'Hovedseværdighed',lat:16.4696,lng:107.5776},
      {name:'Thien Mu Pagoda',detail:'Pagode ved Perfume River',lat:16.4536,lng:107.5454},
      {name:'Minh Mang Tomb',detail:'Stor kejsergrav',lat:16.3862,lng:107.5707},
      {name:'Khai Dinh Tomb',detail:'Kompakt og dekorativ grav',lat:16.3989,lng:107.5905},
      {name:'Tu Duc Tomb',detail:'Grøn og landskabelig grav',lat:16.4322,lng:107.5651},
    ],
    related:[
      {href:'/destinationer/hue/2-dage-i-hue/',title:'2 dage i Hue',text:'Se hvordan stoppene kan fordeles uden at gøre programmet for tæt.'},
      {href:'/destinationer/hue/transport-til-og-fra-hue/',title:'Transport til og fra Hue',text:'Planlæg næste stop mod Da Nang eller Hoi An.'},
      ...relatedBase,
    ],
  },

  'hvor-skal-man-bo': {
    destinationName:'Hue',
    title:'Hvor skal man bo i Hue? Centrum, floden eller Citadellet',
    description:'Sammenlign de bedste områder i Hue for første besøg: syd for Perfume River, nær Citadellet og roligere områder langs floden.',
    eyebrow:'Hue · Områder',
    heading:'Hvor skal man bo i Hue? Bo syd for floden for den letteste første rejse',
    intro:'Hue er kompakt nok til, at du ikke behøver jagte den perfekte adresse. Til 2-3 nætter ville vi prioritere gåafstand til restauranter og nem transport til Citadellet.',
    hero, sources:hotelSources,
    quickFacts:[
      {label:'Første gang',value:'Syd for Perfume River'},
      {label:'Mere historisk',value:'Nær Citadellet'},
      {label:'Mere ro',value:'Længere langs floden'}
    ],
    sections:[
      {id:'south',heading:'Syd for Perfume River',paragraphs:['Området omkring Le Loi, Vo Thi Sau og de centrale restaurantgader er det mest praktiske valg til et kort ophold.','Du har caféer og mad i gåafstand og kan tage en kort Grab over floden til Citadellet.']},
      {id:'citadel',heading:'Nær Citadellet',paragraphs:['At bo nord for floden giver mere lokal stemning og kortere afstand til Imperial City.','Til gengæld er udvalget af internationale restauranter og hoteller mindre tæt end syd for floden.']},
      {id:'river',heading:'Roligere flodhoteller',paragraphs:['Flodhoteller lidt uden for den travleste kerne passer godt, hvis pool, have og ro betyder mere end at kunne gå til alt.','Tjek stadig den faktiske afstand til centrum, især hvis du kun har to nætter.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['To nætter og første gang: centrum syd for floden. Tre-fire nætter og mere ro: et hotel lidt længere langs floden kan være bedre.','Vi ville ikke vælge hotel alene ud fra udsigten, hvis det skaber ekstra taxiture til hvert måltid.']},
    ],
    mapPlaces:[
      {name:'South bank / Le Loi',detail:'Mest praktisk første gang',lat:16.4635,lng:107.5920},
      {name:'Imperial City / north bank',detail:'Bedst til historie',lat:16.4696,lng:107.5776},
      {name:'Perfume River east',detail:'Roligere hotelområder',lat:16.4630,lng:107.6060},
    ],
    related:[
      {href:'/destinationer/hue/bedste-hoteller/',title:'Bedste hoteller i Hue',text:'Se konkrete hoteller efter område og ferieform.'},
      {href:'/destinationer/hue/sevaerdigheder/',title:'Seværdigheder i Hue',text:'Vælg base efter det program du faktisk vil følge.'},
      ...relatedBase,
    ],
  },

  'bedste-hoteller': {
    destinationName:'Hue',
    title:'Bedste hoteller i Hue 2026 | Fem gode referencevalg',
    description:'Fem hoteller i Hue at sammenligne: Azerai La Residence, Melia Vinpearl Hue, Silk Path Grand Hue, Indochine Palace og Pilgrimage Village.',
    eyebrow:'Hue · Hoteller',
    heading:'Bedste hoteller i Hue: fem referencepunkter fra centrum til resortro',
    intro:'Vi ville ikke vælge Hue-hotel efter stjerner alene. Placering syd for floden, historisk karakter og hvor meget resorttid du ønsker ændrer oplevelsen mere.',
    hero, sources:hotelSources,
    quickFacts:[
      {label:'Historisk luksus',value:'Azerai La Residence'},
      {label:'Central high-rise',value:'Melia Vinpearl Hue'},
      {label:'Rolig resortfølelse',value:'Pilgrimage Village'}
    ],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'Azerai La Residence Hue',paragraphs:['Et historisk hotel ved Perfume River med tydelig karakter og nem adgang til centrum. Godt til par og rejsende, der vægter atmosfære lige så højt som faciliteter.']},
        {heading:'Melia Vinpearl Hue',paragraphs:['Et centralt moderne valg med høj bygning og byudsigt. Praktisk hvis du vil have internationale hotelstandarder tæt på mad og centrum.']},
        {heading:'Silk Path Grand Hue Hotel',paragraphs:['Et klassisk orienteret hotel nær centrum, som er nyttigt at sammenligne med både de dyrere luksushoteller og mindre boutiquevalg.']},
        {heading:'Indochine Palace',paragraphs:['Stort city-hotel med resortlignende faciliteter uden at flytte langt ud af byen.']},
        {heading:'Pilgrimage Village Boutique Resort & Spa',paragraphs:['Et grønnere og roligere valg uden for centrum. Bedst hvis spa, pool og afslapning er en vigtig del af Hue-opholdet.']},
      ]},
      {id:'valg',heading:'Hvad skal afgøre valget?',bullets:['Bo centralt hvis du kun har 2 nætter.','Vælg karakterhotel hvis Hue skal føles som et historisk stop, ikke bare en seng mellem seværdigheder.','Vælg resort uden for centrum kun hvis du faktisk vil bruge faciliteterne.','Tjek seneste anmeldelser for støj, renovering og poolforhold på dine datoer.']},
      {id:'price',heading:'Pris giver først mening efter område og ferieform',paragraphs:['Et centralt hotel kan spare flere taxiture og gøre aftenerne lettere. Et resort kan være bedre value, hvis du vil bruge en halv dag ved pool eller spa.','Sammenlign totalen for dine konkrete datoer i stedet for en generel “bedst i Hue”-liste.']},
    ],
    related:[
      {href:'/destinationer/hue/hvor-skal-man-bo/',title:'Hvor skal man bo i Hue?',text:'Vælg område før hotel.'},
      {href:'/destinationer/hue/2-dage-i-hue/',title:'2 dage i Hue',text:'Se om hotelplaceringen passer til ruten.'},
      ...relatedBase,
    ],
  },

  'mad-i-hue': {
    destinationName:'Hue',
    title:'Mad i Hue 2026 | Bún bò, bánh bèo og kejserbyens køkken',
    description:'Guide til mad i Hue: bún bò Huế, bánh bèo, bánh khoái, cơm hến og hvordan du planlægger en god maddag i byen.',
    eyebrow:'Hue · Mad',
    heading:'Mad i Hue: byen er værd at stoppe i alene for de regionale retter',
    intro:'Hue har en mere tydelig regional madidentitet end mange førstegangsrejsende forventer. Vi ville planlægge mindst to lokale måltider i stedet for kun at spise på hotellet.',
    hero, sources,
    quickFacts:[
      {label:'Start med',value:'Bún bò Huế'},
      {label:'Småretter',value:'Bánh bèo / bánh nậm'},
      {label:'Mere lokalt',value:'Cơm hến'}
    ],
    sections:[
      {id:'bun-bo',heading:'Bún bò Huế',paragraphs:['Den klassiske nudelsuppe fra Hue er et oplagt første måltid. Smagen er typisk mere aromatisk og kan være stærkere end den phở mange kender hjemmefra.','Prøv den på et sted, der tydeligt specialiserer sig i retten frem for en restaurant med meget lang menu.']},
      {id:'cakes',heading:'Bánh bèo, bánh nậm og bánh lọc',paragraphs:['Hue er kendt for små risbaserede retter, der fungerer godt som deling eller et let måltid.','Bestil flere forskellige småretter, hvis I er to, så du får variation uden at fylde hele dagen med madstop.']},
      {id:'banh-khoai',heading:'Bánh khoái',paragraphs:['Bánh khoái er en sprød pandekagelignende ret, der minder om bánh xèo men har sin egen Hue-stil og servering.','Det er et godt aftensmåltid efter en dag med Citadellet og gravene.']},
      {id:'com-hen',heading:'Cơm hến',paragraphs:['Cơm hến med små muslinger, ris, urter og sprøde elementer er en mere lokal Hue-oplevelse.','Hvis du ikke spiser skaldyr, så vælg i stedet flere af de vegetariske eller risbaserede småretter.']},
    ],
    related:[
      {href:'/destinationer/hue/2-dage-i-hue/',title:'2 dage i Hue',text:'Se hvor måltiderne passer naturligt ind.'},
      {href:'/destinationer/hue/sevaerdigheder/',title:'Seværdigheder i Hue',text:'Kombinér mad med historie uden at overplanlægge.'},
      ...relatedBase,
    ],
  },

  '2-dage-i-hue': {
    destinationName:'Hue',
    title:'2 dage i Hue 2026 | Citadel, grave og mad i roligt tempo',
    description:'Et realistisk forslag til 2 dage i Hue med Citadellet, to kejsergrave, Thien Mu, lokal mad og tid langs Perfume River.',
    eyebrow:'Hue · Rejseplan',
    heading:'2 dage i Hue: én historiedag og én gravdag er nok',
    intro:'To hele dage er et godt første ophold. Du kan se de vigtigste historiske steder uden at gøre Hue til et kapløb mellem grave.',
    hero, sources,
    quickFacts:[
      {label:'Dag 1',value:'Citadel + by'},
      {label:'Dag 2',value:'2 grave + pagode'},
      {label:'Aftener',value:'Lokal Hue-mad'}
    ],
    sections:[
      {id:'dag1-morgen',heading:'Dag 1 morgen: Citadellet',paragraphs:['Start tidligt og giv Imperial City 3-4 timer. Stop til kaffe eller frokost bagefter i stedet for at gå direkte videre til endnu en stor seværdighed.']},
      {id:'dag1-aften',heading:'Dag 1 eftermiddag og aften',paragraphs:['Gå langs floden eller gennem den centrale del af byen. Brug aftenen på bún bò Huế, bánh khoái eller små Hue-retter.','Hvis energien er lav, så spring en ekstra attraktion over. Hue fungerer godt i langsomt tempo.']},
      {id:'dag2',heading:'Dag 2: vælg to grave',paragraphs:['Vi ville kombinere Minh Mang med Khai Dinh for to tydeligt forskellige udtryk. Tu Duc kan erstatte én af dem, hvis grønne omgivelser tiltaler dig mere.','Lej chauffør eller bil til en halv dag, så logistikken ikke bliver det sværeste ved turen.']},
      {id:'thien-mu',heading:'Slut med Thien Mu eller Perfume River',paragraphs:['Hvis der stadig er tid og energi, passer Thien Mu godt som sidste historiske stop.','En kort bådtur kan være hyggelig, men vi ville ikke prioritere den over Citadellet eller gravene.']},
    ],
    related:[
      {href:'/destinationer/hue/sevaerdigheder/',title:'Hue seværdigheder',text:'Vælg de grave der passer bedst til dig.'},
      {href:'/destinationer/hue/mad-i-hue/',title:'Mad i Hue',text:'Planlæg de lokale måltider omkring dagene.'},
      ...relatedBase,
    ],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Hue',
    title:'Vejret i Hue | Bedste rejsetid og regnsæson',
    description:'Guide til vejret i Hue: varme måneder, regnsæson, risiko for kraftig regn og hvordan vejret påvirker Citadellet og kejsergravene.',
    eyebrow:'Hue · Vejr',
    heading:'Bedste rejsetid til Hue: planlæg efter varme og regn, ikke kun temperatur',
    intro:'Hue kan være meget varm og har en vådere periode end mange andre dele af Vietnam. Til sightseeing betyder regn og middagsvarme mere end et par graders forskel.',
    hero, sources,
    quickFacts:[
      {label:'Behagelig sightseeing',value:'Typisk forår'},
      {label:'Varmest',value:'Sen forår / sommer'},
      {label:'Vådere periode',value:'Efterår'}
    ],
    sections:[
      {id:'spring',heading:'Forår: ofte den letteste sightseeingperiode',paragraphs:['Mildere temperaturer gør lange timer ved Citadellet og gravene mere behagelige.','Det er stadig klogt at starte tidligt, fordi åbne gårdrum og trapper bliver varme midt på dagen.']},
      {id:'summer',heading:'Sommer: varmt og solrigt, men fysisk hårdere',paragraphs:['Hue kan føles meget varm i sommermånederne. Planlæg store udendørs stop morgen og sen eftermiddag.','Pool på hotellet giver mere værdi her end på et rent byophold i køligere vejr.']},
      {id:'rain',heading:'Efterår og regn',paragraphs:['Centralvietnam kan få perioder med kraftig regn og tropiske systemer. Hold planen fleksibel, hvis du rejser i den vådere del af året.','Tjek lokale vejrudsigter tæt på datoen frem for at stole på et årligt gennemsnit.']},
      {id:'packing',heading:'Hvad betyder det for din rute?',paragraphs:['Let regnbeskyttelse og sko med godt greb er mere nyttige end en tung jakke.','Hvis vejret er dårligt, så fordel Citadellet og gravene over de klareste perioder i stedet for at følge en låst tidsplan.']},
    ],
    related:[
      {href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign Hue med resten af din rute.'},
      {href:'/destinationer/hue/2-dage-i-hue/',title:'2 dage i Hue',text:'Se en plan der er let at flytte rundt efter vejret.'},
      ...relatedBase,
    ],
  },

  'transport-til-og-fra-hue': {
    destinationName:'Hue',
    title:'Transport til og fra Hue | Da Nang, Hoi An, Hanoi og lufthavn',
    description:'Praktisk guide til transport til og fra Hue: Phu Bai lufthavn, tog, vejtransport til Da Nang/Hoi An og forbindelser nordpå.',
    eyebrow:'Hue · Transport',
    heading:'Transport til Hue: tog eller vej er ofte mere interessant end endnu en flydag',
    intro:'Hue ligger godt mellem Nord- og Centralvietnam. Valget afhænger af, om du kommer fra Hanoi eller allerede er i Da Nang/Hoi An.',
    hero, sources,
    quickFacts:[
      {label:'Fra Da Nang',value:'Bil / tog'},
      {label:'Fra Hoi An',value:'Bil / shuttle'},
      {label:'Fra Hanoi',value:'Fly eller nattog'}
    ],
    sections:[
      {id:'airport',heading:'Phu Bai lufthavn',paragraphs:['Phu Bai ligger uden for centrum, så regn med transfer den sidste del. Fly giver mest mening, hvis Hue er dit første stop i Centralvietnam eller du kommer langt fra nord/syd.']},
      {id:'danang',heading:'Da Nang til Hue',paragraphs:['Vejtransport over Hai Van Pass kan være en oplevelse i sig selv, mens tog giver en langsommere, mere landskabelig rejse.','Hvis vejret er klart og du har tid, ville vi ikke automatisk vælge den hurtigste bil.']},
      {id:'hoian',heading:'Hoi An til Hue',paragraphs:['Der er ingen stor fordel ved at flyve. Privat bil eller shuttle er den enkleste løsning, ofte via Da Nang.','Aftal om stop ved Hai Van Pass er inkluderet eller ej, så du ved om transferen er ren transport eller en halvdagstur.']},
      {id:'hanoi',heading:'Hanoi til Hue',paragraphs:['Fly er hurtigst i ren rejsetid. Nattog kan være interessant, hvis du gerne vil spare en hotelnat og accepterer mindre søvnkomfort.','Sammenlign hele dør-til-dør-tiden, ikke kun selve flyvetiden.']},
      {id:'onward',heading:'Videre mod Hoi An og Da Nang',paragraphs:['Hue fungerer naturligt før Hoi An i en nord-til-syd-rute. To nætter i Hue efterfulgt af 3-4 nætter i Hoi An giver en god balance mellem historie og et langsommere stop.']},
    ],
    related:[
      {href:'/destinationer/hue/hvor-skal-man-bo/',title:'Hvor skal man bo i Hue?',text:'Vælg base før du booker transfer.'},
      {href:'/destinationer/hoi-an/',title:'Hoi An rejseguide',text:'Planlæg næste stop mod syd.'},
      ...relatedBase,
    ],
  },
};
