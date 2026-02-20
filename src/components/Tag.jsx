import styles from './Tag.module.css'

/**
 * Tag — small pill used for tech stack labels.
 * variant: 'default' | 'outlined' | 'subtle'
 */
export default function Tag({ children, variant = 'default' }) {
  return (
    <span className={`${styles.tag} ${styles[variant]}`}>
      {children}
    </span>
  )
}
