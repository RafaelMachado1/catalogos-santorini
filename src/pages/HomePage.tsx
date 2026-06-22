import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import TemporaryCard from '../components/ui/TemporaryCard'
import { getAllSegments, sortSegmentsByOrder } from '../utils/segments'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './HomePage.module.css'

function HomePage() {
  useEffect(() => {
    applyThemeToDocument(getThemeById('home'))
  }, [])

  const orderedSegments = sortSegmentsByOrder(getAllSegments())

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Sprint 03</p>
        <h1 className={styles.title}>Catálogos Santorini</h1>
        <p className={styles.subtitle}>
          Base oficial dos segmentos com dados consolidados para a Home futura, o catálogo dinâmico e a evolução visual por segmento.
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
          <h2 className={styles.sectionTitle}>Segmentos oficiais</h2>
          <p className={styles.sectionDescription}>
            Dados ordenados por prioridade editorial, com tema, status, tags e caminhos preparados para a próxima etapa.
          </p>
        </div>

        <div className={styles.grid}>
          {orderedSegments.map((segment) => {
            const theme = getThemeById(segment.themeId)

            return (
              <TemporaryCard
                key={segment.id}
                title={segment.title}
                subtitle={segment.subtitle}
                description={segment.description}
                badge={theme.name}
                tags={segment.tags}
                meta={
                  <>
                    <span className={styles.cardMeta}>Status: {segment.status}</span>
                    <span className={styles.cardMeta}>Tema: {theme.name}</span>
                  </>
                }
                footer={
                  <div className={styles.cardFooter}>
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
