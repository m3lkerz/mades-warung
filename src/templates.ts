import { cateringMenus, menuSections, storyParagraphs } from './data'

const B = import.meta.env.BASE_URL.replace(/\/$/, '')

const MAPS = 'https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam'
const TEL = 'tel:+31203704231'
const MAIL = 'madeswarungamsterdam@gmail.com'

type Img = { name: string; alt: string; sizes?: string; priority?: boolean; cls?: string }

const PORTRAIT = { w: 1600, h: 2413 }
const LANDSCAPE = { w: 1600, h: 1061 }
const landscapes = new Set(['buffet', 'scoop', 'counter', 'juice', 'orchid'])

function img({ name, alt, sizes = '(max-width: 760px) 100vw, 50vw', priority = false, cls = '' }: Img) {
  const d = landscapes.has(name) ? LANDSCAPE : PORTRAIT
  return `<img${cls ? ` class="${cls}"` : ''} src="${B}/assets/photos/${name}.webp" srcset="${B}/assets/photos/${name}-sm.webp 800w, ${B}/assets/photos/${name}.webp 1600w" sizes="${sizes}" alt="${alt}" width="${d.w}" height="${d.h}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" />`
}

const navItems = [
  ['Menu', '/menu'],
  ['Ons verhaal', '/our-story'],
  ['Catering', '/catering'],
  ['Werken bij', '/jobs'],
  ['Contact', '/contact'],
]

const navLinks = (active: string) =>
  navItems.map(([label, href]) => `<a href="${B}${href}" ${active === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')

export function header(activePath: string) {
  return `
    <a class="skip-link" href="#main">Naar de inhoud</a>
    <header class="site-header" data-header>
      <a class="brand" href="${B}/" aria-label="Made's Warung Amsterdam, home">
        <img src="${B}/assets/mades-logo.png" width="108" height="74" alt="Made's Warung Amsterdam" />
      </a>
      <nav class="desktop-nav" aria-label="Hoofdnavigatie">${navLinks(activePath)}</nav>
      <p class="open-status"><span class="dot" aria-hidden="true"></span><span data-open-text>Wo t/m ma · 12:00–20:00</span></p>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobiele navigatie" hidden>
        <a href="${B}/" ${activePath === '/' ? 'aria-current="page"' : ''}>Home</a>
        ${navLinks(activePath)}
        <p>Woensdag t/m maandag, 12:00–20:00<br>Dinsdag gesloten</p>
      </nav>
    </header>
  `
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-top">
        <p class="footer-sign">Selamat <em>makan.</em></p>
        <a class="btn btn-sun" href="${MAPS}" target="_blank" rel="noreferrer">Route naar de warung</a>
      </div>
      <div class="footer-grid">
        <div>
          <h2>Adres</h2>
          <a href="${MAPS}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a>
        </div>
        <div>
          <h2>Open</h2>
          <p>Woensdag t/m maandag<br>12:00–20:00<br>Dinsdag gesloten</p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="${TEL}">020 370 42 31</a>
          <a href="mailto:${MAIL}">E-mail ons</a>
          <a href="https://www.instagram.com/madeswarungamsterdam/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <h2>Pagina's</h2>
          ${navItems.map(([l, h]) => `<a href="${B}${h}">${l}</a>`).join('')}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© Made's Warung Amsterdam</span>
        <span>Geen reserveringen, loop gerust binnen.</span>
      </div>
    </footer>
  `
}

function shell(path: string, content: string, pageClass = '') {
  return `${header(path)}<main id="main" class="${pageClass}">${content}</main>${footer()}`
}

const dishes = ['Ayam Betutu', 'Daging Rendang', 'Saté Lilit', 'Gado Gado', 'Nasi Kuning', 'Sambal goreng telor', 'Soto Ayam', 'Pisang Goreng', 'Spekkoek', 'Tempé']
const marquee = () => `
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      ${[0, 1].map(() => `<span>${dishes.map(d => `${d}<i>✦</i>`).join('')}</span>`).join('')}
    </div>
  </div>`

export function homePage() {
  return shell('/', `
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Balinese warung · Amsterdam-Zuid</p>
        <h1>Bali, <em>opgeschept</em> in Amsterdam.</h1>
        <p class="hero-lead">Huisgemaakte bumbu's, verse ingrediënten en familierecepten uit Kuta. Kies aan de toonbank, eet bij ons of neem mee.</p>
        <div class="hero-actions">
          <a class="btn btn-ink" href="${B}/menu">Bekijk het menu</a>
          <a class="btn btn-line" href="${MAPS}" target="_blank" rel="noreferrer">Route</a>
        </div>
        <dl class="hero-facts">
          <div><dt>Open</dt><dd>Wo t/m ma<br>12:00–20:00</dd></div>
          <div><dt>Adres</dt><dd>Cornelis<br>Krusemanstraat 3</dd></div>
          <div><dt>Bestellen</dt><dd><a href="${TEL}">020 370 42 31</a></dd></div>
        </dl>
      </div>
      <div class="hero-media">
        <figure class="hero-main">${img({ name: 'plate', alt: 'Nasi campur met saté lilit, groenten en sambal op een houten tafel', sizes: '(max-width: 900px) 100vw, 42vw', priority: true })}</figure>
        <figure class="hero-inset">${img({ name: 'chef', alt: 'Kok schept gerechten op achter de toonbank', sizes: '(max-width: 900px) 45vw, 18vw' })}</figure>
      </div>
    </section>

    ${marquee()}

    <section class="how section">
      <div class="how-head reveal">
        <p class="eyebrow">Zo werkt de warung</p>
        <h2>Stel je eigen <em>Nasi Campur</em> samen.</h2>
      </div>
      <ol class="how-steps">
        <li class="reveal"><span>01</span><h3>Kies je basis</h3><p>Nasi putih, nasi kuning, nasi goreng of bami goreng.</p></li>
        <li class="reveal"><span>02</span><h3>Wijs je lauk aan</h3><p>Ayam betutu, rendang, sambal goreng boontjes, tempé — alles vers uit de vitrine.</p></li>
        <li class="reveal"><span>03</span><h3>Sambal erbij</h3><p>Altijd met sambal goreng telor. Klein € 16,50, speciaal € 19,50.</p></li>
      </ol>
      <figure class="how-photo reveal">${img({ name: 'buffet', alt: 'Vitrine met verse Balinese gerechten: groenten, kip, tahu en boontjes', sizes: '100vw' })}</figure>
    </section>

    <section class="signatures section">
      <figure class="sig-photo reveal">${img({ name: 'scoop', alt: 'Nasi kuning wordt opgeschept in een bakje', sizes: '(max-width: 900px) 100vw, 45vw' })}</figure>
      <div class="sig-list">
        <p class="eyebrow reveal">Begin met de klassiekers</p>
        <h2 class="reveal">Wat je <em>moet</em> proeven.</h2>
        <ul>
          <li class="reveal"><div><h3>Ayam Betutu</h3><p>Balinese kip met 27 verschillende specerijen.</p></div><strong>€ 3,75 <small>/100 g</small></strong></li>
          <li class="reveal"><div><h3>Nasi Campur Speciaal</h3><p>Twee soorten vlees, twee groenten en sambal goreng telor.</p></div><strong>€ 19,50</strong></li>
          <li class="reveal"><div><h3>Saté Lilit</h3><p>Balinese kipsaté met citroengras, kokos en limoen.</p></div><strong>€ 2,50 <small>/stuk</small></strong></li>
          <li class="reveal"><div><h3>Gado Gado</h3><p>Vegetarische groenteschotel met huisgemaakte pindasaus.</p></div><strong>€ 10,50</strong></li>
          <li class="reveal"><div><h3>Soto Ayam</h3><p>Kippensoep met mihoen, taugé en ei.</p></div><strong>€ 9,50</strong></li>
        </ul>
        <a class="link-arrow reveal" href="${B}/menu">Volledig menu <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="gallery section" aria-labelledby="gallery-title">
      <div class="gallery-head reveal">
        <p class="eyebrow">Binnen bij Made's</p>
        <h2 id="gallery-title">Een klein stukje <em>Kuta</em> in Zuid.</h2>
        <p>Een paar krukken aan het raam, een Balinese payung aan het plafond en altijd iets dat staat te pruttelen.</p>
      </div>
      <div class="gallery-grid">
        <figure class="g1 reveal">${img({ name: 'window', alt: 'Barkrukken aan het raam met Balinees schilderij', sizes: '(max-width: 760px) 50vw, 30vw' })}</figure>
        <figure class="g2 reveal">${img({ name: 'umbrella', alt: 'Balinese ceremoniële parasol aan het plafond', sizes: '(max-width: 760px) 50vw, 22vw' })}</figure>
        <figure class="g3 reveal">${img({ name: 'juice', alt: 'Verse jamu wordt ingeschonken aan het raam', sizes: '(max-width: 760px) 100vw, 45vw' })}</figure>
        <figure class="g4 reveal">${img({ name: 'guest', alt: 'Gast eet aan tafel bij de toonbank', sizes: '(max-width: 760px) 50vw, 22vw' })}</figure>
        <figure class="g5 reveal">${img({ name: 'batik', alt: "Menukaart van Made's Warung op een batikkleed", sizes: '(max-width: 760px) 50vw, 22vw' })}</figure>
      </div>
    </section>

    <section class="story-band">
      <div class="story-band-inner section">
        <div class="story-year reveal" aria-hidden="true" role="presentation"><svg viewBox="0 0 400 110" width="100%"><text x="0" y="95" font-size="120" fill="currentColor">1973</text></svg></div>
        <div class="story-band-copy reveal">
          <p class="eyebrow">Ons verhaal</p>
          <h2>Van een kraampje in Kuta naar de <em>Cornelis Krusemanstraat.</em></h2>
          <p>Peter reed in 1973 met de auto van Amsterdam naar Bali en ontmoette Made in de warung van haar familie. Kuswati en Bagus brachten die filosofie — eten, tafels en verhalen delen — naar Amsterdam.</p>
          <a class="link-arrow" href="${B}/our-story">Lees het hele verhaal <span aria-hidden="true">→</span></a>
        </div>
        <figure class="story-band-photo reveal">${img({ name: 'duo', alt: "Het team van Made's Warung voor de houten voordeur", sizes: '(max-width: 900px) 100vw, 34vw' })}</figure>
      </div>
    </section>

    <section class="catering-strip section">
      <div class="catering-strip-copy reveal">
        <p class="eyebrow">Catering vanaf 20 personen</p>
        <h2>De warung <em>bij jou</em> op tafel.</h2>
        <p>Warm geleverd in rechauds, opgebouwd als lopend buffet en de volgende dag weer opgehaald.</p>
        <a class="btn btn-ink" href="${B}/catering">Bekijk cateringmenu's</a>
      </div>
      <ul class="catering-prices reveal">
        ${cateringMenus.map(m => `<li><span>${m.title}</span><strong>${m.price.replace(' p.p.', '')}</strong><small>p.p.</small></li>`).join('')}
      </ul>
    </section>

    <section class="visit section">
      <figure class="visit-photo reveal">${img({ name: 'counter', alt: "De toonbank en vitrine van Made's Warung met krijtborden", sizes: '(max-width: 900px) 100vw, 55vw' })}</figure>
      <div class="visit-copy reveal">
        <p class="eyebrow">Kom langs</p>
        <h2>Loop binnen, kies aan de <em>toonbank.</em></h2>
        <p>We zijn een kleine afhaalwarung met een paar zitplaatsen. Reserveren hoeft niet — en kan ook niet.</p>
        <dl>
          <div><dt>Adres</dt><dd><a href="${MAPS}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3, 1075 NB Amsterdam</a></dd></div>
          <div><dt>Open</dt><dd>Woensdag t/m maandag, 12:00–20:00</dd></div>
          <div><dt>Dicht</dt><dd>Dinsdag</dd></div>
          <div><dt>Bellen</dt><dd><a href="${TEL}">020 370 42 31</a></dd></div>
        </dl>
      </div>
    </section>
  `, 'home-page')
}

export function menuPage() {
  return shell('/menu', `
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Dagelijks vers bereid</p>
        <h1>Ons <em>menu</em></h1>
        <p>Van Nasi Campur tot Balinese streetfood. Kies aan de toonbank wat bij je past.</p>
      </div>
      <figure class="page-hero-photo">${img({ name: 'buffet', alt: 'Vitrine met verse Balinese gerechten', sizes: '(max-width: 900px) 100vw, 55vw', priority: true })}</figure>
    </section>
    <section class="menu-layout section">
      <nav class="menu-jump" aria-label="Menucategorieën">
        ${menuSections.map((s, i) => `<a href="#menu-${i}">${s.title}</a>`).join('')}
      </nav>
      <div class="menu-sections">
        ${menuSections.map((s, i) => `
          <section class="menu-cat reveal" id="menu-${i}">
            <header><h2>${s.title}</h2>${s.note ? `<p>${s.note}</p>` : ''}</header>
            <ul>
              ${s.items.map(it => `<li><div class="mi-row"><h3>${it.name}</h3><span class="mi-dots" aria-hidden="true"></span>${it.price ? `<strong>${it.price}</strong>` : ''}</div>${it.description ? `<p>${it.description}</p>` : ''}</li>`).join('')}
            </ul>
          </section>`).join('')}
        <p class="menu-disclaimer">Prijzen en beschikbaarheid kunnen wijzigen. Vraag ons team naar allergenen en de gerechten van vandaag.</p>
      </div>
    </section>
  `, 'inner-page')
}

export function storyPage() {
  return shell('/our-story', `
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Ons verhaal · sinds 1973</p>
        <h1>Geboren op Bali. <em>Thuis</em> in Amsterdam.</h1>
      </div>
      <figure class="page-hero-photo">${img({ name: 'shrine', alt: 'Balinese payung en ornamenten in de warung', sizes: '(max-width: 900px) 100vw, 45vw', priority: true })}</figure>
    </section>
    <article class="long-story section">
      <p class="story-lead reveal">${storyParagraphs[0]}</p>
      <div class="story-cols">
        <div class="prose reveal">${storyParagraphs.slice(1, 3).map(p => `<p>${p}</p>`).join('')}</div>
        <figure class="reveal">${img({ name: 'door', alt: "Het team voor de ingang van Made's Warung", sizes: '(max-width: 900px) 100vw, 40vw' })}</figure>
      </div>
      <blockquote class="reveal"><p>“Mensen delen er eten, tafels en <em>verhalen.</em>”</p></blockquote>
      <div class="story-cols reverse">
        <figure class="reveal">${img({ name: 'chef', alt: 'Kok schept gerechten op achter de toonbank', sizes: '(max-width: 900px) 100vw, 40vw' })}</figure>
        <div class="prose reveal">${storyParagraphs.slice(3).map(p => `<p>${p}</p>`).join('')}<p class="sign">Selamat makan.</p></div>
      </div>
    </article>
  `, 'inner-page')
}

export function cateringPage() {
  return shell('/catering', `
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Vanaf 20 personen</p>
        <h1>Balinees buffet, <em>warm</em> bezorgd.</h1>
        <p>Wij brengen alles in rechauds, bouwen het buffet op en halen de materialen de volgende dag weer op.</p>
        <a class="btn btn-ink" href="mailto:${MAIL}?subject=Cateringaanvraag">Vraag catering aan</a>
      </div>
      <figure class="page-hero-photo">${img({ name: 'scoop', alt: 'Nasi kuning wordt opgeschept', sizes: '(max-width: 900px) 100vw, 55vw', priority: true })}</figure>
    </section>
    <section class="section">
      <h2 class="section-title reveal">Kies jullie <em>menu.</em></h2>
      <div class="cater-grid">
        ${cateringMenus.map(m => `<article class="cater-card reveal"><p class="cater-name">${m.title}</p><p class="cater-price">${m.price.replace(' p.p.', '')}<small> p.p.</small></p><p>${m.text}</p></article>`).join('')}
      </div>
      <div class="cater-notes reveal">
        <h2>Zo werkt het</h2>
        <ul>
          <li>Alle prijzen inclusief levering op locatie</li>
          <li>Warm in rechauds, klaar als lopend buffet</li>
          <li>Borden en bestek optioneel</li>
          <li>Betaling vooraf</li>
        </ul>
        <a class="btn btn-sun" href="mailto:${MAIL}?subject=Cateringaanvraag">Mail je aanvraag</a>
      </div>
    </section>
  `, 'inner-page')
}

export function contactPage() {
  return shell('/contact', `
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Amsterdam-Zuid</p>
        <h1>Kom <em>langs.</em></h1>
        <p>Geen reservering nodig. Kies je gerechten aan de toonbank, neem ze mee of eet bij ons.</p>
        <dl class="contact-list">
          <div><dt>Adres</dt><dd><a href="${MAPS}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a></dd></div>
          <div><dt>Open</dt><dd>Woensdag t/m maandag, 12:00–20:00<br>Dinsdag gesloten</dd></div>
          <div><dt>Contact</dt><dd><a href="${TEL}">020 370 42 31</a><br><a href="mailto:${MAIL}">${MAIL}</a></dd></div>
        </dl>
      </div>
      <figure class="page-hero-photo">${img({ name: 'facade', alt: "Gevel van Made's Warung met planten en rood uithangbord", sizes: '(max-width: 900px) 100vw, 45vw', priority: true })}</figure>
    </section>
  `, 'inner-page')
}

export function jobsPage() {
  return shell('/jobs', `
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Join our team</p>
        <h1>Werk mee in <em>onze</em> warung.</h1>
        <p>We zoeken parttimers en fulltimers voor de bediening. Mensen die gastvrij zijn, graag leren en hun ideeën durven delen.</p>
        <ul class="ticks"><li>Passend salaris</li><li>Flexibele werkuren</li><li>Een klein en betrokken familieteam</li><li>Een frisse werkomgeving</li></ul>
        <a class="btn btn-ink" href="mailto:${MAIL}?subject=Sollicitatie Made's Warung">Solliciteer per e-mail</a>
      </div>
      <figure class="page-hero-photo">${img({ name: 'duo', alt: "Twee teamleden bij de ingang van Made's Warung", sizes: '(max-width: 900px) 100vw, 45vw', priority: true })}</figure>
    </section>
  `, 'inner-page')
}

export function notFoundPage() {
  return shell('', `<section class="not-found section"><p class="eyebrow">404</p><h1>Deze tafel is <em>leeg.</em></h1><p>De pagina die je zoekt bestaat niet.</p><a class="btn btn-ink" href="${B}/">Terug naar home</a></section>`, 'inner-page')
}
