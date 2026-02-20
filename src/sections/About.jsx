import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="section-wrap">
      <div className="container" ref={ref}>

        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <SectionHeader label="About me" heading={<>The engineer<br />behind the work.</>}>
          </SectionHeader>
        </div>

        <div className={styles.layout}>

          {/* Bio copy */}
          <div className={styles.bio}>
            {config.about.paragraphs.map((para, i) => (
              <p
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 90 + 100}ms` }}
              >
                {para}
              </p>
            ))}

            {/* Quick-facts row */}
            <div
              className={`${styles.facts} reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '380ms' }}
            >
              <div className={styles.fact}>
                <span className={styles.factLabel}>Location</span>
                <span className={styles.factValue}>{config.location}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Title</span>
                <span className={styles.factValue}>{config.title}</span>
              </div>
              <div className={styles.fact}>
                <span className={styles.factLabel}>Contact</span>
                <a href={`mailto:${config.email}`} className={styles.factLink}>{config.email}</a>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className={`${styles.metrics} reveal-group`}>
            {config.about.metrics.map((m, i) => (
              <div
                key={i}
                className={`${styles.metricCard} reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 80 + 200}ms` }}
              >
                <div className={styles.metricValue}>
                  {m.value}
                  {m.unit && <span className={styles.metricUnit}>{m.unit}</span>}
                </div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
