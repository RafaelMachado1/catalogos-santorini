import {
  BadgeCheck,
  ClipboardCheck,
  Droplets,
  FileCheck,
  GraduationCap,
  CircleChevronDown,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import type { Catalog, CatalogHeroHighlight, Segment } from '../../types/catalog'
import styles from './CatalogHero.module.css'

type CatalogHeroProps = {
  catalog?: Catalog
  segment: Segment
}

const icons = {
  BadgeCheck,
  ClipboardCheck,
  Droplets,
  FileCheck,
  GraduationCap,
  ShieldCheck,
}

function Highlight({ item }: { item: CatalogHeroHighlight }) {
  const iconKey = item.icon as keyof typeof icons | undefined
  const Icon = iconKey ? icons[iconKey] ?? Sparkles : Sparkles

  return (
    <li>
      <Icon size={16} />
      {item.label}
    </li>
  )
}

function CatalogHero({ catalog, segment }: CatalogHeroProps) {
  const tags = catalog?.tags && catalog.tags.length > 0 ? catalog.tags : segment.tags
  const heroTitle = catalog?.title ?? segment.title
  const shouldKeepHospitalarLineTogether = heroTitle === "Soluções Profissionais Linha Hospitalar"

  return (
    <section className={styles.hero} id='catalog-top'>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Catálogo Hospitalar Santorini</p>
        <h1
          className={shouldKeepHospitalarLineTogether ? [styles.title, styles.titleWithNoWrap].join(' ') : styles.title}
        >
          {shouldKeepHospitalarLineTogether ? (
            <>
              Soluções Profissionais <span className={styles.noWrap}>Linha Hospitalar</span>
            </>
          ) : (
            heroTitle
          )}
        </h1>
        <p className={styles.subtitle}>{catalog?.subtitle ?? segment.subtitle}</p>
        <p className={styles.description}>{catalog?.description ?? segment.description}</p>

        {catalog?.heroHighlights && catalog.heroHighlights.length > 0 ? (
          <ul className={styles.highlights} aria-label='Diferenciais da linha hospitalar'>
            {catalog.heroHighlights.map((item) => (
              <Highlight key={item.id} item={item} />
            ))}
          </ul>
        ) : (
          <ul className={styles.tags} aria-label={`Tags de ${segment.title}`}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.media}>
        {catalog?.heroImage ? (
          <img src={catalog.heroImage} alt={catalog.heroImageAlt ?? catalog.title} />
        ) : (
          <span>{segment.shortTitle || segment.title}</span>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.primaryAction} type='button' aria-disabled='true'>
          <MessageCircle size={20} />
          Fale com um Consultor
        </button>
      </div>

      <a className={styles.scrollCue} href='#catalog-index-title' aria-label='Continue explorando'>
        <CircleChevronDown size={22} />
      </a>
    </section>
  )
}

export default CatalogHero
