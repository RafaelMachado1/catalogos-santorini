import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import TemporaryCard from '../components/ui/TemporaryCard'
import { segments } from '../data/segments'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Sprint 01</p>
        <h1 className={styles.title}>Catálogos Santorini</h1>
        <p className={styles.subtitle}>
          Vitrine premium de catálogos por segmento, preparada para evoluir para uma experiência editorial e comercial mais robusta.
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
            Estrutura inicial com dados mockados para validar navegação, layout e base de conteúdo.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map((segment) => (
            <TemporaryCard
              key={segment.slug}
              title={segment.title}
              description={segment.description}
              badge={segment.accent}
              footer={<span className={styles.cardSlug}>/{segment.slug}</span>}
            />
          ))}
        </div>
      </section>
    </section>
  )
}

export default HomePage
