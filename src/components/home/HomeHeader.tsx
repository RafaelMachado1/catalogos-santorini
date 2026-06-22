import { Camera, Globe, Share2 } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeHeader.module.css'

type HomeHeaderProps = {
  theme: ThemeDefinition
  isActive: boolean
}

function HomeHeader({ theme, isActive }: HomeHeaderProps) {
  const style = {
    '--header-primary': theme.primary,
    '--header-accent': theme.accent,
    '--header-surface': theme.surface,
    '--header-surface-alt': theme.surfaceAlt,
    '--header-text': theme.text,
    '--header-muted': theme.muted,
    '--header-border': theme.border,
    '--header-glow': theme.glow,
  } as CSSProperties

  return (
    <header className={styles.header} style={style} data-active={isActive ? 'true' : 'false'}>
      <div className={styles.inner}>
        <div className={styles.actions}>
          <button className={styles.actionButton} type="button">
            <Share2 size={16} />
            Compartilhar
          </button>
          <button className={styles.actionButton} type="button">
            <Camera size={16} />
            Instagram
          </button>
          <button className={styles.actionButton} type="button">
            <Globe size={16} />
            Site
          </button>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
