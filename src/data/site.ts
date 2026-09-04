export const site = {
  name: "Encantto D' Joyas",
  tagline: 'Plata Hecha a Mano',
  announcement: 'Complimentary hand engraving on every silver piece',
  email: 'hola@encanttodjoyas.com',
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Collections', href: '#collections' },
  { label: 'The Craft', href: '#feature' },
  { label: 'Visit Us', href: '#locations' },
];

export type Product = { name: string; meta: string; price: string; placeholder: string };

export const signaturePieces: Product[] = [
  { name: 'Filigrana Drop Earrings', meta: '.925 Silver \u00b7 Hand woven', price: '$185', placeholder: 'filigree earrings' },
  { name: 'Trujano Wide Cuff', meta: '.925 Silver \u00b7 Forged & burnished', price: '$340', placeholder: 'silver cuff' },
  { name: 'Encantto Pendant', meta: 'Silver & Oaxacan turquoise', price: '$260', placeholder: 'pendant with stone' },
];

export type Collection = { name: string; meta: string; blurb: string; placeholder: string };

export const collections: Collection[] = [
  {
    name: 'Filigrana',
    meta: '18 pieces \u00b7 from $150',
    blurb: 'Drawn silver wire coiled into lace. Earrings, chokers and combs in the traditional Oaxacan idiom.',
    placeholder: 'filigrana collection',
  },
  {
    name: 'Forjado',
    meta: '12 pieces \u00b7 from $220',
    blurb: 'Hammered cuffs and heavy rings, left with the honest texture of the anvil.',
    placeholder: 'forjado collection',
  },
  {
    name: 'Piedra',
    meta: '15 pieces \u00b7 from $195',
    blurb: 'Silver set with turquoise, obsidian and amber sourced within the state of Oaxaca.',
    placeholder: 'piedra collection',
  },
  {
    name: 'Novia',
    meta: 'Bespoke \u00b7 consultation',
    blurb: 'Bridal and quincea\u00f1era commissions, engraved by hand with names and dates.',
    placeholder: 'novia collection',
  },
];

export type Location = {
  kind: string;
  city: string;
  address: string[];
  phone: string;
  phoneHref: string;
  note?: string;
  hours: { days: string; time: string }[];
  mapUrl: string;
  placeholder: string;
  primary: boolean;
};

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
  },
  {
    kind: 'Atelier & Boutique \u00b7 M\u00e9xico',
    city: 'Oaxaca de Ju\u00e1rez',
    address: ['Calle de Valerio Trujano #219', 'Oaxaca de Ju\u00e1rez, Oax.'],
    phone: '951-187-0735',
    phoneHref: 'tel:+529511870735',
    hours: [
      { days: 'Lunes \u2014 S\u00e1bado', time: '10:00 \u2013 20:00' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
    mapUrl: 'https://maps.google.com/?q=Calle+de+Valerio+Trujano+219+Oaxaca+de+Juarez',
    placeholder: 'atelier \u2014 oaxaca',
    primary: false,
  },
];
