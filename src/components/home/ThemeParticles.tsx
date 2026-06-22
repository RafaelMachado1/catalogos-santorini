import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './ThemeParticles.module.css'

type ThemeParticlesProps = {
  theme: ThemeDefinition
  isActive: boolean
}

const particles = Array.from({ length: 10 }, (_, index) => index)

function ThemeParticles({ theme, isActive }: ThemeParticlesProps) {
  const style = {
    '--particle-primary': theme.primary,
    '--particle-accent': theme.accent,
    '--particle-glow': theme.glow,
    '--particle-opacity': isActive ? '1' : '0.05',
  } as CSSProperties

  return (
    <div className={styles.layer} style={style} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle}
          className={styles.particle}
          style={
            {
              '--particle-size': `${10 + (particle % 4) * 5}px`,
              '--particle-top': `${8 + ((particle * 11) % 72)}%`,
              '--particle-left': `${5 + ((particle * 17) % 86)}%`,
              '--particle-delay': `${particle * 90}ms`,
              '--particle-duration': `${3200 + particle * 120}ms`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

export default ThemeParticles
