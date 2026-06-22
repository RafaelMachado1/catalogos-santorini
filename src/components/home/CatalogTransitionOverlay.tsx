import type { CSSProperties } from 'react'
import type { Segment } from '../../types/catalog'
import { getThemeById } from '../../utils/theme'
import styles from './CatalogTransitionOverlay.module.css'

type CatalogTransitionOverlayProps = {
  segment: Segment | null
  isActive: boolean
  durationMs: number
}

function CatalogTransitionOverlay({ segment, isActive, durationMs }: CatalogTransitionOverlayProps) {
  if (!segment) {
    return null
  }

  const theme = getThemeById(segment.themeId)
  const style = {
    '--transition-primary': theme.primary,
    '--transition-accent': theme.accent,
    '--transition-gradient': theme.gradient,
    '--transition-glow': theme.glow,
    '--transition-surface': theme.surface,
    '--transition-text': theme.text,
    '--transition-duration': `${durationMs}ms`,
    '--transition-layer-duration': `${Math.round(durationMs * 0.92)}ms`,
    '--transition-light-duration': `${Math.round(durationMs * 0.72)}ms`,
    '--transition-sweep-duration': `${Math.round(durationMs * 0.86)}ms`,
    '--transition-content-duration': `${Math.round(durationMs * 0.52)}ms`,
  } as CSSProperties

  return (
    <div className={styles.overlay} data-active={isActive ? 'true' : 'false'} style={style} aria-hidden="true">
      <div className={styles.clipLayer} />
      <div className={styles.sweep} />
      <div className={styles.content}>
        <span className={styles.eyebrow}>Entrando no catálogo</span>
        <strong className={styles.title}>{segment.shortTitle || segment.title}</strong>
      </div>
    </div>
  )
}

export default CatalogTransitionOverlay
