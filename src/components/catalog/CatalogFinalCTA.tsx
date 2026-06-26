import { ShoppingCart } from 'lucide-react'
import styles from './CatalogFinalCTA.module.css'

type CatalogFinalCTAProps = {
  onFinishBudget?: () => void
}

function CatalogFinalCTA({ onFinishBudget }: CatalogFinalCTAProps) {
  return (
    <section className={styles.cta} aria-label="Concluir orçamento">
      <button type="button" onClick={onFinishBudget} aria-label="Concluir Orçamento">
        <ShoppingCart size={18} />
        Concluir Orçamento
      </button>
    </section>
  )
}

export default CatalogFinalCTA
