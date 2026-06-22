import { useEffect, useMemo, useState } from 'react'
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

  useEffect(() => {
    applyThemeToDocument(activeTheme)
  }, [activeTheme])

  return (
    <div className={styles.page} data-theme-active={activeTheme.id}>
      <ThemeParticles theme={activeTheme} isActive={Boolean(hoveredSegment)} />
      <HomeHeader theme={activeTheme} />
      <main className={styles.main}>
        <HomeHero />
        <SegmentCarousel
          onSegmentHover={setHoveredSegment}
          onSegmentLeave={() => setHoveredSegment(null)}
        />
        <DifferentialsSection />
      </main>
      <HomeFooter theme={activeTheme} />
    </div>
  )
}

export default HomePage
