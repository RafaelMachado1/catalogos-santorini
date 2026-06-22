import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { Segment } from '../../types/catalog'
import { getThemeById } from '../../utils/theme'
import styles from './SegmentCarouselCard.module.css'

type SegmentCarouselCardProps = {
  segment: Segment
  isActive: boolean
  offset: number
}

function getCardLayerStyles(offset: number): CSSProperties {
  const distance = Math.abs(offset)

  if (distance === 0) {
    return {
      '--card-x': '0%',
      '--card-scale': '1',
      '--card-opacity': '1',
      '--card-blur': '0px',
      '--card-z': '4',
      '--card-pointer': 'auto',
    } as CSSProperties
  }

  if (distance === 1) {
    return {
      '--card-x': offset > 0 ? '32%' : '-32%',
      '--card-scale': '0.88',
      '--card-opacity': '0.66',
      '--card-blur': '0.5px',
      '--card-z': '3',
      '--card-pointer': 'none',
    } as CSSProperties
  }

  if (distance === 2) {
    return {
      '--card-x': offset > 0 ? '58%' : '-58%',
      '--card-scale': '0.78',
      '--card-opacity': '0.4',
      '--card-blur': '1px',
      '--card-z': '2',
      '--card-pointer': 'none',
    } as CSSProperties
  }

  return {
    '--card-x': offset > 0 ? '82%' : '-82%',
    '--card-scale': '0.72',
    '--card-opacity': '0',
    '--card-blur': '2px',
    '--card-z': '1',
    '--card-pointer': 'none',
  } as CSSProperties
}

function SegmentCarouselCard({ segment, isActive, offset }: SegmentCarouselCardProps) {
  const theme = getThemeById(segment.themeId)
  const style = {
    ...getCardLayerStyles(offset),
    '--card-primary': theme.primary,
    '--card-accent': theme.accent,
    '--card-gradient': theme.gradient,
    '--card-glow': theme.glow,
    '--card-surface': theme.surface,
    '--card-surface-alt': theme.surfaceAlt,
    '--card-text': theme.text,
    '--card-muted': theme.muted,
    '--card-border': theme.border,
  } as CSSProperties

  return (
    <article
      className={styles.card}
      style={style}
      data-active={isActive ? 'true' : 'false'}
      aria-hidden={!isActive && Math.abs(offset) > 2}
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
          Acessar catálogo
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export default SegmentCarouselCard
