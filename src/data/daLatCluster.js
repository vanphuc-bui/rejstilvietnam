const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Xuan%20Huong%20Lake%20in%20Da%20Lat%20%2828219543381%29.jpg?width=1800',
  alt:'Xuan Huong Lake i Da Lat',
  caption:'Da Lat er et højlandsstop med køligere klima, kaffe og natur. Det giver bedst mening som kontrast til kyst eller storby.',
  credit:'Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Xuan_Huong_Lake_in_Da_Lat_(28219543381).jpg',
};

const sources = [
  { label:'Vietnam Tourism - Da Lat', href:'https://www.vietnam.travel/places-to-go/central-vietnam/dalat' },
];

const relatedBase = [
  { href:'/destinationer/da-lat/', title:'Da Lat rejseguide', text:'Tilbage til den samlede guide.' },
  { href:'/destinationer/nha-trang/', title:'Nha Trang', text:'Kombinér højlandet med kysten.' },
];

export const daLatPages = {
  'sevaerdigheder': {
    destinationName:'Da Lat',
    title:'Da Lat seværdigheder | Sø, kaffe, vandfald og station',
    description:'Guide til de vigtigste oplevelser i Da Lat: Xuan Huong Lake, Da Lat Market, Railway Station, kaffe, vandfald og natur omkring byen.',
    eyebrow:'Da Lat · Seværdigheder',
    heading:'Seværdigheder i Da Lat: kaffe, højland og natur er vigtigere end en lang checkliste',
    intro:'Da Lat er mest interessant som stemning og højlandsstop. Vi ville vælge få steder i byen og bruge mindst en halv dag uden for centrum.',
    hero, sources,
    quickFacts:[
      {label:'Byens pejlemærke',value:'Xuan Huong Lake'},
      {label:'Lokal stemning',value:'Da Lat Market'},
      {label:'Halvdag',value:'Kaffe eller vandfald'}
    ],
    sections:[
      {id:'lake',heading:'Xuan Huong Lake',paragraphs:['Søen ligger centralt og fungerer som det letteste pejlemærke til at forstå byen.','Brug den til en morgen- eller aftentur i stedet for at planlægge en særskilt “seværdighedsblok”.']},
      {id:'market',heading:'Da Lat Market',paragraphs:['Markedet viser højlandets blomster, frugt, grønt og hverdagsliv.','Det er mest interessant som del af en gåtur gennem centrum og aftenområdet.']},
      {id:'station',heading:'Da Lat Railway Station',paragraphs:['Den gamle station er et hurtigt historisk stop og et af de tydeligste arkitektoniske spor fra byens kolonitid.','Kombinér den med centrum eller en café frem for at bygge en hel dag omkring stedet.']},
      {id:'coffee',heading:'Kaffe og farm visits',paragraphs:['Da Lat ligger i et vigtigt kaffeområde. Et roastery eller farm-besøg giver mere kontekst end kun at hoppe mellem fotocaféer.','Spørg hvad der faktisk produceres på stedet og hvor lang køretid der er fra centrum.']},
      {id:'waterfalls',heading:'Vandfald og natur uden for byen',paragraphs:['De større naturstop kræver bil eller chauffør. Vælg én retning og få noget ud af dagen i stedet for at samle fire vandfald.','Tjek adgangsforhold og vejret samme dag.']},
    ],
    mapPlaces:[
      {name:'Xuan Huong Lake',detail:'Centralt pejlemærke',lat:11.9416,lng:108.4450},
      {name:'Da Lat Market',detail:'Marked og aftencenter',lat:11.9406,lng:108.4379},
      {name:'Da Lat Railway Station',detail:'Historisk station',lat:11.9418,lng:108.4545},
    ],
    related:[
      {href:'/destinationer/da-lat/3-dage-i-da-lat/',title:'3 dage i Da Lat',text:'Se hvordan by og natur kan fordeles.'},
      {href:'/destinationer/da-lat/mad-og-kaffe/',title:'Mad og kaffe i Da Lat',text:'Gå videre til lokale smage og kaffe.'},
      ...relatedBase,
    ],
  },

  'hvor-skal-man-bo': {
    destinationName:'Da Lat',
    title:'Hvor skal man bo i Da Lat? Centrum, søen eller villaområder',
    description:'Sammenlign centrum ved markedet, området omkring Xuan Huong Lake og roligere villa/resortområder i Da Lat.',
    eyebrow:'Da Lat · Områder',
    heading:'Hvor skal man bo i Da Lat? Centrum er nemmest på en kort rejse',
    intro:'Da Lat er spredt over bakker. På 2-3 nætter ville vi prioritere nem adgang til centrum og acceptere bil til naturstoppene.',
    hero, sources,
    quickFacts:[
      {label:'Første gang',value:'Marked / centrum'},
      {label:'Bedste balance',value:'Xuan Huong Lake'},
      {label:'Mere ro',value:'Villaområder uden for centrum'}
    ],
    sections:[
      {id:'center',heading:'Centrum ved markedet',paragraphs:['Det er mest praktisk til aftenture, mad og korte Grab-ture.','Ulempen er mere trafik og støj, især omkring natmarkedet.']},
      {id:'lake',heading:'Omkring Xuan Huong Lake',paragraphs:['Du får stadig central placering, men nogle hoteller ligger roligere og med bedre udsigt.','Det er vores bedste balance til et første ophold.']},
      {id:'villa',heading:'Villa- og resortområder',paragraphs:['Da Lat har flere historiske villaresorts og grønne områder lidt væk fra centrum.','Vælg dem, hvis hotellet i sig selv er en del af oplevelsen.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['2-3 nætter: centrum eller søen. 4+ nætter og slow travel: roligere villaområde kan give mere mening.','På en kort rejse ville vi ikke bruge ekstra transporttid for at spare lidt på natteprisen.']},
    ],
    mapPlaces:[
      {name:'Da Lat Market',detail:'Mest praktisk til aftener',lat:11.9406,lng:108.4379},
      {name:'Xuan Huong Lake',detail:'Bedste balance',lat:11.9416,lng:108.4450},
      {name:'Tran Phu villa area',detail:'Roligere og mere historisk',lat:11.9340,lng:108.4310},
    ],
    related:[
      {href:'/destinationer/da-lat/bedste-hoteller/',title:'Bedste hoteller i Da Lat',text:'Se konkrete referencevalg.'},
      {href:'/destinationer/da-lat/sevaerdigheder/',title:'Seværdigheder',text:'Vælg base efter dagsprogrammet.'},
      ...relatedBase,
    ],
  },

  'bedste-hoteller': {
    destinationName:'Da Lat',
    title:'Bedste hoteller i Da Lat | Heritage, centrum og resort',
    description:'Fem hotelreferencer i Da Lat: Ana Mandara Villas, Dalat Palace Heritage, Mercure Dalat Resort, Hôtel Colline og Terracotta Hotel & Resort.',
    eyebrow:'Da Lat · Hoteller',
    heading:'Bedste hoteller i Da Lat: vælg mellem heritage, centrum og grøn resortro',
    intro:'Da Lat har mere karakter i hoteludbuddet end mange vietnamesiske byer. En historisk villa kan være en del af destinationen, mens et centralt hotel er lettere til et kort ophold.',
    hero, sources,
    quickFacts:[
      {label:'Heritage',value:'Ana Mandara Villas'},
      {label:'Klassisk',value:'Dalat Palace Heritage'},
      {label:'Centralt',value:'Hôtel Colline'}
    ],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'Ana Mandara Villas Dalat Resort & Spa',paragraphs:['Historiske villaer i grønne omgivelser. Godt til par og rejsende, der vil have hoteloplevelsen som en del af Da Lat.']},
        {heading:'Dalat Palace Heritage Hotel',paragraphs:['Klassisk historisk hotel med central placering og udsigt mod søområdet. Brug det som reference til den traditionelle luksusdel af byen.']},
        {heading:'Mercure Dalat Resort',paragraphs:['Et moderne resortvalg med grønne omgivelser og mere plads end et rent centrumhotel.']},
        {heading:'Hôtel Colline',paragraphs:['Meget centralt ved markedet. Praktisk hvis du kun har 2-3 nætter og vil gå ud om aftenen.']},
        {heading:'Terracotta Hotel & Resort Dalat',paragraphs:['Et mere afsides resortvalg ved Tuyen Lam-området. Bedst hvis natur og ro er vigtigere end aftenliv i centrum.']},
      ]},
      {id:'choice',heading:'Hvad skal afgøre valget?',bullets:['Kort ophold: central placering vinder.','Romantisk/slow travel: heritage-villa kan være mere værd end ekstra stjerner.','Tjek afstand i køretid, ikke kun kilometer - Da Lat er kuperet.','Læs nyere anmeldelser om fugt, varme og værelsesvedligeholdelse.']},
      {id:'price',heading:'Sammenlign totaloplevelsen',paragraphs:['Et dyrere heritage-hotel kan give mere mening, hvis du faktisk bruger området og faciliteterne.','Hvis du er ude hele dagen, er et godt centralt hotel ofte den mere rationelle løsning.']},
    ],
    related:[
      {href:'/destinationer/da-lat/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg område før hotel.'},
      {href:'/destinationer/da-lat/3-dage-i-da-lat/',title:'3 dage i Da Lat',text:'Se hvilken hoteltype der passer til ruten.'},
      ...relatedBase,
    ],
  },

  'mad-og-kaffe': {
    destinationName:'Da Lat',
    title:'Mad og kaffe i Da Lat | Højlandsprodukter, marked og caféer',
    description:'Guide til mad og kaffe i Da Lat: lokal kaffe, marked, grøntsager, jordbær, varme retter og hvordan du vælger roastery frem for fotocafé.',
    eyebrow:'Da Lat · Mad og kaffe',
    heading:'Mad og kaffe i Da Lat: højlandet kan smages, ikke kun fotograferes',
    intro:'Da Lat er kendt for kaffe, grøntsager, blomster og et køligere klima. Vi ville bruge mindst ét måltid og ét kaffestop på noget, der faktisk fortæller noget om regionen.',
    hero, sources,
    quickFacts:[
      {label:'Kaffe',value:'Robusta + arabica fra højlandet'},
      {label:'Marked',value:'Da Lat Market'},
      {label:'Kølig aften',value:'Varme gryder / street food'}
    ],
    sections:[
      {id:'coffee',heading:'Kaffe: vælg roastery eller farm med forklaring',paragraphs:['Da Lat har utallige fotocaféer. Hvis kaffen er grunden til besøget, så vælg et sted der kan forklare bønner, ristning og oprindelse.','En farmtur kan være god, men kun hvis transporten ikke sluger en halv dag uden reelt indhold.']},
      {id:'market',heading:'Da Lat Market',paragraphs:['Markedet er bedst til at se frugt, grønt, blomster og lokale snacks samlet.','Gå sidst på eftermiddagen og kombiner med aftensmad i centrum.']},
      {id:'produce',heading:'Højlandsprodukter',paragraphs:['Da Lat er kendt for blandt andet grøntsager, artiskok, jordbær og kaffe.','Undgå at gøre “lokale produkter” til en ren souvenirrunde; prøv dem i almindelige retter og caféer.']},
      {id:'evening',heading:'Kølige aftener ændrer hvad man har lyst til at spise',paragraphs:['Varme supper, grill og hotpot føles naturligt i et klima, der kan være køligere end resten af din Vietnam-rute.','Det er en af de små ting, der gør Da Lat til en tydelig kontrast til kysten.']},
    ],
    related:[
      {href:'/destinationer/da-lat/3-dage-i-da-lat/',title:'3 dage i Da Lat',text:'Se hvor kaffestop passer ind.'},
      {href:'/destinationer/da-lat/sevaerdigheder/',title:'Seværdigheder',text:'Kombinér mad med by og natur.'},
      ...relatedBase,
    ],
  },

  '3-dage-i-da-lat': {
    destinationName:'Da Lat',
    title:'3 dage i Da Lat | By, kaffe og natur i roligt tempo',
    description:'Et realistisk forslag til 3 dage i Da Lat med centrum, kaffe, marked, vandfald eller natur og fleksibilitet efter vejret.',
    eyebrow:'Da Lat · Rejseplan',
    heading:'3 dage i Da Lat: én bydag, én naturdag og plads til kaffe',
    intro:'Tre dage er nok til at mærke kontrasten til kysten uden at gøre højlandet til endnu et transportstop.',
    hero, sources,
    quickFacts:[
      {label:'Dag 1',value:'Sø + marked'},
      {label:'Dag 2',value:'Natur / vandfald'},
      {label:'Dag 3',value:'Kaffe + fleksibilitet'}
    ],
    sections:[
      {id:'day1',heading:'Dag 1: centrum og Xuan Huong Lake',paragraphs:['Start roligt omkring søen, markedet og stationen.','Brug aftenen i centrum og væn dig til det køligere klima.']},
      {id:'day2',heading:'Dag 2: én retning uden for byen',paragraphs:['Vælg enten vandfald/natur eller kaffe/landbrug og hold dig geografisk samlet.','En chauffør til en halv eller hel dag er ofte lettere end at bestille mange separate ture.']},
      {id:'day3',heading:'Dag 3: kaffe og det du ikke nåede',paragraphs:['Book et roastery, farmbesøg eller brug tid på caféer og marked.','Hvis vejret var dårligt dag 2, kan denne dag fungere som backup til natur.']},
      {id:'onward',heading:'Videre til Nha Trang eller Ho Chi Minh City',paragraphs:['Nha Trang giver en tydelig kontrast med strand. Ho Chi Minh City giver storby.','Vælg næste stop efter resten af ruten, ikke bare den korteste transport.']},
    ],
    related:[
      {href:'/destinationer/da-lat/sevaerdigheder/',title:'Da Lat seværdigheder',text:'Vælg de stop der passer til dagene.'},
      {href:'/destinationer/da-lat/transport/',title:'Transport til og fra Da Lat',text:'Planlæg kyst eller storby videre.'},
      ...relatedBase,
    ],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Da Lat',
    title:'Vejret i Da Lat | Bedste rejsetid og kølige aftener',
    description:'Guide til vejret i Da Lat: tørre og våde perioder, kølige aftener, tåge og hvordan klimaet påvirker natur- og kaffeture.',
    eyebrow:'Da Lat · Vejr',
    heading:'Bedste rejsetid til Da Lat: højlandet er køligere end resten af Sydvietnam',
    intro:'Da Lat kan føles som en helt anden rejse end Ho Chi Minh City. Temperaturforskellen mærkes især morgen og aften, mens regn påvirker naturdagene.',
    hero, sources,
    quickFacts:[
      {label:'Køligere end kysten',value:'Hele året'},
      {label:'Tørre måneder',value:'Typisk vinter / forår'},
      {label:'Regn',value:'Mere i sommerhalvåret'}
    ],
    sections:[
      {id:'dry',heading:'Tørre perioder',paragraphs:['Tørre måneder gør naturture og gådage mere forudsigelige.','Aftener kan stadig være kølige, så et let varmt lag er nyttigt.']},
      {id:'rain',heading:'Regnperioder',paragraphs:['Byger kan gøre vandfald mere imponerende men også adgangsveje og stier vådere.','Hold naturdagen fleksibel hvis prognosen ser ustabil ud.']},
      {id:'temperature',heading:'Temperaturen er en del af oplevelsen',paragraphs:['Det køligere klima er netop grunden til, at Da Lat føles anderledes end kysten.','Pak ikke kun tropisk sommertøj, hvis højlandet ligger på ruten.']},
      {id:'planning',heading:'Hvad betyder vejret for din plan?',paragraphs:['Læg den mest vejrafhængige naturdag på den klareste dag og brug regnperioder på café, marked eller spa.','Da Lat er let at omrokere, hvis du har mindst tre nætter.']},
    ],
    related:[
      {href:'/destinationer/da-lat/3-dage-i-da-lat/',title:'3 dage i Da Lat',text:'Se en fleksibel rute.'},
      {href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign højlandet med resten af landet.'},
      ...relatedBase,
    ],
  },

  'transport': {
    destinationName:'Da Lat',
    title:'Transport til Da Lat | Fra Nha Trang, HCMC og lufthavnen',
    description:'Praktisk guide til transport til og fra Da Lat: fly, bus, privat bil, vej til Nha Trang og transfer fra Lien Khuong lufthavn.',
    eyebrow:'Da Lat · Transport',
    heading:'Transport til Da Lat: fly er lettest langt fra, vej er bedst fra Nha Trang',
    intro:'Da Lat ligger i højlandet, så den sidste del af mange rejser går på snoede veje. Transportformen bør vælges efter køresyge, bagage og hvor næste stop ligger.',
    hero, sources,
    quickFacts:[
      {label:'Lufthavn',value:'Lien Khuong'},
      {label:'Fra Nha Trang',value:'Vejtransport'},
      {label:'Fra HCMC',value:'Fly eller bus'}
    ],
    sections:[
      {id:'airport',heading:'Lien Khuong lufthavn',paragraphs:['Lufthavnen ligger uden for centrum, så du skal regne med transfer den sidste del.','Fly giver især mening fra Hanoi eller andre steder, hvor vejtransport ville spise en hel dag.']},
      {id:'nhatrang',heading:'Nha Trang til Da Lat',paragraphs:['Vejruten mellem kyst og højland er oplagt, hvis du vil kombinere strand og Da Lat.','Der er mange sving og højdeforskelle, så køresyge bør tages alvorligt.']},
      {id:'hcmc',heading:'Ho Chi Minh City til Da Lat',paragraphs:['Bus er mulig og populær, men tager flere timer. Fly er lettere, hvis tid betyder mere end budget.','Sammenlign dør-til-dør-tid og bagageregler.']},
      {id:'local',heading:'Transport i Da Lat',paragraphs:['Centrum er gåbart i mindre bidder, men bakker gør korte afstande mere fysiske end kortet antyder.','Grab/taxi eller chauffør giver mest mening til naturstop uden for byen.']},
    ],
    related:[
      {href:'/destinationer/da-lat/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg base efter ankomstform.'},
      {href:'/destinationer/nha-trang/',title:'Nha Trang',text:'Planlæg kysten før eller efter højlandet.'},
      ...relatedBase,
    ],
  },
};
