const hero = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Phu%20Quoc%20Beach.jpg?width=1800',
  alt:'Strand på Phu Quoc',
  caption:'Phu Quoc er stor nok til, at valg af område betyder mere end mange forventer. Strand, resort og restauranter ligger ikke altid samlet.',
  credit:'FrogsLegs71 / Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Phu_Quoc_Beach.jpg',
};
const beachImage = {
  src:'https://commons.wikimedia.org/wiki/Special:FilePath/Phu%20quoc%20beach.JPG?width=1500',
  alt:'Sandstrand og hav på Phu Quoc',
  caption:'Kystforhold varierer fra strand til strand og med sæsonen. Se på det konkrete område - ikke kun øens navn.',
  credit:'Wikimedia Commons',
  creditUrl:'https://commons.wikimedia.org/wiki/File:Phu_quoc_beach.JPG',
};
const sources = [
  { label:'Vietnam Tourism - Phu Quoc', href:'https://vietnam.travel/node/150' },
  { label:'Vietnam Tourism - weather and climate', href:'https://beta-v1.vietnam.travel/things-to-do/weather-and-climate-vietnam' },
];
const hotelSources = [
  ...sources,
  { label:'Tripadvisor Danmark - hoteller på Phu Quoc', href:'https://www.tripadvisor.dk/Hotels-g469418-Phu_Quoc_Island_Kien_Giang_Province-Hotels.html' },
];
const relatedBase = [
  { href:'/destinationer/phu-quoc/', title:'Phu Quoc rejseguide', text:'Tilbage til hele Phu Quoc-hubben.' },
  { href:'/destinationer/ho-chi-minh-city/', title:'Ho Chi Minh City', text:'Den mest oplagte storby at kombinere med Phu Quoc.' },
];

export const phuQuocPages = {
  'bedste-strande': {
    destinationName:'Phu Quoc', title:'Bedste strande på Phu Quoc 2026 | Bai Sao, Long Beach og Ong Lang',
    description:'Guide til de bedste strande på Phu Quoc: Bai Sao, Long Beach, Ong Lang, Bai Khem og nordkysten. Se hvem de passer til og hvornår du bør tage dertil.',
    eyebrow:'Phu Quoc · Strande', heading:'Bedste strande på Phu Quoc: vælg efter ferieform, ikke Instagram',
    intro:'Phu Quoc har mange kilometer kyst, men de bedste strande passer til forskellige typer ferie. Vi ville vælge efter beliggenhed, sæson og hvor meget transport du accepterer.', hero:beachImage, sources,
    quickFacts:[{label:'Postkort',value:'Bai Sao'},{label:'Mest praktisk',value:'Long Beach'},{label:'Roligere',value:'Ong Lang'}],
    sections:[
      {id:'bai-sao',heading:'Bai Sao: smuk, men kom tidligt',paragraphs:['Bai Sao er den klassiske hvide strand på mange billeder. Den er flot, men kan blive travl, især når dagsture ankommer.','Vi ville komme tidligt, bruge nogle timer og derefter fortsætte til andre stop i syd frem for at bruge hele dagen her.']},
      {id:'long-beach',heading:'Long Beach: mest praktisk til første ophold',paragraphs:['Long Beach ligger tæt på mange hoteller, restauranter og Duong Dong. Stranden er ikke nødvendigvis den mest spektakulære på øen, men logistikken er nem.','Solnedgangen er en stor fordel, og på et kort 3-4 nætters ophold betyder bekvemmelighed meget.']},
      {id:'ong-lang',heading:'Ong Lang: roligere vestkyst',paragraphs:['Ong Lang passer til boutiquehoteller og et mere stille tempo. Du har færre steder i gåafstand end omkring Long Beach, men det er netop pointen for mange.','Tjek den konkrete strandadgang ved hotellet. Kysten er ikke ens langs hele området.']},
      {id:'andre',heading:'Bai Khem, Bai Dai og nordkysten',paragraphs:['Bai Khem har flotte resortstrækninger i sydøst. Bai Dai og nordkysten passer bedre, hvis du bor på resort og ikke har behov for Duong Dong hver aften.','På én ferie ville vi hellere bruge to eller tre strande godt end at køre øen rundt for at samle billeder.']},
    ],
    mapPlaces:[{name:'Long Beach',detail:'Praktisk vestkyst',lat:10.1880,lng:103.9650},{name:'Ong Lang Beach',detail:'Roligere vestkyst',lat:10.2606,lng:103.9427},{name:'Bai Sao',detail:'Hvid sandstrand i syd',lat:10.0595,lng:104.0366},{name:'Bai Khem',detail:'Resortstrand i sydøst',lat:10.0389,lng:104.0356}],
    related:[{href:'/destinationer/phu-quoc/hvor-skal-man-bo/',title:'Hvor skal man bo på Phu Quoc?',text:'Vælg område ud fra strand og transport.'},{href:'/destinationer/phu-quoc/vejr-og-bedste-rejsetid/',title:'Vejr på Phu Quoc',text:'Sæsonen påvirker strandene markant.'},...relatedBase],
  },

  'hvor-skal-man-bo': {
    destinationName:'Phu Quoc', title:'Hvor skal man bo på Phu Quoc? De bedste områder 2026',
    description:'Sammenlign Long Beach, Duong Dong, Ong Lang, nordøen og sydøen på Phu Quoc. Find det bedste område til første besøg, resort, familier og strand.',
    eyebrow:'Phu Quoc · Områder', heading:'Hvor skal man bo på Phu Quoc? Området bestemmer mere end resortets stjerner',
    intro:'Øen er større, end hotelkort ofte får den til at se ud. Et flot resort kan være upraktisk, hvis du egentlig vil spise ude og udforske flere dele af øen.', hero, sources:hotelSources,
    quickFacts:[{label:'Første gang',value:'Long Beach / Duong Dong'},{label:'Roligere',value:'Ong Lang'},{label:'Resortferie',value:'Nord eller syd'}],
    sections:[
      {id:'long-beach',heading:'Long Beach og Duong Dong',paragraphs:['Det mest fleksible valg første gang. Du har restauranter, solnedgang, lufthavn i rimelig afstand og nemmere adgang til ture.','Ulempen er mere udvikling og trafik. Vælg hotel med direkte strandadgang, hvis det er vigtigt for dig.']},
      {id:'ong-lang',heading:'Ong Lang',paragraphs:['Bedre til ro, mindre hoteller og afslappede dage. Du kan stadig komme til Duong Dong med taxi/Grab, men det er ikke et område, hvor alt ligger lige uden for døren.','Godt til par og længere ophold, hvis natteliv ikke er vigtigt.']},
      {id:'nord',heading:'Nordøen og Bai Dai',paragraphs:['Nordøen har store resorts og attraktioner. Den passer til familier eller resortferie, hvor hotellet er en stor del af programmet.','Hvis du vil udforske sydøen flere dage, bliver transporten hurtigt lang.']},
      {id:'syd',heading:'Sydøen og Khem/An Thoi',paragraphs:['Syd er godt til øhop, kabelbane og flere attraktive strandområder. Til gengæld er du langt fra Duong Dong.','Vælg syd bevidst - især hvis bådture og resort er vigtigere end byliv.']},
    ],
    mapPlaces:[{name:'Duong Dong',detail:'By og flest hverdagsfunktioner',lat:10.2150,lng:103.9590},{name:'Long Beach',detail:'Praktisk strandbase',lat:10.1880,lng:103.9650},{name:'Ong Lang',detail:'Roligere vestkyst',lat:10.2606,lng:103.9427},{name:'Bai Dai',detail:'Resortområde i nord',lat:10.3290,lng:103.8560},{name:'An Thoi',detail:'Base til sydlige øture',lat:10.0226,lng:104.0070}],
    related:[{href:'/destinationer/phu-quoc/bedste-hoteller/',title:'Bedste hoteller på Phu Quoc',text:'Se en shortlist, når området er valgt.'},{href:'/destinationer/phu-quoc/bedste-strande/',title:'Bedste strande',text:'Se hvilken kyst der passer til dig.'},...relatedBase],
  },

  'bedste-hoteller': {
    destinationName:'Phu Quoc', title:'Bedste hoteller på Phu Quoc 2026 | Resort, familie og value',
    description:'En kort shortlist over gode hoteller og resorts på Phu Quoc efter område og rejsetype. Sammenlign Long Beach, Ong Lang, nord og syd.',
    eyebrow:'Phu Quoc · Hoteller', heading:'Bedste hoteller på Phu Quoc: vælg seks referencepunkter, ikke 100 resorts',
    intro:'Hoteludvalget spænder fra små boutiquehoteller til enorme resorts. Vi ville sammenligne få tydelige kandidater i forskellige områder og derefter se på dine datoer.', hero, sources:hotelSources,
    quickFacts:[{label:'Long Beach',value:'La Veranda / Salinda'},{label:'Ong Lang',value:'Mango Bay'},{label:'Luksus',value:'Regent / JW Marriott'}],
    sections:[
      {id:'shortlist',heading:'Seks steder vi ville sammenligne',subsections:[
        {heading:'La Veranda Resort Phu Quoc',paragraphs:['Klassisk boutique/resort-stil på Long Beach med praktisk placering til korte ophold.']},
        {heading:'Salinda Resort Phu Quoc',paragraphs:['Et poleret resortvalg tæt på Long Beach. Godt til par og familier, der vil kombinere resort og adgang til byen.']},
        {heading:'Mango Bay Resort',paragraphs:['Roligere, mere naturpræget valg ved Ong Lang. Relevant hvis atmosfære betyder mere end stor pool og mange faciliteter.']},
        {heading:'Regent Phu Quoc',paragraphs:['High-end resort i sydvest. Et referencepunkt for moderne luksus, hvor hotellet i sig selv er en stor del af rejsen.']},
        {heading:'JW Marriott Phu Quoc Emerald Bay',paragraphs:['Markant designresort ved Khem Beach. Bedst hvis du vil bo i syd og acceptere afstand til Duong Dong.']},
        {heading:'Premier Village Phu Quoc Resort',paragraphs:['Villa- og familieorienteret luksus på sydspidsen. Godt til grupper, men placeringen kræver bevidst planlægning.']},
      ]},
      {id:'valg',heading:'Sådan vælger du',bullets:['Kort ophold: prioriter område og transfer.','Familie: se på værelseslayout og adgang til mad, ikke kun børneklub.','Resortferie: accepter isolation hvis det er bevidst.','Strand: se nyere gæstebilleder af den konkrete kyst.','Våd sæson: pool og indendørs faciliteter bliver vigtigere.']},
      {id:'pris',heading:'Sammenlign den samme pakke',paragraphs:['Nogle resorts inkluderer morgenmad, transfer eller halvpension, mens andre viser en lav grundpris. Sammenlign totalen for samme antal gæster.','Når affiliate-links kommer senere, bør rangeringen fortsat være redaktionel og ikke følge provision.']},
    ],
    mapPlaces:[{name:'La Veranda Resort',detail:'Long Beach',lat:10.1968,lng:103.9660},{name:'Mango Bay Resort',detail:'Ong Lang',lat:10.2705,lng:103.9365},{name:'Regent Phu Quoc',detail:'Long Beach syd',lat:10.1230,lng:103.9950},{name:'JW Marriott Phu Quoc',detail:'Khem Beach',lat:10.0380,lng:104.0320}],
    related:[{href:'/destinationer/phu-quoc/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Vælg område først.'},{href:'/destinationer/phu-quoc/bedste-strande/',title:'Bedste strande',text:'Sammenlign kysterne før resortet.'},...relatedBase],
  },

  'sevaerdigheder': {
    destinationName:'Phu Quoc', title:'Phu Quoc seværdigheder 2026 | Hvad skal man opleve?',
    description:'De bedste oplevelser på Phu Quoc ud over stranden: øhop, snorkling, nationalpark, fiskesauce, peber, fængselshistorie og sydøen.',
    eyebrow:'Phu Quoc · Oplevelser', heading:'Seværdigheder på Phu Quoc: fyld ikke en strandferie med heldagsture',
    intro:'Phu Quoc har nok at lave til flere dage, men vi ville stadig lade strand og ro være en del af pointen. Vælg én eller to større aktiviteter og hold resten fleksibelt.', hero, sources,
    quickFacts:[{label:'På vandet',value:'Øhop / snorkling'},{label:'Natur',value:'Nationalpark'},{label:'Kultur',value:'Fiskesauce + historie'}],
    sections:[
      {id:'vand',heading:'Øhop og snorkling i syd',paragraphs:['An Thoi er udgangspunkt for mange bådture. Vælg tur efter bådtype, gruppestørrelse og reel tid i vandet - ikke kun antal stop.','Sigtbarhed og bølger afhænger af vejret, så fleksibel booking er en fordel.']},
      {id:'natur',heading:'Nationalpark og nordøen',paragraphs:['Mere end halvdelen af øen er beskyttet biosfæreområde ifølge Vietnam Tourism. Nordøen giver mere grønt landskab og ro end de mest udviklede resortzoner.','På en kort ferie ville vi kun prioritere en længere naturtur, hvis vandring faktisk er en interesse.']},
      {id:'lokalt',heading:'Fiskesauce, peber og lokalt liv',paragraphs:['Phu Quoc er kendt for fiskesauce og peber. Et kort besøg på producent eller farm kan give mere lokalt indhold til en dag, der ellers handler om strand.','Undgå at bygge en hel dag omkring salgsstop. Vælg højst ét eller to steder.']},
      {id:'historie',heading:'Cay Dua-fængslet og sydøen',paragraphs:['Fængslet giver et historisk perspektiv, som står i kontrast til resortbilledet af øen. Kombinér det med sydlige strande eller An Thoi, hvis du allerede er i området.','Det er et mere seriøst stop og ikke nødvendigvis det rigtige valg midt i en ren afslapningsferie.']},
    ],
    related:[{href:'/destinationer/phu-quoc/4-dage-i-phu-quoc/',title:'4 dage på Phu Quoc',text:'Se hvordan vi balancerer strand og aktiviteter.'},{href:'/destinationer/phu-quoc/bedste-strande/',title:'Bedste strande',text:'Vælg hvor de rolige dage skal bruges.'},...relatedBase],
  },

  '4-dage-i-phu-quoc': {
    destinationName:'Phu Quoc', title:'4 dage på Phu Quoc 2026 | Rejseplan med strand og øtur',
    description:'Et forslag til 4 dage på Phu Quoc med strand, sydøen, øhop eller snorkling og nok fri tid til at ferien ikke bliver en checkliste.',
    eyebrow:'Phu Quoc · Rejseplan', heading:'4 dage på Phu Quoc: to rolige dage, én aktiv dag og én fleksibel dag',
    intro:'Fire dage er et godt kompromis på en rundrejse. Du når en båd- eller øtur uden at føle, at hele opholdet bliver transport og aktiviteter.', hero, sources,
    quickFacts:[{label:'Dag 1',value:'Check-in + strand'},{label:'Dag 2',value:'Syd / øhop'},{label:'Dag 3-4',value:'Strand + fleksibilitet'}],
    sections:[
      {id:'dag1',heading:'Dag 1: gør så lidt som muligt',paragraphs:['Efter fly og transfer ville vi blive tæt på hotellet, se solnedgangen og spise i området. Ingen grund til at booke en halvdagsaktivitet på ankomstdagen.','Brug aftenen på at forstå afstandene og vejrudsigten.']},
      {id:'dag2',heading:'Dag 2: én stor aktivitet',paragraphs:['Hvis vejret er godt, vælg øhop/snorkling eller en tur gennem sydøen. Book ikke begge dele som separate heldagsprogrammer på et fire-dages ophold.','Hvis båd ikke er din ting, kan Bai Sao, Khem og lokale stop i syd kombineres med bil.']},
      {id:'dag3',heading:'Dag 3: stranddag',paragraphs:['Brug den strand, der passer til dit hotelområde, eller tag til Bai Sao/Ong Lang afhængigt af hvor du bor.','Det er netop denne dag, der gør Phu Quoc værd at tilføje til en rundrejse.']},
      {id:'dag4',heading:'Dag 4: fleksibel afslutning',paragraphs:['Vælg marked, massage, en anden strand eller nationalpark afhængigt af energi og vejr.','Har du fly senere på dagen, så hold planen tæt på hotellet og undgå en lang tur til den modsatte ende af øen.']},
    ],
    related:[{href:'/destinationer/phu-quoc/sevaerdigheder/',title:'Seværdigheder på Phu Quoc',text:'Vælg dagens aktive element.'},{href:'/destinationer/phu-quoc/vejr-og-bedste-rejsetid/',title:'Vejr og bedste rejsetid',text:'Planlæg de vandafhængige dage.'},...relatedBase],
  },

  'vejr-og-bedste-rejsetid': {
    destinationName:'Phu Quoc', title:'Phu Quoc vejr 2026 | Bedste rejsetid og regnsæson',
    description:'Hvornår er det bedst at rejse til Phu Quoc? Guide til tør sæson, regntid, strandforhold og hvordan vejret påvirker bådture.',
    eyebrow:'Phu Quoc · Vejr', heading:'Vejr på Phu Quoc: sæsonen betyder mere her end i de store byer',
    intro:'Når strand og bådture er hovedårsagen til at tage til øen, er vejret ikke bare en detalje. Vietnam Tourism beskriver oktober-juni som den mere klare periode og juli-september som mere stormfuld.', hero, sources,
    quickFacts:[{label:'Mere tørt',value:'Okt-jun'},{label:'Mest stabilt',value:'Vinter / tidligt forår'},{label:'Mere usikkert',value:'Jul-sep'}],
    sections:[
      {id:'dry',heading:'Oktober til juni',paragraphs:['Det er generelt den lettere periode til strand og båd. December og januar er populære, fordi vejret ofte er tørt og temperaturen behagelig.','April og maj kan være meget varme, selv før den vådeste periode for alvor begynder.']},
      {id:'rain',heading:'Juli til september',paragraphs:['Regn, vind og mere uroligt hav kan påvirke snorkling, færger og strandkvalitet. Det betyder ikke, at det regner konstant, men risikoen for ændrede planer er større.','Vælg et hotel med god pool og fleksible aktiviteter, hvis du rejser i denne periode.']},
      {id:'beach',heading:'Stranden kan ændre sig med monsunen',paragraphs:['Vindretning, tang og bølger kan gøre én kyst bedre end en anden på samme uge. Spørg hotellet om aktuelle forhold og vær klar til at tage taxi til en anden strand.','Gamle billeder er derfor mindre nyttige end nyere gæstebilleder og lokale forhold.']},
      {id:'booking',heading:'Sådan ville vi booke i ustabil sæson',bullets:['Fleksible hotelvilkår hvis muligt.','Bådture tættere på datoen.','Ingen stram flyforbindelse efter vejrafhængig bådaktivitet.','Plan B med spa, café, marked eller resortdag.']},
    ],
    related:[{href:'/destinationer/phu-quoc/bedste-strande/',title:'Bedste strande',text:'Vælg kyst efter sæson og område.'},{href:'/destinationer/phu-quoc/4-dage-i-phu-quoc/',title:'4 dage på Phu Quoc',text:'Byg fleksibilitet ind i planen.'},...relatedBase],
  },

  'lufthavn-og-transport': {
    destinationName:'Phu Quoc', title:'Phu Quoc lufthavn og transport 2026 | Taxi, Grab og afstande',
    description:'Praktisk guide til transport på Phu Quoc: fra lufthavnen til Long Beach, Duong Dong, Ong Lang, nord- og sydøen samt hvordan du kommer rundt.',
    eyebrow:'Phu Quoc · Transport', heading:'Transport på Phu Quoc: afstandene er lange nok til at påvirke hotelvalget',
    intro:'Phu Quoc ser kompakt ud på et kort, men en tur mellem nord og syd kan spise en stor del af dagen. Planlæg lufthavn og hverdagskørsel, før du booker et isoleret resort.', hero, sources,
    quickFacts:[{label:'Lufthavn',value:'PQC syd for Duong Dong'},{label:'Nemmest',value:'Taxi / Grab / transfer'},{label:'Lang afstand',value:'Nord ↔ syd'}],
    sections:[
      {id:'airport',heading:'Fra Phu Quoc lufthavn til hotel',paragraphs:['Long Beach og Duong Dong er blandt de nemmeste områder fra lufthavnen. Til nordlige eller sydlige resorts bliver turen længere, så en hoteltransfer kan give mening.','Tjek om transfer er inkluderet i resortpakken før du betaler separat.']},
      {id:'around',heading:'Sådan kommer du rundt på øen',paragraphs:['Taxi og app-baseret bil er den mest fleksible løsning for de fleste besøgende. På en dag med flere stop kan en privat chauffør være mere effektiv end mange enkeltrejser.','Scooter er populært, men vi ville kun vælge det, hvis du allerede er erfaren og forsikringen dækker.']},
      {id:'distances',heading:'Tænk i områder, ikke kilometer',paragraphs:['Long Beach, Ong Lang, nordøen og An Thoi er separate baser i praksis. Hvis du hver dag vil til den modsatte ende af øen, har du valgt forkert hotelområde.','Planlæg én geografisk del pr. dag, når du udforsker.']},
      {id:'departure',heading:'På afrejsedagen',paragraphs:['Hold den sidste aktivitet tæt på hotellet. Læg buffer til trafik og check-in, især i ferieperioder.','Hvis resortet ligger langt fra lufthavnen, bestil bilen i god tid.']},
    ],
    related:[{href:'/destinationer/phu-quoc/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Transport og område hænger direkte sammen.'},{href:'/destinationer/phu-quoc/4-dage-i-phu-quoc/',title:'4 dage på øen',text:'Se hvordan vi grupperer geografien.'},...relatedBase],
  },
  'mad-i-phu-quoc': {
    destinationName:'Phu Quoc', title:'Mad på Phu Quoc 2026 | Seafood, fiskesauce og natmarked',
    description:'Guide til mad på Phu Quoc: seafood, fiskesauce, peber, Duong Dong Night Market og hvad du bør bestille og tjekke før du vælger restaurant.',
    eyebrow:'Phu Quoc · Mad', heading:'Mad på Phu Quoc: seafood er oplagt, men pris pr. vægt skal være tydelig',
    intro:'Phu Quoc er bedst kendt for seafood, fiskesauce og peber. Vi ville spise mindst ét måltid væk fra resortet og bruge natmarkedet som en smagstur - ikke som det eneste sted at spise.', hero, sources,
    quickFacts:[{label:'Seafood',value:'Tjek pris pr. vægt'},{label:'Lokalt produkt',value:'Fiskesauce'},{label:'Aftenstop',value:'Duong Dong Night Market'}],
    sections:[
      {id:'seafood',heading:'Seafood: spørg pris og vægt før bestilling',paragraphs:['Fisk, krabber, blæksprutte og skaldyr er en oplagt del af øen. På steder med levende tanke eller pris pr. kilo bør du få vægt og pris bekræftet før tilberedning.','Et travlt sted med tydelige priser er ofte lettere end en restaurant, der primært sælger udsigt.']},
      {id:'night-market',heading:'Duong Dong Night Market',paragraphs:['Markedet er godt til at se mange snacks og seafoodmuligheder samlet. Det kan være turistet, så brug det som en oplevelse og sammenlign priser frem for automatisk at spise hele aftenen samme sted.','Kom sulten, men bestil små portioner først.']},
      {id:'fish-sauce',heading:'Fiskesauce og peber',paragraphs:['Phu Quoc har lang tradition for fiskesauce og peber. Et kort producent- eller farmstop kan give mening, hvis du alligevel udforsker øen.','Vi ville undgå en hel dags “produkt-tour” med mange salgsstop.']},
      {id:'resort',heading:'Resortmad vs at spise ude',paragraphs:['På isolerede resorts kan du være afhængig af hotellets restauranter. Det er ikke nødvendigvis et problem, men det bør indgå i totalbudgettet.','Hvis du gerne vil spise lokalt hver aften, er Long Beach / Duong Dong eller Ong Lang ofte lettere baser.']},
    ],
    related:[{href:'/destinationer/phu-quoc/hvor-skal-man-bo/',title:'Hvor skal man bo?',text:'Se hvilke områder der gør det nemt at spise ude.'},{href:'/destinationer/phu-quoc/4-dage-i-phu-quoc/',title:'4 dage på Phu Quoc',text:'Sæt mad og natmarked ind uden at ofre stranddagene.'},...relatedBase],
  },

};
