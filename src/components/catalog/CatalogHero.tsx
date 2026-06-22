import { MessageCircle, Send } from 'lucide-react'
import type { Catalog, Segment } from '../../types/catalog'
import styles from './CatalogHero.module.css'

type CatalogHeroProps = {
  catalog?: Catalog
  segment: Segment
}

function CatalogHero({ catalog, segment }: CatalogHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Catálogo interativo Santorini</p>
        <h1 className={styles.title}>{catalog?.title ?? segment.title}</h1>
        <p className={styles.subtitle}>{catalog?.subtitle ?? segment.subtitle}</p>
        <p className={styles.description}>{catalog?.description ?? segment.description}</p>

        <ul className={styles.tags} aria-label={`Tags de ${segment.title}`}>
          {segment.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className={styles.meta}>
          <span>Status: {catalog?.status ?? segment.status}</span>
          <span>Segmento: {segment.shortTitle || segment.title}</span>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryAction} type="button">
            <Send size={17} />
            Solicitar orçamento
          </button>
          <button className={styles.secondaryAction} type="button">
            <MessageCircle size={17} />
            Falar com consultor
          </button>
        </div>
      </div>
      <div className={styles.panel} aria-hidden="true">
        <span>{segment.shortTitle || segment.title}</span>
      </div>
    </section>
  )
}

export default CatalogHero
