import { Camera, Globe, Share2 } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeFooter.module.css'

type HomeFooterProps = {
  theme: ThemeDefinition
  isActive: boolean
}

function HomeFooter({ theme, isActive }: HomeFooterProps) {
  const style = {
    '--footer-primary': theme.primary,
    '--footer-accent': theme.accent,
    '--footer-surface': theme.surface,
    '--footer-surface-alt': theme.surfaceAlt,
    '--footer-text': theme.text,
    '--footer-muted': theme.muted,
    '--footer-border': theme.border,
    '--footer-glow': theme.glow,
  } as CSSProperties

  return (
    <footer className={styles.footer} style={style} data-active={isActive ? 'true' : 'false'}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.copy}>
            Soluções profissionais em higiene, limpeza e suporte técnico<br />
            para operações B2B.
          </p>
        </div>

        <div className={styles.actions} aria-label="Ações da Santorini">
          <button className={styles.actionButton} type="button">
            <Share2 size={16} />
            Compartilhar
          </button>
          <a className={styles.actionButton} href="https://instagram.com" target="_blank" rel="noreferrer">
            <Camera size={16} />
            Instagram
          </a>
          <a className={styles.actionButton} href="https://example.com" target="_blank" rel="noreferrer">
            <Globe size={16} />
            Site
          </a>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
