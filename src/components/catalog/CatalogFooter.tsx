import { ArrowLeft, Camera, Globe, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CatalogFooter.module.css'

function CatalogFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainRow}>
        <div className={styles.brand}>
          <strong>Santorini</strong>
          <p>Higiene, limpeza profissional e suporte técnico para operações B2B.</p>
        </div>

        <div className={styles.pills} aria-label="Diferenciais institucionais">
          <span>POPs</span>
          <span>Treinamentos</span>
          <span>Consultoria</span>
          <span>Diluição correta</span>
        </div>

        <div className={styles.links}>
          <a href="#whatsapp" aria-disabled="true">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a href="#instagram" aria-disabled="true">
            <Camera size={16} />
            Instagram
          </a>
          <a href="#site" aria-disabled="true">
            <Globe size={16} />
            Site
          </a>
          <Link to="/">
            <ArrowLeft size={16} />
            Voltar para Home
          </Link>
        </div>
      </div>

      <div className={styles.bottomLine}>
        <span>Catálogo Hospitalar Santorini • Material comercial interativo</span>
      </div>
    </footer>
  )
}

export default CatalogFooter
