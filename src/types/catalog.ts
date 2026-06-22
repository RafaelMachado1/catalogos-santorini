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
  variant: 'primary' | 'secondary' | 'ghost'
  href?: string
  disabled?: boolean
}

export type CatalogSectionItem = {
  id: string
  title: string
  description?: string
  type: 'product' | 'fds' | 'video' | 'image' | 'cta' | 'placeholder'
  image?: string
  videoUrl?: string
  fileUrl?: string
  action?: CatalogAction
  metadata?: Record<string, string>
}

export type CatalogSection = {
  id: string
  title: string
  description?: string
  items: CatalogSectionItem[]
  actions?: CatalogAction[]
}

export type CatalogSectionGroup = {
  id: string
  title: string
  description?: string
  sections: CatalogSection[]
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
  sectionGroups: CatalogSectionGroup[]
  updatedAt?: string
}
