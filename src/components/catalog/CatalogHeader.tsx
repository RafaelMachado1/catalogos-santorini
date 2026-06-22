import { ArrowLeft, Download, Printer, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Segment } from '../../types/catalog'
import styles from './CatalogHeader.module.css'

type CatalogHeaderProps = {
  segment?: Segment
}

function CatalogHeader({ segment }: CatalogHeaderProps) {
  return (
    <header className={styles.header}>
      <Link className={styles.backLink} to="/">
        <ArrowLeft size={17} />
        Voltar para Home
      </Link>

      <div className={styles.brand} aria-label="Santorini">
        <span>Santorini</span>
        {segment ? <small>{segment.shortTitle || segment.title}</small> : null}
      </div>

      <nav className={styles.actions} aria-label="Ações do catálogo">
        <button className={styles.iconButton} type="button">
          <Share2 size={16} />
          Compartilhar
        </button>
        <button className={styles.iconButton} type="button">
          <Download size={16} />
          Baixar Catálogo
        </button>
        <button className={styles.iconButton} type="button">
          <Printer size={16} />
          Imprimir Catálogo
        </button>
      </nav>
    </header>
  )
}

export default CatalogHeader
