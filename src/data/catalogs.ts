import { hospitalarCatalogData } from './catalogs/hospitalar'
import { segments } from './segments'
import type { Catalog, CatalogAction, CatalogAvailability, Segment } from '../types/catalog'

const baseCatalogActions: CatalogAction[] = [
  {
    id: 'quote',
    label: 'Solicitar orçamento',
    variant: 'primary',
    disabled: true,
  },
  {
    id: 'consultant',
    label: 'Falar com consultor',
    variant: 'secondary',
    disabled: true,
  },
]

function getAvailability(segment: Segment): CatalogAvailability {
  if (segment.status === 'available') {
    return 'available'
  }

  if (segment.status === 'development') {
    return 'development'
  }

  return 'planned'
}

function createBaseCatalog(segment: Segment): Catalog {
  return {
    id: `catalog-${segment.slug}`,
    slug: segment.slug,
    segmentId: segment.id,
    title: `Catálogo ${segment.title}`,
    subtitle: segment.subtitle,
    description: segment.description,
    availability: segment.slug === 'hospitalar' ? getAvailability(segment) : 'development',
    status: segment.slug === 'hospitalar' ? segment.status : 'development',
    tags: segment.tags,
    actions: baseCatalogActions,
    sectionGroups: [],
  }
}

export const catalogs = segments.reduce<Record<string, Catalog>>((catalogMap, segment) => {
  catalogMap[segment.slug] = createBaseCatalog(segment)
  return catalogMap
}, {})

if (catalogs.hospitalar) {
  catalogs.hospitalar = {
    ...catalogs.hospitalar,
    ...hospitalarCatalogData,
  }
}
