import {
  BadgeCheck,
  ChefHat,
  CookingPot,
  FlaskConical,
  Hospital,
  Leaf,
  ShieldCheck,
  Sofa,
  Sparkles,
  SprayCan,
  Utensils,
  WashingMachine,
  Wind,
} from 'lucide-react'
import type {
  Catalog,
  CatalogIndexGroup,
  CatalogIndexItem,
  CatalogSectionGroup,
} from '../../types/catalog'
import styles from './CatalogIndex.module.css'

type CatalogIndexProps = {
  catalog?: Catalog
  groups: CatalogSectionGroup[]
}

type IndexIconName =
  | 'BadgeCheck'
  | 'ChefHat'
  | 'CookingPot'
  | 'FlaskConical'
  | 'Hospital'
  | 'Leaf'
  | 'ShieldCheck'
  | 'Sofa'
  | 'Sparkles'
  | 'SprayCan'
  | 'Utensils'
  | 'WashingMachine'
  | 'Wind'

const fallbackItems: CatalogIndexItem[] = [
  { id: 'fallback-overview', label: 'Visão geral', href: '#catalog-index-title' },
  { id: 'fallback-solutions', label: 'Soluções profissionais', href: '#catalog-index-title' },
  { id: 'fallback-differentials', label: 'Diferenciais Santorini', href: '#catalog-index-title' },
  { id: 'fallback-quote', label: 'Orçamento', href: '#catalog-index-title' },
]

const icons = {
  BadgeCheck,
  ChefHat,
  CookingPot,
  FlaskConical,
  Hospital,
  Leaf,
  ShieldCheck,
  Sofa,
  Sparkles,
  SprayCan,
  Utensils,
  WashingMachine,
  Wind,
}

const visualLabels: Record<string, string> = {
  'nav-estofados-superficies': 'Limpadores de Estofados',
  'nav-brilho-inox-polidores': 'Itens Especiais',
  'nav-limpeza-sanitarios': 'Sanitários e Higienização',
  'nav-detergentes-desinfetantes-food-service': 'Detergentes e Desinfetantes',
  'nav-maquina-lavar-loucas': 'Máquinas de Lavar Louças',
}

const iconByItemId: Record<string, IndexIconName> = {
  'nav-hospitalar': 'Hospital',
  'nav-food-service': 'ChefHat',
  'nav-desinfetantes-hospitalares': 'ShieldCheck',
  'nav-laboratorios': 'FlaskConical',
  'nav-odorizadores-neutralizadores': 'Wind',
  'nav-limpadores-detergentes': 'SprayCan',
  'nav-limpeza-sanitarios': 'BadgeCheck',
  'nav-estofados-superficies': 'Sofa',
  'nav-brilho-inox-polidores': 'Sparkles',
  'nav-detergentes-desinfetantes-food-service': 'Utensils',
  'nav-tabuas-polietileno': 'CookingPot',
  'nav-loucas-utensilios': 'Utensils',
  'nav-desincrustante-grill': 'CookingPot',
  'nav-maquina-lavar-loucas': 'WashingMachine',
  'nav-sanitizacao-hortifruticolas': 'Leaf',
  'nav-superficies-nao-lavaveis': 'SprayCan',
  'nav-diferenciais': 'ShieldCheck',
}

function getDisplayLabel(item: CatalogIndexItem) {
  return visualLabels[item.id] ?? item.label
}

function getIcon(item: CatalogIndexItem) {
  return icons[iconByItemId[item.id] ?? 'Sparkles']
}

function findIndexGroup(indexGroups: CatalogIndexGroup[], id: string) {
  return indexGroups.find((group) => group.id === id)
}

function MainButton({ item }: { item: CatalogIndexItem }) {
  const Icon = getIcon(item)
  const foodService = item.variant === 'food-service'

  return (
    <a className={`${styles.mainButton} ${foodService ? styles.foodService : ''}`} href={item.href}>
      <Icon size={24} />
      <span>{getDisplayLabel(item)}</span>
    </a>
  )
}

function IndexCard({ item }: { item: CatalogIndexItem }) {
  const Icon = getIcon(item)
  const foodService = item.variant === 'food-service'

  return (
    <a className={`${styles.card} ${foodService ? styles.foodService : ''}`} href={item.href}>
      <Icon size={30} />
      <span>{getDisplayLabel(item)}</span>
    </a>
  )
}

function CatalogIndex({ catalog, groups }: CatalogIndexProps) {
  const hasRichIndex = catalog?.indexGroups && catalog.indexGroups.length > 0
  const fallbackGroups: CatalogIndexGroup[] = [
    {
      id: 'fallback-index',
      title: 'Navegação do catálogo',
      items:
        groups.length > 0
          ? groups.map((group) => ({ id: group.id, label: group.title, href: `#${group.id}` }))
          : fallbackItems,
    },
  ]
  const indexGroups: CatalogIndexGroup[] = hasRichIndex ? catalog.indexGroups ?? fallbackGroups : fallbackGroups
  const mainGroup = findIndexGroup(indexGroups, 'index-main') ?? indexGroups[0]
  const hospitalarGroup = findIndexGroup(indexGroups, 'index-hospitalar')
  const foodServiceGroup = findIndexGroup(indexGroups, 'index-food-service')
  const extraGroup = findIndexGroup(indexGroups, 'index-extra')

  return (
    <section className={styles.index} aria-labelledby="catalog-index-title">
      <div className={styles.header}>
        <p>Índice visual</p>
        <h2 id="catalog-index-title">Navegue pelas soluções hospitalares</h2>
        <span>Selecione uma categoria para navegar pelas soluções hospitalares.</span>
      </div>

      <div className={styles.mainButtons}>
        {mainGroup.items.map((item) => (
          <MainButton key={item.id} item={item} />
        ))}
      </div>

      {hospitalarGroup ? (
        <div className={styles.group}>
          <h3>Navegue pelas soluções hospitalares</h3>
          <div className={styles.cardGrid}>
            {hospitalarGroup.items.map((item) => (
              <IndexCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      {foodServiceGroup ? (
        <div className={`${styles.group} ${styles.foodServiceGroup}`}>
          <h3>Navegue pelas soluções Food Service</h3>
          <div className={styles.cardGrid}>
            {foodServiceGroup.items.map((item) => (
              <IndexCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : null}

      {extraGroup ? (
        <div className={styles.extraGroup}>
          <h3>Diferenciais Santorini</h3>
          {extraGroup.items.map((item) => (
            <IndexCard key={item.id} item={item} />
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default CatalogIndex
