import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CatalogFooter.module.css'

function CatalogFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <strong>Santorini</strong>
        <p>Catálogos comerciais interativos para orientar compras profissionais por segmento.</p>
      </div>

      <div className={styles.links}>
        <a href="#instagram">Instagram</a>
        <a href="#whatsapp">WhatsApp</a>
        <a href="#site">Site</a>
        <Link to="/">
          <ArrowLeft size={16} />
          Voltar para Home
        </Link>
      </div>
    </footer>
  )
}

export default CatalogFooter
