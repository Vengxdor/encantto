export const site = {
  name: "Encantto D' Joyas",
  tagline: 'Plata Hecha a Mano',
  announcement: 'Complimentary hand engraving on every silver piece',
  email: 'hola@encanttodjoyas.com',
}

export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Visit Us', href: '/visit' },
  { label: 'Contact', href: '/contact' },
]

export type Product = {
  name: string
  meta: string
  price: string
  img: {
    src: string
    alt: string
  }
  placeholder: string
}

export const signaturePieces: Product[] = [
  {
    name: 'Solitaire Engagement Ring',
    meta: '.925 Silver · Round cut stone',
    price: '$185',
    placeholder: 'engagement ring',
    img: {
      src: '/home-collection/coll4.png',
      alt: 'Round diamond-style solitaire engagement ring on a wooden ring box',
    },
  },
  {
    name: 'ID Chain Bracelet',
    meta: '.925 Silver · Cuban link, personalized',
    price: '$340',
    placeholder: 'ID bracelet',
    img: {
      src: '/home-collection/coll5.png',
      alt: 'Sterling silver Cuban link ID bracelet with pavé accents',
    },
  },
  {
    name: 'Tree of Life Heart Pendant',
    meta: 'Sterling Silver .925',
    price: '$260',
    placeholder: 'heart pendant',
    img: {
      src: '/home-collection/coll8.png',
      alt: 'Sterling silver heart-shaped pendant with an engraved Tree of Life design',
    },
  },
]

export type Collection = {
  name: string
  meta: string
  blurb: string
  img: {
    src: string
    alt: string
  }
}

export const collections: Collection[] = [
  {
    name: 'Eslabón',
    meta: 'Curb & link styles',
    blurb: 'Bold linked chains and bracelets, substantial without being heavy.',
    img: {
      src: '/home-collection/coll11.png',
      alt: 'Sterling silver curb link bracelet displayed on a hand mannequin',
    },
  },
  {
    name: 'Lapis Azul',
    meta: 'Silver & blue stone sets',
    blurb:
      'Matching necklace, earring and ring sets in silver and deep blue stone.',
    img: {
      src: '/home-collection/coll10.png',
      alt: 'Sterling silver necklace, earrings, and ring set with oval blue lapis-style stones',
    },
  },
  {
    name: 'Frida',
    meta: 'Enamel & silver pendants',
    blurb:
      'Hand-painted enamel pendants and earrings inspired by Mexican folk art.',
    img: {
      src: '/home-collection/coll3.png',
      alt: 'Silver pendant with a hand-painted enamel Frida Kahlo-style figure, paired with red stud earrings',
    },
  },
  {
    name: 'Capas',
    meta: 'Layered chain necklaces',
    blurb: 'Multi-strand silver chains, layered for a fuller statement look.',
    img: {
      src: '/home-collection/coll12.png',
      alt: 'Layered multi-strand sterling silver chain necklaces displayed on a bust',
    },
  },
]

export type Location = {
  kind: string
  city: string
  address: string[]
  phone: string
  phoneHref: string
  note?: string
  hours: { days: string; time: string }[]
  mapUrl: string
  placeholder: string
  primary: boolean
  imgSrc?: string
  mapSrc?: string
}

export const locations: Location[] = [
  {
    kind: 'Flagship Boutique \u00b7 USA',
    city: 'Cicero, Illinois',
    address: ['2420 S Laramie Ave', 'Cicero, IL 60804'],
    phone: '(+1) 464-246-8403',
    phoneHref: 'tel:+14642468403',
    note: 'Se habla espa\u00f1ol',
    hours: [
      { days: 'Monday \u2014 Friday', time: '10:00 \u2013 19:00' },
      { days: 'Saturday', time: '10:00 \u2013 18:00' },
      { days: 'Sunday', time: '11:00 \u2013 16:00' },
    ],
    mapUrl: 'https://maps.google.com/?q=2420+S+Laramie+Ave+Cicero+IL+60804',
    placeholder: 'storefront \u2014 cicero',
    primary: true,
    imgSrc: '/cicero-entrance.png',
    mapSrc:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=41.846947%20-87.754191&amp;maptype=roadmap&amp;zoom=16',
  },
  {
    kind: 'Atelier & Boutique \u00b7 M\u00e9xico',
    city: 'Oaxaca de Ju\u00e1rez',
    address: ['Calle de Valerio Trujano #219', 'Oaxaca de Ju\u00e1rez, Oax.'],
    phone: '(+52) 951-187-0735',
    phoneHref: 'tel:+529511870735',
    hours: [
      { days: 'Lunes \u2014 S\u00e1bado', time: '10:00 \u2013 20:00' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
    mapUrl:
      'https://maps.google.com/?q=Calle+de+Valerio+Trujano+219+Oaxaca+de+Juarez',
    placeholder: 'atelier \u2014 oaxaca',
    primary: false,
    imgSrc: '/oax-entrance.png',
    mapSrc:
      'https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=17.060258%2C%20-96.7275049&amp;maptype=roadmap&amp;zoom=16',
  },
]

export type Principle = { title: string; body: string }

export const principles: Principle[] = [
  {
    title: 'Made, not assembled',
    body: 'Every piece is cut, soldered and finished by a single artisan from start to end.',
  },
  {
    title: 'Stone by hand',
    body: 'Turquoise, obsidian and amber chosen at the quarry, matched piece to piece.',
  },
  {
    title: 'Kept for life',
    body: 'Complimentary polishing and re-sizing at either boutique, whenever you need it.',
  },
]

export const enquiryTypes = [
  'A commission',
  'Repair or re-sizing',
  'Bridal & quincea\u00f1era',
  'Wholesale',
  'Something else',
]
