import { forwardRef } from 'react'
import Tag from './Tag'
import FlowDiagram from './FlowDiagram'
import styles from './CaseStudy.module.css'

/**
 * CaseStudy — expanded write-up for a role or project.
 *
 * study: {
 *   id, title, meta, eyebrow? ('Case study'), tags[],
 *   sections: [
 *     { heading, body }                 — paragraph
 *     { heading, items: [{title, body}] } — titled list
 *     { heading, bullets: [] }          — plain list
 *     { heading, diagram: {caption, flows} } — see FlowDiagram
 *   ]
 * }
 *
 * Rendered even while collapsed (with `hidden`) so the content is in the
 * pre-rendered HTML. The ref goes on the heading so the opener can move
 * focus to it.
 */
const CaseStudy = forwardRef(function CaseStudy({ study, open, onClose }, headingRef) {
  const eyebrow = study.eyebrow ?? 'Case study'
  return (
    <section
      id={study.id}
      className={styles.study}
      hidden={!open}
      aria-labelledby={`${study.id}-title`}
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h3 id={`${study.id}-title`} className={styles.title} ref={headingRef} tabIndex={-1}>
          {study.title}
        </h3>
        {study.meta && <p className={styles.meta}>{study.meta}</p>}
      </header>

      {study.sections.map(section => (
        <div key={section.heading} className={styles.section}>
          <h4 className={styles.sectionHeading}>{section.heading}</h4>

          {section.body && <p className={styles.body}>{section.body}</p>}

          {section.items && (
            <ul className={styles.items}>
              {section.items.map(item => (
                <li key={item.title}>
                  <strong className={styles.itemTitle}>{item.title}.</strong> {item.body}
                </li>
              ))}
            </ul>
          )}

          {section.bullets && (
            <ul className={styles.bullets}>
              {section.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          )}

          {section.diagram && <FlowDiagram {...section.diagram} />}
        </div>
      ))}

      {study.tags?.length > 0 && (
        <div className={styles.tags}>
          {study.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      )}

      {onClose && (
        <button type="button" className={styles.close} onClick={onClose}>
          Close {eyebrow.toLowerCase()} ↑
        </button>
      )}
    </section>
  )
})

export default CaseStudy
