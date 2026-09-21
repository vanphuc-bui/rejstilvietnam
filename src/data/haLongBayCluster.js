const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Ha%20Long%20Bay.jpg?width=1800',
  alt:'Kalkstensøer i Ha Long Bay',
  caption:'Ha Long Bay er først og fremmest en oplevelse på vandet. Valget mellem dagstur og overnatning ændrer hele dagen.',
  credit:'Ondřej Žváček / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Ha_Long_Bay.jpg',
};

const sources = [
  { label:'Vietnam Tourism - Ha Long Bay', href:'https://vietnam.travel/node/1368' },
  { label:'UNESCO - Ha Long Bay - Cat Ba Archipelago', href:'https://whc.unesco.org/en/list/672/' },
];

const relatedBase = [
  { href:'/destinationer/ha-long-bay/', title:'Ha Long Bay rejseguide', text:'Tilbage til den samlede guide.' },
  { href:'/destinationer/hanoi/', title:'Hanoi', text:'Planlæg transporten før og efter bugten.' },
];

export const haLongBayPages = {
  'hvor-skal-man-bo': {
    destinationName:'Ha Long Bay',
    title:'Hvor skal man bo ved Ha Long Bay? Cruise, by eller Cat Ba',
    description:'Sammenlign cruise med overnatning, Ha Long City og Cat Ba som base til Ha Long Bay og Lan Ha Bay.',
    eyebrow:'Ha Long Bay · Områder',
    heading:'Hvor skal man bo ved Ha Long Bay? På båden, i Ha Long City eller på Cat Ba',
    intro:'For de fleste førstegangsrejsende er selve cruiset “hotellet”. En landbase giver mest mening før/efter sejlturen eller hvis du vil udforske Cat Ba.',
    hero, sources,
    quickFacts:[
      {label:'Første gang',value:'1 nat på cruise'},
      {label:'Før/efter cruise',value:'Ha Long City'},
      {label:'Flere dage i området',value:'Cat Ba'}
    ],
    sections:[
      {id:'cruise',heading:'Overnatning på båden',paragraphs:['Det er den mest direkte måde at opleve bugten på. Du vågner på vandet og slipper for at bruge en ekstra hotelnat på land.','Vælg kahyt efter vindue/balkon, støjplacering og rute - ikke kun størrelse.']},
      {id:'halong-city',heading:'Ha Long City',paragraphs:['Byen er praktisk til en nat før eller efter cruise, især hvis afgangstidspunktet ikke passer med transfer fra Hanoi.','Den er ikke i sig selv den samme oplevelse som at være ude i bugten.']},
      {id:'catba',heading:'Cat Ba',paragraphs:['Cat Ba passer bedre, hvis du vil kombinere Lan Ha Bay, vandring og flere dage i området.','Det kræver lidt mere planlægning men giver mere variation end et rent cruise-stop.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['Én nat i området: sov på cruise. To-tre nætter og naturfokus: overvej Cat Ba.','Ha Long City er mest en logistisk base, ikke vores hovedanbefaling til selve ferieoplevelsen.']},
    ],
    mapPlaces:[
      {name:'Ha Long International Cruise Port',detail:'Mange cruiseafgange',lat:20.9542,lng:107.0478},
      {name:'Bai Chay',detail:'Hotelområde i Ha Long City',lat:20.9560,lng:107.0280},
      {name:'Cat Ba town',detail:'Base til Lan Ha Bay',lat:20.7275,lng:107.0480},
    ],
    related:[
      {href:'/destinationer/ha-long-bay/bedste-hoteller/',title:'Bedste hoteller ved Ha Long Bay',text:'Se landbaser før eller efter cruise.'},
      {href:'/destinationer/ha-long-bay/lan-ha-vs-ha-long/',title:'Ha Long eller Lan Ha?',text:'Sammenlign områderne.'},
      ...relatedBase,
    ],
  },

  'bedste-hoteller': {
    destinationName:'Ha Long Bay',
    title:'Bedste hoteller ved Ha Long Bay | Ha Long City og Cat Ba',
    description:'Fem hotelreferencer ved Ha Long Bay: Vinpearl Resort & Spa Ha Long, Wyndham Legend, Citadines Marina, Oakwood Ha Long og Hotel Perle d’Orient Cat Ba.',
    eyebrow:'Ha Long Bay · Hoteller',
    heading:'Bedste hoteller ved Ha Long Bay: landhotel giver mest mening omkring cruiset',
    intro:'Hvis du kun har ét cruise med én nat, behøver du ofte slet ikke et hotel ved bugten. Landhoteller er mest relevante før/efter cruise eller på Cat Ba.',
    hero, sources,
    quickFacts:[
      {label:'Resortø',value:'Vinpearl Resort & Spa Ha Long'},
      {label:'Bybase',value:'Wyndham Legend / Citadines'},
      {label:'Cat Ba',value:'Hôtel Perle d’Orient'}
    ],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'Vinpearl Resort & Spa Ha Long',paragraphs:['Et resort på en privat ø tæt på Ha Long City. Godt hvis du vil gøre en ekstra nat til egentlig resorttid.']},
        {heading:'Wyndham Legend Halong',paragraphs:['Et stort city-hotel i Bai Chay, praktisk hvis du vil bo tættere på cruisehavnen og byens services.']},
        {heading:'Citadines Marina Halong',paragraphs:['Moderne lejligheds-/hotelprodukt i marinaområdet, relevant til familier eller længere ophold på land.']},
        {heading:'Oakwood Ha Long',paragraphs:['Et mere boligpræget high-end valg, nyttigt til familier eller flere nætter før/efter cruise.']},
        {heading:'Hôtel Perle d’Orient Cat Ba - MGallery',paragraphs:['Et resortpræget valg på Cat Ba, bedst hvis du bevidst vælger øen som base frem for Ha Long City.']},
      ]},
      {id:'choice',heading:'Hvornår ville vi booke et landhotel?',bullets:['Sen ankomst fra Hanoi før cruise.','Tidlig videre transport næste dag.','Flere dage på Cat Ba.','Du vil have resortfaciliteter ud over båden.']},
      {id:'price',heading:'Undgå at betale for to “overnatningsprodukter” samme dag',paragraphs:['Hvis cruiset inkluderer fuld overnatning og måltider, giver et dyrt hotel samme nat naturligvis ingen mening.','Planlæg landnatten kun, når transfer eller flytider faktisk kræver det.']},
    ],
    related:[
      {href:'/destinationer/ha-long-bay/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se om du overhovedet har brug for et landhotel.'},
      {href:'/destinationer/hanoi/ha-long-bay-fra-hanoi/',title:'Dagstur eller overnatning?',text:'Vælg cruiseformat først.'},
      ...relatedBase,
    ],
  },

  '2-dage-i-ha-long-bay': {
    destinationName:'Ha Long Bay',
    title:'2 dage i Ha Long Bay | Sådan ser et 2D/1N cruise ud',
    description:'Et realistisk eksempel på 2 dage og 1 nat i Ha Long Bay med transfer, check-in, kajak/grotte, middag og morgen på vandet.',
    eyebrow:'Ha Long Bay · Rejseplan',
    heading:'2 dage i Ha Long Bay: sådan ser et 2D/1N cruise typisk ud',
    intro:'Programmet varierer mellem skibe, men strukturen er ofte den samme. Det hjælper at kende rytmen, før du vurderer om cruiset er pengene værd.',
    hero, sources,
    quickFacts:[
      {label:'Dag 1',value:'Transfer + sejlads'},
      {label:'Aften',value:'Middag om bord'},
      {label:'Dag 2',value:'Tidlig aktivitet + retur'}
    ],
    sections:[
      {id:'day1-morning',heading:'Dag 1 formiddag: transfer og check-in',paragraphs:['Du forlader normalt Hanoi om morgenen, ankommer til havnen og går om bord omkring frokost.','Vælg en transfer der matcher den konkrete havn.']},
      {id:'day1-afternoon',heading:'Dag 1 eftermiddag: bugt, grotte eller kajak',paragraphs:['Efter frokost sejler båden ind i bugten og stopper typisk ved en grotte, kajakområde eller udsigtspunkt.','Programmet kan føles hektisk på billigere cruises med mange stop.']},
      {id:'evening',heading:'Aften på båden',paragraphs:['Middag og solnedgang er en vigtig del af grunden til at overnatte.','Tjek om drikkevarer er inkluderet og hvor meget fritid programmet faktisk giver.']},
      {id:'day2',heading:'Dag 2: tidlig aktivitet og retur',paragraphs:['Mange cruises starter med tai chi, kajak eller et kort besøg før brunch og retur til havnen.','Du er typisk tilbage i Hanoi senere samme dag, så undgå en stram international flyafgang om aftenen.']},
    ],
    related:[
      {href:'/ture/halong-bay-cruise/',title:'Cruise-guide',text:'Se hvad du bør kontrollere før booking.'},
      {href:'/destinationer/ha-long-bay/transport-fra-hanoi/',title:'Transport fra Hanoi',text:'Planlæg transferen omkring cruiset.'},
      ...relatedBase,
    ],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Ha Long Bay',
    title:'Vejret i Ha Long Bay | Bedste rejsetid til cruise',
    description:'Guide til vejret i Ha Long Bay: tåge, varme, regn, stormsæson og hvad vejret betyder for cruise og udsigt.',
    eyebrow:'Ha Long Bay · Vejr',
    heading:'Bedste rejsetid til Ha Long Bay: sigt, vind og aflysninger betyder mere end temperatur',
    intro:'En overskyet dag kan stadig være flot i bugten, men vind og tropiske systemer kan ændre eller aflyse sejlruter. Planlæg med buffer.',
    hero, sources,
    quickFacts:[
      {label:'Køligere / klarere',value:'Typisk forår og efterår'},
      {label:'Varmest',value:'Sommer'},
      {label:'Største risiko',value:'Vind og stormsituationer'}
    ],
    sections:[
      {id:'spring',heading:'Forår',paragraphs:['Temperaturen er ofte behagelig, men tåge og dis kan forekomme. Det kan give dramatisk stemning men mindre lang udsigt.']},
      {id:'summer',heading:'Sommer',paragraphs:['Sommeren er varm og fugtig med større risiko for kraftige byger og tropiske systemer.','Book fleksibelt hvis muligt og læg ikke en international flyafgang umiddelbart efter cruiset.']},
      {id:'autumn',heading:'Efterår',paragraphs:['Efteråret kan give en god kombination af temperatur og sigt.','Det er stadig vigtigt at følge den konkrete prognose de sidste dage før afgang.']},
      {id:'winter',heading:'Vinter',paragraphs:['Det kan være køligt og gråt på dækket, især morgen og aften.','Tag et ekstra lag med selv om resten af Vietnam-rejsen er varm.']},
    ],
    related:[
      {href:'/destinationer/hanoi/ha-long-bay-fra-hanoi/',title:'Dagstur eller overnatning?',text:'Vælg format efter tid og vejrbuffer.'},
      {href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign med resten af ruten.'},
      ...relatedBase,
    ],
  },

  'transport-fra-hanoi': {
    destinationName:'Ha Long Bay',
    title:'Hanoi til Ha Long Bay | Shuttle, privat transfer og cruisebus',
    description:'Guide til transport fra Hanoi til Ha Long Bay: cruise-shuttle, limousine og privat bil samt hvorfor havnen skal bekræftes før afgang.',
    eyebrow:'Ha Long Bay · Transport',
    heading:'Hanoi til Ha Long Bay: book transfer efter den konkrete cruisehavn',
    intro:'Mange cruises inkluderer transfer, og det er ofte den enkleste løsning. Hvis du booker separat, skal du kende præcis havn og check-in-tid.',
    hero, sources,
    quickFacts:[
      {label:'Nemmest',value:'Cruise-shuttle'},
      {label:'Familie / gruppe',value:'Privat bil'},
      {label:'Vigtigst',value:'Korrekt havn'}
    ],
    sections:[
      {id:'shuttle',heading:'Cruise-shuttle',paragraphs:['Det er den mest friktionsfrie løsning, fordi operatøren koordinerer pickup med check-in.','Tjek om pickup er fra hotel, et centralt mødested eller et specifikt kvarter i Hanoi.']},
      {id:'private',heading:'Privat transfer',paragraphs:['Privat bil giver fleksibilitet med børn, meget bagage eller sen ankomst.','Bekræft havn og cruise-navn med chaufføren på forhånd.']},
      {id:'port',heading:'Hvilken havn?',paragraphs:['Ha Long-området har flere terminaler og marinaer. Et generelt “Ha Long Bay” i en booking er ikke nok.','Brug operatørens seneste voucher til at kontrollere terminal og mødetid.']},
      {id:'return',heading:'Retur til Hanoi eller videre',paragraphs:['Hvis du skal til Ninh Binh eller lufthavnen direkte bagefter, så undersøg transfer uden at gå via Hanoi centrum.','Det kan spare flere timer og et ekstra hotelskift.']},
    ],
    related:[
      {href:'/destinationer/hanoi/ha-long-bay-fra-hanoi/',title:'Dagstur eller cruise',text:'Vælg format før transfer.'},
      {href:'/destinationer/ha-long-bay/2-dage-i-ha-long-bay/',title:'2 dage i Ha Long Bay',text:'Se hvornår transferen typisk ligger.'},
      ...relatedBase,
    ],
  },

  'lan-ha-vs-ha-long': {
    destinationName:'Ha Long Bay',
    title:'Lan Ha Bay vs Ha Long Bay | Hvilken bugt skal du vælge?',
    description:'Sammenlign Ha Long Bay og Lan Ha Bay: landskab, afgangshavne, Cat Ba, cruise-ruter og hvem de to områder passer bedst til.',
    eyebrow:'Ha Long Bay · Sammenligning',
    heading:'Lan Ha Bay eller Ha Long Bay? Vælg cruise-ruten, ikke kun navnet',
    intro:'Begge områder har kalkstenslandskab og ligger tæt på hinanden. Forskellen mærkes mest i afgangshavn, cruise-rute, Cat Ba-adgang og den konkrete båd.',
    hero, sources,
    quickFacts:[
      {label:'Klassisk ikon',value:'Ha Long Bay'},
      {label:'Cat Ba-adgang',value:'Lan Ha Bay'},
      {label:'Vigtigst',value:'Den konkrete rute'}
    ],
    sections:[
      {id:'halong',heading:'Ha Long Bay',paragraphs:['Det klassiske UNESCO-navn og den rute flest førstegangsrejsende forbinder med destinationen.','Der er stort udvalg af cruises, men også mere trafik på de mest populære ruter.']},
      {id:'lanha',heading:'Lan Ha Bay',paragraphs:['Lan Ha ligger tættere på Cat Ba og markedsføres ofte som et roligere alternativ.','Crowding afhænger dog af den konkrete rute og tidspunkt - ikke kun navnet på bugten.']},
      {id:'catba',heading:'Hvis Cat Ba er vigtig',paragraphs:['Vælg Lan Ha/Cat Ba-rute hvis du vil kombinere cruise med vandring eller flere nætter på øen.','Det giver mere variation end kun én nat på båd.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['Første rejse og én nat: vælg det bedste cruiseprodukt og den bedste rute, uanset hvilket af de to navne der står størst.','Flere dage i området: Lan Ha + Cat Ba kan være mere fleksibelt.']},
    ],
    related:[
      {href:'/destinationer/ha-long-bay/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se hvornår Cat Ba giver mening.'},
      {href:'/ture/halong-bay-cruise/',title:'Cruise-guide',text:'Sammenlign kahyt, rute og transfer.'},
      ...relatedBase,
    ],
  },
};
