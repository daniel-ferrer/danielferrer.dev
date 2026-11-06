import { useEffect, useState } from 'react'
import { config } from '../data/config'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  // Detect scroll
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Active section tracking
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>

          {/* Logo */}
          <a href="#hero" className={styles.logo} onClick={close}>
            <span className={styles.logoMark} aria-hidden="true">{config.initials}</span>
            <span className={styles.logoName}>{config.name}</span>
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Primary">
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.navLink} ${activeId === href.slice(1) ? styles.active : ''}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {config.socials.resume && (
              <a
                href={config.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resumeBtn}
              >
                Resume ↗
              </a>
            )}
          </nav>

          {/* Hamburger */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
        // inert keeps the closed menu's links out of the tab order (React 18 needs the string form)
        inert={menuOpen ? undefined : ''}
      >
        <nav>
          <ul className={styles.overlayList}>
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={href} style={{ '--i': i }}>
                <a href={href} className={styles.overlayLink} onClick={close}>
                  <span className={styles.overlayNum}>0{i + 1}</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.overlayFooter}>
            {config.socials.resume && (
              <a
                href={config.socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.overlayResume}
                onClick={close}
              >
                Download Resume
              </a>
            )}
          </div>
        </nav>
      </div>
    </>
  )
}
