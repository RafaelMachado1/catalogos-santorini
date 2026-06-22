import { ChevronDown } from 'lucide-react'
import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './HomeScrollCue.module.css'

type HomeScrollCueProps = {
  theme: ThemeDefinition
  isActive: boolean
}

function HomeScrollCue({ theme, isActive }: HomeScrollCueProps) {
  const style = {
    '--cue-primary': theme.primary,
    '--cue-accent': theme.accent,
    '--cue-text': theme.text,
    '--cue-muted': theme.muted,
    '--cue-glow': theme.glow,
  } as CSSProperties

  return (
    <section className={styles.cue} style={style} data-active={isActive ? 'true' : 'false'} aria-hidden="true">
      <div className={styles.rule} />
      <div className={styles.inner}>
        <span className={styles.icon}>
          <ChevronDown size={18} />
        </span>
        <p className={styles.text}>Continue explorando</p>
      </div>
      <div className={styles.rule} />
    </section>
  )
}

export default HomeScrollCue
