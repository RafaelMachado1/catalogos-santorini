import { Camera, Globe, Menu, Share2, X } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeHeader.module.css'

type HomeHeaderProps = {
  theme: ThemeDefinition
  isActive: boolean
}

function HomeHeader({ theme, isActive }: HomeHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
        <div className={styles.brandSlot} aria-label="Santorini">
          <span>Santorini</span>
        </div>
        <button
          className={styles.menuToggle}
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`${styles.actions} ${isMenuOpen ? styles.actionsOpen : ""}`} aria-label="Links da Home">
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
        </nav>
      </div>
    </header>
  )
}

export default HomeHeader
