import { MessageCircle } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeConsultantCTA.module.css'

type HomeConsultantCTAProps = {
  theme: ThemeDefinition
  isActive: boolean
  isSelected: boolean
}

function HomeConsultantCTA({ theme, isActive, isSelected }: HomeConsultantCTAProps) {
  const style = {
    '--cta-primary': theme.primary,
    '--cta-accent': theme.accent,
    '--cta-text': theme.text,
    '--cta-muted': theme.muted,
    '--cta-glow': theme.glow,
    '--cta-border': theme.border,
  } as CSSProperties

  return (
    <section
      className={styles.section}
      style={style}
      data-active={isActive ? 'true' : 'false'}
      data-selected={isSelected ? 'true' : 'false'}
    >
      <p className={styles.text}>Precisa de orientação para escolher o catálogo ou solução ideal?</p>
      <button className={styles.button} type="button">
        <MessageCircle size={22} />
        Falar com um consultor
      </button>
    </section>
  )
}

export default HomeConsultantCTA
