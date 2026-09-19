const W = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const img = (file, alt, caption, credit = 'Wikimedia Commons', ratio = '16 / 9', position = 'center') => ({
  src: `${W}${encodeURIComponent(file).replace(/%2F/g,'/')}?width=1500`,
  alt,
  caption,
  credit,
  creditUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%2F/g,'/')}`,
  ratio,
  position,
});

export const editorialVisuals = {
  ninhBinh: {
    stay: img('Ben Trang An.jpg','Bådhavn ved Trang An i Ninh Binh','Trang An er både en oplevelse og et praktisk pejlemærke, hvis du vil bo tættere på landskabet end på Ninh Binh by.'),
    sights: img('View from Hang Mua.jpg','Udsigt fra Hang Mua over Ninh Binh','Hang Mua giver et af de bedste overblik over flod, rismarker og kalkstenslandskab.'),
    route: img('Ninh Binh-Tam Coc.jpg','Landskab ved Tam Coc','Tam Coc viser, hvorfor Ninh Binh fungerer bedst med mindst én overnatning frem for en presset dagstur.'),
  },
  sapa: {
    valley: img('Rice terraces in Sa Pa 01.jpg','Risterrasser i Sapa','Risterrasserne er selve grunden til at give Sapa tid til en rigtig gådag.'),
    fansipan: img('Fansipan Cable Car and Sa Pa.jpg','Fansipan-kabelbanen og Sapa','Kabelbanen gør Fansipan tilgængelig uden en flerdages vandretur, men udsigten afhænger af skyer og vejr.'),
    transport: img('Cable car station going Fansipan.jpg','Kabelbanestation mod Fansipan','Højdeforskelle og transport er en reel del af oplevelsen i Sapa.'),
  },
  hue: {
    tomb: img('The tomb of Emperor Khai Dinh (12060688173).jpg','Khai Dinh-kejsergraven ved Hue','Khai Dinh er kompakt og dekorativ og fungerer godt, hvis du kun vil vælge én kejsergrav.'),
    river: img('Hue Vietnam Perfume-River-01.jpg','Perfume River i Hue','Perfume River binder Citadellet, pagoderne og byens roligere tempo sammen.'),
    citadel: img('Citadel of Hue.jpg','Det kejserlige citadel i Hue','Citadellet er Hues vigtigste historiske stop og fortjener sin egen halvdag.'),
  },
  daLat: {
    lake: img('Xuan Huong Lake in Da Lat (28219543381).jpg','Xuan Huong Lake i Da Lat','Søen er det letteste pejlemærke til at forstå centrum af Da Lat.'),
    market: img('Dalat market, Vietnam.jpg','Marked i Da Lat','Markedet viser højlandets blomster, grønt og hverdagsliv bedre end endnu en fotocafé.'),
    rail: img('Da Lat Railway Station-1.JPG','Da Lat Railway Station','Den gamle station er et af de steder, hvor Da Lats franske og højlandspræg er tydeligt.'),
  },
  haLong: {
    cruise: img('Halong Bay Cruise Boats 01.jpg','Cruisebåde i Ha Long Bay','Cruisevalget handler om rute, kahyt og tid på vandet mere end om den flotteste båd i brochuren.'),
    kayak: img('Kayaking in Ha Long Bay.jpg','Kajak mellem kalkstensøer i Ha Long Bay','Kajak eller en mindre båd giver en anden skala end udsigten fra et stort cruise-dæk.'),
    cave: img('Sung Sot cave Ha Long Bay.jpg','Sung Sot Cave i Ha Long Bay','Grotter er et typisk stop på mange ruter, men kvaliteten af hele sejldagen er vigtigere end antallet af stop.'),
  },
  food: {
    north: img('Bun Cha.jpg','Bún chả med nudler og grillet svinekød','Bún chả er en af de mest oplagte retter at prøve i Hanoi og Nordvietnam.'),
    central: img('Cao Lau Hoi An.JPG','Cao lầu i Hoi An','Centralvietnam har flere regionale nudelretter, som giver mening at prøve netop dér.'),
    south: img('Com-Tam-2008.jpg','Cơm tấm i Ho Chi Minh City','Cơm tấm er en klassisk hverdagsret i det sydlige Vietnam.'),
    street: img('Bánh mì.jpg','Vietnamesisk bánh mì','Bánh mì er et godt eksempel på hurtig vietnamesisk street food, der er let at prøve undervejs.'),
  },
  packing: {
    suitcase: img('Holiday Packing List - Packing Luggage for Vacation.jpg','Pakket kuffert til ferie','Pak til din rute og til at flytte hotel flere gange, ikke til alle tænkelige situationer.'),
    handLuggage: img('PhD in hand luggage packing (1355854658).jpg','Håndbagage pakket til flyrejse','Pas, medicin, oplader og ét skift hører hjemme i håndbagagen.'),
    luggage: img('Gfp-travel-luggage.jpg','Lille rejsekuffert','Jo flere stop du har, desto mere mærker du hvert overflødigt kilo.'),
  },
  health: {
    mosquito: img('Traveller in a Mosquito Net.jpg','Rejsende under myggenet','Myggestik forebygges bedst med praktiske forholdsregler, og rute betyder mere end en generel landeliste.'),
    luggage: img('Luggage at airport.jpg','Bagage i en lufthavn','Forsikring, dokumenter og bagagegrænser bør være afklaret før afrejse.'),
    clinic: img('PCP Vaccination Clinic.jpg','Vaccinationsklinik','Rejsevaccination bør vurderes efter rute, rejselængde og den enkelte rejsendes tidligere vaccinationer.'),
  },
  insurance: {
    luggage: img('Luggage at airport.jpg','Bagage i en lufthavn','Bagage, forsinkelse og dokumentation er en praktisk del af en rejseforsikring.'),
    scooter: img('Motorcycles in Ho Chi Minh City.jpg','Scootere i Ho Chi Minh City','Scooter og motorcykel er områder, hvor kørekort og forsikringsvilkår skal passe sammen.'),
    diving: img('Vietnam Nha Trang Scuba Diving 2009 - 4163163783.jpg','Scuba diving i Nha Trang','Dykning og andre aktiviteter kan have særlige forsikringsbetingelser.'),
  },
  culture: {
    temple: img('Citadel of Hue.jpg','Historisk tempel- og paladsområde i Hue','Religiøse og historiske steder er de situationer, hvor mere beskeden påklædning betyder mest.'),
    market: img('Ben Thanh Market.jpg','Marked i Ho Chi Minh City','Markeder fungerer bedst med rolig tone og tydelige aftaler om pris før køb.'),
    food: img('Com-Tam-2008.jpg','Vietnamesisk måltid','Mange måltider deles, og bordskik forstås bedst ved at se, hvordan værten og de andre gæster gør.'),
  },
  esim: {
    simPhone: img('SIMmobilephone.jpg','SIM-kort ved siden af en mobiltelefon','eSIM fjerner det fysiske kort, men det praktiske valg handler stadig om kompatibilitet, data og netværk.'),
    nano: img('Nano SIM card and tray.jpg','Nano-SIM og SIM-skuffe','Et fysisk SIM kræver adgang til SIM-skuffen, mens eSIM kan installeres digitalt på kompatible telefoner.'),
    card: img('Multi-size T-Mobile SIM card.jpg','SIM-kort i flere størrelser','SIM-formatet er mindre vigtigt på en ferie, hvis telefonen allerede understøtter eSIM.'),
  },
  visa: {
    tourist: img('Vietnam tourist visa.jpg','Vietnam-visum i et pas','Ved længere ophold er e-visum eller anden visumtype relevant; brug altid de officielle myndighedssider til den aktuelle ansøgning.'),
    evisa: img('Sample of Electronic Visa for the Socialist Republic of Vietnam.jpg','Eksempel på vietnamesisk e-visum','Et e-visum er et digitalt dokument. Gem en offline kopi, hvis din rejse kræver det.'),
    document: img('Vietnam-visa.jpg','Eksempel på vietnamesisk visumdokument','Visum- og indrejsedokumenter bør være nemme at åbne offline under rejsen.'),
  },
  hanoi: {
    lake: img('Hoan Kiem Lake photo.jpg','Hoan Kiem Lake i Hanoi','Hoan Kiem er det naturlige pejlemærke for en første dag i Hanoi.'),
    oldQuarter: img('Hanoi Old Quarter (48256298071).jpg','Gadeliv i Hanois Old Quarter','Old Quarter fungerer bedst til fods, med plads til mad og små omveje.'),
    temple: img('Temple of Literature Hanoi 1.jpg','Litteraturtemplet i Hanoi','Litteraturtemplet passer naturligt ind i en historiedag vest for centrum.'),
    trainStreet: img('Train Street, Hanoi (52352080696).jpg','Train Street i Hanoi','Train Street er bedst som et kort fleksibelt stop, fordi adgang og togtider kan ændre sig.'),
    airport: img('Noi Bai International Airport Terminal, Hanoi (6914127808).jpg','Noi Bai International Airport ved Hanoi','Lufthavnstransfer er den første logistiske beslutning efter ankomst til Hanoi.'),
  },
  nhaTrang: {
    bay: img('Nha Trang Bay and Vinwonders. Nha Trang, Vietnam. June 2025.jpg','Nha Trang Bay og Hon Tre','Bugten gør det let at kombinere strandbyen med øture og aktiviteter på vandet.'),
    market: img('Dam Market Nha Trang 1.jpg','Dam Market i Nha Trang','Markedet giver et mere lokalt indblik i byen mellem stranddagene.'),
    pagoda: img('Long Son Pagoda 1.jpg','Long Son Pagoda i Nha Trang','Long Son Pagoda er et roligt kulturstop tæt på byen.'),
  },
  weather: {
    central: img('HoiAnOldQuarter.jpg','Hoi An i Centralvietnam','Centralvietnam har et andet regn- og stormsæsonmønster end både Hanoi og Sydvietnam.'),
    south: img('Phu Quoc sunset.jpg','Solnedgang på Phu Quoc','I syd betyder tør- og regntid mere end store temperaturskift.'),
    rain: img('Rain in Ho Chi Minh City.jpg','Regnvejr i Ho Chi Minh City','Regntid i Sydvietnam betyder ofte kraftige byger frem for konstant heldagsregn.'),
  },
  money: {
    atm: img('Máy ATM.jpg','BIDV-hæveautomat i Vietnam','Hæveautomater er lette at finde i byerne, men lokale gebyrer og beløbsgrænser varierer.'),
    banknotes: img('Several 500,000-dong banknotes fanned out and stacked to form a circle-like shape.jpg','Vietnamesiske 500.000-dong-sedler','Store seddelbeløb kan se dramatiske ud i VND; hold fokus på totalbudget og aktuelle kurser.'),
    market: img('Ben Thanh Market 2025.jpg','Marked i Ho Chi Minh City','Kontanter er stadig praktiske på markeder og mindre lokale spisesteder.'),
  },
  planning: {
    train: img('VietnamRailway.jpg','Jernbane i Vietnam','Tog giver mening på udvalgte strækninger, men rejsetid bør sammenlignes med fly og bus.'),
    taxi: img('Mai Linh Taxi at Tan Son Nhat.jpg','Taxi ved Tan Son Nhat-lufthavnen','Lufthavnstransfer er et godt eksempel på en lille beslutning, der bliver lettere med en klar plan.'),
    coast: img('VN Coast Train Northbound.jpg','Tog langs Vietnams kyst','Afstandene i Vietnam betyder, at transportdagene skal regnes med som en del af rejseplanen.'),
  },
  family: {
    beach: img('An Bang Beach (46353448872).jpg','Familier på en bred strand ved Hoi An','En god familierute har pauser, pool eller strand mellem de mere intensive storbydage.'),
    train: img('Train interior Vietnam.jpg','Togrejse i Vietnam','Med børn er transporttid og antal hotelskift ofte vigtigere end at nå flest destinationer.'),
    food: img('Vietnamese Pho.jpg','Skål med vietnamesisk phở','Enkle nudel- og risretter gør det ofte lettere at finde noget, børn kan begynde med.'),
  },
};

export default editorialVisuals;
