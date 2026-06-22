import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Segment } from '../../types/catalog'
import { getThemeById } from '../../utils/theme'
import styles from './SegmentPreviewCard.module.css'

type SegmentPreviewCardProps = {
  segment: Segment
}

function SegmentPreviewCard({ segment }: SegmentPreviewCardProps) {
  const theme = getThemeById(segment.themeId)

  return (
    <article
      className={styles.card}
      style={
        {
          '--card-primary': theme.primary,
          '--card-accent': theme.accent,
          '--card-gradient': theme.gradient,
          '--card-glow': theme.glow,
          '--card-surface': theme.surface,
          '--card-surface-alt': theme.surfaceAlt,
          '--card-text': theme.text,
          '--card-muted': theme.muted,
          '--card-border': theme.border,
        } as React.CSSProperties
      }
    >
      <div className={styles.visual}>
        <span className={styles.badge}>{theme.name}</span>
        <span className={styles.slug}>/{segment.slug}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{segment.shortTitle || segment.title}</h3>
        <p className={styles.subtitle}>{segment.subtitle}</p>
        <p className={styles.description}>{segment.description}</p>

        <ul className={styles.tags} aria-label={`Tags de ${segment.title}`}>
          {segment.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.metaRow}>
          <span className={styles.status}>Status: {segment.status}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <Link className={styles.action} to={segment.catalogPath}>
          Acessar
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export default SegmentPreviewCard
