import styles from './SectionHeader.module.css'

/**
 * SectionHeader — consistent label + heading used in every section.
 * label:    small monospace label above the heading
 * heading:  main section title (can contain <br />)
 * align:    'left' | 'center' (default 'left')
 */
export default function SectionHeader({ label, heading, align = 'left', children }) {
  return (
    <div className={`${styles.wrap} ${align === 'center' ? styles.center : ''}`}>
      {label && (
        <p className={`label ${styles.label}`}>
          <span className={styles.line} aria-hidden="true" />
          {label}
        </p>
      )}
      <h2 className={styles.heading}>{heading}</h2>
      {children && <div className={styles.sub}>{children}</div>}
    </div>
  )
}
