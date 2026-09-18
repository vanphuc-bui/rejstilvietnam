const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Hoi%20An%20lanterns.jpg?width=1800',
  alt:'Lanterner og gadeliv i Hoi An',
  caption:'Hoi An er kompakt, men valget mellem den gamle by, rismarkerne og stranden ændrer oplevelsen markant.',
  credit:'Lishuilynn / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Hoi_An_lanterns.jpg',
};
const beachImage = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/An%20Bang%20Beach%20%2846353448872%29.jpg?width=1500',
  alt:'An Bang Beach ved Hoi An',
  caption:'An Bang er tæt nok på Hoi An til en halv eller hel stranddag uden hotelskift.',
  credit:'Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/Category:An_Bang_Beach',
};
const sources = [
  { label:'Vietnam Tourism - Hoi An', href:'https://vietnam.travel/node/99' },
  { label:'Vietnam Tourism - sådan oplever du Hoi An', href:'https://vietnam.travel/node/1332' },
];
const hotelSources = [
  ...sources,
  { label:'Tripadvisor Danmark - hoteller i Hoi An', href:'https://www.tripadvisor.dk/Hotels-g298082-Hoi_An_Quang_Nam_Province-Hotels.html' },
];
const relatedBase = [
  { href:'/destinationer/hoi-an/', title:'Hoi An rejseguide', text:'Tilbage til hele Hoi An-hubben.' },
  { href:'/destinationer/da-nang/', title:'Da Nang rejseguide', text:'Sammenlign Hoi An med den større strandby og lufthavnsbase.' },
];

export const hoiAnPages = {
  'sevaerdigheder': {
    destinationName:'Hoi An',
    title:'Hoi An seværdigheder 2026 | Det skal du se og opleve',
    description:'De vigtigste seværdigheder i Hoi An med gammel by, Japanese Covered Bridge, markeder, rismarker, My Son og strand - plus et realistisk forslag til prioritering.',
    eyebrow:'Hoi An · Seværdigheder',
    heading:'Seværdigheder i Hoi An: vælg oplevelser, ikke bare fotostop',
    intro:'Hoi An har flere oplevelser end den gamle by alene. På en første rejse ville vi kombinere kulturarv, mad, lidt landskab og højst én større udflugt.',
    hero, sources,
    quickFacts:[{label:'Første dag',value:'Old Town + floden'},{label:'Ekstra halvdag',value:'Cykel eller An Bang'},{label:'Historie',value:'My Son hvis det interesserer dig'}],
    sections:[
      {id:'old-town',heading:'Den gamle by er udgangspunktet',paragraphs:['Start tidligt, før grupper og varme fylder de små gader. Den gamle by er bedst til fods, og du får mere ud af den ved at stoppe undervejs end ved at følge en lang liste af bygninger.','Japanese Covered Bridge, Tan Ky Old House og de kinesiske assembly halls ligger tæt nok til at kombineres. Et Old Town-ticket giver adgang til udvalgte kultursteder; tjek den aktuelle ordning lokalt.'],callout:{title:'Vores tempo:',text:' Brug formiddagen i den gamle by, hold pause midt på dagen og kom tilbage efter mørkets frembrud, når lanternerne ændrer stemningen.'}},
      {id:'udenfor',heading:'Kom også uden for de gule facader',paragraphs:['Cam Kim, Cam Thanh og rismarkerne omkring Hoi An giver en helt anden fornemmelse end centrum. En rolig cykeltur tidligt eller sent på dagen er nok; du behøver ikke en heldagsudflugt.','An Bang Beach er let at kombinere med byen og fungerer godt, hvis du trænger til nogle timer uden sightseeing.'],image:beachImage},
      {id:'my-son',heading:'My Son: værd at tage til hvis historie betyder noget',paragraphs:['My Son Sanctuary ligger uden for Hoi An og er den mest oplagte større kulturudflugt. Tag tidligt af sted for at undgå den hårdeste varme.','Hvis du kun har to dage og ikke er særligt interesseret i Cham-historie, ville vi hellere blive i Hoi An og bruge tiden roligere.']},
      {id:'aften',heading:'Aften ved Thu Bon-floden',paragraphs:['Aftenen er den mest stemningsfulde og samtidig den mest turistede del af døgnet. Gå langs floden, men gå også et par gader væk fra de mest tætte områder for at finde roligere spisesteder.','Bådture med lanterner er korte og mere stemning end sightseeing. Se dem som et valgfrit indslag, ikke et must.']},
    ],
    mapPlaces:[
      {name:'Japanese Covered Bridge',detail:'Klassisk stop i Old Town',lat:15.8772,lng:108.3264},
      {name:'Hoi An Central Market',detail:'Marked og mad tæt på floden',lat:15.8761,lng:108.3320},
      {name:'An Bang Beach',detail:'Strand ca. få km fra centrum',lat:15.9141,lng:108.3382},
      {name:'Cam Thanh',detail:'Landsby- og rismarksområde',lat:15.8706,lng:108.3568},
    ],
    mapTitle:'Hoi Ans vigtigste områder på kortet',
    related:[{href:'/destinationer/hoi-an/3-dage-i-hoi-an/',title:'3 dage i Hoi An',text:'Se hvordan vi fordeler gammel by, strand og udflugt.'},...relatedBase],
  },

  '3-dage-i-hoi-an': {
    destinationName:'Hoi An',
    title:'3 dage i Hoi An 2026 | Rejseplan dag for dag',
    description:'Et realistisk forslag til 3 dage i Hoi An med Old Town, mad, strand eller cykling og mulighed for My Son uden at fylde hvert minut.',
    eyebrow:'Hoi An · Rejseplan',
    heading:'3 dage i Hoi An: langsomt nok til at byen giver mening',
    intro:'Tre dage er et godt minimum, fordi Hoi An fungerer bedst som en kontrast til Vietnams større byer. Planen her holder transporten nede og giver plads til pauser.',
    hero, sources,
    quickFacts:[{label:'Dag 1',value:'Old Town + mad'},{label:'Dag 2',value:'Strand + landskab'},{label:'Dag 3',value:'My Son eller mere Hoi An'}],
    sections:[
      {id:'dag1',heading:'Dag 1: lær Old Town at kende',paragraphs:['Gå ind i den gamle by tidligt, vælg to eller tre kultursteder og stop til kaffe eller cao lầu undervejs. Brug eftermiddagens varmeste timer på hotellet eller en café.','Kom tilbage til floden om aftenen. Du behøver ikke booke en aktivitet; en rolig gåtur og middag er nok til at opleve skiftet fra dag til aften.']},
      {id:'dag2',heading:'Dag 2: rismarker og An Bang',paragraphs:['Brug morgenen på cykel gennem Cam Chau/Cam Thanh eller tag en kort bil ud i landskabet. Fortsæt til An Bang, hvis vejret er godt.','På tre dage ville vi ikke skifte hotel til stranden. Afstandene er små nok til, at du kan tage tilbage til byen før aftensmad.'],image:beachImage},
      {id:'dag3',heading:'Dag 3: vælg mellem My Son og en langsom dag',paragraphs:['Vælg My Son, hvis historie og arkæologi er en reel interesse. Tag af sted tidligt og vær tilbage i Hoi An senere på dagen.','Hvis du allerede har mange kultursteder på resten af rejsen, kan tredje dag i stedet være skrædderbesøg, madlavning, caféer, shopping eller endnu en strandhalvdag.']},
      {id:'kortere',heading:'Hvis du kun har to dage',paragraphs:['Behold dag 1 og vælg enten strand/landskab eller My Son på dag 2. Forsøg ikke at presse alle tre elementer ind.','Hvis du kommer fra Da Nang sent på dagen, så regn først næste morgen som dag 1.']},
    ],
    related:[{href:'/destinationer/hoi-an/sevaerdigheder/',title:'Seværdigheder i Hoi An',text:'Vælg de stop, der passer til din plan.'},{href:'/destinationer/hoi-an/mad-i-hoi-an/',title:'Mad i Hoi An',text:'Planlæg måltiderne omkring cao lầu, mì Quảng og white rose.'},...relatedBase],
  },

  'hvor-skal-man-bo': {
    destinationName:'Hoi An',
    title:'Hvor skal man bo i Hoi An? Old Town, Cam Chau eller An Bang',
    description:'Sammenlign de bedste områder at bo i Hoi An: tæt på Old Town, Cam Chau, Cam Thanh og An Bang Beach. Se hvad der passer til første besøg, familier og strand.',
    eyebrow:'Hoi An · Områder',
    heading:'Hvor skal man bo i Hoi An? Vælg mellem by, rismarker og strand',
    intro:'Hoi An er lille, men hotelområdet ændrer rytmen i ferien. På korte ophold ville vi prioritere gåafstand til Old Town; på længere ophold kan An Bang eller rismarkerne være bedre.',
    hero, sources:hotelSources,
    quickFacts:[{label:'Første gang',value:'Kanten af Old Town'},{label:'Bedste balance',value:'Cam Chau'},{label:'Strand',value:'An Bang'}],
    sections:[
      {id:'old-town',heading:'Old Town og lige udenfor',paragraphs:['Det mest praktiske valg til 2-3 nætter. Du kan gå til middag og aftenstemning uden taxi, men vi ville undgå et værelse direkte ved de mest trafikerede gågader.','Se især efter hoteller 5-15 minutters gang fra centrum. Det giver bedre søvn uden at miste bekvemmeligheden.']},
      {id:'cam-chau',heading:'Cam Chau: vores favorit til balance',paragraphs:['Cam Chau ligger mellem den gamle by og stranden. Du får roligere gader, rismarker tæt på og stadig kort cykel- eller taxiafstand til centrum.','Det er et godt valg til 3-5 nætter, især hvis hotellets pool og lidt mere plads betyder noget.']},
      {id:'cam-thanh',heading:'Cam Thanh: mere grønt, mindre by',paragraphs:['Cam Thanh passer til resorts, familier og dig, der vil have et roligere ophold. Til gengæld bliver aftenture til Old Town mindre spontane.','Vælg det kun, hvis resortmiljøet er en del af det, du faktisk ønsker - ikke bare fordi værelset ser større ud online.']},
      {id:'an-bang',heading:'An Bang: bedst når strand er hovedsagen',paragraphs:['An Bang giver caféer, strand og et mere afslappet tempo. Det fungerer især godt på længere ophold eller hvis Centralvietnam skal være feriens stranddel.','På kun to nætter ville vi normalt blive tættere på Old Town og tage til stranden som dagstur.'],image:beachImage},
    ],
    mapPlaces:[{name:'Hoi An Old Town',detail:'Mest praktisk første gang',lat:15.8775,lng:108.3280},{name:'Cam Chau',detail:'Balance mellem by og strand',lat:15.8810,lng:108.3470},{name:'Cam Thanh',detail:'Grønt og resortpræget',lat:15.8685,lng:108.3560},{name:'An Bang Beach',detail:'Bedst til strandophold',lat:15.9141,lng:108.3382}],
    related:[{href:'/destinationer/hoi-an/bedste-hoteller/',title:'Bedste hoteller i Hoi An',text:'Se en shortlist, når du har valgt område.'},{href:'/destinationer/hoi-an/strande/',title:'Bedste strande ved Hoi An',text:'Sammenlign An Bang og kysten omkring byen.'},...relatedBase],
  },

  'bedste-hoteller': {
    destinationName:'Hoi An',
    title:'Bedste hoteller i Hoi An 2026 | 6 steder vi ville sammenligne',
    description:'En kort shortlist over gode hoteller i Hoi An efter område og rejsetype - fra Old Town til strand og resort. Ingen affiliate-links endnu.',
    eyebrow:'Hoi An · Hoteller',
    heading:'Bedste hoteller i Hoi An: seks steder vi ville sammenligne først',
    intro:'Tripadvisor Danmark viser stor efterspørgsel på hotelvalg i Hoi An. Vi ville derfor starte med område og rejsetype, ikke med en rangliste over stjerner.',
    hero, sources:hotelSources,
    quickFacts:[{label:'Centralt',value:'La Siesta / Bel Marina'},{label:'Boutique',value:'Allegro / Cozy An'},{label:'Strand',value:'Victoria / An Bang-området'}],
    sections:[
      {id:'shortlist',heading:'Vores første shortlist',subsections:[
        {heading:'La Siesta Hoi An Resort & Spa',paragraphs:['Et stærkt valg tæt på den gamle by, hvis du vil kombinere resortfaciliteter med nem adgang til centrum. Tripadvisor Danmark viser fortsat mange anmeldelser og høj popularitet.']},
        {heading:'Bel Marina Hoi An Resort',paragraphs:['Godt til par og familier, der vil have pool og stadig være i gåafstand til den gamle by.']},
        {heading:'Allegro Hoi An',paragraphs:['Boutique/luksus i central placering. Relevant hvis selve hoteloplevelsen betyder mere end laveste pris.']},
        {heading:'Cozy An Boutique Hotel',paragraphs:['Et centralt boutiquevalg med stærke nyere anmeldelser. Sammenlign værelsetype og støjniveau på dine datoer.']},
        {heading:'Victoria Hoi An Beach Resort & Spa',paragraphs:['Et mere klassisk strand/resortvalg. Bedre hvis strand og pool betyder mere end at gå til Old Town hver aften.']},
        {heading:'Hoi An Historic Hotel',paragraphs:['Et praktisk valg tæt på centrum. Godt at have med som reference, når du sammenligner pris mod nyere boutiquehoteller.']},
      ]},
      {id:'saadan-vaelger-du',heading:'Sådan ville vi vælge mellem dem',bullets:['Vælg område først: centrum, rismarker eller strand.','Sammenlign den konkrete værelsestype - ikke kun hotellets bedste billeder.','Læs de nyeste anmeldelser om støj, aircondition og morgenmad.','Se den reelle gåafstand til Old Town på kortet.','Vælg gratis afbestilling hvis rejseplanen stadig kan ændre sig.']},
      {id:'pris',heading:'Prisniveau skifter meget med sæson',paragraphs:['Centralvietnam har tydelig sæsonvariation. Et hotel, der er god værdi i marts, kan være dyrt i en ferieperiode. Derfor giver en statisk “billigst”-rangliste hurtigt dårlige råd.','Når affiliate-links tilføjes senere, bør denne side stadig rangere hoteller efter pasform og område - ikke efter hvem der betaler mest provision.']},
    ],
    mapPlaces:[{name:'La Siesta Hoi An Resort & Spa',detail:'Tæt på Old Town',lat:15.8837,lng:108.3218},{name:'Bel Marina Hoi An Resort',detail:'Vest for Old Town',lat:15.8767,lng:108.3220},{name:'Allegro Hoi An',detail:'Central boutique',lat:15.8805,lng:108.3262},{name:'Victoria Hoi An Beach Resort',detail:'Cua Dai-kysten',lat:15.8890,lng:108.3662}],
    related:[{href:'/destinationer/hoi-an/hvor-skal-man-bo/',title:'Hvor skal man bo i Hoi An?',text:'Vælg område før hotel.'},...relatedBase],
  },

  'strande': {
    destinationName:'Hoi An',
    title:'Bedste strande ved Hoi An 2026 | An Bang, Cua Dai og flere',
    description:'Guide til strandene ved Hoi An med An Bang, Cua Dai og praktiske råd om transport, sæson og om du bør bo ved stranden eller i byen.',
    eyebrow:'Hoi An · Strand',
    heading:'Strande ved Hoi An: An Bang er lettest, men ikke den eneste mulighed',
    intro:'Strandene er tæt nok på den gamle by til, at du ikke behøver vælge mellem kultur og hav. Det vigtigste er tidspunkt, vejr og hvor meget strand faktisk fylder i din ferie.',
    hero:beachImage, sources,
    quickFacts:[{label:'Nemmest',value:'An Bang'},{label:'Resorts',value:'Cua Dai-kysten'},{label:'Bedste tidspunkt',value:'Morgen / sen eftermiddag'}],
    sections:[
      {id:'an-bang',heading:'An Bang Beach',paragraphs:['An Bang er vores førstevalg til en enkel stranddag fra Hoi An. Der er caféer og restauranter tæt på, så du behøver ikke planlægge meget.','Kom tidligt eller senere på dagen. Midt på dagen kan både varme og sol være hård.']},
      {id:'cua-dai',heading:'Cua Dai',paragraphs:['Cua Dai-området har flere resorts og en anden stemning end An Bang. Kystforhold og sandbredde har ændret sig over årene, så vurder den aktuelle strand lige ved dit hotel frem for at stole på gamle billeder.','Det fungerer bedst, hvis hotel/resort er en del af ferien.']},
      {id:'bo-eller-besoege',heading:'Skal du bo ved stranden?',paragraphs:['På 2-3 nætter ville vi normalt bo tæt på Old Town og besøge stranden. På 4-6 nætter kan An Bang være et stærkt valg, hvis du vil have roligere morgener og mere strandtid.','Rejser du i en våd eller ustabil periode, er det ekstra vigtigt ikke at vælge hotel alene ud fra strandadgang.']},
      {id:'transport',heading:'Sådan kommer du frem',paragraphs:['Taxi og Grab er den letteste løsning. Cykel er hyggeligt i godt vejr, men vælg tidlig morgen eller sen eftermiddag og undgå at gøre det til en præstation i middagsvarmen.','Hvis du har små børn eller meget udstyr, ville vi tage bil.']},
    ],
    related:[{href:'/destinationer/hoi-an/hvor-skal-man-bo/',title:'Hvor skal man bo i Hoi An?',text:'Se om strand eller Old Town passer bedst til dit ophold.'},{href:'/destinationer/hoi-an/3-dage-i-hoi-an/',title:'3 dage i Hoi An',text:'Sådan passer en strandhalvdag ind.'},...relatedBase],
  },

  'mad-i-hoi-an': {
    destinationName:'Hoi An',
    title:'Mad i Hoi An 2026 | Cao lầu, mì Quảng og street food',
    description:'Guide til hvad du skal spise i Hoi An: cao lầu, mì Quảng, white rose, bánh mì og praktiske råd om marked, food tours og madlavningskurser.',
    eyebrow:'Hoi An · Mad',
    heading:'Mad i Hoi An: begynd med retterne, der hører til området',
    intro:'Hoi An er et af de steder, hvor vi ville planlægge nogle måltider bevidst. Cao lầu, mì Quảng og white rose giver mere mening her end endnu en international café.',
    hero, sources,
    quickFacts:[{label:'Must try',value:'Cao lầu'},{label:'Regional ret',value:'Mì Quảng'},{label:'Let snack',value:'White rose'}],
    commercialCta:{eyebrow:'Madlavningskursus',title:'Vil du prøve et madlavningskursus i Hoi An?',text:'Sammenlign kurser efter gruppestørrelse, hvor meget du selv laver, markedsbesøg og hvor stor en del af dagen der går til transport.',href:'https://gyg.me/5zfSljI8',label:'Se madlavningskurser →',provider:'GetYourGuide'},
    sections:[
      {id:'retter',heading:'Fire ting vi ville prioritere',subsections:[
        {heading:'Cao lầu',paragraphs:['Tykke nudler, svinekød, urter og sprøde elementer. Vælg gerne et sted, der specialiserer sig i retten frem for en meget lang turistmenu.']},
        {heading:'Mì Quảng',paragraphs:['En regional nudelret fra Quang Nam med relativt lidt bouillon. Prøv den også i Da Nang for at se variationen.']},
        {heading:'White rose',paragraphs:['Små dampede dumplings, gode at dele som ekstra ret. Mere snack end fuldt hovedmåltid for de fleste.']},
        {heading:'Bánh mì',paragraphs:['Hoi An har flere meget kendte bánh mì-steder. Kø og hype er ikke altid lig med dit bedste måltid, så prøv gerne mere end ét mindre sted.']},
      ]},
      {id:'marked',heading:'Central Market og små specialsteder',paragraphs:['Markedet er bedst tidligt, når der er mere lokal aktivitet. Rundt i centrum finder du mange små steder med få retter, som ofte er mere interessante end restauranter, der forsøger at servere alt.','Kig efter høj udskiftning og mad, der bliver lavet løbende.']},
      {id:'kursus',heading:'Madlavningskursus: hvornår giver det mening?',paragraphs:['Et godt kursus kombinerer marked, råvarer og reel madlavning. Tjek hvor stor en del af programmet der går til transport, båd eller demonstration, hvis dit mål faktisk er at lære teknikker.','På et kort 2-dages ophold ville vi kun booke kursus, hvis mad er en hovedinteresse.']},
      {id:'plan',heading:'En enkel maddag',paragraphs:['Morgen: bánh mì eller lokal morgenmad. Frokost: cao lầu. Eftermiddag: kaffe og en lille snack. Aften: mì Quảng eller et længere måltid med flere regionale retter.','Det er rigeligt. Hoi An bliver ikke bedre af at spise fem “must try”-retter på samme time.']},
    ],
    related:[{href:'/destinationer/hoi-an/3-dage-i-hoi-an/',title:'3 dage i Hoi An',text:'Se hvor måltiderne passer naturligt ind.'},{href:'/destinationer/hoi-an/sevaerdigheder/',title:'Seværdigheder i Hoi An',text:'Kombinér mad og Old Town uden ekstra transport.'},...relatedBase],
  },

  'da-nang-til-hoi-an': {
    destinationName:'Hoi An',
    title:'Da Nang til Hoi An 2026 | Lufthavn, Grab, taxi og transfer',
    description:'Sådan kommer du fra Da Nang lufthavn eller centrum til Hoi An. Sammenlign Grab, taxi, privat transfer og praktiske valg med bagage eller sen ankomst.',
    eyebrow:'Hoi An · Transport',
    heading:'Fra Da Nang til Hoi An: gør transferen enkel',
    intro:'Hoi An har ingen stor kommerciel lufthavn, så de fleste kommer via Da Nang. Afstanden er kort nok til, at bil normalt er den mest enkle løsning.',
    hero, sources:[{label:'Vietnam Tourism - Hoi An',href:'https://vietnam.travel/node/99'},{label:'Vietnam Tourism - Da Nang',href:'https://vietnam.travel/node/1843'}],
    quickFacts:[{label:'Fra lufthavn',value:'Bil er lettest'},{label:'Med bagage',value:'Taxi / transfer'},{label:'Stop undervejs',value:'Marble Mountains muligt'}],
    sections:[
      {id:'lufthavn',heading:'Da Nang lufthavn til Hoi An',paragraphs:['Med kufferter ville vi tage Grab, officiel taxi eller en forudbestilt transfer. Det er dør til dør og sparer tid efter en flyrejse.','Ved sen ankomst er en hotelarrangeret transfer ekstra behagelig, fordi chaufføren kender den præcise adresse og dit hotel ved, hvornår du kommer.']},
      {id:'grab-taxi',heading:'Grab, taxi eller privat transfer?',paragraphs:['Grab er praktisk, fordi du ser destination og forventet pris i appen. Taxi er lige så brugbar fra lufthavn og større hoteller. Privat transfer giver mest mening for familier, grupper eller hvis du ønsker et stop undervejs.','Sammenlign totalpris for hele bilen - ikke kun pris pr. person på shuttle.']},
      {id:'stop',heading:'Marble Mountains på vejen',paragraphs:['Marble Mountains ligger naturligt mellem Da Nang og Hoi An. Hvis flytider og bagageopbevaring passer, kan det være et effektivt stop.','Vi ville ikke gøre det efter en lang natflyvning. Et godt transferstop skal gøre rejsen bedre, ikke bare fylde programmet.']},
      {id:'tilbage',heading:'Hoi An til Da Nang lufthavn',paragraphs:['Bestil bilen med god buffer. Trafik kan variere, og international check-in tager tid.','Spørg hotellet om anbefalet afgangstid ud fra dit fly og tidspunkt på dagen.']},
    ],
    related:[{href:'/destinationer/da-nang/',title:'Da Nang rejseguide',text:'Se hvad der er værd at opleve før eller efter Hoi An.'},{href:'/destinationer/hoi-an/hvor-skal-man-bo/',title:'Hvor skal man bo i Hoi An?',text:'Vælg området før transferen.'},...relatedBase],
  },
};
