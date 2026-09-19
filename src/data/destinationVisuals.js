const W = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const media = (file, alt, caption, extra = {}) => ({
  src: `${W}${encodeURIComponent(file).replace(/%2F/g,'/')}?width=1500`,
  alt,
  caption,
  credit: extra.credit ?? 'Wikimedia Commons',
  creditUrl: extra.creditUrl ?? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%2F/g,'/')}`,
  ratio: extra.ratio ?? '16 / 9',
  position: extra.position ?? 'center',
});

export const destinationVisuals = {
  'Ninh Binh': {
    default: media('Ben Trang An.jpg','Bådhavn ved Trang An i Ninh Binh','Ninh Binh fungerer bedst, når du bor tæt på landskabet og ikke kun ser området fra en bus på en dagstur.'),
    sectionPool: [
      media('View from Hang Mua.jpg','Udsigt fra Hang Mua over Ninh Binh','Hang Mua giver det bedste overblik over flod, rismarker og kalkstenslandskab.'),
      media('Ninh Binh-Tam Coc.jpg','Landskab ved Tam Coc','Tam Coc er både en base og en klassisk bådtur gennem kalkstenslandskabet.'),
      media('Ben Trang An.jpg','Trang An i Ninh Binh','Trang An er et af de vigtigste bådområder og et godt pejlemærke, hvis du vil bo mere naturnært.'),
    ],
    video: { youtubeId:'_N-seP6smqk', title:'Ninh Binh i 4K', caption:'Videoen viser forskellen mellem bådtur, udsigtspunkt og det flade landskab mellem kalkstensklipperne.' },
  },
  'Sapa': {
    default: media('Rice terraces in Sa Pa 01.jpg','Risterrasser i Sapa','Sapa giver mest mening, hvis trekking og bjerglandskab er en reel del af rejsen.'),
    sectionPool: [
      media('Rice terraces in Sa Pa 01.jpg','Risterrasser i Sapa','Risterrasserne er det stærkeste argument for at bruge en hel dag til fods.'),
      media('Fansipan Cable Car and Sa Pa.jpg','Fansipan og Sapa','Fansipan kan nås med kabelbane, men udsigten afhænger meget af skyer og vejr.'),
      media('Cable car station going Fansipan.jpg','Kabelbanestation mod Fansipan','Højdeforskelle og bjergtransport er en praktisk del af opholdet i Sapa.'),
    ],
    video: { youtubeId:'T9JvU5FUJzU', title:'Sapa i 4K', caption:'Videoen giver et realistisk indtryk af bjergene, risterrasserne og højdeforskellene omkring Sapa.' },
  },
  'Hue': {
    default: media('Citadel of Hue.jpg','Det kejserlige citadel i Hue','Hue er først og fremmest en historisk destination, hvor Citadellet, gravene og maden fortjener tid.'),
    food: media('Bun bo Hue.jpg','Bún bò Huế','Hue har en af Vietnams stærkeste regionale madidentiteter, og bún bò Huế er det oplagte sted at begynde.'),
    sectionPool: [
      media('Citadel of Hue.jpg','Citadellet i Hue','Citadellet er Hues vigtigste historiske stop og bør ikke presses ind mellem flere store seværdigheder.'),
      media('The tomb of Emperor Khai Dinh (12060688173).jpg','Khai Dinh-kejsergraven','Khai Dinh er kompakt, detaljeret og let at kombinere med én anden grav.'),
      media('Hue Vietnam Perfume-River-01.jpg','Perfume River i Hue','Perfume River binder Citadellet, pagoderne og den moderne by sammen.'),
    ],
    video: { youtubeId:'ZcBnZfWMa-I', title:'Hue fra luften i 4K', caption:'Videoen gør forholdet mellem Citadellet, floden og resten af byen lettere at forstå.' },
  },
  'Ha Long Bay': {
    default: media('Halong Bay Cruise Boats 01.jpg','Cruisebåde i Ha Long Bay','Ha Long Bay handler mere om rute, tid på vandet og kahyt end om at vælge den flotteste båd i et katalog.'),
    sectionPool: [
      media('Halong Bay Cruise Boats 01.jpg','Cruisebåde i Ha Long Bay','Et én-nats cruise er for de fleste den bedste balance mellem oplevelse, pris og tidsforbrug.'),
      media('Kayaking in Ha Long Bay.jpg','Kajak i Ha Long Bay','Kajak og mindre både giver en anden skala end udsigten fra et stort cruisedæk.'),
      media('Sung Sot cave Ha Long Bay.jpg','Sung Sot Cave i Ha Long Bay','Grotter er et typisk stop, men hele sejlruten betyder mere end antallet af seværdigheder.'),
    ],
    video: { youtubeId:'a-mq7CkKww8', title:'Ha Long Bay i 4K', caption:'Videoen viser bugtens skala og hvorfor dagstur og overnatningscruise føles meget forskellige.' },
  },
  'Da Lat': {
    default: media('Xuan Huong Lake in Da Lat (28219543381).jpg','Xuan Huong Lake i Da Lat','Da Lat er et højlandsstop med køligere klima, kaffe og natur frem for endnu en tropisk kystby.'),
    food: media('Dalat market, Vietnam.jpg','Marked i Da Lat','Markedet viser Da Lats grøntsager, frugt, blomster og hverdagsmad bedre end en generisk restaurantliste.'),
    sectionPool: [
      media('Xuan Huong Lake in Da Lat (28219543381).jpg','Xuan Huong Lake','Søen er det letteste pejlemærke til at forstå Da Lat centrum.'),
      media('Dalat market, Vietnam.jpg','Da Lat Market','Markedet er et godt stop til både mad, lokal stemning og aftentur.'),
      media('Da Lat Railway Station-1.JPG','Da Lat Railway Station','Den gamle station er et af de tydeligste spor af byens historiske højlandsarkitektur.'),
    ],
    video: { youtubeId:'J4NmD2ae9dw', title:'Walking tour i Da Lat i 4K', caption:'Walking-videoen giver et bedre indtryk af centrum, søen og byens køligere tempo end et enkelt foto.' },
  },
  'Hoi An': {
    default: media('An Bang Beach (46353448872).jpg','An Bang Beach ved Hoi An','Hoi An handler ikke kun om Old Town. Strand, rismarker og korte afstande er en stor del af, hvordan området fungerer i praksis.'),
    food: media('Cao lầu Hội An.jpg','Cao lau i Hoi An','Cao lầu er en af de retter, der gør Hoi An til mere end bare en fotogen gammel by.'),
    sectionPool: [
      media('Japanese Covered Bridge (Cau Chua Pagoda), Hoi An, Vietnam (7090643937).jpg','Japanese Covered Bridge i Hoi An','Den japanske bro er et naturligt pejlemærke i den gamle by.'),
      media('Thu Bon river, Hoi An.jpg','Thu Bon-floden i Hoi An','Thu Bon-floden binder Old Town, aftenture og flere af byens rolige områder sammen.'),
      media('Hoi An market.jpg','Marked i Hoi An','Markedet viser den mere hverdagslige side af Hoi An mellem restauranter og den gamle by.'),
      media('An Bang Beach (46353448872).jpg','An Bang Beach','An Bang er den nemmeste strand at kombinere med et ophold i Hoi An.'),
      media('Cao Lau Hoi An.JPG','Cao lầu i Hoi An','Regional mad er en vigtig del af Hoi An-oplevelsen.'),
    ],
    video: {
      youtubeId: 'U0qPJRrEfbg',
      title: '4K walking tour i Hoi An',
      caption: 'Walking-videoen gør det lettere at forstå gadernes skala, trafik og stemning end stillbilleder alene.',
    },
  },
  'Ho Chi Minh City': {
    default: media('Ben Thanh Market.jpg','Ben Thanh Market i Ho Chi Minh City','Ho Chi Minh City skifter hurtigt mellem markeder, boulevarder og tæt gadeliv. Derfor betyder område og rute meget.'),
    food: media('Com-Tam-2008.jpg','Com tam med grillet svinekød i Ho Chi Minh City','Cơm tấm er et godt eksempel på den type hverdagsmad, der gør byen værd at udforske uden for hotelrestauranterne.'),
    sectionPool: [
      media('Central Post Office, Ho Chi Minh City.jpg','Central Post Office i Ho Chi Minh City','Den centrale postbygning ligger i et område med flere af byens klassiske stop.'),
      media('Saigon Skyline.jpg','Ho Chi Minh City skyline','Byens størrelse og tæthed er en vigtig del af oplevelsen.'),
      media('Ben Thanh Market 2025.jpg','Ben Thanh Market','Markedet er et nyttigt pejlemærke i District 1.'),
      media('Com-Tam-2008.jpg','Cơm tấm','Cơm tấm er en klassisk Saigon-ret.'),
      media('Cu Chi Tunnel Vietnam (38647687955).jpg','Cu Chi-tunnellerne','Cu Chi er en af de mest populære historiske udflugter fra byen.'),
      media('Vietnam, Phong Dien, Mekong Delta.jpg','Mekongdeltaet','Mekongdeltaet giver en tydelig kontrast til storbytempoet.'),
      media('Tan Son Nhat International Airport.jpg','Tan Son Nhat International Airport','Lufthavnen ligger tæt på centrum i kilometer, men trafikken kan gøre transferen længere.'),
    ],
    video: {
      youtubeId: 'UUN5nrrFc_Q',
      title: '4K walking tour i Ho Chi Minh City',
      caption: 'Videoen viser trafik, fortove og bytempo bedre end et enkelt foto og er nyttig før et første besøg.',
    },
  },
  'Phu Quoc': {
    default: media('Phu quoc beach.JPG','Strand og hav på Phu Quoc','På Phu Quoc betyder den konkrete kyst og afstanden til Duong Dong ofte mere end resortets stjerner.'),
    beach: media('Bai Sao, Phú Quốc, Vietnam (3870300491).jpg','Bai Sao på Phu Quoc','Bai Sao er den klassiske postkortstrand, men de forskellige kyster passer til forskellige ophold.'),
    sectionPool: [
      media('Phu quoc beach.JPG','Strand på Phu Quoc','En rolig stranddag er stadig en vigtig del af Phu Quoc.'),
      media('Bai Sao, Phú Quốc, Vietnam (3870300491).jpg','Bai Sao','Bai Sao er en af øens mest kendte strande.'),
      media('Cap-treo-hon-thom-4.jpg','Hon Thom-kabelbanen','Sydøen kombinerer kabelbane, bådture og strand.'),
      media('An Thoi fishing harbour Sunset Town Sun World Phu Quoc Vietnam.jpg','An Thoi på Phu Quoc','An Thoi er den praktiske base for mange ture til sydøerne.'),
      media('Phu Quoc International Airport.JPG','Phu Quoc International Airport','Lufthavn og hotelområde bør tænkes sammen på en relativt stor ø.'),
      media('Phu Quoc sunset.jpg','Solnedgang på Phu Quoc','Vestkysten er særlig populær omkring solnedgang.'),
    ],
    video: {
      youtubeId: 'RYzanH3WTps',
      title: '4K flycam over Phu Quoc',
      caption: 'Flycam-videoen viser, hvor stor øen er, og hvorfor hotelområde og transport skal tænkes sammen.',
    },
  },
  'Da Nang': {
    default: media('Marble Mountains, Vietnam.jpg','Marble Mountains ved Da Nang','Da Nang kombinerer strand og storby med naturstop som Marble Mountains.'),
    beach: media('My Khe Beach, Da Nang, Vietnam.jpg','My Khe Beach i Da Nang','My Khe er bred og let at bruge uden resort. Tidlig morgen og sen eftermiddag er de bedste tidspunkter.'),
    sectionPool: [
      media('Da Nang - Dragon Bridge.jpg','Dragon Bridge i Da Nang','Dragon Bridge og Han-floden giver Da Nang en tydelig moderne byidentitet.'),
      media('My Khe Beach 1.jpg','My Khe Beach','My Khe er den mest praktiske bystrand for de fleste førstegangsrejsende.'),
      media('Marble Mountains, Vietnam.jpg','Marble Mountains','Marble Mountains ligger naturligt mellem Da Nang og Hoi An.'),
      media('Han River Bridge.jpg','Han River Bridge','Han-floden er et nyttigt pejlemærke mellem strand- og byområder.'),
      media('Golden Bridge above the clouds Ba Na Hills Da Nang Vietnam.jpg','Golden Bridge ved Ba Na Hills','Golden Bridge er det visuelle højdepunkt ved Ba Na Hills.'),
      media('Mì Quảng, Da Nang, Vietnam.jpg','Mì Quảng','Da Nang og Quang Nam har en stærk regional madprofil.'),
    ],
    video: {
      youtubeId: 'DBXPmt-EdZM',
      title: '4K walking tour i Da Nang',
      caption: 'Videoen giver et bedre indtryk af Han-floden, gaderne og byens størrelse end stillbilleder alene.',
    },
  },
  'Nha Trang': {
    default: media('Po Nagar 01.jpg','Po Nagar Cham Towers i Nha Trang','Po Nagar viser den kulturhistoriske side af Nha Trang, som let overses, hvis man kun ser destinationen som strand.'),
    beach: media('View of Nha Trang city.jpg','Udsigt over Nha Trang by og kyst','Nha Trang er en rigtig by langs kysten, ikke kun en række resorts.'),
    sectionPool: [
      media('04052023 Ponagar Hindu temples complex, Nha Trang Vietnam - 27.jpg','Po Nagar-templerne','Po Nagar er det stærkeste historiske stop i Nha Trang.'),
      media('Nha Trang Bay and Vinwonders. Nha Trang, Vietnam. June 2025.jpg','Nha Trang Bay','Bugten gør øture og havaktiviteter nemme at kombinere med et byophold.'),
      media('Long Son Pagoda 1.jpg','Long Son Pagoda','Long Son Pagoda giver et roligere kulturstop væk fra stranden.'),
      media('Dam Market Nha Trang 1.jpg','Dam Market','Markedet giver et mere lokalt indblik i byen.'),
      media('Vietnam Nha Trang Scuba Diving 2009 - 4163163783.jpg','Dykning i Nha Trang','Nha Trang har en lang dykkertradition og flere marine aktiviteter.'),
      media('View of Nha Trang city.jpg','Nha Trang by og kyst','Bystrand og byliv ligger tættere på hinanden end ved mange resortdestinationer.'),
    ],
    video: {
      youtubeId: 'rsai-wskWsc',
      title: 'Nha Trang i 4K',
      caption: 'Videoen viser bystrand, bugt og byliv i bevægelse og gør det lettere at forstå destinationens skala.',
    },
  },
};

function hash(value = '') {
  return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function getDestinationVisual(page) {
  const mediaSet = destinationVisuals[page.destinationName];
  if (!mediaSet) return null;
  const text = `${page.title ?? ''} ${page.heading ?? ''} ${page.eyebrow ?? ''}`.toLowerCase();
  if (/mad|food/.test(text) && mediaSet.food) return mediaSet.food;
  if (/strand|beach/.test(text) && mediaSet.beach) return mediaSet.beach;
  return mediaSet.default ?? null;
}

export function getDestinationSectionVisual(page, section, index = 0, guideSlug = '', avoidSrc = '') {
  const mediaSet = destinationVisuals[page.destinationName];
  if (!mediaSet) return null;
  const text = `${page.title ?? ''} ${page.heading ?? ''} ${section?.heading ?? ''}`.toLowerCase();
  let candidate = null;
  if (/mad|food|restaurant|spis/.test(text) && mediaSet.food) candidate = mediaSet.food;
  else if (/strand|beach|kyst/.test(text) && mediaSet.beach) candidate = mediaSet.beach;

  const pool = mediaSet.sectionPool ?? [];
  if (!candidate && pool.length) {
    const offset = hash(guideSlug) % pool.length;
    candidate = pool[(offset + index) % pool.length];
  }
  if (candidate?.src === avoidSrc && pool.length > 1) {
    const currentIndex = Math.max(0, pool.findIndex((item) => item.src === candidate.src));
    candidate = pool[(currentIndex + 1) % pool.length];
  }
  return candidate;
}

export function getDestinationVideo(page) {
  return destinationVisuals[page.destinationName]?.video ?? null;
}
