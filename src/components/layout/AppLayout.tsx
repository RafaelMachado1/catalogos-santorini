import { Outlet } from 'react-router-dom'
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.shell}>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
