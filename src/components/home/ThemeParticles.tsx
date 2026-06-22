import type { CSSProperties } from 'react'
import type { ThemeDefinition } from '../../types/theme'
import styles from './ThemeParticles.module.css'

type ThemeParticlesProps = {
  theme: ThemeDefinition
  isActive: boolean
}

const particles = Array.from({ length: 12 }, (_, index) => index)

function ThemeParticles({ theme, isActive }: ThemeParticlesProps) {
  const style = {
    '--particle-primary': theme.primary,
    '--particle-accent': theme.accent,
    '--particle-glow': theme.glow,
    '--particle-opacity': isActive ? '1' : '0.04',
    '--particle-scale-factor': isActive ? '1.14' : '1',
  } as CSSProperties

  return (
    <div className={styles.layer} style={style} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle}
          className={styles.particle}
          style={
            {
              '--particle-size': `${12 + (particle % 5) * 4}px`,
              '--particle-top': `${6 + ((particle * 11) % 76)}%`,
              '--particle-left': `${2 + ((particle * 17) % 92)}%`,
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
