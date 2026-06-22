import { Camera, Globe, Share2 } from 'lucide-react'
import styles from './HomeHeader.module.css'

function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            S
          </span>
          <div>
            <p className={styles.kicker}>Catálogos Interativos</p>
            <p className={styles.brandName}>Santorini</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionButton} type="button">
            <Share2 size={16} />
            Compartilhar catálogo
          </button>
          <button className={styles.actionButton} type="button">
            <Camera size={16} />
            Instagram
          </button>
          <button className={styles.actionButton} type="button">
            <Globe size={16} />
            Site
          </button>
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
