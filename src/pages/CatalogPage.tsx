import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSegmentBySlug } from '../utils/segments'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './CatalogPage.module.css'

function CatalogPage() {
  const { slug } = useParams()
  const currentSegment = getSegmentBySlug(slug)
  const theme = currentSegment ? getThemeById(currentSegment.themeId) : getThemeById('home')

  useEffect(() => {
    applyThemeToDocument(theme)
  }, [theme])

  if (!currentSegment) {
    return (
      <section className={styles.page}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Catálogo</p>
          <h1 className={styles.title}>Catálogo não encontrado</h1>
          <p className={styles.subtitle}>O slug informado não corresponde a nenhum segmento oficial.</p>
          <Link className={styles.backLink} to="/">
            <ArrowLeft size={18} />
            Voltar para a Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Catálogo</p>
        <h1 className={styles.title}>{currentSegment.title}</h1>
        <p className={styles.subtitle}>{currentSegment.subtitle}</p>
        <p className={styles.meta}>Status: <strong>{currentSegment.status}</strong></p>
        <p className={styles.meta}>{currentSegment.description}</p>
        <p className={styles.meta}>Tema vinculado: <strong>{theme.name}</strong></p>
        <p className={styles.meta}>Catálogo em desenvolvimento</p>

        <Link className={styles.backLink} to="/">
          <ArrowLeft size={18} />
          Voltar para a Home
        </Link>
      </div>
    </section>
  )
}

export default CatalogPage
