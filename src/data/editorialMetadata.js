// Editorial identity and date provenance for article pages.
//
// Date policy:
// - datePublished = first known publication day in Git history for the page/content cluster.
// - dateModified = latest known editorial/content-affecting commit day before this metadata pass.
// - Dates are intentionally day-level ISO values. We do not invent publication times.
// - If a future page is not covered here, omit dates rather than fabricate them.

export const editorialPeople = {
  author: {
    id: 'van-phuc-bui',
    name: 'Van-Phuc Bui',
    url: '/om/van-phuc-bui/',
    image: '/images/om/van-phuc-thao-nhu-danmark.webp',
    jobTitle: 'Medstifter og ansvarlig for research og udvikling',
    description: 'Medstifter af RejsTilVietnam.dk med ansvar for research, struktur, teknisk udvikling og redaktionel gennemgang af guiderne for danske rejsende.',
    sameAs: ['https://vanphucbui.com/'],
    knowsAbout: ['Vietnam', 'rejseplanlægning', 'research', 'transport', 'digitale rejseværktøjer'],
  },
  reviewer: {
    id: 'le-huynh-nhu-thao',
    name: 'Lê Huỳnh Như Thảo',
    url: '/om/le-huynh-nhu-thao/',
    image: '/images/om/thao-nhu-phu-quoc.webp',
    jobTitle: 'Medstifter og rejsefaglig redaktør',
    description: 'Uddannet inden for turisme i Vietnam og med flere års professionel erfaring fra rejsebranchen. Gennemgår guiderne for faglig nøjagtighed, lokale forhold og relevans for danske rejsende.',
    knowsAbout: ['Vietnam', 'turisme', 'rejsebranchen', 'rejseplanlægning', 'danske rejsendes behov'],
  },
};

const exactDates = {
  '/destinationer/hanoi/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/sevaerdigheder/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/3-dage-i-hanoi/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/mad-i-hanoi/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/train-street/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/lufthavn-til-centrum/': ['2026-09-14', '2026-09-19'],
  '/destinationer/hanoi/ninh-binh-fra-hanoi/': ['2026-09-14', '2026-09-21'],
  '/destinationer/hanoi/ha-long-bay-fra-hanoi/': ['2026-09-14', '2026-09-21'],
  '/destinationer/hanoi/hvor-skal-man-bo/': ['2026-09-14', '2026-09-18'],
  '/destinationer/hanoi/bedste-hoteller/': ['2026-09-14', '2026-09-18'],
  '/destinationer/hanoi/hvor-mange-dage/': ['2026-09-18', '2026-09-19'],

  '/rejseguide/bedste-rejsetid/': ['2026-09-14', '2026-09-21'],
  '/rejseguide/visum/': ['2026-09-14', '2026-09-21'],
  '/rejseguide/transport/': ['2026-09-14', '2026-09-19'],
  '/rejseguide/penge-og-priser/': ['2026-09-14', '2026-09-21'],
  '/rejseguide/rejser-til-vietnam/': ['2026-09-18', '2026-09-21'],
  '/rejseguide/vietnam-med-boern/': ['2026-09-18', '2026-09-19'],
  '/rejseguide/vietnam-rejsevejledning/': ['2026-09-18', '2026-09-21'],
  '/rejseguide/billige-rejser-til-vietnam/': ['2026-09-18', '2026-09-19'],
  '/rejseguide/esim-vietnam/': ['2026-09-14', '2026-09-19'],
  '/rejseguide/kultur-og-etikette-vietnam/': ['2026-09-19', '2026-09-21'],
  '/rejseguide/mad-i-vietnam/': ['2026-09-19', '2026-09-19'],
  '/rejseguide/pakkeliste-vietnam/': ['2026-09-19', '2026-09-21'],
  '/rejseguide/rejseforsikring-vietnam/': ['2026-09-19', '2026-09-21'],
  '/rejseguide/vaccinationer-vietnam/': ['2026-09-19', '2026-09-21'],

  '/rejseplaner/vietnam-10-dage/': ['2026-09-14', '2026-09-21'],
  '/rejseplaner/vietnam-2-uger/': ['2026-09-14', '2026-09-21'],
  '/rejseplaner/vietnam-3-uger/': ['2026-09-14', '2026-09-21'],

  '/ture/halong-bay-cruise/': ['2026-09-14', '2026-09-19'],
  '/ture/ninh-binh-fra-hanoi/': ['2026-09-14', '2026-09-21'],
};

const prefixDates = [
  ['/destinationer/hoi-an/', '2026-09-14', '2026-09-18'],
  ['/destinationer/ho-chi-minh-city/', '2026-09-14', '2026-09-21'],
  ['/destinationer/phu-quoc/', '2026-09-14', '2026-09-19'],
  ['/destinationer/da-nang/', '2026-09-14', '2026-09-18'],
  ['/destinationer/nha-trang/', '2026-09-14', '2026-09-15'],
  ['/destinationer/da-lat/', '2026-09-19', '2026-09-21'],
  ['/destinationer/hue/', '2026-09-19', '2026-09-19'],
  ['/destinationer/ninh-binh/', '2026-09-19', '2026-09-19'],
  ['/destinationer/sapa/', '2026-09-19', '2026-09-19'],
  ['/destinationer/ha-long-bay/', '2026-09-19', '2026-09-21'],
];

const marineOnly = new Set([
  '/destinationer/phu-quoc/o-hop-og-snorkling/',
  '/destinationer/phu-quoc/vandsport-og-aktiviteter/',
  '/destinationer/nha-trang/o-ture-og-snorkling/',
  '/destinationer/nha-trang/vandsport-og-dykning/',
]);

function normalize(pathname = '/') {
  if (pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getEditorialMetadata(pathname) {
  const route = normalize(pathname);

  if (marineOnly.has(route)) {
    return {
      author: editorialPeople.author,
      reviewer: editorialPeople.reviewer,
      datePublished: '2026-09-15',
      dateModified: '2026-09-21',
    };
  }

  const exact = exactDates[route];
  if (exact) {
    return {
      author: editorialPeople.author,
      reviewer: editorialPeople.reviewer,
      datePublished: exact[0],
      dateModified: exact[1],
    };
  }

  const prefix = prefixDates.find(([base]) => route.startsWith(base));
  if (prefix) {
    return {
      author: editorialPeople.author,
      reviewer: editorialPeople.reviewer,
      datePublished: prefix[1],
      dateModified: prefix[2],
    };
  }

  return {
    author: editorialPeople.author,
    reviewer: editorialPeople.reviewer,
    datePublished: null,
    dateModified: null,
  };
}

export function formatDanishEditorialDate(value) {
  if (!value) return '';
  const parsed = new Date(`${value}T12:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return value;
  return new Intl.DateTimeFormat('da-DK', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Europe/Copenhagen',
  }).format(parsed);
}
