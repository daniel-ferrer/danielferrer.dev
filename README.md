# Personal Portfolio — SRE Edition

A light, editorial-minimal personal website for SRE / Product Reliability Engineers.
Built with React + Vite, zero UI library dependencies — every pixel is custom.

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
npm run build      # → /dist (production)
npm run preview    # → preview production build
```

---

## ✏️  Personalizing — Start Here

**All your content lives in one file:**

```
src/data/config.js
```

Open it and replace every value marked with `← YOUR ...`.
You don't need to touch any other file for content changes.

| Section | Fields to update |
|---------|-----------------|
| Identity | `name`, `initials`, `title`, `location`, `email` |
| Hero | `hero.headline`, `hero.subHeadline`, `hero.tags` |
| About | `about.paragraphs[]`, `about.metrics[]` |
| Experience | `experience[]` — add/remove jobs freely |
| Projects | `projects[]` — add/remove freely |
| Skills | `skills[]` — add/remove categories and items |
| Socials | `socials.github/linkedin/twitter/resume` — set `null` to hide |

**Drop your resume** at `/public/resume.pdf` for the Resume button to work.

---

## 🎨  Theming

All design tokens live in one place:

```
src/styles/globals.css  →  :root { ... }
```

The most impactful variables to change:

```css
--accent        /* cobalt blue — the single pop of color */
--bg            /* warm off-white page background */
--ink           /* near-black text color */
--font-serif    /* display font — Instrument Serif by default */
--font-mono     /* code/mono font — DM Mono by default */
```

To swap the accent color to, say, deep teal:
```css
--accent:       #0d7377;
--accent-light: rgba(13, 115, 119, 0.07);
--accent-mid:   rgba(13, 115, 119, 0.15);
--accent-vivid: #0e8a8f;
```

---

## 📁  Project Structure

```
sre-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
│
├── src/
│   ├── data/
│   │   └── config.js       ← ✏️  EDIT THIS FOR ALL CONTENT
│   │
│   ├── components/         ← Reusable UI pieces
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Tag.jsx / .module.css
│   │   └── SectionHeader.jsx / .module.css
│   │
│   ├── sections/           ← One file per page section
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   └── Contact.jsx / .module.css
│   │
│   ├── hooks/
│   │   ├── useReveal.js      ← scroll fade-in logic
│   │   └── useTypewriter.js  ← cycling text animation
│   │
│   ├── styles/
│   │   └── globals.css       ← design tokens + base styles
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
└── package.json
```

---

## ➕  Adding a New Section

1. Create `src/sections/MySection.jsx` + `MySection.module.css`
2. Add your data to `src/data/config.js`
3. Import `<MySection />` in `src/App.jsx` where you want it
4. Add a nav entry in `src/components/Navbar.jsx` → the `NAV_LINKS` array

Use the `useReveal` hook and the `.reveal` / `.is-visible` CSS classes for consistent
scroll animations that match the rest of the site.

---

## 🌐  Deploying

**Vercel or Netlify (recommended — zero config):**
1. Push to GitHub
2. Connect repo in Vercel/Netlify dashboard
3. Build command: `npm run build`
4. Output directory: `dist`

**GitHub Pages:**
1. In `vite.config.js`, set `base: '/your-repo-name/'`
2. Use `gh-pages` package or a GitHub Actions workflow

---

## 🔧  Tech Stack

- **React 18** · **Vite 5**
- **CSS Modules** — scoped, no runtime cost
- **Google Fonts** — Instrument Serif + DM Mono + DM Sans
- **Zero external UI dependencies** — fully custom components
- **IntersectionObserver API** — native scroll reveal, no library needed
