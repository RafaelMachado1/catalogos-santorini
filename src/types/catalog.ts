export type CatalogStatus = 'available' | 'development' | 'planned'

export type SegmentSlug =
  | 'hospitalar'
  | 'restaurantes'
  | 'hotelaria'
  | 'cervejarias'
  | 'academias'
  | 'supermercados'
  | 'shopping-centers'
  | 'industria-alimentos-bebidas'
  | 'educacao'
  | 'higiene-pessoal'
  | 'equipamentos-acessorios'
  | 'tratamento-pisos'
  | 'lavanderia-industrial'

export type SegmentCoverImages = {
  primary: string
  secondary: string
  alt: string
}

export type Segment = {
  id: string
  slug: SegmentSlug
  title: string
  shortTitle: string
  description: string
  subtitle: string
  themeId: string
  status: CatalogStatus
  coverImages: SegmentCoverImages
  tags: string[]
  order: number
  catalogPath: string
}

export type CatalogSummary = {
  slug: SegmentSlug
  title: string
}

export type CatalogAvailability = 'available' | 'development' | 'planned'

export type CatalogAction = {
  id: string
  label: string
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'video'
  href?: string
  disabled?: boolean
}

export type CatalogHeroHighlight = {
  id: string
  label: string
  icon?: string
}

export type CatalogIndexItem = {
  id: string
  label: string
  href: string
  variant?: 'hospitalar' | 'food-service' | 'neutral'
}

export type CatalogIndexGroup = {
  id: string
  title: string
  items: CatalogIndexItem[]
  variant?: 'hospitalar' | 'food-service' | 'neutral'
}

export type CatalogSectionItem = {
  id: string
  title: string
  description?: string
  type: 'product' | 'fds' | 'video' | 'image' | 'cta' | 'placeholder'
  image?: string
  imageAlt?: string
  videoUrl?: string
  fileUrl?: string
  action?: CatalogAction
  actions?: CatalogAction[]
  metadata?: Record<string, string>
}

export type CatalogSection = {
  id: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
  imageObjectPosition?: string
  sectionLogo?: string
  layoutVariant?: 'split-feature-left-image' | 'split-feature-right-image'
  items: CatalogSectionItem[]
  actions?: CatalogAction[]
}

export type CatalogSectionGroup = {
  id: string
  title: string
  description?: string
  eyebrow?: string
  image?: string
  imageAlt?: string
  variant?: 'hospitalar' | 'food-service' | 'differentials' | 'cta'
  sections: CatalogSection[]
}

export type CatalogFinalCta = {
  title: string
  description: string
  actions: CatalogAction[]
}

export type Catalog = {
  id: string
  slug: SegmentSlug
  segmentId: string
  title: string
  subtitle: string
  description: string
  availability: CatalogAvailability
  status: CatalogStatus
  tags: string[]
  actions: CatalogAction[]
  heroImage?: string
  heroImageAlt?: string
  heroHighlights?: CatalogHeroHighlight[]
  indexGroups?: CatalogIndexGroup[]
  finalCta?: CatalogFinalCta
  sectionGroups: CatalogSectionGroup[]
  updatedAt?: string
}
