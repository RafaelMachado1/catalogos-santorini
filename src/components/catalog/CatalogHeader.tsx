import { useEffect, useState } from 'react'
import { ArrowLeft, Camera, Globe, Menu, Share2, ShoppingCart, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './CatalogHeader.module.css'

type CatalogHeaderProps = {
  budgetCount?: number
}

function CatalogHeader({ budgetCount = 0 }: CatalogHeaderProps) {
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    let previousScrollY = window.scrollY
    let ticking = false

    function updateHeaderVisibility() {
      const currentScrollY = window.scrollY
      const scrollingDown = currentScrollY > previousScrollY

      setHidden(scrollingDown && currentScrollY > 96)
      previousScrollY = Math.max(currentScrollY, 0)
      ticking = false
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeaderVisibility)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ''}`}>
      <a className={styles.brand} href='#catalog-top' aria-label='Voltar ao topo do catálogo hospitalar Santorini'>
        <img className={styles.brandLogo} src='/assets/catalogos/hospitalar/logos/logo-hospitalar-teal.png' alt='Santorini' />
      </a>

      <button
        className={styles.menuToggle}
        type='button'
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        aria-controls='catalog-header-menu'
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        id='catalog-header-menu'
        className={`${styles.actions} ${isMenuOpen ? styles.actionsOpen : ''}`}
        aria-label='Ações do catálogo'
      >
        <Link className={styles.backLink} to='/'>
          <ArrowLeft size={16} />
          Home
        </Link>
        <button className={`${styles.iconButton} ${styles.budgetButton}`} type='button' aria-label={`Orçamento ${budgetCount}`}>
          <ShoppingCart size={16} />
          Orçamento
          <span className={styles.badge}>{budgetCount}</span>
        </button>
        <button className={styles.iconButton} type='button' aria-disabled='true'>
          <Share2 size={16} />
          Compartilhar
        </button>
        <button className={styles.iconButton} type='button' aria-disabled='true'>
          <Camera size={16} />
          Instagram
        </button>
        <button className={styles.iconButton} type='button' aria-disabled='true'>
          <Globe size={16} />
          Site
        </button>
      </nav>
    </header>
  )
}

export default CatalogHeader
