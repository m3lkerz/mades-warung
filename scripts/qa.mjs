import { chromium } from 'playwright-core'
import AxeBuilder from '@axe-core/playwright'
import { mkdir } from 'node:fs/promises'

const baseURL = 'http://127.0.0.1:4173'
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const routes = ['/', '/menu', '/our-story', '/contact', '/catering', '/jobs']
const report = { routes: {}, accessibility: {}, interactions: {} }
let failed = false

await mkdir('artifacts', { recursive: true })
const browser = await chromium.launch({ headless: true, executablePath })

for (const route of routes) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  const page = await context.newPage()
  const errors = []
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text())
  })
  page.on('pageerror', error => errors.push(error.message))
  const response = await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(150)
  const result = await page.evaluate(() => ({
    title: document.title,
    h1: document.querySelector('h1')?.textContent?.trim() ?? '',
    imageFailures: [...document.images].filter(image => !image.complete || image.naturalWidth === 0).map(image => image.src),
    horizontalOverflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    currentNavCount: document.querySelectorAll('[aria-current="page"]').length,
    headings: [...document.querySelectorAll('h1,h2,h3')].map(node => ({ level: node.tagName, text: node.textContent?.trim() })),
  }))
  const axe = await new AxeBuilder({ page }).analyze()
  const serious = axe.violations.filter(issue => ['serious', 'critical'].includes(issue.impact ?? ''))
  report.routes[route] = { status: response?.status(), ...result, errors }
  report.accessibility[route] = serious.map(issue => ({ id: issue.id, impact: issue.impact, nodes: issue.nodes.length, help: issue.help }))
  if (response?.status() !== 200 || !result.h1 || result.imageFailures.length || result.horizontalOverflow > 1 || errors.length || serious.length) failed = true
  await context.close()
}

for (const route of routes) {
  const mctx = await browser.newContext({ viewport: { width: 360, height: 780 }, isMobile: true, hasTouch: true })
  const mp = await mctx.newPage()
  await mp.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
  const ov = await mp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  report.routes[route].mobileOverflow = ov
  if (ov > 1) failed = true
  await mctx.close()
}

const desktopContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const desktop = await desktopContext.newPage()
await desktop.goto(baseURL, { waitUntil: 'networkidle' })
await desktop.screenshot({ path: 'artifacts/home-desktop.png', fullPage: true })

const mobileContext = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true })
const mobile = await mobileContext.newPage()
await mobile.goto(baseURL, { waitUntil: 'networkidle' })
const toggle = mobile.locator('.menu-toggle')
await toggle.click()
const expanded = await toggle.getAttribute('aria-expanded')
const menuVisible = await mobile.locator('#mobile-nav').isVisible()
await mobile.locator('#mobile-nav a[href="/menu"]').click()
await mobile.waitForURL('**/menu')
const menuH1 = await mobile.locator('h1').textContent()
report.interactions.mobileNavigation = { expanded, menuVisible, destination: mobile.url(), h1: menuH1?.trim() }
if (expanded !== 'true' || !menuVisible || !menuH1?.includes('menu')) failed = true
await mobile.goto(baseURL, { waitUntil: 'networkidle' })
await mobile.screenshot({ path: 'artifacts/home-mobile.png', fullPage: true })

await desktopContext.close()
await mobileContext.close()

await browser.close()
console.log(JSON.stringify(report, null, 2))
if (failed) process.exit(1)
