import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import HomeFooter from '../components/home/HomeFooter'
import HomeHeader from '../components/home/HomeHeader'
import HomeHero from '../components/home/HomeHero'
import SegmentCarousel from '../components/home/SegmentCarousel'
import ThemeParticles from '../components/home/ThemeParticles'
import DifferentialsSection from '../components/home/DifferentialsSection'
import { homeTheme } from '../data/themes'
import type { Segment } from '../types/catalog'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './HomePage.module.css'

function HomePage() {
  const [hoveredSegment, setHoveredSegment] = useState<Segment | null>(null)

  const activeTheme = useMemo(
    () => (hoveredSegment ? getThemeById(hoveredSegment.themeId) : homeTheme),
    [hoveredSegment]
  )

  const isThemeActive = hoveredSegment !== null

  useEffect(() => {
    applyThemeToDocument(activeTheme)
  }, [activeTheme])

  return (
    <div
      className={`${styles.page} ${isThemeActive ? styles.themeActive : ''}`}
      data-theme-active={activeTheme.id}
      style={
        {
          '--home-active-primary': activeTheme.primary,
          '--home-active-secondary': activeTheme.secondary,
          '--home-active-accent': activeTheme.accent,
          '--home-active-glow': activeTheme.glow,
          '--home-active-gradient': activeTheme.gradient,
        } as CSSProperties
      }
    >
      <ThemeParticles theme={activeTheme} isActive={isThemeActive} />
      <HomeHeader theme={activeTheme} isActive={isThemeActive} />
      <main className={styles.main}>
        <HomeHero theme={activeTheme} isActive={isThemeActive} />
        <SegmentCarousel
          onSegmentHover={setHoveredSegment}
          onSegmentLeave={() => setHoveredSegment(null)}
        />
        <DifferentialsSection />
      </main>
      <HomeFooter theme={activeTheme} isActive={isThemeActive} />
    </div>
  )
}

export default HomePage
