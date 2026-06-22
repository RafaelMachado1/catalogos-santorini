import { MessageCircle } from 'lucide-react'
import type { Segment } from '../../types/catalog'
import styles from './CatalogDevelopmentState.module.css'

type CatalogDevelopmentStateProps = {
  segment?: Segment
  variant?: 'development' | 'not-found'
}

function CatalogDevelopmentState({ segment, variant = 'development' }: CatalogDevelopmentStateProps) {
  const isNotFound = variant === 'not-found'

  return (
    <section className={styles.state}>
      <p className={styles.eyebrow}>{isNotFound ? 'Catálogo' : segment?.title ?? 'Catálogo'}</p>
      <h2>{isNotFound ? 'Catálogo não encontrado' : 'Catálogo em desenvolvimento'}</h2>
      <p>
        {isNotFound
          ? 'O slug informado não corresponde a nenhum segmento oficial.'
          : 'Estamos preparando uma experiência completa para este segmento.'}
      </p>
      {!isNotFound ? (
        <p>Enquanto isso, fale com um consultor Santorini para receber orientação personalizada.</p>
      ) : null}
      <button className={styles.action} type="button">
        <MessageCircle size={17} />
        Falar com consultor Santorini
      </button>
    </section>
  )
}

export default CatalogDevelopmentState
