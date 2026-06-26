import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeHero.module.css'

type HomeHeroProps = {
  theme: ThemeDefinition
  isActive: boolean
}

function HomeHero({ theme, isActive }: HomeHeroProps) {
  const style = {
    '--hero-primary': theme.primary,
    '--hero-accent': theme.accent,
    '--hero-text': theme.text,
    '--hero-muted': theme.muted,
    '--hero-border': theme.border,
    '--hero-glow': theme.glow,
    '--hero-surface': theme.surface,
    '--hero-surface-alt': theme.surfaceAlt,
    '--hero-gradient': theme.gradient,
  } as CSSProperties

  return (
    <section className={styles.hero} style={style} data-active={isActive ? 'true' : 'false'}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.shapeOne} />
        <span className={styles.shapeTwo} />
        <span className={styles.shapeThree} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Soluções Profissionais por Segmento</h1>
      </div>
    </section>
  )
}

export default HomeHero
