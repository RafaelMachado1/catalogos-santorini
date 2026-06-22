import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TemporaryCard from '../components/ui/TemporaryCard'
import { segments } from '../data/segments'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './HomePage.module.css'

function HomePage() {
  useEffect(() => {
    applyThemeToDocument(getThemeById('home'))
  }, [])

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Sprint 02</p>
        <h1 className={styles.title}>Catálogos Santorini</h1>
        <p className={styles.subtitle}>
          Vitrine premium de catálogos por segmento, com temas visuais prontos para a evolução da Home e das páginas de catálogo.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="/catalogo/hospitalar">
            Abrir catálogo hospitalar
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <section aria-label="Segmentos" className={styles.gridSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Segmentos temporários</h2>
          <p className={styles.sectionDescription}>
            Estrutura inicial com dados mockados, já vinculada aos temas visuais do projeto.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map((segment) => {
            const theme = getThemeById(segment.themeId)

            return (
              <TemporaryCard
                key={segment.id}
                title={segment.title}
                description={segment.description}
                badge={theme.name}
                footer={
                  <div className={styles.cardFooter}>
                    <span className={styles.cardMeta}>Status: {segment.status}</span>
                    <span className={styles.cardSlug}>/{segment.slug}</span>
                  </div>
                }
              />
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default HomePage
