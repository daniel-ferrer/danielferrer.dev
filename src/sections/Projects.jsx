import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import Tag from '../components/Tag'
import styles from './Projects.module.css'

export default function Projects() {
  const [ref, visible] = useReveal()

  // Split into WIP teasers and finished/public projects
  const wip     = config.projects.filter(p => p.status === 'wip')
  const released = config.projects.filter(p => p.status !== 'wip')

  return (
    <section id="projects" className="section-wrap">
      <div className="container" ref={ref}>

        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <SectionHeader label="Projects" heading={<>Things I've<br />built.</>} />
        </div>

        {/* ── WIP teasers row ── */}
        {wip.length > 0 && (
          <>
            <p
              className={`${styles.rowLabel} reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '80ms' }}
            >
              In the workshop
            </p>
            <div className={`${styles.grid} ${styles.gridWip}`}>
              {wip.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i}
                  visible={visible}
                />
              ))}
            </div>
          </>
        )}

        {/* ── Public / released projects ── */}
        {released.length > 0 && (
          <>
            <p
              className={`${styles.rowLabel} reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: '160ms' }}
            >
              Public
            </p>
            <div className={styles.grid}>
              {released.map((project, i) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={i + wip.length}
                  visible={visible}
                />
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  )
}

function ProjectCard({ project, index, visible }) {
  const isWip      = project.status === 'wip'
  const isArchived = project.status === 'archived'

  return (
    <article
      className={`${styles.card} ${isWip ? styles.cardWip : ''} reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 80 + 100}ms` }}
    >
      <div className={styles.cardInner}>

        <header className={styles.cardHeader}>
          <div className={styles.cardMeta}>
            <span className={styles.cardYear}>{project.year}</span>
            {isArchived && <span className={styles.statusBadge}>Archived</span>}
            {isWip      && <span className={`${styles.statusBadge} ${styles.wipBadge}`}>In Development</span>}
          </div>

          {/* Action icon — arrow for public, lock for WIP, nothing for archived */}
          {project.link && !isWip && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
              aria-label={`View ${project.name} on GitHub`}
            >
              <ArrowIcon />
            </a>
          )}
          {isWip && (
            <span className={styles.lockIcon} aria-label="Private repository">
              <LockIcon />
            </span>
          )}
        </header>

        <h3 className={styles.cardName}>{project.name}</h3>
        <p className={styles.cardDesc}>{project.desc}</p>

        <footer className={styles.cardFooter}>
          {project.stack.map(t => (
            <Tag key={t} variant={isWip ? 'outlined' : 'subtle'}>{t}</Tag>
          ))}
        </footer>

      </div>
    </article>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7,7 17,7 17,17"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}
