export const destinationVisuals = {
  'Hoi An': {
    default: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/An%20Bang%20Beach%20%2846353448872%29.jpg?width=1500',
      alt: 'An Bang Beach ved Hoi An',
      caption: 'Hoi An handler ikke kun om Old Town. Strand, rismarker og korte afstande er en stor del af, hvordan området fungerer i praksis.',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/Category:An_Bang_Beach',
      ratio: '16 / 9',
    },
    food: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cao%20l%E1%BA%A7u%20H%E1%BB%99i%20An.jpg?width=1400',
      alt: 'Cao lau i Hoi An',
      caption: 'Cao lầu er en af de retter, der gør Hoi An til mere end bare en fotogen gammel by.',
      credit: 'Prenn / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Cao_l%E1%BA%A7u_H%E1%BB%99i_An.jpg',
      ratio: '4 / 3',
    },
    video: {
      youtubeId: 'U0qPJRrEfbg',
      title: '4K walking tour i Hoi An',
      caption: 'Walking-videoen gør det lettere at forstå gadernes skala, trafik og stemning end stillbilleder alene.',
    },
  },
  'Ho Chi Minh City': {
    default: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ben%20Thanh%20Market.jpg?width=1500',
      alt: 'Ben Thanh Market i Ho Chi Minh City',
      caption: 'Ho Chi Minh City skifter hurtigt mellem markeder, boulevarder og tæt gadeliv. Derfor betyder område og rute meget.',
      credit: 'Jean-Marie Hullot / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Ben_Thanh_Market.jpg',
      ratio: '16 / 9',
    },
    food: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Com-Tam-2008.jpg?width=1400',
      alt: 'Com tam med grillet svinekød i Ho Chi Minh City',
      caption: 'Cơm tấm er et godt eksempel på den type hverdagsmad, der gør byen værd at udforske uden for hotelrestauranterne.',
      credit: 'Kham Tran / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Com-Tam-2008.jpg',
      ratio: '4 / 3',
    },
    video: {
      youtubeId: 'UUN5nrrFc_Q',
      title: '4K walking tour i Ho Chi Minh City',
      caption: 'Videoen viser trafik, fortove og bytempo bedre end et enkelt foto og er nyttig før et første besøg.',
    },
  },
  'Phu Quoc': {
    default: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Phu%20quoc%20beach.JPG?width=1500',
      alt: 'Strand og hav på Phu Quoc',
      caption: 'På Phu Quoc betyder den konkrete kyst og afstanden til Duong Dong ofte mere end resortets stjerner.',
      credit: 'Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Phu_quoc_beach.JPG',
      ratio: '16 / 9',
    },
    video: {
      youtubeId: 'RYzanH3WTps',
      title: '4K flycam over Phu Quoc',
      caption: 'Flycam-videoen viser, hvor stor øen er, og hvorfor hotelområde og transport skal tænkes sammen.',
    },
  },
  'Da Nang': {
    default: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marble%20Mountains%2C%20Vietnam.jpg?width=1500',
      alt: 'Marble Mountains ved Da Nang',
      caption: 'Da Nang kombinerer strand og storby med naturstop som Marble Mountains, så dagene bliver mere visuelle end en ren byguide.',
      credit: 'Bernard Gagnon / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Marble_Mountains,_Vietnam.jpg',
      ratio: '16 / 9',
    },
    beach: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/My%20Khe%20Beach%2C%20Da%20Nang%2C%20Vietnam.jpg?width=1500',
      alt: 'My Khe Beach i Da Nang',
      caption: 'My Khe er bred og let at bruge uden resort. Tidlig morgen og sen eftermiddag er de bedste tidspunkter.',
      credit: 'Ray in Manila / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:My_Khe_Beach,_Da_Nang,_Vietnam.jpg',
      ratio: '16 / 9',
    },
    video: {
      youtubeId: 'DBXPmt-EdZM',
      title: '4K walking tour i Da Nang',
      caption: 'Videoen giver et bedre indtryk af Han-floden, gaderne og byens størrelse end stillbilleder alene.',
    },
  },
  'Nha Trang': {
    default: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Po%20Nagar%2001.jpg?width=1500',
      alt: 'Po Nagar Cham Towers i Nha Trang',
      caption: 'Po Nagar viser den kulturhistoriske side af Nha Trang, som let overses, hvis man kun ser destinationen som strand.',
      credit: 'Christophe95 / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Po_Nagar_01.jpg',
      ratio: '16 / 9',
    },
    beach: {
      src: 'https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Nha%20Trang%20city.jpg?width=1600',
      alt: 'Udsigt over Nha Trang by og kyst',
      caption: 'Nha Trang er en rigtig by langs kysten, ikke kun en række resorts. Det er vigtigt, når du vælger hotelområde.',
      credit: 'Baoothersks / Wikimedia Commons',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:View_of_Nha_Trang_city.jpg',
      ratio: '16 / 9',
    },
  },
};

export function getDestinationVisual(page) {
  const media = destinationVisuals[page.destinationName];
  if (!media) return null;
  const text = `${page.title ?? ''} ${page.heading ?? ''} ${page.eyebrow ?? ''}`.toLowerCase();
  if (/mad|food/.test(text) && media.food) return media.food;
  if (/strand|beach/.test(text) && media.beach) return media.beach;
  return media.default ?? null;
}

export function getDestinationVideo(page) {
  return destinationVisuals[page.destinationName]?.video ?? null;
}
