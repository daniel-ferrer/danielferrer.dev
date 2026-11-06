import { useState } from 'react'
import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import styles from './Experience.module.css'

export default function Experience() {
  const [ref, visible] = useReveal()
  const [activeIdx, setActiveIdx] = useState(0)

  const job = config.experience[activeIdx]

  return (
    <section id="experience" className="section-wrap">
      <div className="container" ref={ref}>

        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <SectionHeader label="Experience" heading={<>Where I've<br />built things.</>} />
        </div>

        <div
          className={`${styles.layout} reveal ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: '150ms' }}
        >

          {/* Tab rail */}
          <div className={styles.rail} role="tablist" aria-label="Work experience">
            {config.experience.map((exp, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeIdx === i}
                aria-controls={`panel-${i}`}
                className={`${styles.tab} ${activeIdx === i ? styles.tabActive : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <span className={styles.tabCompany}>{exp.company}</span>
                <span className={styles.tabPeriod}>{exp.period}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            id={`panel-${activeIdx}`}
            role="tabpanel"
            className={styles.panel}
            key={activeIdx}
          >
            <div className={styles.panelTop}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>
                  {job.url
                    ? <a href={job.url} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                        {job.company} ↗
                      </a>
                    : job.company
                  }
                  <span className={styles.type}>{job.type}</span>
                </p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>

            <p className={styles.summary}>{job.summary}</p>

            <ul className={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            {job.keyProjects?.map(p => (
              <div key={p.name} className={styles.keyProject}>
                <h4 className={styles.keyProjectTitle}>
                  <span className={styles.keyProjectLabel}>Key Project</span>
                  {p.name}
                  {p.role && <span className={styles.keyProjectRole}> · {p.role}</span>}
                </h4>
                <ul className={styles.bullets}>
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <span className={styles.bulletDot} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className={styles.stack}>
              {job.stack.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
