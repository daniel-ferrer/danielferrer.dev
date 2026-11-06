import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

// Used at build time by scripts/prerender.js to put the full page into
// dist/index.html, so crawlers and no-JS tools see the content.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
