const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Rice%20terraces%20in%20Sa%20Pa%2001.jpg?width=1800',
  alt:'Risterrasser i Sapa',
  caption:'Sapa er først og fremmest et bjerg- og trekkingstop. Vælg det, hvis natur til fods er en reel prioritet.',
  credit:'Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Rice_terraces_in_Sa_Pa_01.jpg',
};

const sources = [
  { label:'Vietnam Tourism - Sapa', href:'https://www.vietnam.travel/places-to-go/northern-vietnam/sapa' },
];

const relatedBase = [
  { href:'/destinationer/sapa/', title:'Sapa rejseguide', text:'Tilbage til den samlede guide.' },
  { href:'/destinationer/hanoi/', title:'Hanoi', text:'Planlæg transport og dagene før eller efter bjergene.' },
];

export const sapaPages = {
  'sevaerdigheder': {
    destinationName:'Sapa',
    title:'Sapa seværdigheder | Fansipan, Muong Hoa og landsbyer',
    description:'Guide til de vigtigste oplevelser i Sapa: Fansipan, Muong Hoa Valley, Cat Cat, Ta Van, risterrasser og byens centrum.',
    eyebrow:'Sapa · Seværdigheder',
    heading:'Seværdigheder i Sapa: landskabet er vigtigere end en lang attraktionliste',
    intro:'Sapa fungerer bedst, når du giver plads til én rigtig trekkingdag og holder resten fleksibelt efter vejret. Fansipan og landsbyerne er meget forskellige oplevelser.',
    hero, sources,
    quickFacts:[
      {label:'Hovedoplevelse',value:'Trekking i Muong Hoa'},
      {label:'Udsigtspunkt',value:'Fansipan'},
      {label:'Kort lokalt stop',value:'Cat Cat / centrum'}
    ],
    sections:[
      {id:'muong-hoa',heading:'Muong Hoa Valley',paragraphs:['Dalen syd for Sapa er det mest oplagte område til trekking mellem risterrasser og landsbyer.','Vælg rute efter vejr og underlag; regn kan gøre en let tur markant mere krævende.']},
      {id:'fansipan',heading:'Fansipan',paragraphs:['Kabelbanen gør toppen tilgængelig uden en flerdages vandring. Udsigten er dog ikke garanteret, fordi skyer kan lukke hurtigt.','Hvis du har to hele dage, så læg Fansipan på den klareste dag.']},
      {id:'cat-cat',heading:'Cat Cat',paragraphs:['Cat Cat ligger tæt på byen og er let at besøge, men det er også et meget turistet stop.','Vi ville vælge det til en kort halvdag, ikke som erstatning for en rigtig trekkingtur.']},
      {id:'ta-van',heading:'Ta Van og landsbyer i dalen',paragraphs:['Området omkring Ta Van fungerer godt til en længere gådag eller overnatning uden for byen.','Vælg guide og overnatning efter hvor meget lokal kontakt og fysisk aktivitet du faktisk ønsker.']},
      {id:'town',heading:'Sapa by',paragraphs:['Byen har caféer, marked og udsigt, men den er ikke hovedgrunden til at rejse hertil.','Brug centrum som base og restitution mellem bjergdagene.']},
    ],
    mapPlaces:[
      {name:'Sapa town',detail:'Base med hoteller og restauranter',lat:22.3364,lng:103.8438},
      {name:'Fansipan cable car',detail:'Adgang mod toppen',lat:22.3095,lng:103.7740},
      {name:'Cat Cat Village',detail:'Kort stop tæt på byen',lat:22.3282,lng:103.8291},
      {name:'Ta Van',detail:'Trekking og homestays',lat:22.3020,lng:103.8870},
    ],
    related:[
      {href:'/destinationer/sapa/trekking-i-sapa/',title:'Trekking i Sapa',text:'Vælg rute efter niveau, vejr og underlag.'},
      {href:'/destinationer/sapa/3-dage-i-sapa/',title:'3 dage i Sapa',text:'Se hvordan Fansipan og trekking kan fordeles.'},
      ...relatedBase,
    ],
  },

  'trekking-i-sapa': {
    destinationName:'Sapa',
    title:'Trekking i Sapa | Ruter, guide og hvad du skal vide',
    description:'Praktisk guide til trekking i Sapa: korte ture, heldagstrekking, homestay, Muong Hoa Valley, sko, vejr og valg af lokal guide.',
    eyebrow:'Sapa · Trekking',
    heading:'Trekking i Sapa: vælg rute efter underlag og vejr, ikke efter flest kilometer',
    intro:'En Sapa-tur bliver bedst, når ruten passer til din form og dagens forhold. Vådt ler, stejle stier og tåge kan ændre sværhedsgraden markant.',
    hero, sources,
    quickFacts:[
      {label:'Første tur',value:'4-6 timer'},
      {label:'Bedst område',value:'Muong Hoa Valley'},
      {label:'Vigtigst udstyr',value:'Sko med greb'}
    ],
    sections:[
      {id:'short',heading:'Kort trekkingtur',paragraphs:['En halvdagstur er god, hvis du ankommer sent eller rejser med børn. Du får landskab uden at hele opholdet bliver fysisk.','Vælg en rute med fleksibel pickup, så du ikke går unødigt på asfalt fra centrum.']},
      {id:'full',heading:'Heldagstrekking',paragraphs:['En heldag giver plads til flere landsbyer og større højdeforskelle.','Tag vand, let regnbeskyttelse og sko du allerede har gået i.']},
      {id:'homestay',heading:'Trekking med homestay',paragraphs:['En overnatning i dalen kan være en bedre oplevelse end at tage tilbage til byen samme dag.','Spørg konkret hvordan værten bliver betalt, hvad der er inkluderet og om værelset er privat eller delt.']},
      {id:'guide',heading:'Skal man have guide?',paragraphs:['Til en enkel og tør rute er guide ikke altid teknisk nødvendig, men en god lokal guide gør transport og landsbybesøg mere meningsfulde.','Ved dårligt vejr eller længere ruter ville vi klart foretrække guide.']},
      {id:'weather',heading:'Regn ændrer alt',paragraphs:['Mudrede stier kan være glatte og langsomme. Brug ikke kun kilometer som mål for sværhedsgrad.','Hvis vejret er meget dårligt, er Fansipan eller en kortere bynær dag et bedre valg.']},
    ],
    related:[
      {href:'/destinationer/sapa/sevaerdigheder/',title:'Sapa seværdigheder',text:'Sammenlign trekking med Fansipan og de andre stop.'},
      {href:'/destinationer/sapa/vejr-og-bedste-rejsetid/',title:'Vejret i Sapa',text:'Se hvornår underlaget typisk er lettere.'},
      ...relatedBase,
    ],
  },

  'hvor-skal-man-bo': {
    destinationName:'Sapa',
    title:'Hvor skal man bo i Sapa? Centrum, dalen eller ecolodge',
    description:'Sammenlign Sapa centrum, Muong Hoa-dalen og ecolodges uden for byen. Se hvad der passer til første rejse, trekking og ro.',
    eyebrow:'Sapa · Områder',
    heading:'Hvor skal man bo i Sapa? Centrum er nemmest, dalen er smukkere',
    intro:'Placeringen afgør, om du får caféer og nem transport eller vågner direkte til bjerglandskab. På 2-3 nætter ville vi vælge efter hvor vigtig trekking er.',
    hero, sources,
    quickFacts:[
      {label:'Første gang',value:'Sapa centrum'},
      {label:'Trekking',value:'Muong Hoa / Ta Van'},
      {label:'Slow travel',value:'Ecolodge uden for byen'}
    ],
    sections:[
      {id:'town',heading:'Sapa centrum',paragraphs:['Centrum er nemmest til restauranter, transport, kabelbane og spontane ændringer i plan.','Ulempen er mere trafik, byggeri og mindre følelse af bjergro.']},
      {id:'valley',heading:'Muong Hoa og Ta Van',paragraphs:['Her kommer du tættere på risterrasser og trekkingruter.','Det er et bedre valg, hvis du gerne vil vågne i landskabet og accepterer færre restaurantvalg.']},
      {id:'ecolodge',heading:'Ecolodge længere væk',paragraphs:['Steder som Topas Ecolodge giver en destination i sig selv snarere end en almindelig hotelbase.','Vælg denne model, hvis resortro og udsigt er vigtigere end daglige byture.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['2 nætter: centrum. 3-4 nætter med mindst én heldagstur: dalen eller split stay kan give mening.','Vi ville ikke bo langt ude og samtidig planlægge at spise i Sapa by hver aften.']},
    ],
    mapPlaces:[
      {name:'Sapa town',detail:'Mest praktisk',lat:22.3364,lng:103.8438},
      {name:'Ta Van',detail:'Dalen og homestays',lat:22.3020,lng:103.8870},
      {name:'Topas Ecolodge area',detail:'Isoleret slow travel',lat:22.2504,lng:103.8990},
    ],
    related:[
      {href:'/destinationer/sapa/bedste-hoteller/',title:'Bedste hoteller i Sapa',text:'Se konkrete referencevalg.'},
      {href:'/destinationer/sapa/trekking-i-sapa/',title:'Trekking i Sapa',text:'Vælg base efter din vigtigste aktivitet.'},
      ...relatedBase,
    ],
  },

  'bedste-hoteller': {
    destinationName:'Sapa',
    title:'Bedste hoteller i Sapa | Byhotel, udsigt og ecolodge',
    description:'Fem hotelreferencer i Sapa: Hotel de la Coupole, Silk Path Grand, Pistachio Hotel, Sapa Horizon og Topas Ecolodge.',
    eyebrow:'Sapa · Hoteller',
    heading:'Bedste hoteller i Sapa: sammenlign centrum med ecolodge før du ser på pris',
    intro:'Et centralt luksushotel og et ecolodge i dalen løser to helt forskellige behov. Vælg ferieformen før du sammenligner nattepriser.',
    hero, sources,
    quickFacts:[
      {label:'Design / centrum',value:'Hotel de la Coupole'},
      {label:'Udsigt / resort',value:'Silk Path Grand'},
      {label:'Natur',value:'Topas Ecolodge'}
    ],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'Hotel de la Coupole - MGallery',paragraphs:['Et centralt designhotel, praktisk til Fansipan-kabelbanen og byens restauranter. Godt til et kort ophold, hvor komfort og placering begge tæller.']},
        {heading:'Silk Path Grand Sapa Resort & Spa',paragraphs:['Et større resortpræget hotel med udsigt og mere ro end de travleste centrumgader.']},
        {heading:'Pistachio Hotel Sapa',paragraphs:['Et moderne byhotel, nyttigt at sammenligne hvis pool, udsigt og central adgang betyder mere end boutique-karakter.']},
        {heading:'Sapa Horizon Hotel',paragraphs:['Et mindre centralt valg med fokus på placering og udsigt. God reference til rejsende der vil være tæt på byen uden et stort resort.']},
        {heading:'Topas Ecolodge',paragraphs:['Et isoleret ecolodge i landskabet, bedst til slow travel og natur. Det er ikke en praktisk base til hyppige ture ind til Sapa centrum.']},
      ]},
      {id:'choice',heading:'Hvad skal afgøre valget?',bullets:['Centrum hvis du har 2 nætter.','Dalen eller ecolodge hvis udsigt og natur er hovedformålet.','Tjek varme/aircondition og opvarmning i kølige måneder.','Læs nyere anmeldelser om byggearbejde og udsigtsblokering.']},
      {id:'price',heading:'Et ecolodge skal vurderes som en del af oplevelsen',paragraphs:['Hvis du betaler mere for at bo langt ude, skal udsigt, mad og ro være noget du faktisk vil bruge.','Ellers er et godt centralt hotel ofte bedre value på en kort rejse.']},
    ],
    related:[
      {href:'/destinationer/sapa/hvor-skal-man-bo/',title:'Hvor skal man bo i Sapa?',text:'Vælg base før hotel.'},
      {href:'/destinationer/sapa/3-dage-i-sapa/',title:'3 dage i Sapa',text:'Se hvilken hoteltype der passer til ruten.'},
      ...relatedBase,
    ],
  },

  '3-dage-i-sapa': {
    destinationName:'Sapa',
    title:'3 dage i Sapa | Trekking, Fansipan og roligt tempo',
    description:'Et realistisk forslag til 3 dage i Sapa med trekking i Muong Hoa, Fansipan og fleksibilitet efter vejret.',
    eyebrow:'Sapa · Rejseplan',
    heading:'3 dage i Sapa: én trekkingdag, én vejrdag og plads til at ændre planen',
    intro:'Tre dage er langt bedre end én presset overnatning, fordi bjergvejret kan flytte rundt på de aktiviteter, der kræver udsigt.',
    hero, sources,
    quickFacts:[
      {label:'Dag 1',value:'By + kort tur'},
      {label:'Dag 2',value:'Heldagstrekking'},
      {label:'Dag 3',value:'Fansipan efter vejret'}
    ],
    sections:[
      {id:'arrival',heading:'Dag 1: ankomst og let program',paragraphs:['Check ind, gå i centrum og tag en kort dal- eller Cat Cat-tur, hvis energien er god.','Undgå at lægge Fansipan direkte efter en lang bus- eller nattogstur.']},
      {id:'trekking',heading:'Dag 2: heldagstrekking',paragraphs:['Brug den bedste dag til en rute i Muong Hoa Valley.','Hvis vejret er vådt, så juster længden frem for at presse den oprindelige plan igennem.']},
      {id:'fansipan',heading:'Dag 3: Fansipan eller backup-plan',paragraphs:['Hvis sigten er god, tag kabelbanen tidligt. Hvis bjergene er dækket, så brug dagen på café, spa, marked eller en kortere gåtur.','Det er bedre end at betale for en top uden udsigt bare fordi den stod i planen.']},
      {id:'departure',heading:'Transport tilbage til Hanoi',paragraphs:['Vælg en afgang der ikke gør den sidste dag unødigt stressende.','Hvis du tager nattog, skal du først til Lao Cai og derfra videre med tog.']},
    ],
    related:[
      {href:'/destinationer/sapa/trekking-i-sapa/',title:'Trekking i Sapa',text:'Vælg rute efter niveau og vejr.'},
      {href:'/destinationer/sapa/transport-fra-hanoi/',title:'Transport fra Hanoi',text:'Sammenlign bus og nattog.'},
      ...relatedBase,
    ],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Sapa',
    title:'Vejret i Sapa | Bedste rejsetid til trekking og udsigt',
    description:'Guide til vejret i Sapa: kølige vintre, regn, tåge, risterrasser og hvilke perioder der passer bedst til trekking.',
    eyebrow:'Sapa · Vejr',
    heading:'Bedste rejsetid til Sapa: temperatur og sigt betyder mere end Hanoi-vejret',
    intro:'Sapa ligger højt og kan være markant køligere, vådere og mere tåget end Hanoi. Pak og planlæg bjergdagene som en separat klimazone.',
    hero, sources,
    quickFacts:[
      {label:'Trekking',value:'Forår / efterår'},
      {label:'Køligst',value:'Vinter'},
      {label:'Størst risiko for glatte stier',value:'Våde perioder'}
    ],
    sections:[
      {id:'spring',heading:'Forår',paragraphs:['Forår kan give behagelige temperaturer til trekking, men skyer og dis forekommer stadig.','Det er ofte en god kompromisperiode på en rundrejse i Nordvietnam.']},
      {id:'summer',heading:'Sommer og regn',paragraphs:['Sommeren er grøn, men byger og fugt kan gøre stier meget glatte.','Planlæg kortere ruter hvis vejrudsigten er ustabil.']},
      {id:'autumn',heading:'Efterår',paragraphs:['Efterår er populært for trekking og risterrasser, fordi temperatur og sigt ofte er gode.','Det er stadig bjergvejr, så læg ikke hele opholdet efter én langtidsprognose.']},
      {id:'winter',heading:'Vinter',paragraphs:['Vinter kan være overraskende kold, især morgen og aften. Tåge kan dække udsigter i lange perioder.','Pak et varmt lag og vælg hotel med ordentlig varme, hvis du rejser i den kølige sæson.']},
    ],
    related:[
      {href:'/destinationer/sapa/trekking-i-sapa/',title:'Trekking i Sapa',text:'Se hvordan vejret påvirker sværhedsgraden.'},
      {href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign Sapa med resten af ruten.'},
      ...relatedBase,
    ],
  },

  'transport-fra-hanoi': {
    destinationName:'Sapa',
    title:'Hanoi til Sapa | Bus, limousine eller nattog',
    description:'Sammenlign transport fra Hanoi til Sapa: direkte bus, limousine og nattog via Lao Cai. Se fordele ved hver løsning.',
    eyebrow:'Sapa · Transport',
    heading:'Hanoi til Sapa: bus er enklest, nattog er mest oplevelse',
    intro:'Der er ingen perfekt løsning. Bus går direkte til Sapa, mens nattoget ender i Lao Cai og kræver den sidste del op i bjergene.',
    hero, sources,
    quickFacts:[
      {label:'Nemmest',value:'Direkte bus / limousine'},
      {label:'Nattog',value:'Hanoi → Lao Cai'},
      {label:'Sidste del',value:'Bjergvej'}
    ],
    sections:[
      {id:'bus',heading:'Direkte bus eller limousine',paragraphs:['Det er den enkleste dør-til-dør-løsning. Mange afgange går fra Hanoi til Sapa uden togskift.','Hvis du bliver køresyg, så tag den snoede sidste del af bjergvejen med i beslutningen.']},
      {id:'night-train',heading:'Nattog til Lao Cai',paragraphs:['Nattog kan spare en hotelnat og føles som en del af rejsen.','Du ankommer ikke til Sapa, men til Lao Cai, hvorfra du skal videre med bil eller shuttle.']},
      {id:'comfort',heading:'Søvn og komfort',paragraphs:['En seng i tog er ikke det samme som en hotelnat. Hvis du sover dårligt under transport, kan første dag i Sapa blive mindre værd.','På en kort rejse ville vi ofte prioritere søvn frem for romantikken i et nattog.']},
      {id:'return',heading:'Tilbage til Hanoi',paragraphs:['Book ikke en returafgang så tidligt, at du mister hele sidste dag.','Hvis næste stop er Ninh Binh eller Ha Long, så sammenlign direkte transfers før du automatisk går tilbage til Hanoi centrum.']},
    ],
    related:[
      {href:'/destinationer/sapa/3-dage-i-sapa/',title:'3 dage i Sapa',text:'Se hvilken ankomsttid der passer til ruten.'},
      {href:'/destinationer/sapa/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Transportformen kan påvirke den bedste base.'},
      ...relatedBase,
    ],
  },
};
