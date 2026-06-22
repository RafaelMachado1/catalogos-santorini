import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { getAllSegments } from '../../utils/segments'
import SegmentCarouselCard from './SegmentCarouselCard'
import styles from './SegmentCarousel.module.css'

const AUTOPLAY_DELAY_MS = 4500

function SegmentCarousel() {
  const segments = useMemo(() => getAllSegments(), [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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

  return (
    <section id="segmentos" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Segmentos</p>
        <h2 className={styles.title}>Prévia dos 13 segmentos oficiais</h2>
        <p className={styles.subtitle}>
          Carrossel visual com profundidade suave, navegação acessível e transição automática controlada.
        </p>
      </div>

      <div
        className={styles.carousel}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.track}>
          {segments.map((segment, index) => {
            const total = segments.length
            const rawOffset = index - activeIndex
            const wrappedOffset = rawOffset > total / 2 ? rawOffset - total : rawOffset < -total / 2 ? rawOffset + total : rawOffset

            return (
              <SegmentCarouselCard
                key={segment.id}
                segment={segment}
                isActive={index === activeIndex}
                offset={wrappedOffset}
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
