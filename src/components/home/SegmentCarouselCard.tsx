import { ArrowRight, MessageCircle, Share2, X } from 'lucide-react'
import { useState } from 'react'
import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react'
import type { Segment } from '../../types/catalog'
import { getThemeById } from '../../utils/theme'
import styles from './SegmentCarouselCard.module.css'

type SegmentCarouselCardProps = {
  segment: Segment
  isActive: boolean
  isFrontCard: boolean
  isDimmed: boolean
  isHovered: boolean
  isSelected: boolean
  isTransitioning: boolean
  offset: number
  onHover: (segment: Segment) => void
  onSelect: (segment: Segment) => void
  onClose: () => void
  onAccessCatalog: (segment: Segment) => void
}

function getCardLayerStyles(offset: number): CSSProperties {
  const distance = Math.abs(offset)

  if (distance === 0) {
    return {
      '--card-x': '0%',
      '--card-scale': '1',
      '--card-opacity': '1',
      '--card-blur': '0px',
      '--card-z': '4',
      '--card-pointer': 'auto',
      '--card-hover-scale': '1.08',
      '--card-hover-z': '8',
    } as CSSProperties
  }

  if (distance === 1) {
    return {
      '--card-x': offset > 0 ? '38%' : '-38%',
      '--card-scale': '0.84',
      '--card-opacity': '0.68',
      '--card-blur': '0.5px',
      '--card-z': '3',
      '--card-pointer': 'none',
      '--card-hover-scale': '0.84',
      '--card-hover-z': '3',
    } as CSSProperties
  }

  if (distance === 2) {
    return {
      '--card-x': offset > 0 ? '70%' : '-70%',
      '--card-scale': '0.72',
      '--card-opacity': '0.5',
      '--card-blur': '1px',
      '--card-z': '2',
      '--card-pointer': 'none',
      '--card-hover-scale': '0.72',
      '--card-hover-z': '2',
    } as CSSProperties
  }

  if (distance === 3) {
    return {
      '--card-x': offset > 0 ? '100%' : '-100%',
      '--card-scale': '0.62',
      '--card-opacity': '0.34',
      '--card-blur': '1.4px',
      '--card-z': '1',
      '--card-pointer': 'none',
      '--card-hover-scale': '0.62',
      '--card-hover-z': '1',
    } as CSSProperties
  }

  return {
    '--card-x': offset > 0 ? '128%' : '-128%',
    '--card-scale': '0.56',
    '--card-opacity': '0',
    '--card-blur': '1.6px',
    '--card-z': '0',
    '--card-pointer': 'none',
    '--card-hover-scale': '0.56',
    '--card-hover-z': '0',
  } as CSSProperties
}

function SegmentCarouselCard({
  segment,
  isActive,
  isFrontCard,
  isDimmed,
  isHovered,
  isSelected,
  isTransitioning,
  offset,
  onHover,
  onSelect,
  onClose,
  onAccessCatalog,
}: SegmentCarouselCardProps) {
  const theme = getThemeById(segment.themeId)
  const [hasImageError, setHasImageError] = useState(false)

  const style = {
    ...getCardLayerStyles(offset),
    '--card-primary': theme.primary,
    '--card-accent': theme.accent,
    '--card-gradient': theme.gradient,
    '--card-glow': theme.glow,
    '--card-surface': theme.surface,
    '--card-surface-alt': theme.surfaceAlt,
    '--card-text': theme.text,
    '--card-muted': theme.muted,
    '--card-border': theme.border,
  } as CSSProperties
  const canInteract = (isFrontCard || isSelected) && !isTransitioning

  const shouldShowImage = !hasImageError
  const cardDescription = `Soluções em higiene e limpeza profissional para ${segment.title}.`

  function handleImageError() {
    setHasImageError(true)
  }

  function handleCardClick(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()

    if (!canInteract) {
      return
    }

    onSelect(segment)
  }

  function handleCardKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (!canInteract || (event.key !== 'Enter' && event.key !== ' ')) {
      return
    }

    event.preventDefault()
    onSelect(segment)
  }

  function handleCardHover() {
    if (!isFrontCard || isSelected) {
      return
    }

    onHover(segment)
  }

  function handleCloseClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()

    if (isTransitioning) {
      return
    }

    onClose()
  }

  function handleAccessCatalogClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()

    if (!canInteract) {
      return
    }

    onAccessCatalog(segment)
  }

  return (
    <article
      className={styles.card}
      style={style}
      data-carousel-card="true"
      data-active={isActive ? 'true' : 'false'}
      data-front={isFrontCard ? 'true' : 'false'}
      data-dimmed={isDimmed ? 'true' : 'false'}
      data-hovered={isHovered ? 'true' : 'false'}
      data-selected={isSelected ? 'true' : 'false'}
      aria-current={isSelected ? 'true' : undefined}
      aria-hidden={!isActive && Math.abs(offset) > 3}
      onClick={handleCardClick}
      onMouseEnter={handleCardHover}
      onFocus={handleCardHover}
      onKeyDown={handleCardKeyDown}
      tabIndex={canInteract && !isDimmed && Math.abs(offset) <= 2 ? 0 : -1}
    >
      <button
        className={styles.closeButton}
        type="button"
        aria-label="Fechar segmento selecionado"
        onClick={handleCloseClick}
      >
        <X size={18} />
      </button>

      <div className={styles.media} aria-hidden="true">
        {shouldShowImage ? (
          <img
            className={styles.mediaImage}
            src={segment.coverImages.primary}
            alt=""
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className={styles.mediaFallback} />
        )}
        <div className={styles.mediaOverlay} />
      </div>

      <div className={styles.visual}>
        <span className={styles.badge}>{theme.name}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{segment.shortTitle || segment.title}</h3>
        <p className={styles.description}>{cardDescription}</p>

      </div>

      <div className={styles.footer}>
        <button className={styles.action} type="button" onClick={handleAccessCatalogClick} disabled={isTransitioning}>
          Acessar Catálogo
          <ArrowRight size={16} />
        </button>
      </div>

      <div className={styles.expandedActions} aria-hidden={!isSelected}>
        <button className={styles.expandedAction} type="button" onClick={handleAccessCatalogClick} disabled={isTransitioning}>
          <ArrowRight size={16} />
          Acessar Catálogo
        </button>
        <button className={styles.expandedAction} type="button" onClick={(event) => event.stopPropagation()} disabled={isTransitioning}>
          <Share2 size={16} />
          Compartilhar Catálogo
        </button>
        <button className={styles.expandedAction} type="button" onClick={(event) => event.stopPropagation()} disabled={isTransitioning}>
          <MessageCircle size={16} />
          Falar com Consultor
        </button>
      </div>
    </article>
  )
}

export default SegmentCarouselCard
