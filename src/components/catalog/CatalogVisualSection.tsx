import { CircleChevronDown } from 'lucide-react'
import type { CatalogSection } from '../../types/catalog'
import CatalogProductCard from './CatalogProductCard'
import SectionBackToTop from './SectionBackToTop'
import styles from './CatalogVisualSection.module.css'

const hospitalarSectionLogoSrc = '/assets/catalogos/hospitalar/logos/logo-hospitalar-teal.png'
const foodServiceSectionLogoSrc = '/assets/catalogos/hospitalar/logos/logo-food-service.png'

type CatalogVisualSectionProps = {
  section: CatalogSection
  sectionIndex?: number
  nextSectionId?: string
  tone?: 'hospitalar' | 'food-service'
  onAddToBudget?: () => void
  onRemoveFromBudget?: () => void
}

function CatalogVisualSection({
  section,
  sectionIndex = 0,
  nextSectionId,
  tone = 'hospitalar',
  onAddToBudget,
  onRemoveFromBudget,
}: CatalogVisualSectionProps) {
  const reverse = sectionIndex % 2 === 1
  const eyebrow = tone === 'food-service' ? 'Food Service Hospitalar' : 'Linha Hospitalar'
  const splitFeature = section.layoutVariant === 'split-feature-left-image' || section.layoutVariant === 'split-feature-right-image'
  const splitRightImage = section.layoutVariant === 'split-feature-right-image'
  const splitSingleProduct = splitFeature && section.items.length === 1
  const imageSide = splitRightImage ? 'right' : 'left'
  const sectionLogoSrc = tone === 'food-service' ? foodServiceSectionLogoSrc : hospitalarSectionLogoSrc

  function renderHeading(className = styles.heading) {
    return (
      <div className={className}>
        <img className={styles.sectionLogo} src={section.sectionLogo ?? sectionLogoSrc} alt='Santorini' />
        <span>{eyebrow}</span>
        <h2 id={`${section.id}-title`}>{section.title}</h2>
        {section.description ? <p>{section.description}</p> : null}
      </div>
    )
  }

  return (
    <section
      id={section.id}
      className={`${styles.section} ${tone === 'food-service' ? styles.foodService : ''} ${splitFeature ? styles.splitSection : ''}`}
      aria-labelledby={`${section.id}-title`}
    >
      {splitFeature ? (
        <div className={styles.specialLayout} data-image-side={imageSide}>
          {section.image ? (
            <div className={styles.specialMedia}>
              <img
                className={styles.sectionImage}
                src={section.image}
                alt={section.imageAlt ?? section.title}
                loading='lazy'
                style={{ objectPosition: section.imageObjectPosition ?? 'center' }}
              />
            </div>
          ) : null}

          <div className={styles.specialContent}>
            {renderHeading(styles.specialHeading)}

            {section.image ? (
              <div className={styles.specialMobileMedia}>
                <img
                  className={styles.sectionImage}
                  src={section.image}
                  alt={section.imageAlt ?? section.title}
                  loading='lazy'
                  style={{ objectPosition: section.imageObjectPosition ?? 'center' }}
                />
              </div>
            ) : null}

            <div className={`${styles.specialProductsGrid} ${splitSingleProduct ? styles.singleProductGrid : ''}`}>
              {section.items.map((item) => (
                <CatalogProductCard
                  key={item.id}
                  item={item}
                  tone={tone}
                  onAddToBudget={onAddToBudget}
                  onRemoveFromBudget={onRemoveFromBudget}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={`${styles.visualHeader} ${reverse ? styles.reverse : ''}`}>
            {renderHeading()}

            {section.image ? (
              <div className={styles.imageFrame}>
                <img
                  className={styles.sectionImage}
                  src={section.image}
                  alt={section.imageAlt ?? section.title}
                  loading='lazy'
                  style={{ objectPosition: section.imageObjectPosition ?? 'center' }}
                />
              </div>
            ) : null}
          </div>

          <div className={styles.products}>
            {section.items.map((item) => (
              <CatalogProductCard
                key={item.id}
                item={item}
                tone={tone}
                onAddToBudget={onAddToBudget}
                onRemoveFromBudget={onRemoveFromBudget}
              />
            ))}
          </div>
        </>
      )}

      <div className={styles.sectionFooter}>
        {nextSectionId ? (
          <a
            className={`${styles.scrollCue} ${tone === 'food-service' ? styles.foodServiceCue : ''}`}
            href={`#${nextSectionId}`}
            aria-label='Continuar explorando'
          >
            <CircleChevronDown size={20} />
          </a>
        ) : null}

        <SectionBackToTop tone={tone} />
      </div>
    </section>
  )
}

export default CatalogVisualSection
