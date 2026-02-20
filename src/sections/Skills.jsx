import { config } from '../data/config'
import { useReveal } from '../hooks/useReveal'
import SectionHeader from '../components/SectionHeader'
import styles from './Skills.module.css'

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="section-wrap">
      <div className="container" ref={ref}>

        <div className={`reveal ${visible ? 'is-visible' : ''}`}>
          <SectionHeader label="Skills & Toolkit" heading={<>How I build<br />reliable systems.</>}>
            The technologies and practices I reach for most.
          </SectionHeader>
        </div>

        <div className={styles.categories}>
          {config.skills.map((group, i) => (
            <SkillGroup
              key={i}
              group={group}
              index={i}
              visible={visible}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function SkillGroup({ group, index, visible }) {
  return (
    <div
      className={`${styles.group} reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 70 + 100}ms` }}
    >
      <div className={styles.groupHeader}>
        <span className={styles.groupNum}>{String(index + 1).padStart(2, '0')}</span>
        <h3 className={styles.groupTitle}>{group.category}</h3>
      </div>
      <ul className={styles.items}>
        {group.items.map(item => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
