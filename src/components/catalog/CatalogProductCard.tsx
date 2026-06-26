import { CirclePlay, FileText, Minus, Plus } from 'lucide-react'
import type { CatalogAction, CatalogSectionItem } from '../../types/catalog'
import styles from './CatalogProductCard.module.css'

type CatalogProductCardProps = {
  item: CatalogSectionItem
  tone?: 'hospitalar' | 'food-service'
  onAddToBudget?: () => void
  onRemoveFromBudget?: () => void
}

function getIcon(action: CatalogAction) {
  if (action.variant === 'video') {
    return <CirclePlay size={15} />
  }

  if (action.id.includes('remove')) {
    return <Minus size={15} />
  }

  if (action.id.includes('technical')) {
    return <FileText size={15} />
  }

  return <Plus size={15} />
}

function CatalogProductCard({
  item,
  tone = 'hospitalar',
  onAddToBudget,
  onRemoveFromBudget,
}: CatalogProductCardProps) {
  const baseActions = item.actions ?? (item.action ? [item.action] : [])
  const actions = [
    ...baseActions,
    {
      id: `${item.id}-how-to-use`,
      label: 'Como usar',
      variant: 'video',
      disabled: false,
    } satisfies CatalogAction,
  ]

  function handleHowToUseClick() {
    console.info('Vídeo em breve para:', item.title)
  }

  function handleActionClick(action: CatalogAction) {
    if (action.variant === 'video') {
      handleHowToUseClick()
      return
    }

    if (action.id.includes('add')) {
      onAddToBudget?.()
      return
    }

    if (action.id.includes('remove')) {
      onRemoveFromBudget?.()
    }
  }

  return (
    <article className={`${styles.card} ${tone === 'food-service' ? styles.foodService : ''}`}>
      <div className={styles.media}>
        {item.image ? <img src={item.image} alt={item.imageAlt ?? item.title} loading='lazy' /> : null}
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          {item.metadata?.category ? <span className={styles.category}>{item.metadata.category}</span> : null}
          <h3>{item.title}</h3>
          {item.description ? <p>{item.description}</p> : null}
        </div>

        <div className={styles.actions}>
          {actions.map((action) => (
            <button
              key={action.id}
              className={`${styles.action} ${styles[action.variant]}`}
              type='button'
              aria-disabled={action.disabled ? 'true' : undefined}
              data-ready={action.variant === 'video' && item.videoUrl ? 'true' : 'false'}
              title={action.variant === 'video' && !item.videoUrl ? 'Vídeo em breve' : undefined}
              onClick={() => handleActionClick(action)}
            >
              {getIcon(action)}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}

export default CatalogProductCard
