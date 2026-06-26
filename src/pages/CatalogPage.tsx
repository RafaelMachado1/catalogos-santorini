import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CatalogDevelopmentState from '../components/catalog/CatalogDevelopmentState'
import CatalogFinalCTA from '../components/catalog/CatalogFinalCTA'
import CatalogFooter from '../components/catalog/CatalogFooter'
import CatalogHeader from '../components/catalog/CatalogHeader'
import CatalogHero from '../components/catalog/CatalogHero'
import CatalogIndex from '../components/catalog/CatalogIndex'
import CatalogSectionGroup from '../components/catalog/CatalogSectionGroup'
import { homeTheme } from '../data/themes'
import { getCatalogBySlug, getCatalogSections, isCatalogAvailable } from '../utils/catalogs'
import { getSegmentBySlug } from '../utils/segments'
import { applyThemeToDocument, getThemeById } from '../utils/theme'
import styles from './CatalogPage.module.css'

function CatalogPage() {
  const { slug } = useParams()
  const segment = getSegmentBySlug(slug)
  const catalog = getCatalogBySlug(slug)
  const sectionGroups = getCatalogSections(slug)
  const theme = segment ? getThemeById(segment.themeId) : homeTheme
  const available = isCatalogAvailable(slug)
  const [budgetCount, setBudgetCount] = useState(0)

  function handleAddToBudget() {
    setBudgetCount((count) => count + 1)
  }

  function handleRemoveFromBudget() {
    setBudgetCount((count) => Math.max(0, count - 1))
  }

  function handleFinishBudget() {
    console.info('Fluxo de orçamento será implementado em sprint futura')
  }

  useEffect(() => {
    applyThemeToDocument(theme)
  }, [theme])

  if (!segment) {
    return (
      <div className={styles.page}>
        <CatalogHeader />
        <main className={styles.main}>
          <CatalogDevelopmentState variant="not-found" />
        </main>
        <CatalogFooter />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <CatalogHeader budgetCount={budgetCount} />
      <main className={styles.main}>
        <CatalogHero catalog={catalog} segment={segment} />
        <CatalogIndex catalog={catalog} groups={sectionGroups} />
        <CatalogSectionGroup
          groups={sectionGroups}
          onAddToBudget={handleAddToBudget}
          onRemoveFromBudget={handleRemoveFromBudget}
        />
        <CatalogFinalCTA onFinishBudget={handleFinishBudget} />
        {!available ? <CatalogDevelopmentState segment={segment} /> : null}
      </main>
      <CatalogFooter />
    </div>
  )
}

export default CatalogPage
