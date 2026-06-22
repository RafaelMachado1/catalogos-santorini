import type { ReactNode } from 'react'
import styles from './TemporaryCard.module.css'

type TemporaryCardProps = {
  title: string
  subtitle?: string
  description: string
  badge?: string
  tags?: string[]
  meta?: ReactNode
  footer?: ReactNode
}

function TemporaryCard({
  title,
  subtitle,
  description,
  badge,
  tags,
  meta,
  footer,
}: TemporaryCardProps) {
  return (
    <article className={styles.card}>
      {badge ? <p className={styles.badge}>{badge}</p> : null}
      <h3 className={styles.title}>{title}</h3>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 ? (
        <ul className={styles.tags} aria-label={`Tags de ${title}`}>
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {meta ? <div className={styles.meta}>{meta}</div> : null}
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </article>
  )
}

export default TemporaryCard
