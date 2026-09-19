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
};

export default editorialVisuals;
