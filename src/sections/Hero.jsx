import { useEffect, useState } from 'react'
import { config } from '../data/config'
import { useTypewriter } from '../hooks/useTypewriter'
import styles from './Hero.module.css'

// Social icon paths (inline SVG strokes)
const ICONS = {
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
    </svg>
  ),
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const typed = useTypewriter(config.hero.tags, 70, 38, 2000)

  // Trigger stagger animation after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const headlineLines = config.hero.headline.split('\n')

  return (
    <section id="hero" className={styles.hero}>

      {/* Blueprint grid — SVG dot grid as atmosphere */}
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* ── Top row: availability badge + location ── */}
        <div className={`${styles.topRow} ${mounted ? styles.visible : ''}`}>
          {config.openToWork && (
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              Open to opportunities
            </span>
          )}
          <span className={styles.location}>
            <PinIcon />
            {config.location}
          </span>
        </div>

        {/* ── Headline ── */}
        <h1 className={styles.headline} aria-label={config.hero.headline.replace('\n', ' ')}>
          {headlineLines.map((line, i) => (
            <span
              key={i}
              className={`${styles.headlineLine} ${mounted ? styles.visible : ''}`}
              style={{ transitionDelay: `${120 + i * 100}ms` }}
            >
              {/* First line is italic via CSS */}
              {line}
            </span>
          ))}
        </h1>

        {/* ── Sub-headline ── */}
        <p
          className={`${styles.sub} ${mounted ? styles.visible : ''}`}
          style={{ transitionDelay: '340ms' }}
        >
          {config.hero.subHeadline}
        </p>

        {/* ── Typewriter tag line ── */}
        <div
          className={`${styles.typeRow} ${mounted ? styles.visible : ''}`}
          style={{ transitionDelay: '440ms' }}
          aria-label="Specializations"
        >
          <span className={styles.typeLabel}>Currently focusing on</span>
          <span className={styles.typedText} aria-live="polite">{typed}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </div>

        {/* ── CTAs ── */}
        <div
          className={`${styles.ctas} ${mounted ? styles.visible : ''}`}
          style={{ transitionDelay: '520ms' }}
        >
          <a href="#projects" className={styles.ctaPrimary}>
            See my work
          </a>
          <a href="#contact" className={styles.ctaSecondary}>
            Get in touch
          </a>

          {/* Social links inline with CTAs */}
          <div className={styles.socials}>
            {config.socials.github && (
              <a href={config.socials.github} target="_blank" rel="noopener noreferrer"
                className={styles.socialIcon} aria-label="GitHub">
                {ICONS.github}
              </a>
            )}
            {config.socials.linkedin && (
              <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className={styles.socialIcon} aria-label="LinkedIn">
                {ICONS.linkedin}
              </a>
            )}
            {config.socials.twitter && (
              <a href={config.socials.twitter} target="_blank" rel="noopener noreferrer"
                className={styles.socialIcon} aria-label="Twitter / X">
                {ICONS.twitter}
              </a>
            )}
          </div>
        </div>

      </div>

      {/* Scroll cue */}
      <div className={`${styles.scrollCue} ${mounted ? styles.visible : ''}`} aria-hidden="true"
           style={{ transitionDelay: '800ms' }}>
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
