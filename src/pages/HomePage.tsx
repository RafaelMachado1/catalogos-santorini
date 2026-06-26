import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'
import HomeConsultantCTA from '../components/home/HomeConsultantCTA'
import CatalogTransitionOverlay from '../components/home/CatalogTransitionOverlay'
import HomeFooter from '../components/home/HomeFooter'
import HomeHero from '../components/home/HomeHero'
import SegmentCarousel from '../components/home/SegmentCarousel'
import ThemeParticles from '../components/home/ThemeParticles'
import { homeTheme } from '../data/themes'
import type { Segment } from '../types/catalog'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './HomePage.module.css'

const TRANSITION_DURATION_MS = 1500

function HomePage() {
  const navigate = useNavigate()
  const transitionTimeoutRef = useRef<number | null>(null)
  const [hoveredSegment, setHoveredSegment] = useState<Segment | null>(null)
  const [selectedSegment, setSelectedSegment] = useState<Segment | null>(null)
  const [transitionSegment, setTransitionSegment] = useState<Segment | null>(null)

  const activeTheme = useMemo(() => {
    const activeSegment = transitionSegment ?? selectedSegment ?? hoveredSegment
    return activeSegment ? getThemeById(activeSegment.themeId) : homeTheme
  }, [hoveredSegment, selectedSegment, transitionSegment])

  const isTransitioning = transitionSegment !== null
  const isThemeActive = isTransitioning || selectedSegment !== null || hoveredSegment !== null

  useEffect(() => {
    applyThemeToDocument(activeTheme)
  }, [activeTheme])

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current)
      }
    }
  }, [])

  function handleSegmentHover(segment: Segment) {
    if (selectedSegment || isTransitioning) {
      return
    }

    setHoveredSegment(segment)
  }

  function handleSegmentLeave() {
    if (selectedSegment || isTransitioning) {
      return
    }

    setHoveredSegment(null)
  }

  function handleSegmentSelect(segment: Segment) {
    if (isTransitioning) {
      return
    }

    setSelectedSegment(segment)
    setHoveredSegment(null)
  }

  function handleClearSelection() {
    if (isTransitioning) {
      return
    }

    setSelectedSegment(null)
    setHoveredSegment(null)
  }

  function handleAccessCatalog(segment: Segment) {
    if (isTransitioning) {
      return
    }

    setSelectedSegment(segment)
    setHoveredSegment(null)
    setTransitionSegment(segment)

    transitionTimeoutRef.current = window.setTimeout(() => {
      navigate(segment.catalogPath)
    }, TRANSITION_DURATION_MS)
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
      <main className={styles.main}>
        <section className={styles.introSection}>
          <HomeHero theme={activeTheme} isActive={isThemeActive} />
          <SegmentCarousel
            theme={activeTheme}
            selectedSegment={selectedSegment}
            isTransitioning={isTransitioning}
            onSegmentHover={handleSegmentHover}
            onSegmentLeave={handleSegmentLeave}
            onSegmentSelect={handleSegmentSelect}
            onClearSelection={handleClearSelection}
            onAccessCatalog={handleAccessCatalog}
          />
          <HomeConsultantCTA theme={activeTheme} isActive={isThemeActive} isSelected={selectedSegment !== null} />
        </section>
      </main>
      <CatalogTransitionOverlay
        segment={transitionSegment}
        isActive={isTransitioning}
        durationMs={TRANSITION_DURATION_MS}
      />
      <HomeFooter theme={activeTheme} isActive={isThemeActive} />
    </div>
  )
}

export default HomePage
