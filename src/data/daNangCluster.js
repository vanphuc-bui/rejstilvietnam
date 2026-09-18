const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/My%20Khe%20Beach%20Danang%20Coastline.jpg?width=1800',
  alt:'My Khe Beach og Da Nang set fra oven',
  caption:'Da Nang kombinerer storby, strand og lufthavn. Derfor giver byen en anden type ophold end Hoi An.',
  credit:'Jpatokal / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:My_Khe_Beach_Danang_Coastline.jpg',
};
const marbleImage = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Marble%20Mountains%2C%20Vietnam.jpg?width=1500',
  alt:'Marble Mountains ved Da Nang',
  caption:'Marble Mountains er en af de letteste halvdagsoplevelser fra Da Nang og ligger naturligt på vejen mod Hoi An.',
  credit:'Bernard Gagnon / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Marble_Mountains,_Vietnam.jpg',
};
const sources = [
  { label:'Vietnam Tourism - Da Nang', href:'https://vietnam.travel/node/1843' },
  { label:'Vietnam Tourism - must-visit places in Da Nang', href:'https://vietnam.travel/node/1366' },
  { label:'Tripadvisor Danmark - seværdigheder i Da Nang', href:'https://www.tripadvisor.dk/Attractions-g298085-Activities-Da_Nang.html' },
];
const hotelSources = [
  ...sources,
  { label:'Tripadvisor Danmark - hoteller i Da Nang', href:'https://www.tripadvisor.dk/Hotels-g298085-Da_Nang-Hotels.html' },
];
const relatedBase = [
  { href:'/destinationer/da-nang/', title:'Da Nang rejseguide', text:'Tilbage til hele Da Nang-hubben.' },
  { href:'/destinationer/hoi-an/', title:'Hoi An rejseguide', text:'Sammenlign strandbyen med den gamle handelsby.' },
];

export const daNangPages = {
  'sevaerdigheder': {
    destinationName:'Da Nang', title:'Da Nang seværdigheder 2026 | Hvad skal man se og opleve?',
    description:'Guide til de bedste seværdigheder i Da Nang: My Khe Beach, Marble Mountains, Son Tra, Dragon Bridge, Cham Museum og Ba Na Hills.',
    eyebrow:'Da Nang · Seværdigheder', heading:'Seværdigheder i Da Nang: strand, bjerge og en rigtig by',
    intro:'Da Nang fungerer bedst, når du ikke behandler den som en ren transitby til Hoi An. Der er nok til flere dage, men oplevelserne ligger i forskellige retninger.', hero, sources,
    quickFacts:[{label:'Halvdag',value:'Marble Mountains'},{label:'Natur',value:'Son Tra'},{label:'By',value:'Han River + Cham Museum'}],
    sections:[
      {id:'city',heading:'Han River, Dragon Bridge og centrum',paragraphs:['Han-floden er et naturligt pejlemærke. En sen eftermiddagsgåtur langs floden, Cham Museum og middag i centrum kan samles uden meget transport.','Dragon Bridge er mest interessant som del af byen og aftenen, ikke nødvendigvis som en særskilt heldagsattraktion.']},
      {id:'marble',heading:'Marble Mountains',paragraphs:['Marble Mountains kombinerer grotter, pagoder og udsigt. Der er trapper og varme, så vi ville tage af sted tidligt.','Stedet ligger syd for byen og passer godt sammen med Hoi An på samme dag, hvis du har bil og ikke har meget bagage.'],image:marbleImage},
      {id:'son-tra',heading:'Son Tra-halvøen',paragraphs:['Son Tra giver natur, kystudsigt og Linh Ung-pagoden. Vejene op i højderne kræver respekt; en bil med chauffør er et roligt valg, hvis du ikke allerede er erfaren på scooter.','Tag af sted i klart vejr. Tåge og regn kan reducere udsigten markant.']},
      {id:'ba-na',heading:'Ba Na Hills',paragraphs:['Ba Na Hills er en stor, separat heldagsoplevelse med kabelbane, Golden Bridge og temapark. Den passer bedre til nogle rejsende end andre.','Hvis du primært vil have natur og lokal kultur, ville vi prioritere Son Tra og Marble Mountains før Ba Na. Hvis du rejser med børn eller vil se Golden Bridge, kan Ba Na være dagens hovedmål.']},
    ],
    mapPlaces:[{name:'Dragon Bridge',detail:'Han River og byliv',lat:16.0611,lng:108.2276},{name:'Cham Museum',detail:'Cham-kunst og historie',lat:16.0603,lng:108.2234},{name:'My Khe Beach',detail:'Bystrand',lat:16.0544,lng:108.2466},{name:'Marble Mountains',detail:'Grotter og pagoder',lat:16.0036,lng:108.2630},{name:'Linh Ung Pagoda',detail:'Son Tra-halvøen',lat:16.1004,lng:108.2773}],
    related:[{href:'/destinationer/da-nang/3-dage-i-da-nang/',title:'3 dage i Da Nang',text:'Se en dag-for-dag plan.'},{href:'/destinationer/da-nang/ba-na-hills/',title:'Ba Na Hills',text:'Vurder om Golden Bridge-dagen passer til dig.'},...relatedBase],
  },

  '3-dage-i-da-nang': {
    destinationName:'Da Nang', title:'3 dage i Da Nang 2026 | Strand, by og dagstur',
    description:'Et forslag til 3 dage i Da Nang med My Khe, Marble Mountains, Son Tra, byliv og valg mellem Ba Na Hills eller Hoi An.',
    eyebrow:'Da Nang · Rejseplan', heading:'3 dage i Da Nang: én bydag, én naturdag og én valgfri dag',
    intro:'Vietnam Tourism har selv en 3-dages Da Nang-rute, og tre dage er et godt format til første besøg. Du når strand og by uden at gøre hver dag til en heldagstur.', hero, sources:[...sources,{label:'Vietnam Tourism - 3 perfect days in Danang',href:'https://vietnam.travel/node/128'}],
    quickFacts:[{label:'Dag 1',value:'My Khe + Han River'},{label:'Dag 2',value:'Marble + Son Tra'},{label:'Dag 3',value:'Ba Na eller Hoi An'}],
    sections:[
      {id:'dag1',heading:'Dag 1: strand og byen',paragraphs:['Begynd roligt ved My Khe, især hvis du lige er ankommet med fly. Brug senere på dagen på Cham Museum, Han River og centrum.','Om aftenen er flodområdet et godt sted at spise og forstå byens rytme.']},
      {id:'dag2',heading:'Dag 2: Marble Mountains og Son Tra',paragraphs:['Tag tidligt til Marble Mountains, før varmen bliver hård. Hold frokostpause og fortsæt senere mod Son Tra, hvis vejret er klart.','Det er en mere varieret dag end at besøge flere byattraktioner i træk.']},
      {id:'dag3',heading:'Dag 3: vælg én stor udflugt',paragraphs:['Vælg Ba Na Hills, hvis Golden Bridge, kabelbane og temapark er noget, du gerne vil opleve. Vælg Hoi An, hvis kulturarv, mad og gamle gader tiltaler dig mere.','Vi ville ikke forsøge at gøre begge dele ordentligt på samme dag.']},
      {id:'kortere',heading:'Hvis du kun har to dage',paragraphs:['Behold dag 1 og brug dag 2 på enten Marble Mountains + Hoi An eller Son Tra + mere strand.','Ba Na Hills tager en stor del af et kort ophold og bør kun prioriteres, hvis det er et hovedønske.']},
    ],
    related:[{href:'/destinationer/da-nang/sevaerdigheder/',title:'Seværdigheder i Da Nang',text:'Vælg de stop, der passer til planen.'},{href:'/destinationer/da-nang/da-nang-til-hoi-an/',title:'Da Nang til Hoi An',text:'Transport og praktisk planlægning.'},...relatedBase],
  },

  'hvor-skal-man-bo': {
    destinationName:'Da Nang', title:'Hvor skal man bo i Da Nang? My Khe, centrum eller resortkysten',
    description:'Sammenlign de bedste områder i Da Nang: My Khe, Han River/centrum, Son Tra og resortkysten mod Hoi An. Guide til strand, familier og første besøg.',
    eyebrow:'Da Nang · Områder', heading:'Hvor skal man bo i Da Nang? Strand eller by er det første valg',
    intro:'Da Nang er langstrakt. På et kort ophold ville vi vælge enten strandnær base ved My Khe eller bybase ved Han River - ikke et tilfældigt hotel midt imellem.', hero, sources:hotelSources,
    quickFacts:[{label:'Strand',value:'My Khe / An Thuong'},{label:'Byliv',value:'Han River centrum'},{label:'Resort',value:'Non Nuoc-kysten'}],
    sections:[
      {id:'my-khe',heading:'My Khe og An Thuong',paragraphs:['Det mest praktiske valg til strandferie. Du kan gå til havet og har mange restauranter og caféer i området.','An Thuong har mere turist- og expatpræg; bo lidt væk fra de travleste gader, hvis søvn betyder meget.']},
      {id:'centrum',heading:'Han River og centrum',paragraphs:['Vælg centrum, hvis lokale restauranter, markeder og byliv betyder mere end at gå direkte ud på stranden. Du er også tættere på lufthavnen.','Stranden er stadig kun en kort bilrejse væk.']},
      {id:'non-nuoc',heading:'Non Nuoc og resortkysten mod Hoi An',paragraphs:['Her ligger flere store resorts med mere plads og direkte strand. Det er godt til familier og ren resortferie.','Ulempen er, at du bliver mere afhængig af bil til både Da Nang centrum og Hoi An.']},
      {id:'son-tra',heading:'Son Tra og nordlige strandzoner',paragraphs:['Nord for My Khe bliver områderne roligere og mere lokale. Det kan være attraktivt på længere ophold.','På en første kort tur ville vi stadig prioritere My Khe eller centrum for enkelhed.']},
    ],
    mapPlaces:[{name:'My Khe',detail:'Strand og mange hoteller',lat:16.0544,lng:108.2466},{name:'An Thuong',detail:'Restauranter og turistområde',lat:16.0480,lng:108.2440},{name:'Han River centrum',detail:'Byliv og restauranter',lat:16.0678,lng:108.2208},{name:'Non Nuoc',detail:'Resortkyst mod Hoi An',lat:16.0000,lng:108.2700}],
    related:[{href:'/destinationer/da-nang/bedste-hoteller/',title:'Bedste hoteller i Da Nang',text:'Se en shortlist efter område.'},{href:'/destinationer/da-nang/bedste-strande/',title:'Bedste strande',text:'Sammenlign My Khe, Non Nuoc og nordkysten.'},...relatedBase],
  },

  'bedste-hoteller': {
    destinationName:'Da Nang', title:'Bedste hoteller i Da Nang 2026 | Strand, by og resort',
    description:'En hotelshortlist i Da Nang efter område og rejsetype - My Khe, Han River, Non Nuoc og resortkysten mod Hoi An.',
    eyebrow:'Da Nang · Hoteller', heading:'Bedste hoteller i Da Nang: seks steder vi ville bruge som reference',
    intro:'Da Nang har tusindvis af overnatningssteder. Vi ville først vælge mellem strand, centrum og resortkyst - derefter sammenligne få stærke hoteller på de samme datoer.', hero, sources:hotelSources,
    quickFacts:[{label:'By',value:'Brilliant Hotel'},{label:'Strand',value:'TMS / Sala Danang Beach'},{label:'Resort',value:'Hyatt / Pullman'}],
    sections:[
      {id:'shortlist',heading:'Seks hoteller at sammenligne',subsections:[
        {heading:'Brilliant Hotel',paragraphs:['Central base ved Han River. Godt hvis du vil prioritere by, Dragon Bridge og nem adgang til lufthavn.']},
        {heading:'TMS Hotel Da Nang Beach',paragraphs:['My Khe-valg med strand lige på den anden side af vejen. God reference for moderne strandhoteller.']},
        {heading:'Sala Danang Beach Hotel',paragraphs:['Populært My Khe-hotel med rooftop/poolprofil. Tjek havudsigt og værelsestype nøje.']},
        {heading:'Pullman Danang Beach Resort',paragraphs:['Større resort mellem byen og Marble Mountains. Relevant til familier og dem, der vil have resortfaciliteter.']},
        {heading:'Hyatt Regency Danang Resort and Spa',paragraphs:['Resort på Non Nuoc-kysten med stærk strandprofil og mere afstand til centrum.']},
        {heading:'InterContinental Danang Sun Peninsula Resort',paragraphs:['High-end resort på Son Tra. Et destination-hotel snarere end en praktisk base til dagligt byliv.']},
      ]},
      {id:'valg',heading:'Hvad skal afgøre valget?',bullets:['Gåafstand til strand eller by - vælg én prioritet.','Pool og familiefaciliteter hvis du rejser med børn.','Transporttid til Hoi An hvis det er en vigtig del af planen.','Nyere anmeldelser om byggearbejde og støj.','Samme afbestillingsvilkår når priser sammenlignes.']},
      {id:'pris',heading:'Et dyrere hotel kan spare transport',paragraphs:['Hvis du hver dag vil til My Khe, kan et lidt dyrere strandhotel være bedre værdi end et billigere hotel langt væk. Det samme gælder centrum.','På resortkysten bør du medregne taxi og måltider, fordi du har færre spontane valg udenfor.']},
    ],
    mapPlaces:[{name:'Brilliant Hotel',detail:'Han River centrum',lat:16.0688,lng:108.2242},{name:'TMS Hotel Da Nang Beach',detail:'My Khe',lat:16.0479,lng:108.2494},{name:'Pullman Danang Beach Resort',detail:'Sydlige My Khe',lat:16.0344,lng:108.2520},{name:'Hyatt Regency Danang',detail:'Non Nuoc',lat:16.0103,lng:108.2646}],
    related:[{href:'/destinationer/da-nang/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg område før hotel.'},...relatedBase],
  },

  'bedste-strande': {
    destinationName:'Da Nang', title:'Bedste strande i Da Nang 2026 | My Khe, Non Nuoc og Son Tra',
    description:'Guide til de bedste strande i Da Nang: My Khe, Non Nuoc, Pham Van Dong og roligere strande ved Son Tra. Se hvilket område der passer bedst.',
    eyebrow:'Da Nang · Strande', heading:'Bedste strande i Da Nang: My Khe er nemmest, Non Nuoc er roligere',
    intro:'Da Nangs kyst er lang nok til, at “strand i Da Nang” ikke er én oplevelse. Vælg efter om du vil have byliv, resort eller mere ro.', hero, sources,
    quickFacts:[{label:'Nemmest',value:'My Khe'},{label:'Resort',value:'Non Nuoc'},{label:'Roligere',value:'Nord mod Son Tra'}],
    sections:[
      {id:'my-khe',heading:'My Khe',paragraphs:['Den mest oplagte strand til første besøg. Den er lang, bred og tæt på mange hoteller og restauranter.','Tidlig morgen er lokal og aktiv; sen eftermiddag er behageligere til badning end den varmeste del af dagen.']},
      {id:'non-nuoc',heading:'Non Nuoc',paragraphs:['Non Nuoc ligger længere sydpå nær Marble Mountains og store resorts. Den passer godt, hvis du vil have mere resortfølelse og mindre by lige bag stranden.','Til gengæld tager turen til centrum længere tid.']},
      {id:'north',heading:'Pham Van Dong og nord mod Son Tra',paragraphs:['Nord for den centrale My Khe-zone finder du flere lokale og roligere strækninger. Nogle dele har færre turistfaciliteter.','Det er interessant på længere ophold eller hvis du vil væk fra de største hoteller.']},
      {id:'season',heading:'Hvornår er stranden bedst?',paragraphs:['Sommer og forår giver mange gode stranddage, men varme og sol kan være intense. Senere på året stiger risikoen for regn og mere uroligt hav.','Følg lokale flag og sikkerhedsanvisninger. En flot strand er ikke nødvendigvis sikker at bade ved på alle dage.']},
    ],
    related:[{href:'/destinationer/da-nang/hvor-skal-man-bo/',title:'Hvor skal man bo i Da Nang?',text:'Se hvilken strandzone der passer til hotelbasen.'},{href:'/destinationer/da-nang/3-dage-i-da-nang/',title:'3 dage i Da Nang',text:'Sæt strandtid ind uden at miste byen.'},...relatedBase],
  },

  'ba-na-hills': {
    destinationName:'Da Nang', title:'Ba Na Hills og Golden Bridge 2026 | Er turen det værd?',
    description:'Praktisk guide til Ba Na Hills fra Da Nang: Golden Bridge, kabelbane, transport, timing og hvem temaparken passer til.',
    eyebrow:'Da Nang · Ba Na Hills', heading:'Ba Na Hills: flot Golden Bridge, men forstå hvad resten af dagen er',
    intro:'Ba Na Hills er ikke kun Golden Bridge. Det er et stort bjerg- og temaparkkompleks cirka 30 km fra Da Nang, og besøget fylder normalt det meste af en dag.', hero:marbleImage, sources:[{label:'Vietnam Tourism - explore Ba Na Hills',href:'https://vietnam.travel/things-to-do/explore-ba-na-hills'},{label:'Vietnam Tourism - a day at Ba Na Hills',href:'https://vietnam.travel/node/1439'}],
    quickFacts:[{label:'Afstand',value:'Ca. 30 km fra Da Nang'},{label:'Transport op',value:'Kabelbane'},{label:'Tidsforbrug',value:'Planlæg det som heldag'}],
    affiliateActivity:{
      title:'Ba Na Hills som én samlet dag fra Da Nang',
      intro:'Det vigtigste er at se, om pickup, entré og kabelbane er inkluderet, og hvor meget fri tid programmet giver ved Golden Bridge.',
      item:{
        title:'Ba Na Hills & Golden Bridge fra Da Nang',
        text:'Passer hvis Golden Bridge og kabelbanen er hovedmålet for dagen, og du helst vil slippe for selv at koordinere transporten til bjergkomplekset.',
        href:'https://gyg.me/kjVBYhr2',
        image:'https://commons.wikimedia.org/wiki/Special:FilePath/Golden%20Bridge%20above%20the%20clouds%20Ba%20Na%20Hills%20Da%20Nang%20Vietnam.jpg?width=1200',
        alt:'Golden Bridge ved Ba Na Hills over Da Nang',
        badge:'Heldag',
        highlights:['Golden Bridge','Kabelbane','Pickup-muligheder','Temapark'],
        cta:'Se tur og aktuel pris',
      },
    },
    sections:[
      {id:'what',heading:'Hvad er Ba Na Hills?',paragraphs:['Komplekset ligger i bjergene og kombinerer kabelbane, Golden Bridge, haver, franskinspireret temapark og underholdning. Temperaturen er ofte køligere end nede ved kysten.','Hvis du kun forestiller dig et kort fotostop ved broen, kan størrelsen på resten af oplevelsen overraske.']},
      {id:'timing',heading:'Kom tidligt for Golden Bridge',paragraphs:['Broen er et af Vietnams mest fotograferede moderne vartegn og kan blive meget travl. En tidlig start giver bedre chance for mindre trængsel.','Vejret i bjergene kan skifte hurtigt. Skyer og tåge er en del af oplevelsen, men kan skjule udsigten.']},
      {id:'worth',heading:'Er det pengene og tiden værd?',paragraphs:['Ja, hvis Golden Bridge, kabelbanen eller temaparkoplevelsen står højt på listen, eller hvis du rejser med børn, der vil bruge faciliteterne.','Mindre oplagt hvis du foretrækker lokal historie og natur. I så fald ville vi prioritere Marble Mountains, Son Tra eller Hoi An.']},
      {id:'transport',heading:'Transport fra Da Nang',paragraphs:['Privat bil, taxi/Grab eller organiseret tur er de mest praktiske løsninger. Tjek om turprisen inkluderer entré/kabelbane.','Planlæg returen uden en stram restaurant- eller flyreservation samme aften.']},
    ],
    related:[{href:'/destinationer/da-nang/sevaerdigheder/',title:'Seværdigheder i Da Nang',text:'Sammenlign Ba Na med andre oplevelser.'},{href:'/destinationer/da-nang/3-dage-i-da-nang/',title:'3 dage i Da Nang',text:'Se om en heldag passer i planen.'},...relatedBase],
  },

  'da-nang-til-hoi-an': {
    destinationName:'Da Nang', title:'Da Nang til Hoi An 2026 | Grab, taxi og transfer',
    description:'Sådan kommer du fra Da Nang centrum eller lufthavn til Hoi An. Guide til Grab, taxi, privat transfer og Marble Mountains-stop.',
    eyebrow:'Da Nang · Transport', heading:'Fra Da Nang til Hoi An: tæt nok til dagstur, langt nok til at hotelvalget stadig betyder noget',
    intro:'Hoi An ligger under en times kørsel fra mange dele af Da Nang under normale forhold. Det gør byerne lette at kombinere uden nødvendigvis at skifte hotel.', hero, sources:[{label:'Vietnam Tourism - Da Nang',href:'https://vietnam.travel/node/1843'},{label:'Vietnam Tourism - Hoi An',href:'https://vietnam.travel/node/99'}],
    quickFacts:[{label:'Nemmest',value:'Grab / taxi'},{label:'Med bagage',value:'Privat transfer'},{label:'Godt stop',value:'Marble Mountains'}],
    sections:[
      {id:'daytrip',heading:'Da Nang til Hoi An som dagstur',paragraphs:['Hvis du bor i Da Nang og kun vil opleve Old Town én dag, er bil frem og tilbage enkel. Tag af sted tidligt eller senere på dagen afhængigt af om du vil have dagslys eller lanterner.','Aftal returtransport eller vær sikker på, at app-biler er tilgængelige, når du vil hjem.']},
      {id:'airport',heading:'Fra Da Nang lufthavn direkte til Hoi An',paragraphs:['Med kufferter er taxi, Grab eller hoteltransfer det naturlige valg. På en første rejse ville vi ikke komplicere det med flere transportskift for at spare et mindre beløb.','Ved sen ankomst giver hoteltransfer ekstra tryghed.']},
      {id:'marble',heading:'Stop ved Marble Mountains',paragraphs:['Bjerget ligger på ruten mellem byerne. Det kan være et smart stop på en hotel-skiftedag, hvis chaufføren kan opbevare bagage sikkert.','Efter en lang flyrejse ville vi springe stoppet over og komme direkte til hotellet.']},
      {id:'stay',heading:'Skal du bo i begge byer?',paragraphs:['På et 2-3 ugers ophold kan to baser give mening, hvis du ønsker både rigtig strandby og flere rolige aftener i Hoi An.','På en 10-14 dages rundrejse ville vi oftere vælge én base og besøge den anden.']},
    ],
    related:[{href:'/destinationer/hoi-an/da-nang-til-hoi-an/',title:'Hoi An-versionen af transferguiden',text:'Samme rute set fra ankomsten til Hoi An.'},{href:'/destinationer/da-nang/hvor-skal-man-bo/',title:'Hvor skal man bo i Da Nang?',text:'Vælg base før du planlægger dagsture.'},...relatedBase],
  },
};
