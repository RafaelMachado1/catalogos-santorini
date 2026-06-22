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
          <p className={styles.brand}>Santorini</p>
          <p className={styles.copy}>
            Estrutura institucional para catálogos comerciais interativos, preparada para evolução de produto e conteúdo.
          </p>
        </div>

        <div className={styles.links}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://example.com" target="_blank" rel="noreferrer">
            Site
          </a>
        </div>

        <div className={styles.meta}>
          <p>Endereço temporário: Avenida Santorini, 100 - São Paulo/SP</p>
          <p>Os catálogos são materiais comerciais interativos.</p>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
