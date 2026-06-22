import { useEffect } from 'react'
import HomeFooter from '../components/home/HomeFooter'
import HomeHeader from '../components/home/HomeHeader'
import HomeHero from '../components/home/HomeHero'
import DifferentialsSection from '../components/home/DifferentialsSection'
import SegmentCarousel from '../components/home/SegmentCarousel'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './HomePage.module.css'

function HomePage() {
  useEffect(() => {
    applyThemeToDocument(getThemeById('home'))
  }, [])

  return (
    <div className={styles.page}>
      <HomeHeader />
      <main className={styles.main}>
        <HomeHero />
        <SegmentCarousel />
        <DifferentialsSection />
      </main>
      <HomeFooter />
    </div>
  )
}

export default HomePage
