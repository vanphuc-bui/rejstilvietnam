const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Nha%20trang%20beach.jpg?width=1800',
  alt:'Bystranden i Nha Trang',
  caption:'Nha Trang er en rigtig by langs en lang strand, så hotelområde og gåafstand betyder meget for oplevelsen.',
  credit:'Jeong seolah / Wikimedia Commons (CC0)',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Nha_trang_beach.jpg',
};
const poNagarImage = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Po%20Nagar%2001.jpg?width=1500',
  alt:'Po Nagar Cham Towers i Nha Trang',
  caption:'Po Nagar er et af de letteste kulturstop at kombinere med en strandferie i Nha Trang.',
  credit:'Christophe95 / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Po_Nagar_01.jpg',
};
const sources = [
  { label:'Vietnam Tourism - Nha Trang', href:'https://beta-v2.vietnam.travel/vi/places-to-go/central-vietnam/nha-trang' },
  { label:'Vietnam Tourism - Nha Trang som en lokal', href:'https://beta-v2.vietnam.travel/vi/things-to-do/experience-nha-trang-local' },
  { label:'Tripadvisor Danmark - Nha Trang', href:'https://www.tripadvisor.dk/Tourism-g293928-Nha_Trang_Khanh_Hoa_Province-Vacations.html' },
];
const hotelSources = [
  ...sources,
  { label:'Tripadvisor Danmark - hoteller i Nha Trang', href:'https://www.tripadvisor.dk/Hotels-g293928-Nha_Trang_Khanh_Hoa_Province-Hotels.html' },
];
const relatedBase = [
  { href:'/destinationer/nha-trang/', title:'Nha Trang rejseguide', text:'Tilbage til hele Nha Trang-hubben.' },
  { href:'/destinationer/phu-quoc/', title:'Phu Quoc', text:'Sammenlign bystrand med en egentlig øferie.' },
];

export const nhaTrangPages = {
  'sevaerdigheder': {
    destinationName:'Nha Trang', title:'Nha Trang seværdigheder 2026 | Hvad skal man opleve?',
    description:'Guide til de bedste seværdigheder i Nha Trang: Po Nagar, Long Son Pagoda, Dam Market, mudderbad, øture og strand.',
    eyebrow:'Nha Trang · Seværdigheder', heading:'Seværdigheder i Nha Trang: bland kultur, vand og strand',
    intro:'Nha Trang er mest kendt for stranden, men der er nok kultur og lokale oplevelser til at give pauser fra resortlivet. Vi ville vælge få stop og lade havet fylde resten.', hero, sources,
    quickFacts:[{label:'Kultur',value:'Po Nagar'},{label:'By',value:'Dam Market'},{label:'Afslapning',value:'Mudderbad'}],
    sections:[
      {id:'po-nagar',heading:'Po Nagar Cham Towers',paragraphs:['Po Nagar ligger nord for centrum og er et af de stærkeste kulturhistoriske stop i byen. Tårnene stammer fra Cham-kulturen og bruges stadig religiøst.','Kom tidligt, klæd dig respektfuldt og kombiner besøget med den nordlige del af byen.'],image:poNagarImage},
      {id:'long-son',heading:'Long Son Pagoda',paragraphs:['Long Son er kendt for den store hvide Buddha og giver et andet indblik i byens religiøse liv. Der er trapper, så undgå den varmeste del af dagen.','Det er let at kombinere med centrum og et marked på samme halvdag.']},
      {id:'mud',heading:'Mudderbad og varme kilder',paragraphs:['Nha Trang er usædvanlig blandt Vietnams strandbyer, fordi mudderbade og varme kilder er en etableret del af oplevelsen. Det fungerer godt på en overskyet dag eller efter flere stranddage.','Sammenlign faciliteter og transport, især hvis du rejser med børn.']},
      {id:'islands',heading:'Øtur og snorkling',paragraphs:['Bådture går ud i Nha Trang-bugten til forskellige øer og snorkelområder. Kvaliteten varierer meget efter båd, gruppestørrelse og vejr.','Vælg tur efter hvad du faktisk vil gøre på vandet, ikke efter antallet af stop i brochuren.']},
    ],
    mapPlaces:[{name:'Po Nagar Cham Towers',detail:'Cham-historie',lat:12.2652,lng:109.1950},{name:'Long Son Pagoda',detail:'Pagode og stor Buddha',lat:12.2523,lng:109.1800},{name:'Dam Market',detail:'Centralt marked',lat:12.2557,lng:109.1905},{name:'Tran Phu Beach',detail:'Bystrand',lat:12.2380,lng:109.1970}],
    related:[{href:'/destinationer/nha-trang/3-dage-i-nha-trang/',title:'3 dage i Nha Trang',text:'Se hvordan strand og seværdigheder kan balanceres.'},{href:'/destinationer/nha-trang/bedste-strande/',title:'Bedste strande',text:'Sammenlign bystranden med områder uden for centrum.'},...relatedBase],
  },

  'hvor-skal-man-bo': {
    destinationName:'Nha Trang', title:'Hvor skal man bo i Nha Trang? Centrum, Tran Phu eller resort',
    description:'Sammenlign de bedste områder i Nha Trang: Tran Phu, nord for centrum og resortområder mod Cam Ranh. Guide til første besøg, strand og familier.',
    eyebrow:'Nha Trang · Områder', heading:'Hvor skal man bo i Nha Trang? Bystrand eller resort er det vigtigste valg',
    intro:'På en første rejse ville vi normalt bo centralt nok til at kunne gå til strand og restauranter. Resortområder længere væk giver mere ro, men de er en anden type ferie.', hero, sources:hotelSources,
    quickFacts:[{label:'Første gang',value:'Tran Phu / centrum'},{label:'Mere ro',value:'Nordlige kyst'},{label:'Resort',value:'Cam Ranh-korridoren'}],
    sections:[
      {id:'tran-phu',heading:'Tran Phu og centrum',paragraphs:['Det mest praktiske valg til 3-4 nætter. Du kan gå til strand, caféer, restauranter og mange services.','Vælg en sidegade eller højere etage, hvis trafikstøj langs hovedvejen bekymrer dig.']},
      {id:'north',heading:'Nord for centrum',paragraphs:['Området nord for floden og mod Hon Chong kan være roligere og mere lokalt. Du er stadig relativt tæt på Po Nagar og byen.','Det passer til dig, der gerne vil have byfunktioner men mindre turisttrafik.']},
      {id:'cam-ranh',heading:'Resortkysten mod Cam Ranh',paragraphs:['Mellem lufthavnen og Nha Trang ligger flere store resorts. Her er selve hotellet og stranden hovedoplevelsen.','Vælg dette, hvis du bevidst vil have resortferie. Det er ikke en praktisk base til at gå ud i Nha Trang hver aften.']},
      {id:'choice',heading:'Sådan ville vi vælge',paragraphs:['3 nætter og første gang: centrum. 5+ nætter med børn og strand som hovedmål: resort kan give mening.','Hvis du skal flyve tidligt fra Cam Ranh, kan en sidste nat tættere på lufthavnen også være praktisk.']},
    ],
    mapPlaces:[{name:'Tran Phu',detail:'Mest praktisk første gang',lat:12.2380,lng:109.1970},{name:'Hon Chong',detail:'Roligere nordkyst',lat:12.2730,lng:109.2020},{name:'Cam Ranh resortkyst',detail:'Resorts tættere på lufthavnen',lat:12.0500,lng:109.1950}],
    related:[{href:'/destinationer/nha-trang/bedste-hoteller/',title:'Bedste hoteller i Nha Trang',text:'Se hotelvalg efter område.'},{href:'/destinationer/nha-trang/bedste-strande/',title:'Bedste strande',text:'Vælg kyst før resort.'},...relatedBase],
  },

  'bedste-hoteller': {
    destinationName:'Nha Trang', title:'Bedste hoteller i Nha Trang 2026 | By, strand og resort',
    description:'En hotelshortlist i Nha Trang efter område og rejsetype - centrale strandhoteller, boutique og resorts mod Cam Ranh.',
    eyebrow:'Nha Trang · Hoteller', heading:'Bedste hoteller i Nha Trang: fem referencepunkter til at starte sammenligningen',
    intro:'Nha Trang har både høje byhoteller ved Tran Phu og store resorts uden for centrum. Vi ville først beslutte ferieform og derefter sammenligne priser.', hero, sources:hotelSources,
    quickFacts:[{label:'Central luksus',value:'InterContinental Nha Trang'},{label:'Value / central',value:'Libra / Novotel'},{label:'Resort',value:'Mia / Alma'}],
    sections:[
      {id:'shortlist',heading:'Fem hoteller vi ville bruge som reference',subsections:[
        {heading:'InterContinental Nha Trang',paragraphs:['Central strandplacering på Tran Phu. Godt til en kort førstegangsrejse, hvor komfort og byadgang begge er vigtige.']},
        {heading:'Novotel Nha Trang',paragraphs:['Et centralt referencepunkt i mellem/upper-midscale med nem adgang til bystranden.']},
        {heading:'Libra Nha Trang',paragraphs:['Et mere prisbevidst centralt valg, der er nyttigt at sammenligne mod de dyrere kædehoteller.']},
        {heading:'Mia Resort Nha Trang',paragraphs:['Resort syd for byen med mere privat strandfølelse. Passer bedre til afslapning end dagligt byliv.']},
        {heading:'Alma Resort Cam Ranh',paragraphs:['Stort familieorienteret resort tættere på Cam Ranh-lufthavnen end Nha Trang centrum. Et helt andet produkt end et byhotel.']},
      ]},
      {id:'valg',heading:'Hvad skal afgøre valget?',bullets:['Byhotel hvis du vil spise ude og gå til stranden.','Resort hvis pool, børnefaciliteter og strand er hovedformålet.','Tjek om stranden ligger på den anden side af en stor vej.','Sammenlign lufthavnstransfer til Cam Ranh.','Læs nyere anmeldelser om støj og byggearbejde.']},
      {id:'price',heading:'Pris uden område fortæller for lidt',paragraphs:['Et billigt resort langt fra byen kan ende med flere udgifter til mad og transport. Et dyrere centralt hotel kan til gengæld reducere behovet for taxi.','Sammenlign totaloplevelsen for dine konkrete dage, ikke bare natteprisen.']},
    ],
    mapPlaces:[{name:'InterContinental Nha Trang',detail:'Tran Phu centrum',lat:12.2481,lng:109.1964},{name:'Novotel Nha Trang',detail:'Central bystrand',lat:12.2373,lng:109.1969},{name:'Mia Resort Nha Trang',detail:'Resort syd for byen',lat:12.1138,lng:109.1955},{name:'Alma Resort Cam Ranh',detail:'Cam Ranh resortkyst',lat:12.0595,lng:109.1980}],
    related:[{href:'/destinationer/nha-trang/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg ferieform og område først.'},...relatedBase],
  },

  'bedste-strande': {
    destinationName:'Nha Trang', title:'Bedste strande i Nha Trang 2026 | Bystrand, Doc Let og resortkyst',
    description:'Guide til strandene i og omkring Nha Trang: Tran Phu, Hon Chong, Doc Let og resortkysten mod Cam Ranh. Se hvem de passer bedst til.',
    eyebrow:'Nha Trang · Strande', heading:'Bedste strande i Nha Trang: bystranden er praktisk, men ikke hele historien',
    intro:'Nha Trang har en lang central strand, men roligere eller mere resortprægede alternativer ligger uden for centrum. Vælg efter hvor meget transport du vil have.', hero, sources,
    quickFacts:[{label:'Nemmest',value:'Tran Phu'},{label:'Roligere',value:'Hon Chong / nord'},{label:'Udflugt',value:'Doc Let'}],
    sections:[
      {id:'tran-phu',heading:'Tran Phu Beach',paragraphs:['Den centrale bystrand er perfekt til en morgen- eller eftermiddagstur, især hvis du bor i centrum. Du har caféer og byliv lige bag dig.','Ulempen er trafik og mere urban stemning end på en isoleret strand.']},
      {id:'hon-chong',heading:'Hon Chong og nordkysten',paragraphs:['Nord for centrum bliver kysten roligere. Det er et godt alternativ, hvis du vil bo i byen men ikke midt i den mest travle del.','Strandforhold varierer lokalt, så se nyere billeder fra dit hotelområde.']},
      {id:'doc-let',heading:'Doc Let',paragraphs:['Doc Let ligger længere nordpå og bruges som dagstur af rejsende, der vil have mere klassisk strandfølelse. Transporten fylder en del af dagen.','Vi ville kun tage turen, hvis strand er en hovedprioritet; ellers kan tiden bruges bedre i selve Nha Trang.']},
      {id:'cam-ranh',heading:'Cam Ranh-resortkysten',paragraphs:['Syd for byen ligger lange resortstrækninger. De er bedst, hvis du bor der. At tage frem og tilbage fra centrum kun for stranden giver mindre mening.','Hvis du vælger resort, så accepter at ferien bliver mere hotelcentreret.']},
    ],
    related:[{href:'/destinationer/nha-trang/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se hvilken strandtype der passer til din base.'},{href:'/destinationer/nha-trang/3-dage-i-nha-trang/',title:'3 dage i Nha Trang',text:'Sæt strand ind i en kort plan.'},...relatedBase],
  },

  '3-dage-i-nha-trang': {
    destinationName:'Nha Trang', title:'3 dage i Nha Trang 2026 | Strand, Po Nagar og øtur',
    description:'Et realistisk forslag til 3 dage i Nha Trang med bystrand, Po Nagar, marked, mudderbad og valgfri øtur eller ekstra stranddag.',
    eyebrow:'Nha Trang · Rejseplan', heading:'3 dage i Nha Trang: lad stranden fylde mindst én hel dag',
    intro:'Tre dage er nok til at forstå byen, hvis du ikke fylder dem med tre organiserede ture. Vi ville kombinere kultur første dag, vand anden dag og fleksibilitet tredje dag.', hero, sources,
    quickFacts:[{label:'Dag 1',value:'By + Po Nagar'},{label:'Dag 2',value:'Øtur eller strand'},{label:'Dag 3',value:'Mudderbad + fri tid'}],
    sections:[
      {id:'dag1',heading:'Dag 1: centrum og historie',paragraphs:['Start med en gåtur langs Tran Phu, fortsæt til Dam Market eller centrum og tag senere til Po Nagar.','Brug aftenen på seafood eller regionale retter frem for endnu en seværdighed.']},
      {id:'dag2',heading:'Dag 2: på vandet eller på stranden',paragraphs:['Hvis vejret er godt og du vil snorkle, brug dagen på en øtur. Ellers er en rolig stranddag et mindst lige så godt valg.','Book ikke bådtur bare fordi den er populær - vurder vind og havforhold.']},
      {id:'dag3',heading:'Dag 3: mudderbad og fleksibilitet',paragraphs:['Et mudderbad eller varme kilder er en fin kontrast til havet. Kombinér det med Long Son Pagoda eller ekstra strandtid afhængigt af energi.','Hvis du flyver samme dag, hold aktiviteterne tættere på centrum og hotellet.']},
      {id:'extra',heading:'Hvis du har 4-5 dage',paragraphs:['Tilføj Doc Let eller en ekstra resort/stranddag i stedet for flere byseværdigheder.','Nha Trang fungerer bedst, når der er tid til ikke at lave noget mellem aktiviteterne.']},
    ],
    related:[{href:'/destinationer/nha-trang/sevaerdigheder/',title:'Seværdigheder i Nha Trang',text:'Vælg hvad der faktisk interesserer dig.'},{href:'/destinationer/nha-trang/bedste-strande/',title:'Bedste strande',text:'Vælg stranddag efter base og vejr.'},...relatedBase],
  },
};
