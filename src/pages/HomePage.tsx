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
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null)

  const activeTheme = useMemo(() => {
    const activeSegment = selectedSegment ?? hoveredSegment
    return activeSegment ? getThemeById(activeSegment.themeId) : homeTheme
  }, [hoveredSegment, selectedSegment])

  const isThemeActive = selectedSegment !== null || hoveredSegment !== null

  useEffect(() => {
    applyThemeToDocument(activeTheme)
  }, [activeTheme])

  function handleSegmentHover(segment: Segment) {
    if (selectedSegment) {
      return
    }

    setHoveredSegment(segment)
  }

  function handleSegmentLeave() {
    if (selectedSegment) {
      return
    }

    setHoveredSegment(null)
  }

  function handleSegmentSelect(segment: Segment) {
    setSelectedSegment(segment)
    setHoveredSegment(null)
  }

  function handleClearSelection() {
    setSelectedSegment(null)
    setHoveredSegment(null)
  }

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
          selectedSegment={selectedSegment}
          onSegmentHover={handleSegmentHover}
          onSegmentLeave={handleSegmentLeave}
          onSegmentSelect={handleSegmentSelect}
          onClearSelection={handleClearSelection}
        />
        <DifferentialsSection />
      </main>
      <HomeFooter theme={activeTheme} isActive={isThemeActive} />
    </div>
  )
}

export default HomePage
