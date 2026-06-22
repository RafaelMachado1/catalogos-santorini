import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { Segment } from '../../types/catalog'
import { getAllSegments } from '../../utils/segments'
import SegmentCarouselCard from './SegmentCarouselCard'
import styles from './SegmentCarousel.module.css'

const AUTOPLAY_DELAY_MS = 4500

type SegmentCarouselProps = {
  selectedSegment: Segment | null
  onSegmentHover: (segment: Segment) => void
  onSegmentLeave: () => void
  onSegmentSelect: (segment: Segment) => void
  onClearSelection: () => void
}

function SegmentCarousel({
  selectedSegment,
  onSegmentHover,
  onSegmentLeave,
  onSegmentSelect,
  onClearSelection,
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
    if (isPaused || selectedSegment || segments.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
    }, AUTOPLAY_DELAY_MS)

    return () => window.clearInterval(intervalId)
  }, [isPaused, selectedSegment, segments.length])

  useEffect(() => {
    if (!selectedSegment) {
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
  }, [handleClearSelection, selectedSegment])

  function goToPrevious() {
    if (selectedSegment) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex - 1 + segments.length) % segments.length)
  }

  function goToNext() {
    if (selectedSegment) {
      return
    }

    setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
  }

  function handleSegmentHover(segment: Segment) {
    if (selectedSegment) {
      return
    }

    setHoveredSegmentId(segment.id)
    setIsPaused(true)
    onSegmentHover(segment)
  }

  function handleSegmentLeave() {
    if (selectedSegment) {
      return
    }

    setHoveredSegmentId(null)
    setIsPaused(false)
    onSegmentLeave()
  }

  function handleSegmentSelect(segment: Segment) {
    const nextIndex = segments.findIndex((item) => item.id === segment.id)

    if (nextIndex >= 0) {
      setActiveIndex(nextIndex)
    }

    setHoveredSegmentId(null)
    setIsPaused(true)
    onSegmentSelect(segment)
  }

  function handleClearSelection() {
    setHoveredSegmentId(null)
    setIsPaused(false)
    onClearSelection()
  }

  return (
    <section id="segmentos" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Segmentos</p>
        <h2 className={styles.title}>Prévia dos 13 segmentos oficiais</h2>
        <p className={styles.subtitle}>
          Carrossel visual com profundidade suave, navegação acessível, autoplay e resposta ao hover do segmento.
        </p>
      </div>

      <div
        className={styles.carousel}
        data-selected={selectedSegment ? 'true' : 'false'}
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
                offset={wrappedOffset}
                onHover={handleSegmentHover}
                onSelect={handleSegmentSelect}
                onClose={handleClearSelection}
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
            disabled={Boolean(selectedSegment)}
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
            disabled={Boolean(selectedSegment)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SegmentCarousel
