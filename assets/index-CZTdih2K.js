(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Nasi Campur`,note:`Bij alle Nasi Campur's kies je tussen nasi putih, nasi kuning, nasi goreng of bami goreng.`,items:[{name:`Nasi Campur klein`,price:`€ 16,50`,description:`Eén soort vlees, twee soorten groenten en 1 sambal goreng telor.`},{name:`Nasi Campur Speciaal`,price:`€ 19,50`,description:`Twee soorten vlees, twee soorten groenten en 1 sambal goreng telor.`},{name:`Gado Gado`,price:`€ 10,50`,description:`Vegetarische groenteschotel met pindasaus.`},{name:`Nasi Campur Vega`,price:`€ 16,50`,description:`Drie soorten groenten, tempé of tahu en 1 sambal goreng telor.`},{name:`Nasi Campur 2 pers.`,price:`€ 32,50`,description:`Twee soorten vlees, drie soorten groenten, twee saté ayam, satésaus en twee sambal goreng telor.`}]},{title:`Soep`,note:`Geserveerd met nasi putih (witte rijst).`,items:[{name:`Soto Ayam`,price:`€ 9,50`,description:`Indonesische kippensoep gevuld met mihoen, taugé, kip en een ei.`},{name:`Bakso — tot 16:00`,price:`€ 11,50`,description:`Soep met runderballetjes, tahu en mihoen.`},{name:`Vegan soup — tot 16:00`,price:`€ 9,50`,description:`Dikke kokosbouillon gevuld met taugé, tahu, aardappel en tomaat.`}]},{title:`Saté`,items:[{name:`Saté Ayam`,price:`€ 9,50`,description:`Vier stokjes saté ayam met satésaus.`},{name:`Saté Lilit`,price:`€ 2,50`,description:`Balinese kipsaté van gemalen kipfilet met o.a. citroengras, kokos en limoen (per stokje).`}]},{title:`Snacks`,items:[{name:`Lumpia kip`,price:`€ 2,50`},{name:`Lumpia vega`,price:`€ 2,50`},{name:`Pastei`,price:`€ 3,75`},{name:`Risolles`,price:`€ 3,75`},{name:`Martabak`,price:`€ 4,50`},{name:`Berkedel jagung`,price:`€ 4,50`},{name:`Lemper`,price:`€ 3,75`}]},{title:`Sayur`,note:`Groenten — € 2,75 per 100 gram.`,items:[{name:`Sambal goreng boontjes`},{name:`Taugé tahu`},{name:`Tumis broccoli`},{name:`Terong`},{name:`Urap`},{name:`Groente van de dag`},{name:`Tahu curry`},{name:`Sambal goreng tempé of tempé manis`}]},{title:`Ayam`,note:`Kip — € 3,75 per 100 gram.`,items:[{name:`Ayam Kecap`,description:`Zoete kip.`},{name:`Ayam Sisit`,description:`Pittige geplukte kip met kokos en citroengras.`},{name:`Ayam Curry`,description:`Mild pittige kip met kokos-curry.`},{name:`Ayam Betutu`,description:`Balinese kip met 27 verschillende soorten specerijen.`}]},{title:`Daging`,note:`Rundvlees — € 4,75 per 100 gram.`,items:[{name:`Daging Smoor`,description:`Zoet rundvlees.`},{name:`Daging Rendang`,description:`Mild pittig rundvlees met kokos.`},{name:`Daging Bumbu Bali`,description:`Pittig rundvlees.`}]},{title:`Streetfood`,note:`Tot 16:00.`,items:[{name:`Empek Empek`,price:`€ 11,50`},{name:`Siomay`,price:`€ 11,50`},{name:`Ayam Goreng`,price:`€ 12,50`},{name:`Ikan Goreng`,price:`€ 16,50`},{name:`Pepes Ikan`,price:`€ 7,50`}]},{title:`Toetjes`,items:[{name:`Spekkoek`,price:`€ 3,50`},{name:`Pisang Goreng`,price:`€ 3,50`},{name:`Dadar Gulung`,price:`€ 3,50`}]}],t=[{title:`Menu A`,price:`€ 21,50`,text:`2 soorten rijst, 2 soorten vlees, 2 soorten groente en sambal telor (ei).`,extras:`Kroepoek, serundeng en sambal.`},{title:`Menu B`,price:`€ 26,50`,text:`2 soorten rijst, 2 soorten vlees, 3 soorten groente, 2 saté ayam met satésaus en sambal telor (ei).`,extras:`Kroepoek, serundeng en sambal.`},{title:`Menu C`,price:`€ 29,50`,text:`2 soorten rijst, 3 soorten vlees, 2 soorten groente, tempé of tahu, 2 saté ayam met satésaus en sambal telor (ei).`,extras:`Kroepoek, serundeng, atjar en sambal.`},{title:`Menu D — Vega`,price:`€ 17,50`,text:`2 soorten rijst, 3 soorten groente, tempé of tahu en sambal telor (ei).`,extras:`Kroepoek, serundeng en sambal.`}],n=[{name:`Spekkoek`,price:`€ 3,50`},{name:`Dadar Gulung`,price:`€ 3,50`}],r=[`Een warung is een kraampje aan de kant van de weg in Indonesië, waar de lokale bevolking koffie drinkt en een hapje eet terwijl de dagelijkse beslommeringen worden besproken. Made's Warung was zo'n kraampje, nog voordat er toerisme was op Bali.`,`Made Masih, de oudste dochter van het gezin, hielp na school haar grootmoeder en moeder en veranderde de Balinese warung langzaam in een ontmoetingsplaats voor toeristen en locals.`,`Peter Steenbergen uit Amsterdam vertrok in 1973 met de auto naar Indonesië. Na een prachtige reis van vier maanden kwam hij aan op Bali. In Kuta ontmoetten Peter en Made elkaar in de kleine warung. Ze werden verliefd en na een jaar in het geheim te hebben gedate besloten ze te trouwen. Wil een verliefd stel op Bali trouwen en is het niet zeker of de ouders toestemming geven, dan kunnen ze weglopen: met goedvinden van de vrouw „ontvoert” de man haar. Gelukkig gaf Made's familie daarna haar zegen en werd er een officiële bruiloft georganiseerd.`,`De warung van Made groeide door en transformeerde door de jaren heen tot een van de meest succesvolle restaurants op Bali, zonder de warung-filosofie te verliezen. Een tafel voor één of twee bestaat daar niet: vreemden zitten bij elkaar aan tafel en contact is snel gelegd.`,`Met inmiddels vijf vestigingen op Bali werd besloten om samen met Kuswati en Bagus Sanou een kleine warung te openen in Amsterdam. Kuswati kwam naar Bali om de recepten en kooktechnieken te leren, terwijl haar man Bagus de winkel verbouwde tot warung.`,`We bieden authentiek Balinees eten dat minder zoet is dan bij de traditionele Indonesische toko's. Onze bumbu's zijn huisgemaakt en bereid uit verse ingrediënten volgens traditioneel Balinees recept. In onze keuken wordt geen gebruik gemaakt van chemische smaakversterkers.`,`We hopen dat het je smaakt en wensen je smakelijk eten — oftewel selamat makan.`],i=`/mades-warung/`.replace(/\/$/,``),a=`https://maps.google.com/?q=Cornelis+Krusemanstraat+3+Amsterdam`,o=`tel:+31203704231`,s=`madeswarungamsterdam@gmail.com`,c={w:1600,h:2413},l={w:1600,h:1061},u=new Set([`bainmarie-color`,`vitrine-color`,`team-counter`,`interior-view`,`terrace-sign`,`counter`]);function d({name:e,alt:t,sizes:n=`(max-width: 760px) 100vw, 50vw`,priority:r=!1,cls:a=``}){let o=u.has(e)?l:c;return`<img${a?` class="${a}"`:``} src="${i}/assets/photos/${e}.webp" srcset="${i}/assets/photos/${e}-sm.webp 800w, ${i}/assets/photos/${e}.webp 1600w" sizes="${n}" alt="${t}" width="${o.w}" height="${o.h}" ${r?`fetchpriority="high"`:`loading="lazy"`} decoding="async" />`}var f=[[`Menu`,`/menu`],[`Ons verhaal`,`/our-story`],[`Catering`,`/catering`],[`Werken bij`,`/jobs`],[`Contact`,`/contact`]],p=e=>f.map(([t,n])=>`<a href="${i}${n}" ${e===n?`aria-current="page"`:``}>${t}</a>`).join(``);function m(e){return`
    <a class="skip-link" href="#main">Naar de inhoud</a>
    <header class="site-header" data-header>
      <a class="brand" href="${i}/" aria-label="Made's Warung Amsterdam, home">
        <img src="${i}/assets/mades-logo.png" width="108" height="74" alt="Made's Warung Amsterdam" />
      </a>
      <nav class="desktop-nav" aria-label="Hoofdnavigatie">${p(e)}</nav>
      <p class="open-status"><span class="dot" aria-hidden="true"></span><span data-open-text>Wo t/m ma · 12:00–20:00</span></p>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">Menu</button>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobiele navigatie" hidden>
        <a href="${i}/" ${e===`/`?`aria-current="page"`:``}>Home</a>
        ${p(e)}
        <p>Woensdag t/m maandag, 12:00–20:00<br>Dinsdag gesloten</p>
      </nav>
    </header>
  `}function h(){return`
    <footer class="site-footer">
      <div class="footer-top">
        <p class="footer-sign">Selamat <em>makan.</em></p>
        <a class="btn btn-sun" href="${a}" target="_blank" rel="noreferrer">Route naar de warung</a>
      </div>
      <div class="footer-grid">
        <div>
          <h2>Adres</h2>
          <a href="${a}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a>
        </div>
        <div>
          <h2>Open</h2>
          <p>Woensdag t/m maandag<br>12:00–20:00<br>Dinsdag gesloten</p>
        </div>
        <div>
          <h2>Contact</h2>
          <a href="${o}">020 370 42 31</a>
          <a href="mailto:${s}">E-mail ons</a>
          <a href="https://www.instagram.com/madeswarungamsterdam/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <h2>Pagina's</h2>
          ${f.map(([e,t])=>`<a href="${i}${t}">${e}</a>`).join(``)}
        </div>
      </div>
      <div class="footer-bottom">
        <span>© Made's Warung Amsterdam</span>
        <span>Geen reserveringen, loop gerust binnen.</span>
        <span>Foto's: <a href="https://kayadelarambeljephotography.pixieset.com/" target="_blank" rel="noreferrer">Kaya de la Rambelje</a></span>
      </div>
    </footer>
  `}function g(e,t,n=``){return`${m(e)}<main id="main" class="${n}">${t}</main>${h()}`}var _=[`Ayam Betutu`,`Daging Rendang`,`Saté Lilit`,`Gado Gado`,`Nasi Kuning`,`Sambal goreng telor`,`Soto Ayam`,`Pisang Goreng`,`Spekkoek`,`Tempé`],v=()=>`
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      ${[0,1].map(()=>`<span>${_.map(e=>`${e}<i>✦</i>`).join(``)}</span>`).join(``)}
    </div>
  </div>`;function y(){return g(`/`,`
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Authentiek Balinees-Indonesisch · Amsterdam-Zuid</p>
        <h1>Bali, <em>opgeschept</em> in Amsterdam.</h1>
        <p class="hero-lead">Huisgemaakte bumbu's, verse ingrediënten en familierecepten uit Kuta. Kies aan de toonbank, eet bij ons of neem mee.</p>
        <ul class="service-tags" aria-label="Services"><li>Take-away</li><li>Dine-in</li><li>Delivery</li><li>Catering</li></ul>
        <div class="hero-actions">
          <a class="btn btn-ink" href="${i}/menu">Bekijk het menu</a>
          <a class="btn btn-line" href="${a}" target="_blank" rel="noreferrer">Route</a>
        </div>
        <dl class="hero-facts">
          <div><dt>Open</dt><dd>12:00–20:00<br>Dinsdag gesloten</dd></div>
          <div><dt>Adres</dt><dd>Cornelis<br>Krusemanstraat 3</dd></div>
          <div><dt>Bestellen</dt><dd><a href="${o}">020 370 42 31</a></dd></div>
        </dl>
      </div>
      <div class="hero-media">
        <figure class="hero-main">${d({name:`plate-wood`,alt:`Nasi campur met saté lilit, rendang, groenten en sambal op een houten tafel`,sizes:`(max-width: 900px) 100vw, 42vw`,priority:!0})}</figure>
        <figure class="hero-inset">${d({name:`chef-counter`,alt:`Kok achter de vitrine van Made's Warung`,sizes:`(max-width: 900px) 45vw, 18vw`})}</figure>
      </div>
    </section>

    ${v()}

    <section class="how section">
      <figure class="how-photo reveal">${d({name:`bainmarie-color`,alt:`Vitrine vol kleurrijke Balinese gerechten`,sizes:`100vw`})}</figure>
    </section>

    <section class="signatures section">
      <figure class="sig-photo reveal">${d({name:`plate-hand`,alt:`Een vers opgeschepte nasi campur boven de vitrine`,sizes:`(max-width: 900px) 100vw, 45vw`})}</figure>
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
        <a class="link-arrow reveal" href="${i}/menu">Volledig menu <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="gallery section" aria-labelledby="gallery-title">
      <div class="gallery-head reveal">
        <p class="eyebrow">Binnen bij Made's</p>
        <h2 id="gallery-title">Een klein stukje <em>Kuta</em> in Zuid.</h2>
        <p>Een zitje aan het raam, vers sap, Balinese kunst aan de muur en in de keuken altijd een wok die staat te sissen.</p>
      </div>
      <div class="gallery-grid">
        <figure class="g1 reveal">${d({name:`window-seats`,alt:`Zitje aan het raam met planten en Balinese kunst`,sizes:`(max-width: 760px) 50vw, 30vw`})}</figure>
        <figure class="g2 reveal">${d({name:`juice-bottles`,alt:`Vers sinaasappelsap en flesjes jamu aan het raam`,sizes:`(max-width: 760px) 50vw, 22vw`})}</figure>
        <figure class="g3 reveal">${d({name:`interior-view`,alt:`Binnen bij Made's Warung met uitzicht op het terras`,sizes:`(max-width: 760px) 100vw, 45vw`})}</figure>
        <figure class="g4 reveal">${d({name:`wok`,alt:`Rendang wordt geroerd in een grote wok`,sizes:`(max-width: 760px) 50vw, 22vw`})}</figure>
        <figure class="g5 reveal">${d({name:`dining-room`,alt:`De lichte eetzaal met rotan stoelen en Balinese schilderijen`,sizes:`(max-width: 760px) 50vw, 22vw`})}</figure>
      </div>
    </section>

    <section class="terrace-band" aria-labelledby="terrace-title">
      <figure class="terrace-photo">${d({name:`terrace-sign`,alt:`Vol terras onder de rode parasols voor het uithangbord van Made's Warung`,sizes:`100vw`})}</figure>
      <div class="terrace-card reveal">
        <p class="eyebrow">Ons terras</p>
        <h2 id="terrace-title">Rode parasols, <em>zon</em> en sambal.</h2>
        <p>Bij mooi weer eet je buiten op ons terras aan de Cornelis Krusemanstraat. Wie het eerst komt, die het eerst maalt.</p>
      </div>
    </section>

    <section class="story-band">
      <div class="story-band-inner section">
        <div class="story-year reveal" aria-hidden="true" role="presentation"><svg viewBox="0 0 400 110" width="100%"><text x="0" y="95" font-size="120" fill="currentColor">1973</text></svg></div>
        <div class="story-band-copy reveal">
          <p class="eyebrow">Ons verhaal</p>
          <h2>Van een kraampje in Kuta naar de <em>Cornelis Krusemanstraat.</em></h2>
          <p>Peter reed in 1973 met de auto van Amsterdam naar Bali en ontmoette Made in de warung van haar familie. Inmiddels telt Made's Warung vijf vestigingen op Bali — en met Kuswati en Bagus Sanou één kleine warung in Amsterdam.</p>
          <a class="link-arrow" href="${i}/our-story">Lees het hele verhaal <span aria-hidden="true">→</span></a>
        </div>
        <figure class="story-band-photo reveal">${d({name:`family-door`,alt:`De familie achter Made's Warung Amsterdam in de deuropening`,sizes:`(max-width: 900px) 100vw, 34vw`})}</figure>
      </div>
    </section>

    <section class="catering-strip section">
      <div class="catering-strip-copy reveal">
        <p class="eyebrow">Catering vanaf 20 personen</p>
        <h2>De warung <em>bij jou</em> op tafel.</h2>
        <p>Warm geleverd in rechauds, opgebouwd als lopend buffet en de volgende dag weer opgehaald.</p>
        <a class="btn btn-ink" href="${i}/catering">Bekijk cateringmenu's</a>
      </div>
      <ul class="catering-prices reveal">
        ${t.map(e=>`<li><span>${e.title}</span><strong>${e.price}</strong><small>p.p., incl. levering</small></li>`).join(``)}
      </ul>
    </section>

    <section class="visit section">
      <figure class="visit-photo reveal">${d({name:`counter`,alt:`De toonbank en vitrine van Made's Warung met krijtborden`,sizes:`(max-width: 900px) 100vw, 55vw`})}</figure>
      <div class="visit-copy reveal">
        <p class="eyebrow">Kom langs</p>
        <h2>Loop binnen, kies aan de <em>toonbank.</em></h2>
        <p>Wij zijn een kleinschalig Indonesisch afhaalrestaurant. Omdat we gelimiteerde plekken hebben, nemen we geen reserveringen aan.</p>
        <dl>
          <div><dt>Adres</dt><dd><a href="${a}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3, 1075 NB Amsterdam</a></dd></div>
          <div><dt>Open</dt><dd>Woensdag t/m maandag, 12:00–20:00</dd></div>
          <div><dt>Dicht</dt><dd>Dinsdag</dd></div>
          <div><dt>Bellen</dt><dd><a href="${o}">020 370 42 31</a></dd></div>
        </dl>
      </div>
    </section>
  `,`home-page`)}function b(){return g(`/menu`,`
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Dagelijks vers bereid</p>
        <h1>Ons <em>menu</em></h1>
        <p>Van Nasi Campur tot Balinese streetfood. Kies aan de toonbank wat bij je past.</p>
      </div>
      <figure class="page-hero-photo">${d({name:`plate-wood2`,alt:`Nasi campur met saté lilit en sambal op een houten tafel`,sizes:`(max-width: 900px) 100vw, 55vw`,priority:!0})}</figure>
    </section>
    <section class="menu-layout section">
      <aside class="menu-side">
        <nav class="menu-jump" aria-label="Menucategorieën">
          ${e.map((e,t)=>`<a href="#menu-${t}">${e.title}</a>`).join(``)}
        </nav>
        <figure class="menu-side-photo">${d({name:`sate-grill`,alt:`Saté op de houtskoolgrill`,sizes:`220px`})}</figure>
      </aside>
      <div class="menu-sections">
        ${e.map((e,t)=>`
          <section class="menu-cat reveal" id="menu-${t}">
            <header><h2>${e.title}</h2>${e.note?`<p>${e.note}</p>`:``}</header>
            <ul>
              ${e.items.map(e=>`<li><div class="mi-row"><h3>${e.name}</h3><span class="mi-dots" aria-hidden="true"></span>${e.price?`<strong>${e.price}</strong>`:``}</div>${e.description?`<p>${e.description}</p>`:``}</li>`).join(``)}
            </ul>
          </section>`).join(``)}
        <p class="menu-disclaimer">Prijzen en beschikbaarheid kunnen wijzigen. Vraag ons team naar allergenen en de gerechten van vandaag.</p>
      </div>
    </section>
  `,`inner-page`)}function x(){return g(`/our-story`,`
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Ons verhaal · sinds 1973</p>
        <h1>Geboren op Bali. <em>Thuis</em> in Amsterdam.</h1>
      </div>
      <figure class="page-hero-photo">${d({name:`red-umbrella`,alt:`Rode Balinese payung voor het raam`,sizes:`(max-width: 900px) 100vw, 45vw`,priority:!0})}</figure>
    </section>
    <article class="long-story section">
      <p class="story-lead reveal">${r[0]}</p>
      <div class="story-cols">
        <div class="prose reveal">${r.slice(1,3).map(e=>`<p>${e}</p>`).join(``)}</div>
        <figure class="reveal">${d({name:`family-shop`,alt:`De familie achter Made's Warung bij de vitrine`,sizes:`(max-width: 900px) 100vw, 40vw`})}</figure>
      </div>
      <blockquote class="reveal"><p>“Een tafel voor één of twee bestaat daar <em>niet.</em>”</p></blockquote>
      <div class="story-cols reverse">
        <figure class="reveal">${d({name:`team-front`,alt:`Het team van Made's Warung voor de zaak`,sizes:`(max-width: 900px) 100vw, 40vw`})}</figure>
        <div class="prose reveal">${r.slice(3).map(e=>`<p>${e}</p>`).join(``)}<p class="sign">Selamat makan.</p></div>
      </div>
    </article>
  `,`inner-page`)}function S(){return g(`/catering`,`
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Vanaf 20 personen</p>
        <h1>Balinees buffet, <em>warm</em> bezorgd.</h1>
        <p>Wij brengen alles in rechauds, bouwen het buffet op en halen de materialen de volgende dag weer op.</p>
        <a class="btn btn-ink" href="mailto:${s}?subject=Cateringaanvraag">Vraag catering aan</a>
      </div>
      <figure class="page-hero-photo">${d({name:`wok-cook`,alt:`Kok schudt de wok met nasi goreng`,sizes:`(max-width: 900px) 100vw, 55vw`,priority:!0})}</figure>
    </section>
    <section class="section">
      <h2 class="section-title reveal">Catering <em>menu.</em></h2>
      <p class="section-sub reveal">Alle prijzen zijn inclusief levering op locatie in chafing dishes.</p>
      <div class="cater-grid">
        ${t.map(e=>`<article class="cater-card reveal"><p class="cater-name">${e.title}</p><p class="cater-price">${e.price}<small> p.p.</small></p><p>${e.text}</p><p class="cater-extras">${e.extras}</p></article>`).join(``)}
      </div>
      <div class="cater-dessert reveal">
        <h3>Toetjes</h3>
        <ul>${n.map(e=>`<li><span>${e.name}</span><strong>${e.price}</strong></li>`).join(``)}</ul>
      </div>
      <div class="cater-notes reveal">
        <h2>Meer informatie</h2>
        <div class="cater-info">
          <p>Voor groepen vanaf 20 personen verzorgen wij catering op locatie. We brengen alles warm in rechauds en zetten het klaar als lopend buffet — optioneel met borden en bestek. Als het buffet helemaal staat, gaan wij weer weg.</p>
          <p>We laten kratten achter waarin de borden en het bestek terug kunnen, en halen die de volgende dag op een passend tijdstip weer op. Afwassen is niet nodig.</p>
          <p>Betaling voor de catering dient in zijn geheel vooraf te zijn voldaan.</p>
        </div>
        <div class="cater-cta"><p>Meer vragen?</p><a class="btn btn-sun" href="mailto:${s}?subject=Cateringaanvraag">${s}</a></div>
      </div>
    </section>
  `,`inner-page`)}function C(){return g(`/contact`,`
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Amsterdam-Zuid</p>
        <h1>Kom <em>langs.</em></h1>
        <p>Geen reservering nodig. Kies je gerechten aan de toonbank, neem ze mee of eet bij ons.</p>
        <dl class="contact-list">
          <div><dt>Adres</dt><dd><a href="${a}" target="_blank" rel="noreferrer">Cornelis Krusemanstraat 3<br>1075 NB Amsterdam</a></dd></div>
          <div><dt>Open</dt><dd>Woensdag t/m maandag, 12:00–20:00<br>Dinsdag gesloten</dd></div>
          <div><dt>Contact</dt><dd><a href="${o}">(020) 370 42 31</a><br><a href="mailto:${s}">${s}</a></dd></div>
          <div><dt>Volg ons</dt><dd><a href="https://www.instagram.com/madeswarungamsterdam/" target="_blank" rel="noreferrer">@madeswarungamsterdam</a></dd></div>
        </dl>
      </div>
      <figure class="page-hero-photo">${d({name:`facade`,alt:`Gevel van Made's Warung met planten en rood uithangbord`,sizes:`(max-width: 900px) 100vw, 45vw`,priority:!0})}</figure>
    </section>
    <section class="photo-strip section" aria-label="Sfeer bij Made's Warung">
      <figure class="reveal">${d({name:`team-counter`,alt:`Het lachende team achter de toonbank`,sizes:`(max-width: 760px) 100vw, 50vw`})}</figure>
      <figure class="reveal">${d({name:`vitrine-color`,alt:`Vitrine met verse gerechten van dichtbij`,sizes:`(max-width: 760px) 100vw, 25vw`})}</figure>
      <figure class="reveal">${d({name:`es2`,alt:`Es campur met een vaasje gipskruid`,sizes:`(max-width: 760px) 100vw, 25vw`})}</figure>
    </section>
  `,`inner-page`)}function w(){return g(`/jobs`,`
    <section class="page-hero">
      <div class="page-hero-copy">
        <p class="eyebrow">Join our team</p>
        <h1>Werk mee in <em>onze</em> warung.</h1>
        <p>Wij zijn op zoek naar part- en fulltimers voor in de bediening. Ben jij gepassioneerd, leergierig en op zoek naar een leuke en leerzame (bij)baan? Dan zoeken wij jou!</p>
        <p>We zijn een klein familiebedrijf en zoeken mensen die hun input willen delen nu ons restaurant steeds drukker wordt. Enige affiniteit met de Indonesische keuken is een pré.</p>
        <h2 class="jobs-sub">Wij bieden</h2>
        <ul class="ticks"><li>Passend salaris</li><li>Flexibele werkuren</li><li>Een leuke, frisse werkomgeving</li></ul>
        <a class="btn btn-ink" href="mailto:${s}?subject=Sollicitatie Made's Warung">Stuur ons een berichtje</a>
        <p class="jobs-note">Vermeld je naam en iets over jezelf — we nemen zo snel mogelijk contact met je op.</p>
      </div>
      <figure class="page-hero-photo">${d({name:`cook-sauce`,alt:`Kok aan het werk in de keuken van Made's Warung`,sizes:`(max-width: 900px) 100vw, 45vw`,priority:!0})}</figure>
    </section>
  `,`inner-page`)}function T(){return g(``,`<section class="not-found section"><p class="eyebrow">404</p><h1>Deze tafel is <em>leeg.</em></h1><p>De pagina die je zoekt bestaat niet.</p><a class="btn btn-ink" href="${i}/">Terug naar home</a></section>`,`inner-page`)}var E=document.querySelector(`#app`),D={"/":y,"/menu":b,"/our-story":x,"/contact":C,"/catering":S,"/jobs":w},O={"/":{title:`Made's Warung Amsterdam | Authentiek Balinees eten`,description:`Authentiek Balinees-Indonesisch eten in Amsterdam-Zuid. Huisgemaakte bumbu's, verse ingrediënten, take-away, dine-in, delivery en catering.`},"/menu":{title:`Menu | Made's Warung Amsterdam`,description:`Bekijk ons menu met Nasi Campur, Balinese kip, rendang, streetfood, vegetarische gerechten en huisgemaakte snacks.`},"/our-story":{title:`Ons verhaal | Made's Warung Amsterdam`,description:`Het verhaal van Made's Warung, van een kleine familiewarung op Bali tot een authentieke Balinese keuken in Amsterdam.`},"/contact":{title:`Contact en openingstijden | Made's Warung Amsterdam`,description:`Je vindt Made's Warung aan de Cornelis Krusemanstraat 3 in Amsterdam. Open van 12:00 tot 20:00, dinsdag gesloten.`},"/catering":{title:`Balinese catering Amsterdam | Made's Warung`,description:`Warm Balinees buffet voor groepen vanaf 20 personen, inclusief levering en opbouw op locatie in Amsterdam.`},"/jobs":{title:`Werken bij | Made's Warung Amsterdam`,description:`Bekijk de vacatures bij Made's Warung Amsterdam en kom werken in ons kleine, betrokken familierestaurant.`}},k=`/mades-warung/`.replace(/\/$/,``);function A(e){return k&&e.startsWith(k)&&(e=e.slice(k.length)||`/`),e.length>1&&e.endsWith(`/`)?e.slice(0,-1):e}function j(e){let t=O[e]??{title:`Pagina niet gevonden | Made's Warung Amsterdam`,description:`Deze pagina bestaat niet.`};document.title=t.title,document.querySelector(`meta[name="description"]`)?.setAttribute(`content`,t.description),document.querySelector(`meta[property="og:title"]`)?.setAttribute(`content`,t.title),document.querySelector(`meta[property="og:description"]`)?.setAttribute(`content`,t.description),document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,`https://madeswarungamsterdam.nl${e}`)}function M(){let e=document.querySelector(`.menu-toggle`),t=document.querySelector(`#mobile-nav`);!e||!t||e.addEventListener(`click`,()=>{let n=e.getAttribute(`aria-expanded`)===`true`;e.setAttribute(`aria-expanded`,String(!n)),e.textContent=n?`Menu`:`Sluiten`;let r=document.querySelector(`[data-header]`)?.offsetHeight??72;document.documentElement.style.setProperty(`--header-h`,`${r}px`),t.hidden=n,document.body.classList.toggle(`menu-open`,!n)})}function N(){let e=document.querySelector(`.open-status`),t=e?.querySelector(`[data-open-text]`);if(!e||!t)return;let n=new Date(new Date().toLocaleString(`en-US`,{timeZone:`Europe/Amsterdam`})),r=n.getDay(),i=n.getHours()*60+n.getMinutes(),a=r!==2&&i>=720&&i<1200;e.classList.toggle(`is-open`,a),e.classList.toggle(`is-closed`,!a),t.textContent=a?`Nu open · tot 20:00`:r!==2&&i<720?`Vandaag open vanaf 12:00`:r===1||r===2?`Gesloten · woensdag weer open`:`Gesloten · morgen vanaf 12:00`}function P(){let e=document.querySelector(`[data-header]`);if(!e)return;let t=()=>e.classList.toggle(`is-scrolled`,window.scrollY>8);t(),window.addEventListener(`scroll`,t,{passive:!0})}function F(){let e=document.querySelectorAll(`.reveal`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -40px`});e.forEach(e=>t.observe(e))}function I(e={}){let t=A(window.location.pathname);E.innerHTML=(D[t]??T)(),E.dataset.route=t,document.body.className=`route-${t===`/`?`home`:t.replaceAll(`/`,`-`)}`,j(t),M(),N(),P(),F(),e.scrollToTop!==!1&&window.scrollTo({top:0,behavior:`instant`})}document.addEventListener(`click`,e=>{let t=e.target.closest(`a[href]`);if(!t)return;let n=new URL(t.href,window.location.href);n.origin!==window.location.origin||t.target===`_blank`||n.hash||A(n.pathname)in D&&(e.preventDefault(),window.history.pushState({},``,n.pathname),I())}),window.addEventListener(`popstate`,()=>I());var L=A(window.location.pathname);E.dataset.route===L?(j(L),M(),N(),P(),F()):I({scrollToTop:!1});