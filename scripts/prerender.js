// Build-time pre-render: inject the server-rendered app into dist/index.html.
// Runs after `vite build` (client) and `vite build --ssr` (into dist-ssr/).
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root     = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrDir   = path.join(root, 'dist-ssr')
const marker   = '<div id="root"></div>'

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = await readFile(htmlPath, 'utf8')
if (!template.includes(marker)) {
  throw new Error(`prerender: ${marker} not found in dist/index.html`)
}

const appHtml = render()
await writeFile(htmlPath, template.replace(marker, `<div id="root">${appHtml}</div>`))
await rm(ssrDir, { recursive: true, force: true })

console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} kB of HTML into dist/index.html`)
