import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import type { Segment } from '../../types/catalog'
import { getAllSegments } from '../../utils/segments'
import SegmentCarouselCard from './SegmentCarouselCard'
import styles from './SegmentCarousel.module.css'

const AUTOPLAY_DELAY_MS = 4500

type SegmentCarouselProps = {
  onSegmentHover: (segment: Segment) => void
  onSegmentLeave: () => void
}

function SegmentCarousel({ onSegmentHover, onSegmentLeave }: SegmentCarouselProps) {
  const segments = useMemo(() => getAllSegments(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredSegmentId, setHoveredSegmentId] = useState<string | null>(null)

  useEffect(() => {
    if (isPaused || segments.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
    }, AUTOPLAY_DELAY_MS)

    return () => window.clearInterval(intervalId)
  }, [isPaused, segments.length])

  function goToPrevious() {
    setActiveIndex((currentIndex) => (currentIndex - 1 + segments.length) % segments.length)
  }

  function goToNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % segments.length)
  }

  function handleSegmentHover(segment: Segment) {
    setHoveredSegmentId(segment.id)
    setIsPaused(true)
    onSegmentHover(segment)
  }

  function handleSegmentLeave() {
    setHoveredSegmentId(null)
    setIsPaused(false)
    onSegmentLeave()
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
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleSegmentLeave}
      >
        <div className={styles.track}>
          {segments.map((segment, index) => {
            const total = segments.length
            const rawOffset = index - activeIndex
            const wrappedOffset =
              rawOffset > total / 2 ? rawOffset - total : rawOffset < -total / 2 ? rawOffset + total : rawOffset

            return (
              <SegmentCarouselCard
                key={segment.id}
                segment={segment}
                isActive={index === activeIndex}
                isHovered={hoveredSegmentId === segment.id}
                isDimmed={hoveredSegmentId !== null && hoveredSegmentId !== segment.id}
                offset={wrappedOffset}
                onHover={handleSegmentHover}
              />
            )
          })}
        </div>

        <div className={styles.controls}>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="Segmento anterior"
            onClick={goToPrevious}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className={styles.controlButton}
            type="button"
            aria-label="Próximo segmento"
            onClick={goToNext}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SegmentCarousel
