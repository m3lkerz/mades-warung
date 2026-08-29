export type MenuItem = {
  name: string
  price?: string
  description?: string
}

export type MenuSection = {
  title: string
  note?: string
  items: MenuItem[]
}

export const menuSections: MenuSection[] = [
  {
    title: 'Nasi Campur',
    note: 'Kies uit nasi putih, nasi kuning, nasi goreng of bami goreng.',
    items: [
      { name: 'Nasi Campur klein', price: '€ 16,50', description: 'Een soort vlees, twee soorten groenten en sambal goreng telor.' },
      { name: 'Nasi Campur Speciaal', price: '€ 19,50', description: 'Twee soorten vlees, twee soorten groenten en sambal goreng telor.' },
      { name: 'Gado Gado', price: '€ 10,50', description: 'Vegetarische groenteschotel met pindasaus.' },
      { name: 'Nasi Campur Vega', price: '€ 16,50', description: 'Drie soorten groenten, tempé of tahu en sambal goreng telor.' },
      { name: 'Nasi Campur voor twee', price: '€ 32,50', description: 'Twee soorten vlees, drie groenten, twee saté ayam, satésaus en twee sambal goreng telor.' },
    ],
  },
  {
    title: 'Soep',
    note: 'Geserveerd met nasi putih (witte rijst).',
    items: [
      { name: 'Soto ayam', price: '€ 9,50', description: 'Kippensoep met mihoen, taugé, kip en ei.' },
      { name: 'Bakso', price: '€ 11,50', description: 'Tot 16:00. Soep met runderballetjes, tahu en mihoen.' },
      { name: 'Vegan soup', price: '€ 9,50', description: 'Tot 16:00. Kokosbouillon met taugé, tahu, aardappel en tomaat.' },
    ],
  },
  {
    title: 'Saté en snacks',
    items: [
      { name: 'Saté Ayam', price: '€ 9,50', description: 'Vier stokjes kipsaté met satésaus.' },
      { name: 'Saté Lilit', price: '€ 2,50', description: 'Balinese kipsaté met citroengras, kokos en limoen, per stokje.' },
      { name: 'Lumpia kip', price: '€ 2,50' },
      { name: 'Lumpia vega', price: '€ 2,50' },
      { name: 'Pastei', price: '€ 3,75' },
      { name: 'Risolles', price: '€ 3,75' },
      { name: 'Martabak', price: '€ 4,50' },
      { name: 'Berkedel jagung', price: '€ 4,50' },
      { name: 'Lemper', price: '€ 3,75' },
    ],
  },
  {
    title: 'Warung gerechten',
    note: 'Groenten € 2,75, kip € 3,75 en rundvlees € 4,75 per 100 gram.',
    items: [
      { name: 'Ayam Betutu', description: 'Balinese kip met 27 verschillende specerijen.' },
      { name: 'Ayam Sisit', description: 'Pittige geplukte kip met kokos en citroengras.' },
      { name: 'Ayam Curry', description: 'Mild-pittige kip met kokos-curry.' },
      { name: 'Daging Rendang', description: 'Mild-pittig rundvlees met kokos.' },
      { name: 'Daging bumbu Bali', description: 'Pittig rundvlees op Balinese wijze.' },
      { name: 'Sambal goreng boontjes' },
      { name: 'Taugé tahu' },
      { name: 'Tahu curry' },
      { name: 'Sambal goreng tempé' },
    ],
  },
  {
    title: 'Streetfood',
    note: 'Verkrijgbaar tot 16:00.',
    items: [
      { name: 'Empek Empek', price: '€ 11,50' },
      { name: 'Siomay', price: '€ 11,50' },
      { name: 'Ayam Goreng', price: '€ 12,50' },
      { name: 'Ikan Goreng', price: '€ 16,50' },
      { name: 'Pepes Ikan', price: '€ 7,50' },
    ],
  },
  {
    title: 'Zoet',
    items: [
      { name: 'Spekkoek', price: '€ 3,50' },
      { name: 'Pisang Goreng', price: '€ 3,50' },
      { name: 'Dadar Gulung', price: '€ 3,50' },
    ],
  },
]

export const cateringMenus = [
  { price: '€ 17,50 p.p.', title: 'Vegetarisch', text: 'Twee soorten rijst, drie groenten, tempé of tahu, sambal telor, kroepoek, serundeng en sambal.' },
  { price: '€ 21,50 p.p.', title: 'Klassiek', text: 'Twee soorten rijst, twee soorten vlees, twee groenten, sambal telor, kroepoek, serundeng en sambal.' },
  { price: '€ 26,50 p.p.', title: 'Speciaal', text: 'Twee soorten rijst, twee soorten vlees, drie groenten, twee saté ayam, sambal telor en garnituren.' },
  { price: '€ 29,50 p.p.', title: 'Uitgebreid', text: 'Twee soorten rijst, drie soorten vlees, twee groenten, tempé of tahu, twee saté ayam en garnituren.' },
]

export const storyParagraphs = [
  "Een warung is een kraampje aan de kant van de weg in Indonesië. Een plek waar de lokale bevolking koffie drinkt, een hapje eet en de dag bespreekt. Made's Warung begon als zo'n plek, nog voordat het toerisme op Bali opkwam.",
  "Made Masih, de oudste dochter van het gezin, hielp na school haar grootmoeder en moeder. Langzaam veranderde de kleine Balinese warung in een ontmoetingsplaats voor locals en reizigers.",
  'In 1973 vertrok Peter Steenbergen uit Amsterdam met de auto naar Indonesië. Vier maanden later kwam hij aan op Bali. In Kuta ontmoette hij Made in de kleine warung. Ze werden verliefd, trouwden en bouwden samen verder aan de plek.',
  "De warung groeide uit tot een van de bekendste restaurants van Bali, zonder haar oorspronkelijke filosofie te verliezen. Mensen delen er eten, tafels en verhalen.",
  'Samen met Kuswati en Bagus Sanou kwam die filosofie naar Amsterdam. Kuswati leerde op Bali de recepten en kooktechnieken. Bagus verbouwde de winkel aan de Cornelis Krusemanstraat tot een kleine warung.',
  "Onze bumbu's worden in huis gemaakt met verse ingrediënten volgens traditioneel Balinees recept. Zonder chemische smaakversterkers en bewust minder zoet dan bij veel traditionele toko's.",
]
