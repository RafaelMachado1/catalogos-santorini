import { ArrowRight, MessageCircle } from 'lucide-react'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
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
        <p className={styles.eyebrow}>Catálogos Interativos Santorini</p>
        <h1 className={styles.title}>Soluções profissionais por segmento</h1>
        <p className={styles.subtitle}>
          A Home funciona como uma vitrine premium para acessar catálogos por área de atuação, com leitura clara, apresentação corporativa e base pronta para expansão.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="#segmentos">
            Ver catálogos
            <ArrowRight size={18} />
          </Link>
          <button className={styles.secondaryAction} type="button">
            <MessageCircle size={18} />
            Falar com consultor
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
