import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './HomeHero.module.css'

function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.shapeOne} />
        <span className={styles.shapeTwo} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>Catálogos Interativos Santorini</p>
        <h1 className={styles.title}>Soluções profissionais por segmento</h1>
        <p className={styles.subtitle}>
          A Home funciona como uma vitrine premium para acessar catálogos por área de atuação, com leitura clara, apresentação corporativa e base pronta para expansão.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryAction} to="#segmentos">
            Ver catálogos
            <ArrowRight size={18} />
          </Link>
          <button className={styles.secondaryAction} type="button">
            <MessageCircle size={18} />
            Falar com consultor
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
