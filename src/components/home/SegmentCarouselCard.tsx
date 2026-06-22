import { ArrowRight, MessageCircle, Share2, X } from 'lucide-react'
import { Link } from 'react-router-dom'
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
  offset: number
  onHover: (segment: Segment) => void
  onSelect: (segment: Segment) => void
  onClose: () => void
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
      '--card-x': offset > 0 ? '32%' : '-32%',
      '--card-scale': '0.88',
      '--card-opacity': '0.7',
      '--card-blur': '0.5px',
      '--card-z': '3',
      '--card-pointer': 'none',
      '--card-hover-scale': '0.88',
      '--card-hover-z': '3',
    } as CSSProperties
  }

  if (distance === 2) {
    return {
      '--card-x': offset > 0 ? '58%' : '-58%',
      '--card-scale': '0.78',
      '--card-opacity': '0.58',
      '--card-blur': '1px',
      '--card-z': '2',
      '--card-pointer': 'none',
      '--card-hover-scale': '0.78',
      '--card-hover-z': '2',
    } as CSSProperties
  }

  return {
    '--card-x': offset > 0 ? '82%' : '-82%',
    '--card-scale': '0.72',
    '--card-opacity': '0',
    '--card-blur': '1.5px',
    '--card-z': '1',
    '--card-pointer': 'none',
    '--card-hover-scale': '0.72',
    '--card-hover-z': '1',
  } as CSSProperties
}

function SegmentCarouselCard({
  segment,
  isActive,
  isFrontCard,
  isDimmed,
  isHovered,
  isSelected,
  offset,
  onHover,
  onSelect,
  onClose,
}: SegmentCarouselCardProps) {
  const theme = getThemeById(segment.themeId)
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
  const canInteract = isFrontCard || isSelected

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
    onClose()
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
      aria-hidden={!isActive && Math.abs(offset) > 2}
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

      <div className={styles.visual}>
        <span className={styles.badge}>{theme.name}</span>
        <span className={styles.slug}>/{segment.slug}</span>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{segment.shortTitle || segment.title}</h3>
        <p className={styles.subtitle}>{segment.subtitle}</p>
        <p className={styles.description}>{segment.description}</p>

        <ul className={styles.tags} aria-label={`Tags de ${segment.title}`}>
          {segment.tags.map((tag) => (
            <li key={tag} className={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={styles.metaRow}>
          <span className={styles.status}>Status: {segment.status}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <Link className={styles.action} to={segment.catalogPath} onClick={(event) => event.stopPropagation()}>
          Acessar Catálogo
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className={styles.expandedActions} aria-hidden={!isSelected}>
        <Link className={styles.expandedAction} to={segment.catalogPath} onClick={(event) => event.stopPropagation()}>
          <ArrowRight size={16} />
          Acessar Catálogo
        </Link>
        <button className={styles.expandedAction} type="button" onClick={(event) => event.stopPropagation()}>
          <Share2 size={16} />
          Compartilhar Catálogo
        </button>
        <button className={styles.expandedAction} type="button" onClick={(event) => event.stopPropagation()}>
          <MessageCircle size={16} />
          Falar com Consultor
        </button>
      </div>
    </article>
  )
}

export default SegmentCarouselCard
