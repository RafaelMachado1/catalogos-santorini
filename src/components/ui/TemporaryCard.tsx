import type { ReactNode } from 'react'
import styles from './TemporaryCard.module.css'

type TemporaryCardProps = {
  title: string
  description: string
  badge?: string
  footer?: ReactNode
}

function TemporaryCard({ title, description, badge, footer }: TemporaryCardProps) {
  return (
    <article className={styles.card}>
      {badge ? <p className={styles.badge}>{badge}</p> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </article>
  )
}

export default TemporaryCard
