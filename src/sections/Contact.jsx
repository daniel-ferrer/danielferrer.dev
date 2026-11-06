import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import styles from './Contact.module.css'

const SOCIALS = [
  { key: 'github',   label: 'GitHub',         short: 'GH' },
  { key: 'linkedin', label: 'LinkedIn',        short: 'LI' },
  { key: 'twitter',  label: 'Twitter / X',     short: 'TW' },
  { key: 'resume',   label: 'Download Resume', short: 'CV' },
]

export default function Contact() {
  const [ref, visible] = useReveal()

  return (
    <section id="contact" className={`section-wrap ${styles.wrapper}`}>
      <div className="container" ref={ref}>

        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <SectionHeader
            label="Contact"
            heading={<>Let's work<br /><em>together.</em></>}
          />
        </div>

        <div className={styles.layout}>

          {/* Left: CTA copy */}
          <div
            className={`${styles.left} reveal ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <p className={styles.copy}>
              I'm always open to discussing reliability challenges, infrastructure projects,
              or just having a conversation about building better systems.
              The best way to reach me is by email.
            </p>

            <a href={`mailto:${config.email}`} className={styles.emailCta}>
              <span className={styles.emailCtaLabel}>Say hello</span>
              <span className={styles.emailCtaAddress}>{config.email}</span>
              <span className={styles.emailCtaArrow} aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Right: social links */}
          <div
            className={`${styles.right} reveal ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className={styles.linksLabel}>Find me elsewhere</p>
            <div className={styles.links}>
              {SOCIALS.map(({ key, label, short }) => {
                const href = config.socials[key]
                if (!href) return null
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialRow}
                  >
                    <span className={styles.socialShort}>{short}</span>
                    <span className={styles.socialLabel}>{label}</span>
                    <span className={styles.socialArrow}>↗</span>
                  </a>
                )
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer
          className={`${styles.footer} reveal ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          <p className={styles.footerName}>
            {config.name} — {config.title}
          </p>
          <p className={styles.footerSub}>
            <span suppressHydrationWarning>{new Date().getFullYear()}</span> · {config.location} · Built with React + Vite
          </p>
        </footer>

      </div>
    </section>
  )
}
