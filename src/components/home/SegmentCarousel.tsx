import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import type { Segment } from '../../types/catalog'
import type { ThemeDefinition } from '../../types/theme'
import { getAllSegments } from '../../utils/segments'
import SegmentCarouselCard from './SegmentCarouselCard'
import styles from './SegmentCarousel.module.css'

const AUTOPLAY_DELAY_MS = 4500

type SegmentCarouselProps = {
  theme: ThemeDefinition
  selectedSegment: Segment | null
  isTransitioning: boolean
  onSegmentHover: (segment: Segment) => void
  onSegmentLeave: () => void
  onSegmentSelect: (segment: Segment) => void
  onClearSelection: () => void
  onAccessCatalog: (segment: Segment) => void
}

function SegmentCarousel({
  theme,
  selectedSegment,
  isTransitioning,
  onSegmentHover,
  onSegmentLeave,
  onSegmentSelect,
  onClearSelection,
  onAccessCatalog,
}: SegmentCarouselProps) {
  const segments = useMemo(() => getAllSegments(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredSegmentId, setHoveredSegmentId] = useState<string | null>(null)

  const selectedIndex = selectedSegment
    ? segments.findIndex((segment) => segment.id === selectedSegment.id)
    : -1
  const displayIndex = selectedIndex >= 0 ? selectedIndex : activeIndex

  useEffect(() => {
    if (isPaused || selectedSegment || isTransitioning || segments.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
    }, AUTOPLAY_DELAY_MS)

    return () => window.clearInterval(intervalId)
  }, [isPaused, isTransitioning, selectedSegment, segments.length])

  useEffect(() => {
    if (!selectedSegment || isTransitioning) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClearSelection()
      }
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target

      if (!(target instanceof Node)) {
        return
      }

      const selectedCard = document.querySelector<HTMLElement>("[data-carousel-card='true'][data-selected='true']")

      if (selectedCard?.contains(target)) {
        return
      }

      handleClearSelection()
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [handleClearSelection, isTransitioning, selectedSegment])

  function goToPrevious() {
    if (selectedSegment || isTransitioning) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex - 1 + segments.length) % segments.length)
  }

  function goToNext() {
    if (selectedSegment || isTransitioning) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
  }

  function handleSegmentHover(segment: Segment) {
    if (selectedSegment || isTransitioning) {
      return
    }

    setHoveredSegmentId(segment.id)
    setIsPaused(true)
    onSegmentHover(segment)
  }

  function handleSegmentLeave() {
    if (selectedSegment || isTransitioning) {
      return
    }

    setHoveredSegmentId(null)
    setIsPaused(false)
    onSegmentLeave()
  }

  function handleSegmentSelect(segment: Segment) {
    if (isTransitioning) {
      return
    }

    const nextIndex = segments.findIndex((item) => item.id === segment.id)

    if (nextIndex >= 0) {
      setActiveIndex(nextIndex)
    }

    setHoveredSegmentId(null)
    setIsPaused(true)
    onSegmentSelect(segment)
  }

  function handleClearSelection() {
    if (isTransitioning) {
      return
    }

    setHoveredSegmentId(null)
    setIsPaused(false)
    onClearSelection()
  }

  return (
    <section id="segmentos" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Segmentos</h2>
      </div>

      <div
        className={styles.carousel}
        style={{ '--segment-title-color': theme.primary } as CSSProperties}
        data-selected={selectedSegment ? 'true' : 'false'}
        data-transitioning={isTransitioning ? 'true' : 'false'}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleSegmentLeave}
      >
        <div className={styles.track}>
          {segments.map((segment, index) => {
            const total = segments.length
            const rawOffset = index - displayIndex
            const wrappedOffset =
              rawOffset > total / 2 ? rawOffset - total : rawOffset < -total / 2 ? rawOffset + total : rawOffset
            const isSelected = selectedSegment?.id === segment.id
            const hasHover = hoveredSegmentId !== null
            const isFrontCard = index === displayIndex

            return (
              <SegmentCarouselCard
                key={segment.id}
                segment={segment}
                isActive={isFrontCard}
                isFrontCard={isFrontCard}
                isDimmed={(selectedSegment !== null && !isSelected) || (hasHover && hoveredSegmentId !== segment.id)}
                isHovered={isFrontCard && hoveredSegmentId === segment.id}
                isSelected={isSelected}
                isTransitioning={isTransitioning}
                offset={wrappedOffset}
                onHover={handleSegmentHover}
                onSelect={handleSegmentSelect}
                onClose={handleClearSelection}
                onAccessCatalog={onAccessCatalog}
              />
            )
          })}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="Segmento anterior"
            onClick={(event) => {
              event.stopPropagation()
              goToPrevious()
            }}
            disabled={Boolean(selectedSegment) || isTransitioning}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="Próximo segmento"
            onClick={(event) => {
              event.stopPropagation()
              goToNext()
            }}
            disabled={Boolean(selectedSegment) || isTransitioning}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SegmentCarousel
