const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Ninh%20Binh-Tam%20Coc.jpg?width=1800',
  alt:'Karstlandskab ved Tam Coc i Ninh Binh',
  caption:'Ninh Binh giver mest mening med mindst én overnatning, så bådtur, udsigt og cykling ikke presses ind på samme dag.',
  credit:'Franzfoto / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Ninh_Binh-Tam_Coc.jpg',
};

const sources = [
  { label:'Vietnam Tourism - Ninh Binh', href:'https://www.vietnam.travel/vi/places-to-go/northern-vietnam/ninh-binh' },
  { label:'Vietnam Tourism - A perfect day in Ninh Binh', href:'https://www.vietnam.travel/things-to-do/perfect-day-ninh-binh' },
];

const relatedBase = [
  { href:'/destinationer/ninh-binh/', title:'Ninh Binh rejseguide', text:'Tilbage til den samlede guide.' },
  { href:'/destinationer/hanoi/', title:'Hanoi', text:'Planlæg dagene før eller efter Ninh Binh.' },
];

export const ninhBinhPages = {
  'sevaerdigheder': {
    destinationName:'Ninh Binh',
    title:'Ninh Binh seværdigheder | Trang An, Tam Coc og Hang Mua',
    description:'Guide til de vigtigste seværdigheder i Ninh Binh: Trang An, Tam Coc, Hang Mua, Hoa Lu og Bich Dong med konkrete råd om hvad der kan kombineres.',
    eyebrow:'Ninh Binh · Seværdigheder',
    heading:'Seværdigheder i Ninh Binh: vælg én bådtur og ét udsigtspunkt',
    intro:'Det er let at overplanlægge Ninh Binh, fordi mange stop ser forskellige ud på billeder men ligger tæt i samme landskab. Vi ville vælge færre ting og bruge mere tid mellem dem.',
    hero, sources,
    quickFacts:[
      {label:'Bådtur',value:'Trang An eller Tam Coc'},
      {label:'Udsigt',value:'Hang Mua'},
      {label:'Historie',value:'Hoa Lu'}
    ],
    sections:[
      {id:'trang-an',heading:'Trang An',paragraphs:['Trang An er den mest omfattende bådoplevelse med ruter gennem grotter og mellem kalkstensklipper.','Sæt flere timer af og undgå at kombinere den med endnu en bådtur samme dag.']},
      {id:'tam-coc',heading:'Tam Coc',paragraphs:['Tam Coc er let at bruge, hvis du allerede bor i byen. Bådturen er mere direkte koblet til rismarkerne omkring landsbyen.','Vælg den frem for Trang An hvis logistik og et roligere program er vigtigere end flest grotter.']},
      {id:'hang-mua',heading:'Hang Mua',paragraphs:['Hang Mua er det klassiske udsigtspunkt over floden og landskabet. Der er mange trapper og meget lidt skygge.','Kom tidligt eller sent og tag vand med. Midt på dagen kan varmen være den største del af oplevelsen.']},
      {id:'hoa-lu',heading:'Hoa Lu',paragraphs:['Den gamle hovedstad giver historisk kontekst til området. Den fungerer bedst som et kortere stop mellem naturdelene.','Hvis du kun har én hel dag, ville vi prioritere bådtur og Hang Mua før Hoa Lu.']},
      {id:'bich-dong',heading:'Bich Dong og cykling',paragraphs:['Bich Dong-pagoden ligger tæt på Tam Coc og passer naturligt ind i en cykeltur.','Det er et godt ekstra stop, hvis du har en overnatning og ikke behøver skynde dig tilbage til Hanoi.']},
    ],
    mapPlaces:[
      {name:'Trang An',detail:'Bådruter gennem kalkstenslandskabet',lat:20.2503,lng:105.9326},
      {name:'Tam Coc',detail:'Bådtur og praktisk base',lat:20.2155,lng:105.9361},
      {name:'Hang Mua',detail:'Udsigtspunkt',lat:20.2292,lng:105.9370},
      {name:'Hoa Lu',detail:'Den gamle hovedstad',lat:20.2869,lng:105.9094},
      {name:'Bich Dong Pagoda',detail:'Pagode og cykelstop',lat:20.2140,lng:105.9127},
    ],
    related:[
      {href:'/destinationer/ninh-binh/2-dage-i-ninh-binh/',title:'2 dage i Ninh Binh',text:'Se hvordan stoppene kan fordeles.'},
      {href:'/destinationer/ninh-binh/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg Tam Coc, Trang An eller byen.'},
      ...relatedBase,
    ],
  },

  'hvor-skal-man-bo': {
    destinationName:'Ninh Binh',
    title:'Hvor skal man bo i Ninh Binh? Tam Coc, Trang An eller byen',
    description:'Sammenlign Tam Coc, Trang An-området og Ninh Binh by. Se hvad der passer bedst til første besøg, natur, tog og ro.',
    eyebrow:'Ninh Binh · Områder',
    heading:'Hvor skal man bo i Ninh Binh? Tam Coc er det nemmeste førstevalg',
    intro:'Hotelområdet ændrer oplevelsen mere her end i mange byer. Bo tæt på landskabet, hvis natur og cykling er grunden til at komme.',
    hero, sources,
    quickFacts:[
      {label:'Første gang',value:'Tam Coc'},
      {label:'Mest naturro',value:'Trang An-området'},
      {label:'Mest praktisk til tog',value:'Ninh Binh by'}
    ],
    sections:[
      {id:'tam-coc',heading:'Tam Coc',paragraphs:['Tam Coc har flest restauranter, små hoteller og nem cykeludlejning. Du kan komme ud i landskabet uden at bestille bil til hvert stop.','Det er vores standardvalg til 2-3 nætter.']},
      {id:'trang-an',heading:'Trang An og landskabet østpå',paragraphs:['Her finder du mere spredte resorts og homestays med udsigt til marker og kalkstensklipper.','Det passer bedre til ro og natur end til at gå ud og vælge mellem mange restauranter om aftenen.']},
      {id:'city',heading:'Ninh Binh by',paragraphs:['Byen er praktisk ved togstation og videre transport, men den er ikke den base vi ville vælge for selve naturdelen.','En sidste nat kan give mening ved en tidlig togafgang.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['2 nætter: Tam Coc. 3+ nætter og egen chauffør: Trang An-området kan være smukkere og roligere.','Vælg Ninh Binh by kun hvis transportlogistikken er hovedargumentet.']},
    ],
    mapPlaces:[
      {name:'Tam Coc',detail:'Bedste standardbase',lat:20.2155,lng:105.9361},
      {name:'Trang An',detail:'Roligere naturbase',lat:20.2503,lng:105.9326},
      {name:'Ninh Binh station',detail:'Praktisk til tog',lat:20.2467,lng:105.9744},
    ],
    related:[
      {href:'/destinationer/ninh-binh/bedste-hoteller/',title:'Bedste hoteller i Ninh Binh',text:'Se konkrete referencevalg.'},
      {href:'/destinationer/ninh-binh/sevaerdigheder/',title:'Seværdigheder',text:'Vælg base efter hvilke stop du vil prioritere.'},
      ...relatedBase,
    ],
  },

  'bedste-hoteller': {
    destinationName:'Ninh Binh',
    title:'Bedste hoteller i Ninh Binh | Tam Coc og Trang An',
    description:'Fem gode hotelreferencer i Ninh Binh: Tam Coc Garden, Emeralda Resort, Aravinda Resort, Lalita Boutique og Tam Coc Horizon.',
    eyebrow:'Ninh Binh · Hoteller',
    heading:'Bedste hoteller i Ninh Binh: vælg landskab og placering før stjerner',
    intro:'I Ninh Binh er udsigt, cykelafstand og transport vigtigere end et klassisk city-hotelhierarki. Vi ville først vælge Tam Coc eller Trang An og derefter sammenligne hoteller.',
    hero, sources,
    quickFacts:[
      {label:'Boutique / landskab',value:'Tam Coc Garden'},
      {label:'Resort',value:'Emeralda Resort Ninh Binh'},
      {label:'Mindre hotel',value:'Lalita / Tam Coc Horizon'}
    ],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'Tam Coc Garden Resort',paragraphs:['Et roligt boutiquepræget valg i landskabet uden for selve Tam Coc centrum. Godt til par og rejsende, der prioriterer omgivelser.']},
        {heading:'Emeralda Resort Ninh Binh',paragraphs:['Et større resortvalg i Van Long-området. Det er mere isoleret og passer bedre til resortro end til korte aftenture i Tam Coc.']},
        {heading:'Aravinda Resort Ninh Binh',paragraphs:['Et naturnært resortvalg mellem de klassiske seværdigheder. Sammenlign det med Tam Coc Garden, hvis pool og ro er vigtigere end byliv.']},
        {heading:'Lalita Boutique Hotel & Spa Ninh Binh',paragraphs:['Et praktisk boutiquevalg tættere på Tam Coc-området. God reference til mellemklasse med faciliteter uden stor resortafstand.']},
        {heading:'Tam Coc Horizon Bungalow',paragraphs:['Et mindre og mere uformelt valg, der er nyttigt at sammenligne mod de større resorts, hvis placering og personlig stemning betyder mere.']},
      ]},
      {id:'choice',heading:'Hvad skal afgøre valget?',bullets:['Vil du kunne gå eller cykle til restauranter? Vælg Tam Coc.','Vil du vågne midt i landskabet? Accepter mere transport.','Pool er mere værd i varme måneder.','Tjek seneste anmeldelser om byggearbejde og adgangsvej.']},
      {id:'price',heading:'Sammenlign total transport, ikke kun nattepris',paragraphs:['Et billigt hotel langt ude kan kræve flere biler hver dag. Et dyrere centralt hotel kan være lettere på et kort ophold.','Sammenlign med dine konkrete datoer og den rute du faktisk skal følge.']},
    ],
    related:[
      {href:'/destinationer/ninh-binh/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg område før hotel.'},
      {href:'/destinationer/ninh-binh/2-dage-i-ninh-binh/',title:'2 dage i Ninh Binh',text:'Se om hotellets placering passer til ruten.'},
      ...relatedBase,
    ],
  },

  '2-dage-i-ninh-binh': {
    destinationName:'Ninh Binh',
    title:'2 dage i Ninh Binh | Trang An, Hang Mua og Tam Coc',
    description:'Et realistisk forslag til 2 dage i Ninh Binh med Hang Mua, Trang An eller Tam Coc, cykling og et historisk stop.',
    eyebrow:'Ninh Binh · Rejseplan',
    heading:'2 dage i Ninh Binh: bådtur den ene dag, udsigt og cykling den anden',
    intro:'To hele dage giver markant mere ro end en dagstur fra Hanoi. Du kan dele de mest vejrfølsomme aktiviteter op og undgå at sidde i bil mellem hvert stop.',
    hero, sources,
    quickFacts:[
      {label:'Dag 1',value:'Hang Mua + Tam Coc'},
      {label:'Dag 2',value:'Trang An + historie'},
      {label:'Base',value:'Tam Coc'}
    ],
    sections:[
      {id:'arrival',heading:'Ankomstdag: check ind og cykl',paragraphs:['Hvis du kommer fra Hanoi før frokost, så brug eftermiddagen på Tam Coc, Bich Dong eller en kort cykeltur.','Gem Hang Mua til et tidspunkt med bedre lys og mindre varme.']},
      {id:'day1',heading:'Dag 1: Hang Mua og rolig eftermiddag',paragraphs:['Start ved Hang Mua tidligt. Spis en lang frokost og brug resten af dagen på Tam Coc-området.','Hvis du tager Tam Coc-bådturen denne dag, så spring Trang An over næste morgen og vælg mere cykling i stedet.']},
      {id:'day2',heading:'Dag 2: Trang An og Hoa Lu',paragraphs:['Tag Trang An om morgenen og fortsæt eventuelt til Hoa Lu.','Det er rigeligt til én dag. Undgå at lægge endnu en stor bådtur oveni.']},
      {id:'depart',heading:'Videre mod næste stop',paragraphs:['Fra Ninh Binh kan du fortsætte mod Hanoi, Phong Nha eller Centralvietnam afhængigt af ruten.','Hvis du tager tog, så planlæg bagagetransport mellem Tam Coc og stationen på forhånd.']},
    ],
    related:[
      {href:'/destinationer/ninh-binh/sevaerdigheder/',title:'Ninh Binh seværdigheder',text:'Vælg hvilke stop der passer bedst.'},
      {href:'/destinationer/ninh-binh/transport-fra-hanoi/',title:'Transport fra Hanoi',text:'Sammenlign limousine, tog og privat bil.'},
      ...relatedBase,
    ],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Ninh Binh',
    title:'Vejret i Ninh Binh | Bedste rejsetid og rismarker',
    description:'Guide til vejret i Ninh Binh: varme, regn, rismarker og hvornår Hang Mua, Trang An og cykling er mest behageligt.',
    eyebrow:'Ninh Binh · Vejr',
    heading:'Bedste rejsetid til Ninh Binh: godt vejr betyder mere end perfekte grønne marker',
    intro:'Billeder af gyldne eller grønne rismarker kan friste til at planlægge hele rejsen efter én uge. Vi ville først vælge perioden efter hele Nordvietnam-ruten og derefter optimere Ninh Binh.',
    hero, sources,
    quickFacts:[
      {label:'Behagelig sightseeing',value:'Forår / efterår'},
      {label:'Varmest',value:'Sommer'},
      {label:'Mest vejrfølsomt',value:'Hang Mua + cykling'}
    ],
    sections:[
      {id:'spring',heading:'Forår',paragraphs:['Mildere temperaturer gør cykling og trapper ved Hang Mua mere behagelige.','Dis kan forekomme, men det ændrer ikke nødvendigvis bådturen negativt.']},
      {id:'summer',heading:'Sommer',paragraphs:['Landskabet kan være grønt og frodigt, men varme og fugt gør udsigtspunkter fysisk hårdere.','Start tidligt og planlæg bådtur eller frokost i den varmeste del af dagen.']},
      {id:'autumn',heading:'Efterår',paragraphs:['Efterår kan give god balance mellem temperatur og udsigt, men vejret varierer fra år til år.','Hold én aktivitet fleksibel, hvis du har to nætter.']},
      {id:'rice',heading:'Rismarker: planlæg ikke hele ferien efter ét foto',paragraphs:['Plantning og høst varierer lokalt og fra år til år. Der er ingen enkelt dato, der garanterer præcis det landskab du har set online.','Vælg rejsedato efter hele Vietnam-ruten og se rismarkerne som bonus.']},
    ],
    related:[
      {href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign med Hanoi og resten af landet.'},
      {href:'/destinationer/ninh-binh/2-dage-i-ninh-binh/',title:'2 dage i Ninh Binh',text:'Se en rute der kan flyttes efter vejret.'},
      ...relatedBase,
    ],
  },

  'transport-fra-hanoi': {
    destinationName:'Ninh Binh',
    title:'Hanoi til Ninh Binh | Tog, limousine eller privat bil',
    description:'Sammenlign transport fra Hanoi til Ninh Binh: tog, limousine-van, privat transfer og dagstur. Se hvad der passer til Tam Coc og overnatning.',
    eyebrow:'Ninh Binh · Transport',
    heading:'Hanoi til Ninh Binh: limousine er nemmest, tog er bedst hvis timingen passer',
    intro:'Ninh Binh ligger tæt nok på Hanoi til, at flere transportformer giver mening. Det vigtigste er, om du skal til Ninh Binh station eller direkte til Tam Coc/hotellet.',
    hero, sources,
    quickFacts:[
      {label:'Nemmest dør-til-dør',value:'Limousine / privat bil'},
      {label:'Mest klassisk',value:'Tog'},
      {label:'Kort rejse',value:'Dagstur'}
    ],
    sections:[
      {id:'limousine',heading:'Limousine-van',paragraphs:['Delte limousine-vans er populære, fordi de ofte henter centralt i Hanoi og sætter af tættere på Tam Coc end toget.','Bekræft pickupsted og om hoteltransfer faktisk er inkluderet.']},
      {id:'train',heading:'Tog',paragraphs:['Toget går til Ninh Binh station, ikke til Tam Coc. Du skal derfor regne med den sidste transfer.','Hvis afgangstiden passer, er tog et behageligt alternativ til vejtransport og en del af rejseoplevelsen.']},
      {id:'private',heading:'Privat bil',paragraphs:['Privat transfer giver mest mening med børn, meget bagage eller flere personer.','Det er også praktisk, hvis du vil stoppe undervejs eller fortsætte direkte til et mere afsides resort.']},
      {id:'daytrip',heading:'Dagstur fra Hanoi',paragraphs:['En organiseret dagstur er logisk, hvis du ikke har plads til en overnatning.','Vælg et program med 2-3 hovedstop, ikke det program der lover flest attraktioner.']},
      {id:'onward',heading:'Videre fra Ninh Binh',paragraphs:['Hvis du fortsætter sydpå, kan tog være relevant mod blandt andet Dong Hoi eller Hue.','På en kort førstegangsrejse ville vi dog ofte gå tilbage til Hanoi eller flyve videre fra Hanoi/Da Nang afhængigt af ruten.']},
    ],
    related:[
      {href:'/destinationer/ninh-binh/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se hvorfor destinationen for transporten betyder noget.'},
      {href:'/destinationer/ninh-binh/2-dage-i-ninh-binh/',title:'2 dage i Ninh Binh',text:'Planlæg ankomsttidspunktet omkring ruten.'},
      ...relatedBase,
    ],
  },
};
