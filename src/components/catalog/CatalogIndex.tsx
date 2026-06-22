import type { CatalogSectionGroup } from '../../types/catalog'
import styles from './CatalogIndex.module.css'

type CatalogIndexProps = {
  groups: CatalogSectionGroup[]
}

const fallbackItems = ['Visão geral', 'Soluções profissionais', 'Diferenciais Santorini', 'Orçamento']

function CatalogIndex({ groups }: CatalogIndexProps) {
  const items = groups.length > 0 ? groups.map((group) => group.title) : fallbackItems

  return (
    <section className={styles.index} aria-labelledby="catalog-index-title">
      <div>
        <p className={styles.eyebrow}>Índice</p>
        <h2 id="catalog-index-title" className={styles.title}>Navegação do catálogo</h2>
      </div>

      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default CatalogIndex
