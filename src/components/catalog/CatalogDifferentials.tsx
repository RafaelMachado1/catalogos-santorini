import {
  ClipboardCheck,
  Droplets,
  FileCheck,
  GraduationCap,
  Headset,
  Sparkles,
  TrendingDown,
} from 'lucide-react'
import type { CatalogSectionGroup, CatalogSectionItem } from '../../types/catalog'
import styles from './CatalogDifferentials.module.css'

type CatalogDifferentialsProps = {
  group: CatalogSectionGroup
}

const icons = {
  ClipboardCheck,
  Droplets,
  FileCheck,
  GraduationCap,
  Headset,
  TrendingDown,
}

function DifferentialCard({ item }: { item: CatalogSectionItem }) {
  const iconKey = item.metadata?.icon as keyof typeof icons | undefined
  const Icon = iconKey ? icons[iconKey] ?? Sparkles : Sparkles

  return (
    <article className={styles.card}>
      <span>
        <Icon size={20} />
      </span>
      <h3>{item.title}</h3>
      {item.description ? <p>{item.description}</p> : null}
    </article>
  )
}

function CatalogDifferentials({ group }: CatalogDifferentialsProps) {
  const items = group.sections.flatMap((section) => section.items)

  return (
    <section id={group.id} className={styles.section} aria-labelledby={`${group.id}-title`}>
      <div className={styles.header}>
        <img
          className={styles.sectionLogo}
          src='/assets/catalogos/hospitalar/logos/logo-hospitalar-teal.png'
          alt='Santorini'
        />
        <p>{group.eyebrow ?? 'Diferenciais'}</p>
        <h2 id={`${group.id}-title`}>{group.title}</h2>
        {group.description ? <span>{group.description}</span> : null}
      </div>

      <div className={styles.layout}>
        {group.image ? (
          <div className={styles.media}>
            <img src={group.image} alt={group.imageAlt ?? group.title} loading="lazy" />
          </div>
        ) : null}

        <div className={styles.grid}>
          {items.map((item) => (
            <DifferentialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CatalogDifferentials
