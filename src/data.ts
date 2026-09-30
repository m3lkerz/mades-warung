// Content 1-op-1 overgenomen van madeswarungamsterdam.nl (menu, catering, over, jobs, contact) — 30-09-2026
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
    note: "Bij alle Nasi Campur's kies je tussen nasi putih, nasi kuning, nasi goreng of bami goreng.",
    items: [
      { name: 'Nasi Campur klein', price: '€ 16,50', description: 'Eén soort vlees, twee soorten groenten en 1 sambal goreng telor.' },
      { name: 'Nasi Campur Speciaal', price: '€ 19,50', description: 'Twee soorten vlees, twee soorten groenten en 1 sambal goreng telor.' },
      { name: 'Gado Gado', price: '€ 10,50', description: 'Vegetarische groenteschotel met pindasaus.' },
      { name: 'Nasi Campur Vega', price: '€ 16,50', description: 'Drie soorten groenten, tempé of tahu en 1 sambal goreng telor.' },
      { name: 'Nasi Campur 2 pers.', price: '€ 32,50', description: 'Twee soorten vlees, drie soorten groenten, twee saté ayam, satésaus en twee sambal goreng telor.' },
    ],
  },
  {
    title: 'Soep',
    note: 'Geserveerd met nasi putih (witte rijst).',
    items: [
      { name: 'Soto Ayam', price: '€ 9,50', description: 'Indonesische kippensoep gevuld met mihoen, taugé, kip en een ei.' },
      { name: 'Bakso — tot 16:00', price: '€ 11,50', description: 'Soep met runderballetjes, tahu en mihoen.' },
      { name: 'Vegan soup — tot 16:00', price: '€ 9,50', description: 'Dikke kokosbouillon gevuld met taugé, tahu, aardappel en tomaat.' },
    ],
  },
  {
    title: 'Saté',
    items: [
      { name: 'Saté Ayam', price: '€ 9,50', description: 'Vier stokjes saté ayam met satésaus.' },
      { name: 'Saté Lilit', price: '€ 2,50', description: 'Balinese kipsaté van gemalen kipfilet met o.a. citroengras, kokos en limoen (per stokje).' },
    ],
  },
  {
    title: 'Snacks',
    items: [
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
    title: 'Sayur',
    note: 'Groenten — € 2,75 per 100 gram.',
    items: [
      { name: 'Sambal goreng boontjes' },
      { name: 'Taugé tahu' },
      { name: 'Tumis broccoli' },
      { name: 'Terong' },
      { name: 'Urap' },
      { name: 'Groente van de dag' },
      { name: 'Tahu curry' },
      { name: 'Sambal goreng tempé of tempé manis' },
    ],
  },
  {
    title: 'Ayam',
    note: 'Kip — € 3,75 per 100 gram.',
    items: [
      { name: 'Ayam Kecap', description: 'Zoete kip.' },
      { name: 'Ayam Sisit', description: 'Pittige geplukte kip met kokos en citroengras.' },
      { name: 'Ayam Curry', description: 'Mild pittige kip met kokos-curry.' },
      { name: 'Ayam Betutu', description: 'Balinese kip met 27 verschillende soorten specerijen.' },
    ],
  },
  {
    title: 'Daging',
    note: 'Rundvlees — € 4,75 per 100 gram.',
    items: [
      { name: 'Daging Smoor', description: 'Zoet rundvlees.' },
      { name: 'Daging Rendang', description: 'Mild pittig rundvlees met kokos.' },
      { name: 'Daging Bumbu Bali', description: 'Pittig rundvlees.' },
    ],
  },
  {
    title: 'Streetfood',
    note: 'Tot 16:00.',
    items: [
      { name: 'Empek Empek', price: '€ 11,50' },
      { name: 'Siomay', price: '€ 11,50' },
      { name: 'Ayam Goreng', price: '€ 12,50' },
      { name: 'Ikan Goreng', price: '€ 16,50' },
      { name: 'Pepes Ikan', price: '€ 7,50' },
    ],
  },
  {
    title: 'Toetjes',
    items: [
      { name: 'Spekkoek', price: '€ 3,50' },
      { name: 'Pisang Goreng', price: '€ 3,50' },
      { name: 'Dadar Gulung', price: '€ 3,50' },
    ],
  },
]

export const cateringMenus = [
  { title: 'Menu A', price: '€ 21,50', text: '2 soorten rijst, 2 soorten vlees, 2 soorten groente en sambal telor (ei).', extras: 'Kroepoek, serundeng en sambal.' },
  { title: 'Menu B', price: '€ 26,50', text: '2 soorten rijst, 2 soorten vlees, 3 soorten groente, 2 saté ayam met satésaus en sambal telor (ei).', extras: 'Kroepoek, serundeng en sambal.' },
  { title: 'Menu C', price: '€ 29,50', text: '2 soorten rijst, 3 soorten vlees, 2 soorten groente, tempé of tahu, 2 saté ayam met satésaus en sambal telor (ei).', extras: 'Kroepoek, serundeng, atjar en sambal.' },
  { title: 'Menu D — Vega', price: '€ 17,50', text: '2 soorten rijst, 3 soorten groente, tempé of tahu en sambal telor (ei).', extras: 'Kroepoek, serundeng en sambal.' },
]

export const cateringDesserts = [
  { name: 'Spekkoek', price: '€ 3,50' },
  { name: 'Dadar Gulung', price: '€ 3,50' },
]

export const storyParagraphs = [
  "Een warung is een kraampje aan de kant van de weg in Indonesië, waar de lokale bevolking koffie drinkt en een hapje eet terwijl de dagelijkse beslommeringen worden besproken. Made's Warung was zo'n kraampje, nog voordat er toerisme was op Bali.",
  'Made Masih, de oudste dochter van het gezin, hielp na school haar grootmoeder en moeder en veranderde de Balinese warung langzaam in een ontmoetingsplaats voor toeristen en locals.',
  'Peter Steenbergen uit Amsterdam vertrok in 1973 met de auto naar Indonesië. Na een prachtige reis van vier maanden kwam hij aan op Bali. In Kuta ontmoetten Peter en Made elkaar in de kleine warung. Ze werden verliefd en na een jaar in het geheim te hebben gedate besloten ze te trouwen. Wil een verliefd stel op Bali trouwen en is het niet zeker of de ouders toestemming geven, dan kunnen ze weglopen: met goedvinden van de vrouw „ontvoert” de man haar. Gelukkig gaf Made\'s familie daarna haar zegen en werd er een officiële bruiloft georganiseerd.',
  'De warung van Made groeide door en transformeerde door de jaren heen tot een van de meest succesvolle restaurants op Bali, zonder de warung-filosofie te verliezen. Een tafel voor één of twee bestaat daar niet: vreemden zitten bij elkaar aan tafel en contact is snel gelegd.',
  'Met inmiddels vijf vestigingen op Bali werd besloten om samen met Kuswati en Bagus Sanou een kleine warung te openen in Amsterdam. Kuswati kwam naar Bali om de recepten en kooktechnieken te leren, terwijl haar man Bagus de winkel verbouwde tot warung.',
  "We bieden authentiek Balinees eten dat minder zoet is dan bij de traditionele Indonesische toko's. Onze bumbu's zijn huisgemaakt en bereid uit verse ingrediënten volgens traditioneel Balinees recept. In onze keuken wordt geen gebruik gemaakt van chemische smaakversterkers.",
  'We hopen dat het je smaakt en wensen je smakelijk eten — oftewel selamat makan.',
]
