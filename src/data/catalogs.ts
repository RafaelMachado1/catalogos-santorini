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
    availability: getAvailability(segment),
    status: segment.status,
    tags: segment.tags,
    actions: baseCatalogActions,
    sectionGroups: [],
  }
}

export const catalogs = segments.reduce<Record<string, Catalog>>((catalogMap, segment) => {
  catalogMap[segment.slug] = createBaseCatalog(segment)
  return catalogMap
}, {})

const hospitalarCatalog = catalogs.hospitalar

if (hospitalarCatalog) {
  catalogs.hospitalar = {
    ...hospitalarCatalog,
    availability: 'development',
    status: 'development',
    title: 'Catálogo Hospitalar',
    subtitle: 'Estrutura inicial para o futuro catálogo hospitalar Santorini.',
    description:
      'Motor dinâmico preparado para receber linhas, seções técnicas, materiais de apoio e CTAs comerciais na próxima etapa.',
    sectionGroups: [],
  }
}
