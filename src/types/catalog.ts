export type CatalogSegmentStatus = 'active' | 'preview' | 'draft'

export type CatalogSegment = {
  id: string
  slug: string
  title: string
  description: string
  themeId: string
  status: CatalogSegmentStatus
  coverImage?: string
}

export type CatalogSummary = {
  slug: string
  title: string
}
