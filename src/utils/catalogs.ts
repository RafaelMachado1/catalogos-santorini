import { catalogs } from '../data/catalogs'
import { getSegmentBySlug } from './segments'
import { getThemeById } from './theme'

export function getCatalogBySlug(slug: string | undefined | null) {
  if (!slug) {
    return undefined
  }

  return catalogs[slug]
}

export function getCatalogSegment(slug: string | undefined | null) {
  return getSegmentBySlug(slug)
}

export function getCatalogTheme(slug: string | undefined | null) {
  const segment = getCatalogSegment(slug)
  return getThemeById(segment?.themeId)
}

export function getCatalogSections(slug: string | undefined | null) {
  return getCatalogBySlug(slug)?.sectionGroups ?? []
}

export function isCatalogAvailable(slug: string | undefined | null) {
  return getCatalogBySlug(slug)?.availability === 'available'
}
