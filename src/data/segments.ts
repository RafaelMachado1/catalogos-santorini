import type { CatalogSegment } from '../types/catalog'

export const segments: CatalogSegment[] = [
  {
    id: 'segment-hospitalar',
    slug: 'hospitalar',
    title: 'Hospitalar',
    description: 'Catálogos para linhas médicas, hospitalares e de saúde.',
    themeId: 'hospitalar',
    status: 'active',
  },
  {
    id: 'segment-restaurantes',
    slug: 'restaurantes',
    title: 'Restaurantes',
    description: 'Uma vitrine para cardápios, mesas, operação e experiência gastronômica.',
    themeId: 'restaurantes',
    status: 'active',
  },
  {
    id: 'segment-hotelaria',
    slug: 'hotelaria',
    title: 'Hotelaria',
    description: 'Catálogos para hospedagem, hospitalidade e operação premium.',
    themeId: 'hotelaria',
    status: 'active',
  },
  {
    id: 'segment-cervejarias',
    slug: 'cervejarias',
    title: 'Cervejarias',
    description: 'Estrutura para marcas artesanais, industriais e experiências de consumo.',
    themeId: 'cervejarias',
    status: 'active',
  },
  {
    id: 'segment-academias',
    slug: 'academias',
    title: 'Academias',
    description: 'Catálogos para fitness, treinamento, bem-estar e performance.',
    themeId: 'academias',
    status: 'active',
  },
  {
    id: 'segment-supermercados',
    slug: 'supermercados',
    title: 'Supermercados',
    description: 'Vitrine para varejo alimentar, operação de loja e distribuição.',
    themeId: 'supermercados',
    status: 'active',
  },
  {
    id: 'segment-shopping-centers',
    slug: 'shopping-centers',
    title: 'Shopping Centers',
    description: 'Segmento voltado a centros comerciais, operações e experiências de marca.',
    themeId: 'shopping-centers',
    status: 'active',
  },
  {
    id: 'segment-industria-alimentos-bebidas',
    slug: 'industria-alimentos-bebidas',
    title: 'Indústria de Alimentos e Bebidas',
    description: 'Catálogos B2B para indústria, produção e portfólio técnico.',
    themeId: 'industria-alimentos-bebidas',
    status: 'active',
  },
  {
    id: 'segment-educacao',
    slug: 'educacao',
    title: 'Educação',
    description: 'Espaço para instituições, materiais acadêmicos e soluções educacionais.',
    themeId: 'educacao',
    status: 'active',
  },
  {
    id: 'segment-higiene-pessoal',
    slug: 'higiene-pessoal',
    title: 'Higiene Pessoal',
    description: 'Linha complementar para autocuidado, bem-estar e higiene.',
    themeId: 'higiene-pessoal',
    status: 'preview',
  },
  {
    id: 'segment-equipamentos-acessorios',
    slug: 'equipamentos-acessorios',
    title: 'Equipamentos e Acessórios',
    description: 'Catálogos complementares para itens técnicos e operacionais.',
    themeId: 'equipamentos-acessorios',
    status: 'preview',
  },
  {
    id: 'segment-tratamento-pisos',
    slug: 'tratamento-pisos',
    title: 'Tratamento de Pisos',
    description: 'Proposta complementar para limpeza técnica e manutenção de superfícies.',
    themeId: 'tratamento-pisos',
    status: 'preview',
  },
  {
    id: 'segment-lavanderia-industrial',
    slug: 'lavanderia-industrial',
    title: 'Lavanderia Industrial',
    description: 'Segmento complementar para processos, máquinas e insumos industriais.',
    themeId: 'lavanderia-industrial',
    status: 'preview',
  },
]

export const segmentLabelBySlug = segments.reduce<Record<string, string>>((accumulator, segment) => {
  accumulator[segment.slug] = segment.title
  return accumulator
}, {})
