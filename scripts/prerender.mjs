import { chromium } from 'playwright-core'
import { preview } from 'vite'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const routes = ['/', '/menu', '/our-story', '/contact', '/catering', '/jobs']
const port = 4190
const baseURL = `http://127.0.0.1:${port}`
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const server = await preview({
  preview: { host: '127.0.0.1', port, strictPort: true },
  logLevel: 'silent',
})
const browser = await chromium.launch({ headless: true, executablePath })
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })

try {
  for (const route of routes) {
    const page = await context.newPage()
    await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' })
    const html = await page.content()
    const target = route === '/' ? join('dist', 'index.html') : join('dist', route.slice(1), 'index.html')
    await mkdir(join(target, '..'), { recursive: true })
    await writeFile(target, html, 'utf8')
    await page.close()
    console.log(`Prerendered ${route} -> ${target}`)
  }

  const missing = await context.newPage()
  await missing.goto(`${baseURL}/definitely-missing`, { waitUntil: 'networkidle' })
  await writeFile(join('dist', '404.html'), await missing.content(), 'utf8')
  await missing.close()
  console.log('Prerendered 404 -> dist/404.html')
} finally {
  await context.close()
  await browser.close()
  await new Promise(resolve => server.httpServer.close(resolve))
}
