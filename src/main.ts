import './style.css'
import {
  cateringPage,
  contactPage,
  homePage,
  jobsPage,
  menuPage,
  notFoundPage,
  storyPage,
} from './templates'

const app = document.querySelector<HTMLDivElement>('#app')!

const routes: Record<string, () => string> = {
  '/': homePage,
  '/menu': menuPage,
  '/our-story': storyPage,
  '/contact': contactPage,
  '/catering': cateringPage,
  '/jobs': jobsPage,
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: "Made's Warung Amsterdam | Authentiek Balinees eten",
    description: "Authentiek Balinees-Indonesisch eten in Amsterdam-Zuid. Huisgemaakte bumbu's, verse ingrediënten, take-away, dine-in en catering.",
  },
  '/menu': {
    title: "Menu | Made's Warung Amsterdam",
    description: 'Bekijk ons menu met Nasi Campur, Balinese kip, rendang, streetfood, vegetarische gerechten en huisgemaakte snacks.',
  },
  '/our-story': {
    title: "Ons verhaal | Made's Warung Amsterdam",
    description: "Het verhaal van Made's Warung, van een kleine familiewarung op Bali tot een authentieke Balinese keuken in Amsterdam.",
  },
  '/contact': {
    title: "Contact en openingstijden | Made's Warung Amsterdam",
    description: "Je vindt Made's Warung aan de Cornelis Krusemanstraat 3 in Amsterdam. Open van 12:00 tot 20:00, dinsdag gesloten.",
  },
  '/catering': {
    title: "Balinese catering Amsterdam | Made's Warung",
    description: 'Warm Balinees buffet voor groepen vanaf 20 personen, inclusief levering en opbouw op locatie in Amsterdam.',
  },
  '/jobs': {
    title: "Werken bij | Made's Warung Amsterdam",
    description: "Bekijk de vacatures bij Made's Warung Amsterdam en kom werken in ons kleine, betrokken familierestaurant.",
  },
}

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1)
  return path
}

function updateMeta(path: string) {
  const meta = pageMeta[path] ?? {
    title: "Pagina niet gevonden | Made's Warung Amsterdam",
    description: "Deze pagina bestaat niet.",
  }
  document.title = meta.title
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', meta.description)
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', meta.title)
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', meta.description)
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `https://madeswarungamsterdam.nl${path}`)
}

function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const nav = document.querySelector<HTMLElement>('#mobile-nav')
  if (!toggle || !nav) return

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!open))
    toggle.textContent = open ? 'Menu' : 'Sluiten'
    nav.hidden = open
    document.body.classList.toggle('menu-open', !open)
  })
}

function initOpenStatus() {
  const el = document.querySelector<HTMLElement>('.open-status')
  const text = el?.querySelector<HTMLElement>('[data-open-text]')
  if (!el || !text) return
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Amsterdam' }))
  const day = now.getDay() // 2 = dinsdag
  const mins = now.getHours() * 60 + now.getMinutes()
  const open = day !== 2 && mins >= 720 && mins < 1200
  el.classList.toggle('is-open', open)
  el.classList.toggle('is-closed', !open)
  if (open) text.textContent = 'Nu open · tot 20:00'
  else if (day !== 2 && mins < 720) text.textContent = 'Vandaag open vanaf 12:00'
  else if (day === 1 || day === 2) text.textContent = 'Gesloten · woensdag weer open'
  else text.textContent = 'Gesloten · morgen vanaf 12:00'
}

function initHeaderScroll() {
  const headerEl = document.querySelector<HTMLElement>('[data-header]')
  if (!headerEl) return
  const onScroll = () => headerEl.classList.toggle('is-scrolled', window.scrollY > 8)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

function initReveals() {
  const targets = document.querySelectorAll<HTMLElement>('.reveal')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(target => target.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  )
  targets.forEach(target => observer.observe(target))
}

function render(options: { scrollToTop?: boolean } = {}) {
  const path = normalizePath(window.location.pathname)
  const renderPage = routes[path] ?? notFoundPage
  app.innerHTML = renderPage()
  app.dataset.route = path
  document.body.className = `route-${path === '/' ? 'home' : path.replaceAll('/', '-')}`
  updateMeta(path)
  initMobileMenu()
  initOpenStatus()
  initHeaderScroll()
  initReveals()
  if (options.scrollToTop !== false) window.scrollTo({ top: 0, behavior: 'instant' })
}

document.addEventListener('click', event => {
  const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href]')
  if (!link) return
  const url = new URL(link.href, window.location.href)
  if (url.origin !== window.location.origin || link.target === '_blank' || url.hash) return
  if (!(url.pathname in routes)) return
  event.preventDefault()
  window.history.pushState({}, '', url.pathname)
  render()
})

window.addEventListener('popstate', () => render())

const initialPath = normalizePath(window.location.pathname)
if (app.dataset.route === initialPath) {
  updateMeta(initialPath)
  initMobileMenu()
  initOpenStatus()
  initHeaderScroll()
  initReveals()
} else {
  render({ scrollToTop: false })
}
