import { BookOpenText } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandIcon} aria-hidden="true">
            <BookOpenText size={20} />
          </span>
          <div>
            <p className={styles.kicker}>Catálogos Santorini</p>
            <Link to="/" className={styles.brandLink}>
              Vitrine premium de catálogos por segmento
            </Link>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
