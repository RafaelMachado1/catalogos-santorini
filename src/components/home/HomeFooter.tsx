import styles from './HomeFooter.module.css'

function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>Santorini</p>
          <p className={styles.copy}>
            Estrutura institucional para catálogos comerciais interativos, preparada para evolução de produto e conteúdo.
          </p>
        </div>

        <div className={styles.links}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href="https://example.com" target="_blank" rel="noreferrer">
            Site
          </a>
        </div>

        <div className={styles.meta}>
          <p>Endereço temporário: Avenida Santorini, 100 - São Paulo/SP</p>
          <p>Os catálogos são materiais comerciais interativos.</p>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
