import type { CatalogSegment } from '../types/catalog'

export const segments: CatalogSegment[] = [
  {
    slug: 'hospitalar',
    title: 'Hospitalar',
    description: 'Catálogos temporários para linhas médicas, hospitalares e de saúde.',
    accent: 'Primeiro catálogo em foco',
  },
  {
    slug: 'alimentar',
    title: 'Alimentar',
    description: 'Uma vitrine para soluções voltadas a supermercados, distribuição e food service.',
    accent: 'Segmento estratégico',
  },
  {
    slug: 'industrial',
    title: 'Industrial',
    description: 'Espaço reservado para catálogos com foco técnico e operação B2B.',
    accent: 'Em preparação',
  },
]

export const segmentLabelBySlug = segments.reduce<Record<string, string>>((accumulator, segment) => {
  accumulator[segment.slug] = segment.title
  return accumulator
}, {})
