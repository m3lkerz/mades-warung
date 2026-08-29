import { cateringMenus, menuSections, storyParagraphs } from './data'

const photo = (name: string) => `/assets/photos/${name}.webp`

const navItems = [
  ['Home', '/'],
  ['Menu', '/menu'],
  ['Over', '/our-story'],
  ['Contact', '/contact'],
  ['Catering', '/catering'],
  ['Jobs', '/jobs'],
]

export function header(activePath: string) {
  return `
    <a class="skip-link" href="#main">Naar de inhoud</a>
    <header class="site-header" data-header>
      <a class="brand" href="/" aria-label="Mades Warung Amsterdam, home">
        <img src="/assets/mades-logo.png" width="108" height="74" alt="Mades Warung Amsterdam" />
      </a>
      <nav class="desktop-nav" aria-label="Hoofdnavigatie">
        ${navItems.map(([label, href]) => `<a href="${href}" ${activePath === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
      </nav>
      <a class="nav-action" href="/menu">Bekijk menu</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobiele navigatie" hidden>
        ${navItems.map(([label, href]) => `<a href="${href}" ${activePath === href ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        <p>Woensdag t/m maandag<br>12:00 - 20:00</p>
      </nav>
    </header>
  `
}

export function footer() {
  return `
    <footer class="site-footer">
      <div class="footer-main">
        <a class="footer-wordmark" href="/">Made's Warung</a>
        <p>Balinees-Indonesisch eten, huisgemaakt in Amsterdam-Zuid.</p>
      </div>
      <div class="footer-grid">
        <div>
          <h2>Kom langs</h2>
          <a href="https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a>
        </div>
        <div>
          <h2>Open</h2>
          <p>Woensdag t/m maandag<br>12:00 - 20:00<br>Dinsdag gesloten</p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="tel:+31203704231">020 370 42 31</a>
          <a href="mailto:madeswarungamsterdam@gmail.com">E-mail ons</a>
          <a href="https://www.instagram.com/madeswarungamsterdam/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Made's Warung Amsterdam</span>
        <span>Geen reserveringen, loop gerust binnen.</span>
      </div>
    </footer>
  `
}

function shell(path: string, content: string, pageClass = '') {
  return `${header(path)}<main id="main" class="${pageClass}">${content}</main>${footer()}`
}

export function homePage() {
  return shell('/', `
    <section class="hero-section">
      <img class="hero-image" src="${photo('hero')}" srcset="${photo('hero-sm')} 860w, ${photo('hero')} 1800w" sizes="100vw" alt="Analoge foto uit Made's Warung Amsterdam" width="1800" height="1194" fetchpriority="high" />
      <div class="hero-scrim"></div>
      <div class="hero-copy">
        <p class="hero-kicker">Een stukje Bali in Amsterdam</p>
        <h1>Bali, geserveerd in Amsterdam.</h1>
        <p>Huisgemaakte bumbu's, verse ingrediënten en familierecepten. Authentiek Balinees, zonder chemische smaakversterkers.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/menu">Bekijk menu</a>
          <a class="button button-ghost" href="https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam" target="_blank" rel="noreferrer">Route</a>
        </div>
      </div>
      <div class="hours-bar" aria-label="Openingstijden">
        <span>Woensdag t/m maandag</span>
        <strong>12:00 - 20:00</strong>
        <span>Dinsdag gesloten</span>
      </div>
    </section>

    <section class="intro-section section-pad">
      <div class="intro-copy reveal">
        <p class="section-label">Onze keuken</p>
        <h2>Geen haast. Geen geheim ingrediënt. Wel 27 specerijen.</h2>
        <p>Onze gerechten beginnen bij verse bumbu's die we zelf maken. De smaak is uitgesproken, gelaagd en herkenbaar Balinees.</p>
        <a class="text-link" href="/our-story">Lees ons verhaal <span aria-hidden="true">↗</span></a>
      </div>
      <figure class="intro-photo reveal">
        <img src="${photo('portrait-1')}" srcset="${photo('portrait-1-sm')} 720w, ${photo('portrait-1')} 1280w" sizes="(max-width: 760px) 100vw, 50vw" alt="Analoge foto van de gevel van Made's Warung" width="1280" height="1930" loading="lazy" />
      </figure>
    </section>

    <section class="menu-preview section-pad" id="menu-preview">
      <div class="menu-preview-heading reveal">
        <h2>Begin met de klassiekers.</h2>
        <p>Bestel à la carte of stel je eigen Nasi Campur samen aan de toonbank.</p>
      </div>
      <div class="signature-list">
        <article class="signature-item reveal">
          <div><h3>Nasi Campur Speciaal</h3><p>Twee soorten vlees, twee groenten en sambal goreng telor.</p></div>
          <strong>€ 19,50</strong>
        </article>
        <article class="signature-item reveal">
          <div><h3>Ayam Betutu</h3><p>Balinese kip, langzaam opgebouwd met 27 verschillende specerijen.</p></div>
          <strong>€ 3,75 / 100 g</strong>
        </article>
        <article class="signature-item reveal">
          <div><h3>Gado Gado</h3><p>Vegetarische groenteschotel met onze huisgemaakte pindasaus.</p></div>
          <strong>€ 10,50</strong>
        </article>
        <article class="signature-item reveal">
          <div><h3>Soto Ayam</h3><p>Indonesische kippensoep met mihoen, taugé en ei.</p></div>
          <strong>€ 9,50</strong>
        </article>
      </div>
      <a class="button button-dark reveal" href="/menu">Volledig menu</a>
    </section>

    <section class="photo-story" aria-label="Sfeer bij Made's Warung">
      <div class="photo-large reveal"><img src="${photo('wide-restaurant')}" srcset="${photo('wide-restaurant-sm')} 860w, ${photo('wide-restaurant')} 1800w" sizes="(max-width: 760px) 100vw, 70vw" alt="Analoge sfeerfoto van Made's Warung" width="1800" height="1194" loading="lazy" /></div>
      <div class="photo-tall reveal"><img src="${photo('portrait-2')}" srcset="${photo('portrait-2-sm')} 720w, ${photo('portrait-2')} 1280w" sizes="(max-width: 760px) 100vw, 35vw" alt="Analoge foto bij Made's Warung" width="1280" height="1930" loading="lazy" /></div>
      <blockquote class="story-quote reveal">
        <p>“Een warung is meer dan een plek om te eten. Het is waar mensen samenkomen.”</p>
        <cite>De filosofie van Made's Warung</cite>
      </blockquote>
    </section>

    <section class="story-section section-pad">
      <div class="story-mark reveal" aria-hidden="true">1973</div>
      <div class="story-copy reveal">
        <h2>Van een kleine warung op Bali naar Amsterdam.</h2>
        <p>Peter uit Amsterdam ontmoette Made in haar familiewarung in Kuta. Hun verhaal groeide mee met de plek en bracht de Balinese warung-filosofie uiteindelijk naar de Cornelis Krusemanstraat.</p>
        <a class="text-link" href="/our-story">Het hele verhaal <span aria-hidden="true">↗</span></a>
      </div>
      <div class="story-image reveal"><img src="${photo('wide-story')}" srcset="${photo('wide-story-sm')} 860w, ${photo('wide-story')} 1800w" sizes="100vw" alt="Analoge foto uit Made's Warung Amsterdam" width="1800" height="1194" loading="lazy" /></div>
    </section>

    <section class="catering-teaser section-pad">
      <div class="catering-image reveal"><img src="${photo('portrait-3')}" srcset="${photo('portrait-3-sm')} 720w, ${photo('portrait-3')} 1280w" sizes="(max-width: 760px) 100vw, 50vw" alt="Medewerker schept verse gerechten op bij Made's Warung" width="1280" height="1930" loading="lazy" /></div>
      <div class="catering-copy reveal">
        <p class="section-label">Voor groepen vanaf 20 personen</p>
        <h2>De warung bij jou op tafel.</h2>
        <p>Warm geleverd in rechauds en klaar voor een lopend buffet. Van vegetarisch tot uitgebreid, altijd royaal en vers bereid.</p>
        <a class="button button-light" href="/catering">Bekijk catering</a>
      </div>
    </section>

    <section class="visit-section section-pad">
      <div class="visit-copy reveal">
        <h2>Kom binnen. Kies aan de toonbank.</h2>
        <p>We zijn een kleinschalige afhaalwarung met een paar zitplaatsen. Reserveren is daarom niet mogelijk.</p>
      </div>
      <div class="visit-details reveal">
        <div><span>Adres</span><a href="https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a></div>
        <div><span>Openingstijden</span><p>Woensdag t/m maandag<br>12:00 - 20:00</p></div>
        <div><span>Bestellen</span><a href="tel:+31203704231">020 370 42 31</a></div>
      </div>
      <div class="visit-photo reveal"><img src="${photo('wide-kitchen')}" srcset="${photo('wide-kitchen-sm')} 860w, ${photo('wide-kitchen')} 1800w" sizes="100vw" alt="Gerechten worden opgeschept bij Made's Warung" width="1800" height="1194" loading="lazy" /></div>
    </section>
  `, 'home-page')
}

export function menuPage() {
  return shell('/menu', `
    <section class="page-hero menu-hero">
      <div><p class="section-label">Dagelijks vers bereid</p><h1>Ons menu</h1><p>Van Nasi Campur tot Balinese streetfood. Kies aan de toonbank wat bij je past.</p></div>
      <img src="${photo('portrait-4')}" srcset="${photo('portrait-4-sm')} 720w, ${photo('portrait-4')} 1280w" sizes="(max-width: 760px) 100vw, 50vw" alt="Kom met Indonesisch eten op tafel" width="1280" height="1930" fetchpriority="high" />
    </section>
    <section class="menu-page-content section-pad">
      <nav class="menu-jump" aria-label="Menucategorieën">
        ${menuSections.map((section, index) => `<a href="#menu-${index}">${section.title}</a>`).join('')}
      </nav>
      <div class="menu-sections">
        ${menuSections.map((section, index) => `
          <section class="menu-category reveal" id="menu-${index}">
            <header><h2>${section.title}</h2>${section.note ? `<p>${section.note}</p>` : ''}</header>
            <div class="menu-items">
              ${section.items.map(item => `<article class="menu-item"><div><h3>${item.name}</h3>${item.description ? `<p>${item.description}</p>` : ''}</div>${item.price ? `<strong>${item.price}</strong>` : ''}</article>`).join('')}
            </div>
          </section>`).join('')}
      </div>
      <p class="menu-disclaimer">Prijzen en beschikbaarheid kunnen wijzigen. Vraag ons team naar allergenen en de gerechten van vandaag.</p>
    </section>
  `, 'inner-page')
}

export function storyPage() {
  return shell('/our-story', `
    <section class="page-hero story-page-hero">
      <div><p class="section-label">Ons verhaal</p><h1>Geboren op Bali. Thuis in Amsterdam.</h1></div>
      <img src="${photo('wide-restaurant')}" srcset="${photo('wide-restaurant-sm')} 860w, ${photo('wide-restaurant')} 1800w" sizes="(max-width: 760px) 100vw, 50vw" alt="Analoge sfeerfoto van Made's Warung" width="1800" height="1194" fetchpriority="high" />
    </section>
    <article class="long-story section-pad">
      <div class="story-lead"><p>${storyParagraphs[0]}</p></div>
      <div class="story-columns">
        <div class="story-prose">${storyParagraphs.slice(1, 3).map(p => `<p>${p}</p>`).join('')}</div>
        <figure><img src="${photo('portrait-5')}" srcset="${photo('portrait-5-sm')} 720w, ${photo('portrait-5')} 1280w" sizes="(max-width: 760px) 100vw, 45vw" alt="Analoge foto uit Made's Warung Amsterdam" width="1280" height="1930" loading="lazy" /></figure>
      </div>
      <blockquote><p>“Mensen delen er eten, tafels en verhalen.”</p></blockquote>
      <div class="story-columns reverse">
        <figure><img src="${photo('portrait-1')}" srcset="${photo('portrait-1-sm')} 720w, ${photo('portrait-1')} 1280w" sizes="(max-width: 760px) 100vw, 45vw" alt="Analoge foto van de gevel van Made's Warung" width="1280" height="1930" loading="lazy" /></figure>
        <div class="story-prose">${storyParagraphs.slice(3).map(p => `<p>${p}</p>`).join('')}<p><strong>Selamat makan.</strong></p></div>
      </div>
    </article>
  `, 'inner-page')
}

export function cateringPage() {
  return shell('/catering', `
    <section class="page-hero catering-page-hero">
      <div><p class="section-label">Vanaf 20 personen</p><h1>Balinees buffet, warm bezorgd.</h1><p>Wij brengen alles in rechauds, bouwen het buffet op en halen de materialen de volgende dag weer op.</p></div>
      <img src="${photo('portrait-3')}" srcset="${photo('portrait-3-sm')} 720w, ${photo('portrait-3')} 1280w" sizes="(max-width: 760px) 100vw, 50vw" alt="Medewerker schept verse gerechten op bij Made's Warung" width="1280" height="1930" fetchpriority="high" />
    </section>
    <section class="catering-options section-pad">
      <h2>Kies jullie menu.</h2>
      <div class="catering-list">${cateringMenus.map(menu => `<article class="catering-option reveal"><div><span>${menu.title}</span><h3>${menu.price}</h3></div><p>${menu.text}</p></article>`).join('')}</div>
      <div class="catering-notes reveal"><h2>Zo werkt het.</h2><p>Alle prijzen zijn inclusief levering op locatie. Borden en bestek zijn optioneel. De betaling wordt vooraf voldaan.</p><a class="button button-dark" href="mailto:madeswarungamsterdam@gmail.com?subject=Cateringaanvraag">Vraag catering aan</a></div>
    </section>
  `, 'inner-page')
}

export function contactPage() {
  return shell('/contact', `
    <section class="contact-page section-pad">
      <div class="contact-heading"><p class="section-label">Amsterdam-Zuid</p><h1>Kom langs.</h1><p>Geen reservering nodig. Kies je gerechten aan de toonbank, neem ze mee of eet bij ons.</p></div>
      <div class="contact-photo"><img src="${photo('wide-kitchen')}" srcset="${photo('wide-kitchen-sm')} 860w, ${photo('wide-kitchen')} 1800w" sizes="100vw" alt="Gerechten worden opgeschept bij Made's Warung" width="1800" height="1194" fetchpriority="high" /></div>
      <div class="contact-grid">
        <div><span>Adres</span><a href="https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a></div>
        <div><span>Open</span><p>Woensdag t/m maandag<br>12:00 - 20:00<br>Dinsdag gesloten</p></div>
        <div><span>Contact</span><a href="tel:+31203704231">020 370 42 31</a><a href="mailto:madeswarungamsterdam@gmail.com">madeswarungamsterdam@gmail.com</a></div>
      </div>
    </section>
  `, 'inner-page')
}

export function jobsPage() {
  return shell('/jobs', `
    <section class="jobs-page section-pad">
      <div class="jobs-copy"><p class="section-label">Join our team</p><h1>Werk mee in onze warung.</h1><p>We zoeken parttimers en fulltimers voor de bediening. Mensen die gastvrij zijn, graag leren en hun ideeën durven delen.</p><ul><li>Passend salaris</li><li>Flexibele werkuren</li><li>Een klein en betrokken familieteam</li><li>Een frisse werkomgeving</li></ul><a class="button button-light" href="mailto:madeswarungamsterdam@gmail.com?subject=Sollicitatie Made's Warung">Solliciteer per e-mail</a></div>
      <div class="jobs-image"><img src="${photo('portrait-5')}" srcset="${photo('portrait-5-sm')} 720w, ${photo('portrait-5')} 1280w" sizes="(max-width: 760px) 100vw, 50vw" alt="Twee mensen bij de ingang van Made's Warung" width="1280" height="1930" fetchpriority="high" /></div>
    </section>
  `, 'inner-page')
}

export function notFoundPage() {
  return shell('', `<section class="not-found section-pad"><p class="section-label">404</p><h1>Deze tafel is leeg.</h1><p>De pagina die je zoekt bestaat niet.</p><a class="button button-dark" href="/">Terug naar home</a></section>`, 'inner-page')
}
