import { getAllSegments } from '../../utils/segments'
import SegmentPreviewCard from './SegmentPreviewCard'
import styles from './SegmentPreviewSection.module.css'

function SegmentPreviewSection() {
  const segments = getAllSegments()

  return (
    <section id="segmentos" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Segmentos</p>
        <h2 className={styles.title}>Prévia dos 13 segmentos oficiais</h2>
        <p className={styles.subtitle}>
          Estrutura temporária em grid responsivo, pronta para evoluir para carrossel e experiências mais ricas no futuro.
        </p>
      </div>

      <div className={styles.grid}>
        {segments.map((segment) => (
          <SegmentPreviewCard key={segment.id} segment={segment} />
        ))}
      </div>
    </section>
  )
}

export default SegmentPreviewSection
