import { ArrowUp } from 'lucide-react'
import styles from './SectionBackToTop.module.css'

type SectionBackToTopProps = {
  tone?: 'hospitalar' | 'food-service'
}

function SectionBackToTop({ tone = 'hospitalar' }: SectionBackToTopProps) {
  return (
    <a
      className={`${styles.backToTop} ${tone === 'food-service' ? styles.backToTopFood : ''}`}
      href='#catalog-top'
      aria-label='Voltar ao topo do catálogo'
    >
      <ArrowUp size={16} />
      Voltar ao topo
    </a>
  )
}

export default SectionBackToTop
