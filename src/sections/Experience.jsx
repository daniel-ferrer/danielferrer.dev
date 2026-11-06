import { useEffect, useRef, useState } from 'react'
import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import CaseStudy from '../components/CaseStudy'
import styles from './Experience.module.css'

export default function Experience() {
  const [ref, visible] = useReveal()
  const [activeIdx, setActiveIdx] = useState(0)
  const [studyOpen, setStudyOpen] = useState(false)
  const toggleRef  = useRef(null)
  const headingRef = useRef(null)
  const focusOnOpen = useRef(false)

  const job = config.experience[activeIdx]
  const study = job.caseStudy

  const selectTab = (i) => {
    setActiveIdx(i)
    setStudyOpen(false)
  }

  const openStudy = () => {
    focusOnOpen.current = true
    setStudyOpen(true)
  }

  const closeStudy = () => {
    setStudyOpen(false)
    toggleRef.current?.focus()
  }

  // Move focus to the case study heading once it is shown
  useEffect(() => {
    if (studyOpen && focusOnOpen.current) {
      focusOnOpen.current = false
      headingRef.current?.focus()
    }
  }, [studyOpen])

  // Deep link: /#watchtower (or any case study id) opens it
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const idx = config.experience.findIndex(e => e.caseStudy?.id === id)
    if (idx === -1) return
    setActiveIdx(idx)
    setStudyOpen(true)
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [])

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
                onClick={() => selectTab(i)}
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

            {job.bullets?.length > 0 && (
              <ul className={styles.bullets}>
                {job.bullets.map((b, i) => (
                  <li key={i}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.stack}>
              {job.stack.map(t => <Tag key={t}>{t}</Tag>)}
            </div>

            {study && (
              <>
                <button
                  type="button"
                  ref={toggleRef}
                  className={styles.studyToggle}
                  aria-expanded={studyOpen}
                  aria-controls={study.id}
                  onClick={studyOpen ? closeStudy : openStudy}
                >
                  {studyOpen
                    ? 'Hide the case study ↑'
                    : `See the ${study.title.split(' — ')[0]} case study →`}
                </button>
                <CaseStudy
                  study={study}
                  open={studyOpen}
                  onClose={closeStudy}
                  ref={headingRef}
                />
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
