import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { segments } from '../data/segments'
import styles from './CatalogPage.module.css'

function CatalogPage() {
  const { slug } = useParams()
  const currentSegment = segments.find((segment) => segment.slug === slug)
  const catalogTitle = currentSegment?.title ?? 'Catálogo temporário'

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Catálogo</p>
        <h1 className={styles.title}>{catalogTitle}</h1>
        <p className={styles.subtitle}>Catálogo em desenvolvimento</p>
        <p className={styles.meta}>
          Slug na URL: <strong>{slug ?? 'indefinido'}</strong>
        </p>

        <Link className={styles.backLink} to="/">
          <ArrowLeft size={18} />
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}

export default CatalogPage
