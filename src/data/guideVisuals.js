const W = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const img = (file, alt, caption, creditUrl) => ({
  src: `${W}${encodeURIComponent(file).replace(/%2F/g,'/')}?width=1600`,
  alt,
  caption,
  credit: 'Wikimedia Commons',
  creditUrl: creditUrl ?? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file).replace(/%2F/g,'/')}`,
});

export const guideVisuals = {
  'hoi-an': {
    'sevaerdigheder': {
      hero: img('Japanese Covered Bridge (Cau Chua Pagoda), Hoi An, Vietnam (7090643937).jpg','Japanese Covered Bridge i Hoi An','Den japanske bro er et af de mest genkendelige kulturstop i Hoi Ans gamle by.'),
    },
    '3-dage-i-hoi-an': {
      hero: img('Thu Bon river, Hoi An.jpg','Thu Bon-floden ved Hoi An','Floden binder Old Town, aftenture og flere af byens rolige øjeblikke sammen.'),
    },
    'hvor-skal-man-bo': {
      hero: img('Hoi An market.jpg','Gadeliv ved markedet i Hoi An','Placeringen ændrer rytmen i opholdet: tæt på Old Town, mellem byen og stranden eller helt ude ved kysten.'),
    },
    'bedste-hoteller': {
      hero: img('Japanese Covered Bridge DK.jpg','Hoi Ans gamle by','Vælg først område og stemning; derefter bliver hotelvalget langt lettere.'),
    },
    'strande': {
      hero: img('An Bang Beach (46353448872).jpg','An Bang Beach ved Hoi An','An Bang er den nemmeste strand at kombinere med Hoi An uden hotelskift.'),
    },
    'mad-i-hoi-an': {
      hero: img('Cao lầu in Hoi An.jpg','Cao lầu serveret i Hoi An','Cao lầu er en af de retter, der giver mest mening netop i Hoi An.'),
      highlights: [
        img('Cao Lau Hoi An.JPG','En skål cao lầu','Cao lầu: tykke nudler, svinekød, urter og sprøde elementer.'),
        img('Mì Quảng, Da Nang, Vietnam.jpg','Mì Quảng','Mì Quảng er en regional nudelret fra Quang Nam og Centralvietnam.'),
        img('Hoi An banh mi.jpg','Bánh mì i Hoi An','Bánh mì er et godt hurtigt måltid mellem Old Town, marked og caféstop.'),
      ],
      highlightsTitle:'Tre retter du bør kunne genkende',
    },
    'da-nang-til-hoi-an': {
      hero: img('2024 Hội An - Japanese Covered Bridge (Chùa Cầu) after renovation - portal - img 02.jpg','Indgangen ved Japanese Covered Bridge i Hoi An','Hoi An og Da Nang ligger tæt nok til, at transferen kan planlægges som en enkel del af rejsedagen.'),
    },
  },

  'da-nang': {
    'sevaerdigheder': {
      hero: img('Da Nang - Dragon Bridge.jpg','Dragon Bridge i Da Nang','Dragon Bridge og Han-floden giver Da Nang en tydelig moderne byidentitet.'),
    },
    '3-dage-i-da-nang': {
      hero: img('Han River Bridge.jpg','Han River Bridge i Da Nang','Tre dage fungerer bedst, når strand, by og én større udflugt får hver sin plads.'),
    },
    'hvor-skal-man-bo': {
      hero: img('My Khe Beach 1.jpg','My Khe Beach i Da Nang','Området ved My Khe passer til dig, der vil have strand tæt på hotel og stadig være tæt på byen.'),
    },
    'bedste-hoteller': {
      hero: img('Pictures of My Khe beach in Da Nang.jpg','My Khe Beach set fra byen','Et godt hotel i Da Nang handler ofte mere om den rigtige del af kysten end om en ekstra stjerne.'),
    },
    'bedste-strande': {
      hero: img('My Khe Beach Da Nang.jpg','My Khe Beach','My Khe er den mest praktiske bystrand, men kysten nord og syd giver andre typer stranddage.'),
    },
    'ba-na-hills': {
      hero: img('Golden Bridge above the clouds Ba Na Hills Da Nang Vietnam.jpg','Golden Bridge ved Ba Na Hills','Golden Bridge er det visuelle højdepunkt ved Ba Na Hills og bedst tidligt, før de største grupper ankommer.'),
    },
    'da-nang-til-hoi-an': {
      hero: img('Marble Mountains, Vietnam.jpg','Marble Mountains mellem Da Nang og Hoi An','Marble Mountains ligger naturligt på ruten mellem Da Nang og Hoi An og kan bruges som stop undervejs.'),
    },
  },

  'ho-chi-minh-city': {
    'sevaerdigheder': {
      hero: img('Central Post Office, Ho Chi Minh City.jpg','Central Post Office i Ho Chi Minh City','Den centrale postbygning ligger midt i et område med flere af byens klassiske stop.'),
    },
    '3-dage-i-ho-chi-minh-city': {
      hero: img('Saigon Skyline.jpg','Ho Chi Minh City skyline ved Saigon-floden','Tre dage giver plads til både centrum, historie, mad og én større udflugt.'),
    },
    'hvor-skal-man-bo': {
      hero: img('Ho Chi Minh City skyline (49399217481).jpg','Ho Chi Minh City skyline','I Ho Chi Minh City betyder områdevalg meget for hvor meget tid du bruger i trafik.'),
    },
    'bedste-hoteller': {
      hero: img('Ho Chi Minh City Skyline at Night.jpg','Ho Chi Minh City skyline om aftenen','Hoteller i District 1 og de centrale kvarterer giver den letteste første base.'),
    },
    'mad-i-ho-chi-minh-city': {
      hero: img('Ben Thanh Market 2025.jpg','Ben Thanh Market i Ho Chi Minh City','Markedet og de omkringliggende gader er en enkel introduktion til byens madscene.'),
      highlights: [
        img('Com-Tam-2008.jpg','Cơm tấm','Cơm tấm er et klassisk Saigon-måltid med brudte ris og grillet kød.'),
        img('Bánh mì.jpg','Vietnamesisk bánh mì','Bánh mì er oplagt til et hurtigt morgen- eller frokoststop.'),
        img('Ben Thanh Market.jpg','Ben Thanh Market','Brug markedet som pejlemærke, men spis også på mindre steder væk fra de mest turistede gange.'),
      ],
      highlightsTitle:'Smag dig ind på Saigon',
    },
    'cu-chi-tunneler-fra-ho-chi-minh-city': {
      hero: img('Cu Chi Tunnel Vietnam (38647687955).jpg','Indgang ved Cu Chi-tunnellerne','Cu Chi er en historisk heldags- eller halvdagstur, hvor tidlig afgang giver en bedre dag.'),
    },
    'mekong-delta-fra-ho-chi-minh-city': {
      hero: img('Vietnam, Phong Dien, Mekong Delta.jpg','Båd på en kanal i Mekongdeltaet','Mekongdeltaet giver mest mening, når du vælger færre stop og mere reel tid på vandet.'),
    },
    'lufthavn-til-centrum': {
      hero: img('Tan Son Nhat International Airport.jpg','Tan Son Nhat International Airport','Lufthavnen ligger tæt på centrum i kilometer, men trafik kan gøre transferen markant længere.'),
    },
    'bedste-rejsetid': {
      hero: img('Ho Chi Minh City Skyline (night).jpg','Ho Chi Minh City om aftenen','Byen kan besøges året rundt, men varme og regn påvirker tempoet mere end seværdighederne.'),
    },
  },

  'nha-trang': {
    'sevaerdigheder': {
      hero: img('04052023 Ponagar Hindu temples complex, Nha Trang Vietnam - 27.jpg','Po Nagar-templerne i Nha Trang','Po Nagar er det stærkeste historiske stop i en by, der ellers er kendt for kysten.'),
    },
    'hvor-skal-man-bo': {
      hero: img('Dam Market Nha Trang 1.jpg','Dam Market i Nha Trang','Et centralt område gør det lettere at kombinere strand, mad og korte byture.'),
    },
    'bedste-hoteller': {
      hero: img('NhaTrangVinpearlCableCar.jpg','Vinpearl-kabelbanen over Nha Trang Bay','Hotelvalget afhænger af om du vil bo i selve byen, ved stranden eller på resort.'),
    },
    'bedste-strande': {
      hero: img('Nha Trang Bay and Vinwonders. Nha Trang, Vietnam. June 2025.jpg','Nha Trang Bay og Hon Tre','Nha Trang Bay gør det let at kombinere bystrand med øture og havoplevelser.'),
    },
    '3-dage-i-nha-trang': {
      hero: img('Long Son Pagoda 1.jpg','Long Son Pagoda i Nha Trang','Tre dage giver plads til én kulturdag, én dag på vandet og en mere fleksibel tredje dag.'),
    },
  },

  'phu-quoc': {
    'bedste-strande': {
      hero: img('Bai Sao, Phú Quốc, Vietnam (3870300491).jpg','Bai Sao på Phu Quoc','Bai Sao er den klassiske postkortstrand, men de forskellige kyster passer til forskellige ophold.'),
    },
    'hvor-skal-man-bo': {
      hero: img('An Thoi fishing harbour Sunset Town Sun World Phu Quoc Vietnam.jpg','An Thoi-havnen på Phu Quoc','Nord, vest og syd føles næsten som forskellige ferier; vælg område før resort.'),
    },
    'bedste-hoteller': {
      hero: img('Phu Quoc sunset.jpg','Solnedgang på Phu Quoc','Vestkysten er attraktiv til solnedgang, mens syd og nord passer bedre til mere resortorienterede ophold.'),
    },
    'sevaerdigheder': {
      hero: img('Cap-treo-hon-thom-4.jpg','Hon Thom-kabelbanen på Phu Quoc','Sydøen kombinerer kabelbane, bådture og strand, men lad stadig plads til rolige dage.'),
    },
    '4-dage-i-phu-quoc': {
      hero: img('Phu Quoc, Viet Nam.jpg','Kysten på Phu Quoc','Fire dage fungerer bedst med højst én stor aktivitet og god plads til strand.'),
    },
    'vejr-og-bedste-rejsetid': {
      hero: img('Bai Sao Beach.jpg','Bai Sao Beach på Phu Quoc','Sæsonen påvirker hav, strand og bådture mere på Phu Quoc end i Vietnams store byer.'),
    },
    'lufthavn-og-transport': {
      hero: img('Phu Quoc International Airport.JPG','Phu Quoc International Airport','Afstandene på øen er lange nok til, at lufthavn og transfer bør indgå i hotelvalget.'),
    },
  },
};

export function getGuideVisuals(destination, guide) {
  return guideVisuals[destination]?.[guide] ?? null;
}
