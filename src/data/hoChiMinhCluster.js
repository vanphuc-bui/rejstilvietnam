const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Motorcycles%20in%20Ho%20Chi%20Minh%20city.jpg?width=1800',
  alt:'Motorcykeltrafik i Ho Chi Minh City',
  caption:'Ho Chi Minh City er nemmest at planlægge i kvarterer. Centrum kan gås i bidder, mens længere ture kræver Grab eller taxi.',
  credit:'Nam-ho Park / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Motorcycles_in_Ho_Chi_Minh_city.jpg',
};
const marketImage = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Ben%20Thanh%20Market.jpg?width=1500',
  alt:'Ben Thanh Market i Ho Chi Minh City',
  caption:'Ben Thanh er centralt og let at kombinere med District 1, men byen har langt mere at byde på end markedet alene.',
  credit:'Jean-Marie Hullot / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Ben_Thanh_Market.jpg',
};
const sources = [
  { label:'Vietnam Tourism - Ho Chi Minh City', href:'https://beta-v2.vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city' },
  { label:'Tripadvisor Danmark - seværdigheder i Ho Chi Minh City', href:'https://www.tripadvisor.dk/Attractions-g293925-Activities-Ho_Chi_Minh_City.html' },
];
const hotelSources = [
  ...sources,
  { label:'Tripadvisor Danmark - hoteller i Ho Chi Minh City', href:'https://www.tripadvisor.dk/Hotels-g293925-Ho_Chi_Minh_City-Hotels.html' },
];
const relatedBase = [
  { href:'/destinationer/ho-chi-minh-city/', title:'Ho Chi Minh City rejseguide', text:'Tilbage til hele Ho Chi Minh City-hubben.' },
  { href:'/destinationer/phu-quoc/', title:'Phu Quoc rejseguide', text:'Et oplagt strandstop efter storbyen, hvis ruten har plads.' },
];

export const hoChiMinhPages = {
  'sevaerdigheder': {
    destinationName:'Ho Chi Minh City', title:'Ho Chi Minh City seværdigheder 2026 | Hvad skal man se?',
    description:'Guide til de vigtigste seværdigheder i Ho Chi Minh City: War Remnants Museum, Reunification Palace, Central Post Office, Nguyen Hue, markeder og floden.',
    eyebrow:'Ho Chi Minh City · Seværdigheder', heading:'Seværdigheder i Ho Chi Minh City: planlæg i kvarterer, ikke på kryds og tværs',
    intro:'Byen er stor nok til, at en dårlig rute koster mere tid end én ekstra seværdighed giver. På en første rejse ville vi samle District 1 og District 3 i logiske blokke.', hero, sources,
    quickFacts:[{label:'Historie',value:'War Remnants Museum'},{label:'Arkitektur',value:'Post Office + centrum'},{label:'Aften',value:'Nguyen Hue + floden'}],
    sections:[
      {id:'historie',heading:'War Remnants Museum og Reunification Palace',paragraphs:['War Remnants Museum er et af de steder, vi ville prioritere højt, hvis du vil forstå krigens betydning fra et vietnamesisk perspektiv. Indholdet kan være følelsesmæssigt tungt, så læg ikke fem andre museer bagefter.','Reunification Palace ligger forholdsvis tæt på og kan kombineres samme dag. Giv dig tid til både interiør og historisk kontekst frem for kun et billede foran bygningen.']},
      {id:'district1',heading:'Central Post Office, Notre Dame-området og Dong Khoi',paragraphs:['Det centrale postkontor, Notre Dame-området, Dong Khoi og operahuset ligger tæt nok til en samlet gåtur. Katedralen kan være under restaurering, så vurder stedet som del af området snarere end et mål i sig selv.','Fortsæt mod Nguyen Hue og Saigon River sidst på eftermiddagen, hvor varmen er mindre hård.']},
      {id:'markeder',heading:'Ben Thanh og markeder',paragraphs:['Ben Thanh er nemt at kigge forbi, især hvis du bor i District 1. Det er godt til orientering og souvenirs, men vi ville ikke bruge en halv dag her.','Vil du opleve mere dagligdags handel, er mindre lokale markeder uden for turistkernen ofte mere interessante.'],image:marketImage},
      {id:'aften',heading:'Byen efter mørkets frembrud',paragraphs:['Nguyen Hue er et godt, enkelt aftenstop. Rooftopbarer og udsigtspunkter kan være fine, men du behøver ikke købe adgang til et tårn for at opleve skyline.','Bui Vien er relevant, hvis natteliv er målet. Hvis ikke, er der ingen grund til at vælge hotel lige ved gaden.']},
    ],
    mapPlaces:[{name:'War Remnants Museum',detail:'Historie og kontekst',lat:10.7795,lng:106.6921},{name:'Reunification Palace',detail:'Historisk palads',lat:10.7770,lng:106.6953},{name:'Central Post Office',detail:'Kolonial arkitektur',lat:10.7798,lng:106.7000},{name:'Nguyen Hue',detail:'Aften og gåtur',lat:10.7732,lng:106.7031},{name:'Ben Thanh Market',detail:'Marked i District 1',lat:10.7725,lng:106.6980}],
    mapTitle:'Centrale seværdigheder i Ho Chi Minh City',
    related:[{href:'/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/',title:'3 dage i Ho Chi Minh City',text:'Se en rute, der holder transporten nede.'},{href:'/destinationer/ho-chi-minh-city/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg base efter støj, gåafstand og rejsetype.'},...relatedBase],
  },

  '3-dage-i-ho-chi-minh-city': {
    destinationName:'Ho Chi Minh City', title:'3 dage i Ho Chi Minh City 2026 | Rejseplan dag for dag',
    description:'En realistisk 3-dages rejseplan for Ho Chi Minh City med centrum, historie, mad og valgfri Cu Chi eller Mekong uden unødvendig transport.',
    eyebrow:'Ho Chi Minh City · Rejseplan', heading:'3 dage i Ho Chi Minh City: storbyen først, dagsturen bagefter',
    intro:'Tre dage er nok til et stærkt første indtryk, hvis du ikke bruger hver dag på lange ture ud af byen. Vi ville holde de første to dage urbane og bruge dag tre efter interesse.', hero, sources,
    quickFacts:[{label:'Dag 1',value:'District 1 til fods'},{label:'Dag 2',value:'Historie + mad'},{label:'Dag 3',value:'Cu Chi, Mekong eller mere by'}],
    sections:[
      {id:'dag1',heading:'Dag 1: det centrale Saigon',paragraphs:['Start med Central Post Office, Dong Khoi og Nguyen Hue. Spis frokost i centrum og brug eftermiddagen på Ben Thanh-området eller en pause på hotellet.','Om aftenen ville vi gå tilbage til Nguyen Hue eller spise i District 1/3 frem for at bruge tid i bil.']},
      {id:'dag2',heading:'Dag 2: historie og District 3',paragraphs:['Brug formiddagen på War Remnants Museum og Reunification Palace. Fortsæt derefter mod District 3 til caféer og mad.','Anden dag er et godt tidspunkt til food tour eller bare en selvplanlagt maddag, fordi du allerede kender trafikken og centrum lidt bedre.']},
      {id:'dag3',heading:'Dag 3: vælg én retning',paragraphs:['Cu Chi passer bedst, hvis historie er vigtig. Mekong passer bedre, hvis du vil ud af storbyen og se et flodlandskab. Hvis du ikke vil sidde mange timer i transport, bliver en tredje bydag med Chinatown, markeder eller caféer ofte bedre.','Vi ville ikke kombinere Cu Chi og Mekong samme dag på en første rejse, medmindre en lang organiseret dag specifikt er det, du ønsker.']},
      {id:'mere',heading:'Hvis du har fire eller fem dage',paragraphs:['Så kan du tage både en dagstur og stadig have tid til byen. Alternativt kan du bruge en nat i Mekongdeltaet i stedet for endnu en hotelnat i centrum.','Har du internationale fly videre, så behold sidste nat i byen som buffer.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/cu-chi-tunneler-fra-ho-chi-minh-city/',title:'Cu Chi fra Ho Chi Minh City',text:'Se om en halv eller hel dag passer.'},{href:'/destinationer/ho-chi-minh-city/mekong-delta-fra-ho-chi-minh-city/',title:'Mekongdeltaet fra Ho Chi Minh City',text:'Dagstur eller overnatning?'},...relatedBase],
  },

  'hvor-skal-man-bo': {
    destinationName:'Ho Chi Minh City', title:'Hvor skal man bo i Ho Chi Minh City? De bedste områder',
    description:'Sammenlign District 1, District 3, Thao Dien og andre områder i Ho Chi Minh City. Guide til første besøg, familier, natteliv og længere ophold.',
    eyebrow:'Ho Chi Minh City · Områder', heading:'Hvor skal man bo i Ho Chi Minh City? Vælg gaden lige så nøje som distriktet',
    intro:'District 1 er ikke automatisk perfekt, og District 3 er ikke langt væk fra alt. Det vigtigste på et kort ophold er at reducere den transport, du faktisk kommer til at tage.', hero, sources:hotelSources,
    quickFacts:[{label:'Første gang',value:'District 1'},{label:'Mere lokalt centralt',value:'District 3'},{label:'Længere ophold',value:'Thao Dien'}],
    sections:[
      {id:'district1',heading:'District 1: nemmest første gang',paragraphs:['Du kan gå til mange seværdigheder, restauranter og rooftopbarer. Det er den enkleste base til 2-4 nætter.','Ulempen er støj og pris. Tjek den konkrete gade, især omkring Bui Vien og andre nattelivsområder.']},
      {id:'district3',heading:'District 3: central, men mindre turistet',paragraphs:['District 3 ligger tæt på War Remnants Museum og har mange caféer og lokale restauranter. Det er vores favorit, hvis du vil være central uden at bo midt i District 1.','Du vil stadig tage korte Grab-ture, men afstanden er normalt håndterbar.']},
      {id:'thao-dien',heading:'Thao Dien: bedre til længere ophold',paragraphs:['Thao Dien har mange caféer, restauranter, internationale butikker og lejligheder. Det fungerer godt i en uge eller mere.','På en første 3-dages tur ville vi ikke vælge området, fordi du bruger mere tid på transport til de klassiske seværdigheder.']},
      {id:'andre',heading:'Binh Thanh og andre områder',paragraphs:['Binh Thanh kan give mere plads og nyere lejligheder tæt på centrum, men vurder præcis placering og transport.','Billigere pris er kun en gevinst, hvis du ikke bagefter bruger meget tid og penge på biler.']},
    ],
    mapPlaces:[{name:'District 1',detail:'Mest praktisk første gang',lat:10.7756,lng:106.7019},{name:'District 3',detail:'Central og mere lokal',lat:10.7848,lng:106.6840},{name:'Thao Dien',detail:'Caféer og længere ophold',lat:10.8048,lng:106.7331},{name:'Binh Thanh',detail:'Boligområder tæt på centrum',lat:10.8038,lng:106.7108}],
    related:[{href:'/destinationer/ho-chi-minh-city/bedste-hoteller/',title:'Bedste hoteller i Ho Chi Minh City',text:'Se hotelvalg efter område.'},{href:'/destinationer/ho-chi-minh-city/lufthavn-til-centrum/',title:'Lufthavn til centrum',text:'Se transport fra Tan Son Nhat.'},...relatedBase],
  },

  'bedste-hoteller': {
    destinationName:'Ho Chi Minh City', title:'Bedste hoteller i Ho Chi Minh City 2026 | 6 gode valg',
    description:'En kort hotelshortlist i Ho Chi Minh City efter område og rejsetype - centrale luksushoteller, boutique, value og District 3.',
    eyebrow:'Ho Chi Minh City · Hoteller', heading:'Bedste hoteller i Ho Chi Minh City: seks steder vi ville sammenligne først',
    intro:'Hotelmarkedet er enormt. I stedet for 50 navne ville vi starte med seks tydelige referencepunkter og sammenligne dem mod dine datoer og dit ønskede område.', hero, sources:hotelSources,
    quickFacts:[{label:'Klassisk luksus',value:'Park Hyatt Saigon'},{label:'Design',value:'Hôtel des Arts'},{label:'Central value',value:'Liberty Central / Silverland'}],
    sections:[
      {id:'shortlist',heading:'Seks hoteller at bruge som udgangspunkt',subsections:[
        {heading:'Park Hyatt Saigon',paragraphs:['Klassisk luksus ved Lam Son Square. Stærk placering til District 1 og et godt referencepunkt for high-end priser.']},
        {heading:'Hôtel des Arts Saigon',paragraphs:['Designpræget hotel tæt på District 1/3. Relevant til par, der vil have rooftop og boutique-følelse.']},
        {heading:'Fusion Original Saigon Centre',paragraphs:['Meget central placering integreret med Saigon Centre. Praktisk hvis shopping, mad og komfort betyder mere end resortfaciliteter.']},
        {heading:'Liberty Central Saigon Citypoint',paragraphs:['Et populært centralt mellemklasse/upper-midscale valg med nem adgang til Nguyen Hue og markedet.']},
        {heading:'Silverland Ben Thanh',paragraphs:['Boutiquevalg tæt på Ben Thanh. Godt til korte ophold, men tjek værelsets størrelse og vindue på den konkrete kategori.']},
        {heading:'Mai House Saigon',paragraphs:['Et roligere, elegant valg i District 3 med kort afstand til centrum. Godt hvis du prioriterer søvn og atmosfære over at være midt i turistkernen.']},
      ]},
      {id:'valg',heading:'Vælg hotel efter det du vil gøre',bullets:['2-3 dage: prioriter gåafstand til District 1/3.','Natteliv: tjek støj i de nyeste anmeldelser.','Familie: vælg større værelse og pool før rooftopbar.','Sen ankomst: gør lufthavnstransfer enkel.','Book fleksibelt hvis din Vietnamrute stadig ændrer sig.']},
      {id:'pris',heading:'Hvorfor vi ikke rangerer efter pris',paragraphs:['Priser ændrer sig med ugedag, events og værelsestype. Den billigste rate i dag siger meget lidt om værdien på din rejsedato.','Sammenlign samme dato, samme afbestillingsvilkår og samme morgenmadstype, før du konkluderer.']},
    ],
    mapPlaces:[{name:'Park Hyatt Saigon',detail:'District 1',lat:10.7772,lng:106.7034},{name:'Hôtel des Arts Saigon',detail:'Tæt på District 3',lat:10.7824,lng:106.6970},{name:'Liberty Central Saigon Citypoint',detail:'Central District 1',lat:10.7758,lng:106.7006},{name:'Mai House Saigon',detail:'District 3',lat:10.7809,lng:106.6914}],
    related:[{href:'/destinationer/ho-chi-minh-city/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg distrikt før hotel.'},...relatedBase],
  },

  'mad-i-ho-chi-minh-city': {
    destinationName:'Ho Chi Minh City', title:'Mad i Ho Chi Minh City 2026 | Street food og Saigon-retter',
    description:'Hvad skal man spise i Ho Chi Minh City? Guide til cơm tấm, bánh mì, hủ tiếu, bò lá lốt, street food og hvordan du finder gode spisesteder.',
    eyebrow:'Ho Chi Minh City · Mad', heading:'Mad i Ho Chi Minh City: spis bredt, ikke bare phở',
    intro:'Saigon er en af de bedste byer i Vietnam til at spise mange forskellige stilarter på få dage. Vi ville især prioritere sydvietnamesiske retter og små specialsteder.', hero, sources,
    quickFacts:[{label:'Saigon-klassiker',value:'Cơm tấm'},{label:'Hurtigt måltid',value:'Bánh mì'},{label:'Nudler',value:'Hủ tiếu'}],
    sections:[
      {id:'klassikere',heading:'Fire retter vi ville starte med',subsections:[
        {heading:'Cơm tấm',paragraphs:['Broken rice med grillet svinekød, æg og fiskesauce. Perfekt til et enkelt frokost- eller aftensmåltid.']},
        {heading:'Bánh mì',paragraphs:['Byen har utallige varianter. Prøv et travlt lokalt sted og spis den frisk.']},
        {heading:'Hủ tiếu',paragraphs:['En sydvietnamesisk nudelret, der kan serveres med eller uden suppe. God kontrast til phở.']},
        {heading:'Bò lá lốt',paragraphs:['Krydret oksekød rullet i betelblade og grillet. Ofte bedst som del af et måltid med urter og rispapir.']},
      ]},
      {id:'omraader',heading:'Hvor ville vi spise?',paragraphs:['District 1 har stort udvalg og er nemt, men gå et par gader væk fra de mest turistede zoner. District 3 og Binh Thanh har mange stærke lokale valg.','Chinatown/Cho Lon er interessant til kinesisk-vietnamesiske retter, hvis du har ekstra tid.']},
      {id:'food-tour',heading:'Food tour eller på egen hånd?',paragraphs:['En god food tour kan få dig ud af centrum og gøre bestilling lettere. Tjek gruppestørrelse, transportform og om stoppene faktisk er forskellige.','På egen hånd er nemt, hvis du bruger kort, nyere anmeldelser og er villig til at pege på retter.']},
      {id:'hygiejne',heading:'Hygiejne uden at blive paranoid',paragraphs:['Vælg travle steder med høj udskiftning, og vær mere forsigtig med mad, der har stået længe i varmen. Drik flaske- eller filtreret vand.','Hvis din mave ikke er vant til meget stærk eller rå mad, så øg tempoet gradvist de første dage.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/',title:'3 dage i Ho Chi Minh City',text:'Se hvor måltiderne passer ind.'},{href:'/destinationer/ho-chi-minh-city/sevaerdigheder/',title:'Seværdigheder',text:'Planlæg mad og sightseeing i samme områder.'},...relatedBase],
  },

  'cu-chi-tunneler-fra-ho-chi-minh-city': {
    destinationName:'Ho Chi Minh City', title:'Cu Chi-tunnelerne fra Ho Chi Minh City 2026 | Guide og transport',
    description:'Guide til Cu Chi-tunnelerne fra Ho Chi Minh City: Ben Dinh vs Ben Duoc, halvdag eller heldag, transport og hvad du bør vide før besøget.',
    eyebrow:'Fra Ho Chi Minh City · Cu Chi', heading:'Cu Chi-tunnelerne fra Ho Chi Minh City: vælg område og tempo før turen',
    intro:'Cu Chi er en af de mest søgte dagsture fra byen. Oplevelsen bliver bedre, hvis du ved, at der findes forskellige besøgsområder og at transporten fylder en mærkbar del af dagen.', hero, sources:[...sources,{label:'Tripadvisor Danmark - Cu Chi Tunnels',href:'https://www.tripadvisor.dk/Attraction_Review-g293925-d2005896-Reviews-Cu_Chi_Tunnels-Ho_Chi_Minh_City.html'}],
    quickFacts:[{label:'Nem løsning',value:'Guidet halvdag'},{label:'Mere ro',value:'Overvej Ben Duoc'},{label:'Fra centrum',value:'Regn med vejtid'}],
    affiliateActivity:{
      title:'En konkret Cu Chi-tur, hvis du vil have transport og guide samlet',
      intro:'På denne side handler valget især om Ben Dinh/Ben Duoc, gruppestørrelse og hvor meget tid turen faktisk bruger ved tunnelerne.',
      item:{
        title:'Cu Chi-tunnelerne fra Ho Chi Minh City',
        text:'En enkel løsning til den klassiske udflugt fra byen. Sammenlign pickup, gruppestørrelse og om turen er halv- eller heldag, før du booker.',
        href:'https://gyg.me/MRjWVwG3',
        image:'https://commons.wikimedia.org/wiki/Special:FilePath/Cu%20Chi%20Tunnel%20Vietnam%20%2838647687955%29.jpg?width=1200',
        alt:'Indgang ved Cu Chi-tunnelerne nær Ho Chi Minh City',
        badge:'Historie',
        highlights:['Guide','Transport','Halv-/heldag','Flere ruter'],
        cta:'Se tur og aktuel pris',
      },
    },
    sections:[
      {id:'hvad',heading:'Hvad er Cu Chi?',paragraphs:['Tunnelsystemet blev brugt under krigene i Vietnam og viser underjordiske passager, skjulesteder og militær logistik. Besøget kombinerer historisk formidling med rekonstruerede eller tilpassede dele af tunneloplevelsen.','Det er værd at komme med en guide, der kan forklare konteksten frem for kun at fokusere på at kravle i tunneler.']},
      {id:'ben-dinh',heading:'Ben Dinh eller Ben Duoc?',paragraphs:['Ben Dinh bruges af mange standardture og er praktisk på en halvdag. Ben Duoc ligger længere væk og kan føles mere omfattende og mindre komprimeret.','Vælg ikke kun ud fra transporttid. Læs den konkrete turrute og hvor længe gruppen faktisk er på stedet.']},
      {id:'tur',heading:'Halvdag eller heldag?',paragraphs:['En halvdag er nok for de fleste, hvis Cu Chi er det eneste mål. En heldag giver kun mening, hvis den kombineres med noget, du faktisk vil se - ikke bare fordi pakken har flere stop.','Vi ville undgå at kombinere Cu Chi og Mekong på én meget lang dag på en første rejse.']},
      {id:'praktisk',heading:'Praktisk og komfort',paragraphs:['Tunnelerne er smalle, varme og ikke nødvendige at kravle i for at få noget ud af besøget. Du kan springe den del over.','Tag let tøj, vand og sko, der tåler jord. Hvis du har klaustrofobi eller mobilitetsproblemer, så fortæl guiden det.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/mekong-delta-fra-ho-chi-minh-city/',title:'Mekongdeltaet fra byen',text:'Sammenlign den anden klassiske dagstur.'},{href:'/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/',title:'3 dage i Ho Chi Minh City',text:'Se om Cu Chi passer i planen.'},...relatedBase],
  },

  'mekong-delta-fra-ho-chi-minh-city': {
    destinationName:'Ho Chi Minh City', title:'Mekongdeltaet fra Ho Chi Minh City | Dagstur eller nat?',
    description:'Guide til Mekongdeltaet fra Ho Chi Minh City: My Tho, Ben Tre, Can Tho, dagstur eller overnatning og hvordan du undgår en alt for turistet tur.',
    eyebrow:'Fra Ho Chi Minh City · Mekong', heading:'Mekongdeltaet fra Ho Chi Minh City: dagstur er let, én nat giver mere mening',
    intro:'Mekongdeltaet er enormt. En dagstur viser kun en lille smule, så det vigtigste er at vælge forventning og rute rigtigt.', hero, sources,
    quickFacts:[{label:'Nem dagstur',value:'Ben Tre / My Tho'},{label:'Mere dybde',value:'1 nat i deltaet'},{label:'Flydende markeder',value:'Kræver tidlig start'}],
    affiliateActivity:{
      title:'En Mekong-dagstur giver mest mening, når ruten er tydelig',
      intro:'Se efter reel bådtid, gruppestørrelse og antallet af kommercielle stop. Færre, bedre stop er ofte et bedre køb end en meget lang liste.',
      item:{
        title:'Mekongdeltaet fra Ho Chi Minh City',
        text:'En heldag væk fra storbyen med flodlandskab og bådoplevelser. Brug linket til at sammenligne ruter mod Ben Tre/My Tho og hvad der faktisk er inkluderet.',
        href:'https://gyg.me/s0aFRCaH',
        image:'https://commons.wikimedia.org/wiki/Special:FilePath/Vietnam%2C%20Phong%20Dien%2C%20Mekong%20Delta.jpg?width=1200',
        alt:'Båd på en kanal i Mekongdeltaet',
        badge:'Flod & landskab',
        highlights:['Heldag','Bådtur','Ben Tre / My Tho','Pickup muligt'],
        cta:'Se tur og aktuel pris',
      },
    },
    sections:[
      {id:'dagstur',heading:'Dagstur: hvad får du realistisk?',paragraphs:['Standardture går ofte mod My Tho eller Ben Tre og kombinerer båd, små kanaler, landsbybesøg og frokost. Det er en introduktion - ikke “hele Mekongdeltaet”.','Læs ruten nøje. For mange korte salgsstop kan gøre turen mere kommerciel end interessant.']},
      {id:'overnatning',heading:'Hvorfor én nat kan være bedre',paragraphs:['Med en overnatning kan du komme længere væk fra Ho Chi Minh City og opleve tidlige morgener, markeder eller flodliv uden at skulle vende tilbage samme aften.','Can Tho er en klassisk base, men vælg efter den konkrete rute og transport videre på din Vietnamrejse.']},
      {id:'valg',heading:'Mekong eller Cu Chi?',paragraphs:['Vælg Mekong for landskab, flodliv og en pause fra storbyen. Vælg Cu Chi for krigshistorie og en mere fokuseret halvdag.','Har du kun tre dage i Ho Chi Minh City, ville vi tage højst én af dem.']},
      {id:'booking',heading:'Hvad skal du kigge efter i en tur?',bullets:['Lille gruppe eller privat hvis budgettet tillader det.','Klar beskrivelse af faktisk sejltid og transporttid.','Færre salgsstop og mere tid i lokale miljøer.','Afbestillingsvilkår, især i regnperioden.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/cu-chi-tunneler-fra-ho-chi-minh-city/',title:'Cu Chi-tunnelerne',text:'Sammenlign historie med flodlandskab.'},{href:'/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/',title:'3 dage i byen',text:'Se hvor en dagstur passer.'},...relatedBase],
  },

  'lufthavn-til-centrum': {
    destinationName:'Ho Chi Minh City', title:'Ho Chi Minh City lufthavn til centrum | Grab og taxi',
    description:'Sådan kommer du fra Tan Son Nhat (SGN) til District 1, District 3 og centrum. Sammenlign Grab, officiel taxi og hoteltransfer.',
    eyebrow:'Ho Chi Minh City · Transport', heading:'Fra Tan Son Nhat til centrum: planlæg efter trafik, ikke kun kilometer',
    intro:'Lufthavnen ligger tæt på centrum på kortet, men trafikken kan gøre turen langsom. En enkel dør-til-dør-løsning er ofte det værd efter en lang flyrejse.', hero, sources,
    quickFacts:[{label:'Nemmest',value:'Grab / officiel taxi'},{label:'Sen ankomst',value:'Hoteltransfer kan være rar'},{label:'Vigtigst',value:'Læg buffer til trafik'}],
    sections:[
      {id:'grab',heading:'Grab',paragraphs:['Grab er praktisk, fordi du indtaster hotellet og ser en forventet pris i appen. Følg lufthavnens anvisning til det aktuelle pickupområde og kontrollér nummerpladen.','Sørg for dataforbindelse. Et eSIM eller lufthavnens Wi-Fi gør ankomsten lettere.']},
      {id:'taxi',heading:'Officiel taxi',paragraphs:['En officiel taxikø er et enkelt alternativ, hvis du ikke vil bruge app. Hav hotelnavn og adresse klar.','Vi ville undgå tilfældige tilbud fra personer inde i ankomsthallen, hvis pris og selskab ikke er tydelige.']},
      {id:'transfer',heading:'Hoteltransfer',paragraphs:['Transfer giver mest mening ved sen ankomst, mange kufferter, børn eller hvis du bare vil fjerne ét usikkert element fra rejsen.','Sammenlign totalprisen med Grab/taxi, men husk at komfort også har værdi efter en lang flyrejse.']},
      {id:'tid',heading:'Hvor lang tid tager det?',paragraphs:['Afstand alene er misvisende. Rejsetid afhænger kraftigt af tidspunkt, regn og trafik.','På vej tilbage til lufthavnen ville vi spørge hotellet om anbefalet afgangstid samme dag og lægge ekstra buffer til internationalt fly.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se hvilke områder der er lettest på et kort ophold.'},{href:'/destinationer/ho-chi-minh-city/bedste-hoteller/',title:'Bedste hoteller',text:'Vælg hotel efter område og rejsetype.'},...relatedBase],
  },

  'bedste-rejsetid': {
    destinationName:'Ho Chi Minh City', title:'Bedste rejsetid til Ho Chi Minh City 2026 | Vejr måned for måned',
    description:'Hvornår er det bedst at rejse til Ho Chi Minh City? Forstå tør sæson, regntid, varme og hvad eftermiddagsregn betyder for din rejseplan.',
    eyebrow:'Ho Chi Minh City · Vejr', heading:'Bedste rejsetid til Ho Chi Minh City: varmt hele året, men regnen ændrer rytmen',
    intro:'Temperaturen er relativt stabil. Den største forskel er tør og våd sæson, så vi ville planlægge dagens timing mere end jagte en bestemt “perfekt” måned.', hero, sources:[{label:'Vietnam Tourism - weather and climate',href:'https://beta-v1.vietnam.travel/things-to-do/weather-and-climate-vietnam'}],
    quickFacts:[{label:'Tørre måneder',value:'Typisk dec-apr'},{label:'Våd sæson',value:'Typisk maj-nov'},{label:'Temperatur',value:'Varmt året rundt'}],
    sections:[
      {id:'dry',heading:'December til april: nemmest til klassisk storbyferie',paragraphs:['Denne periode har typisk mere klart og tørt vejr. Det gør gåture, rooftopbarer og dagsture lettere at planlægge.','Det kan stadig være meget varmt, især senere i perioden. Planlæg pauser midt på dagen.']},
      {id:'wet',heading:'Maj til november: regn betyder ikke konstant regn',paragraphs:['Den våde sæson giver ofte kraftige byger, især om eftermiddagen, men ikke nødvendigvis heldagsregn. En fleksibel plan med museum, café og Grab fungerer stadig godt.','Læg mere buffer til trafik, fordi kraftig regn kan påvirke rejsetider.']},
      {id:'maaneder',heading:'Hvornår ville vi selv vælge?',paragraphs:['Januar til marts er et stærkt kompromis til en førstegangsrejse: mindre regn og ofte lettere dage i byen.','Hvis resten af Vietnamruten fungerer bedre i en anden måned, ville vi ikke ændre hele rejsen kun for Ho Chi Minh City.']},
      {id:'pakning',heading:'Hvad skal du pakke?',bullets:['Let, åndbart tøj.','Solbeskyttelse og vandflaske.','Let regnjakke eller paraply i våd sæson.','Sko, der tåler våde fortove.']},
    ],
    related:[{href:'/destinationer/ho-chi-minh-city/3-dage-i-ho-chi-minh-city/',title:'3 dage i Ho Chi Minh City',text:'Planlæg dagene efter varme og regn.'},{href:'/rejseguide/bedste-rejsetid/',title:'Bedste rejsetid til Vietnam',text:'Sammenlign vejret med resten af landet.'},...relatedBase],
  },
};
