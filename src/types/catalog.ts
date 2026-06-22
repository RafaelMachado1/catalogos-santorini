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
