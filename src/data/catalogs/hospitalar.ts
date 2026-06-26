import type { Catalog, CatalogAction, CatalogSection, CatalogSectionGroup } from '../../types/catalog'

const base = '/assets/catalogos/hospitalar'
const productBase = `${base}/produtos`
const hospitalarSectionsBase = `${base}/sections/hospitalar`
const foodSectionsBase = `${base}/sections/food-service`

const productActions: CatalogAction[] = [
  {
    id: 'add-to-quote',
    label: 'Adicionar ao orçamento',
    variant: 'primary',
    disabled: true,
  },
  {
    id: 'remove-from-quote',
    label: 'Remover do orçamento',
    variant: 'danger',
    disabled: true,
  },
  {
    id: 'technical-sheet',
    label: 'Ficha Técnica',
    variant: 'secondary',
    disabled: true,
  },
]

function product(
  file: string,
  title: string,
  description: string,
  category: string,
): CatalogSection['items'][number] {
  return {
    id: file.replace(/\.(avif|webp|png)$/u, ''),
    title,
    description,
    type: 'product',
    image: `${productBase}/${file}`,
    imageAlt: `Produto ${title}`,
    actions: productActions,
    metadata: {
      category,
      status: 'Produto para orçamento consultivo',
    },
  }
}

function section(
  id: string,
  title: string,
  description: string,
  image: string,
  items: CatalogSection['items'],
  imageObjectPosition?: string,
  layoutVariant?: CatalogSection['layoutVariant'],
  sectionLogo?: string,
): CatalogSection {
  return {
    id,
    title,
    description,
    image,
    imageAlt: `Imagem da seção ${title}`,
    imageObjectPosition,
    sectionLogo,
    layoutVariant,
    items,
  }
}

const hospitalarSections: CatalogSection[] = [
  section(
    'desinfetantes-hospitalares',
    'Desinfetantes Hospitalares',
    'Protocolos de desinfecção para áreas de assistência, apoio clínico e superfícies de alto contato.',
    `${hospitalarSectionsBase}/desinfetantes-hospitalares.png`,
    [
      product('quatbio.avif', 'Quatbio', 'Desinfetante e Sanitizante à base de Quaternário e Amônio de 5ª geração. Produto desenvolvido para o uso hospitalar incluindo áreas críticas.', 'Desinfecção'),
      product('wash-cleaner.avif', 'Wasch Cleaner', 'Desinfetante associado a limpador alcalino com forte ação sobre dejetos proteicos e situações encontradas em ambientes de auxílio à saúde.', 'Desinfecção'),
      product('oxy-prime.avif', 'Oxy Prime HD', 'Desinfetante hospitalar à base de Peróxido de Hidrogênio associado a Quaternário de Amônio de 5ª geração.', 'Desinfecção'),
      product('bioclore.avif', 'Bioclore', 'Detergente clorado para a limpeza de pesada e desinfecção de superficíes', 'Desinfecção'),
    ],
    undefined,
  ),
  section(
    'laboratorios',
    'Laboratórios',
    'Soluções para limpeza técnica de vidrarias, bancadas, lâminas e superfícies sensíveis em rotinas laboratoriais.',
    `${hospitalarSectionsBase}/laboratorios.png`,
    [
      product('bionew-labor.avif', 'Bionew Labor', 'Detergente neutro biodegradável utilizado na limpeza de vidrarias delicadas e objetos de uso comum em laboratórios. Produto aniônico, sem cheiro e coloração.', 'Laboratórios'),
      product('cmx-200.avif', 'CMX 200', 'Limpador alcalino para a limpeza de lâminas e lamínulas utilizadas para análises de sangue.', 'Laboratórios'),
    ],
    undefined,
    'split-feature-left-image',
  ),
  section(
    'odorizadores-neutralizadores',
    'Odorizadores e Neutralizadores',
    'Soluções para controle de odores, neutralização e aromatização profissional em áreas de circulação, permanência e atendimento.',
    `${hospitalarSectionsBase}/odorizadores-neutralizadores.png`,
    [
      product('arbio-premium.avif', 'Arbio Premium', 'Odorizador ambiental produzido com essências nobres, deixando o ambiente agradavelmente perfumado. Disponível nas fragrâncias: Bamboo, Cereja e Avelã, Lavanda, Pitanga Preta, Troussou e Alecrim.', 'Odorização'),
      product('smell-prevent.avif', 'Smell Prevent', 'Neutralizador de odores desagradáveis. O SMELL PREVENT foi desenvolvido pensando nos problemas de odores desagradáveis para utilização institucional, oferecendo diluição que propõe um custo final muito baixo.', 'Neutralização'),
      product('floral-cleaner.avif', 'Floral Cleaner', 'Limpador perfumado desenvolvido para limpeza e aromatização de pisos e superficíes em geral. Disponível na fragrância Floral.', 'Odorização'),
    ],
  ),
  section(
    'limpadores-detergentes',
    'Limpadores e Detergentes',
    'Soluções para limpeza geral, desengraxe e manutenção de superfícies laváveis com eficiência e segurança operacional.',
    `${hospitalarSectionsBase}/limpadores-detergentes.png`,
    [
      product('bioperox.avif', 'Bioperox', 'Limpador de uso geral à base de Peróxido de Hidrogênio, extremamente eficiente e seguro, substitui em algumas situações os limpa vidros e limpadores multiuso.', 'Limpeza geral'),
      product('glad-pine.avif', 'Glad Pine', 'Desengraxante neutro desenvolvido para limpeza pesada, removendo sujidades com eficiência sem agredir superfícies e garantindo desempenho.', 'Limpeza geral'),
      product('blinchem.avif', 'Blinchem', 'Limpa vidros, espelhos e outras superfícies lisas sem porosidade. Deixa a área a ser limpa protegida por mais tempo.', 'Limpeza técnica'),
    ],
  ),
  section(
    'limpeza-sanitarios',
    'Limpeza de Sanitários',
    'Soluções para higienização, desinfecção e controle de odores em sanitários e áreas críticas de uso contínuo.',
    `${hospitalarSectionsBase}/limpeza-sanitarios.png`,
    [
      product('clean-40.avif', 'Clean40', 'Limpador com ação desinfetante à base de Quaternário de Amônio de 5a geração. Limpa, desinfeta e odoriza em uma única operação. Disponível nas fragrâncias: 4 Estações / Dowe / Floral / Hibisco e Lavanda.', 'Sanitários'),
      product('sanichem.avif', 'Sanichem', 'Limpador de base ácida desenvolvido para a limpeza e desincrustação de vasos sanitários e mictórios. Produto formulado com agentes antimicrobianos que atuam diretamente sobre as bactérias causadoras do mau odor.', 'Sanitários'),
      product('perox-clean-1100.avif', 'Perox Clean 1100', 'Limpador com ação desinfetante à base de Peróxido de Hidrogênio associado a Quaternário de Amônio de 5a geração para uso geral.', 'Sanitários'),
      product('bioclore.avif', 'Bioclore', 'Detergente limpador clorado para a limpeza pesada e desinfecção de pisos, azulejos, box de banheiros, pias e outras superfícies laváveis. Produto eficaz no alvejamento e limpeza, eliminando sujeiras provocadas por fungos e bactérias.', 'Sanitários'),
    ],
  ),
  section(
    'estofados-superficies',
    'Estofados Carpetes e Tecidos Têxteis',
    'Soluções para limpeza, manutenção e extração em estofados, carpetes, tecidos e superfícies têxteis.',
    `${hospitalarSectionsBase}/estofados-superficies.png`,
    [
      product('biocarpet.avif', 'Biocarpet', 'Limpador tipo shampoo de alta espumação para tecidos de estofados, tapetes, carpetes e afins, podendo ser utilizado manualmente ou com conservadoras (tapetes e carpetes).', 'Estofados'),
      product('bioextractor.avif', 'Bioextractor', 'Limpador extremamente concentrado próprio para ser utilizado em sistemas de limpeza de tecidos, carpetes e afins, foi especialmente desenvolvido para o uso com máquinas extratoras.', 'Estofados'),
    ],
    '82% center',
    'split-feature-left-image',
  ),
  section(
    'brilho-inox-polidores',
    'Brilho Inox e Polidor de Metais',
    'Soluções para polimento, proteção e conservação de inox, metais e superfícies de apresentação profissional.',
    `${hospitalarSectionsBase}/brilho-inox-polidores.png`,
    [
      product('biopolish.avif', 'Biopolish', 'Polidor, removedor de sujidades e oxidação de metais. Apresenta ótimos resultados também em corrimão, perfis de janela e afins. Remove manchas em vidros temperados causadas por chuva ácida.', 'Inox'),
      product('protector-inox.avif', 'Protector Inox', 'Micro óleo mineral especial para ser aplicado sobre superfícies de aço inox, evitando manchas causadas por contato manual e outras substâncias agressivas, oferecendo brilho e proteção através da película formada.', 'Inox'),
    ],
    undefined,
    'split-feature-right-image',
  ),
]

const foodServiceSections: CatalogSection[] = [
  section(
    'detergentes-desinfetantes-food-service',
    'Detergentes e Desinfetantes',
    'Soluções para limpeza, desengorduramento e sanitização de superfícies laváveis em cozinhas hospitalares.',
    `${foodSectionsBase}/detergentes-desinfetantes-food-service.png`,
    [
      product('glad-pine-plus.avif', 'Glad Pine Plus', 'Detergente desengordurante de pH moderado indicado para a limpeza de pisos, revestimentos, alumínios, aço inox em áreas food. Produto contém ingredientes naturais a base de soja.', 'Food Service'),
      product('fat-115.avif', 'Fat 115', 'Detergente desengordurante pesado com ação desinfetante à base de Quaternário de Amônio de 5a geração. Próprio para a limpeza pesada e sanitização de quaisquer superfícies laváveis.', 'Food Service'),
      product('bioclore-chef.webp', 'Bioclore Chef', 'Detergente alcalino clorado concentrado com ação espumante. Limpa, alveja e higieniza tábuas de polietileno e altileno, bancadas onde os alimentos são processados, revestimentos, balcões e afins.', 'Food Service'),
      product('Quatbio.png', 'Quatbio', 'Desinfetante e sanitizante à base de Quaternário de Amônio de 5a geração. Indicado para áreas de processamento de alimentos. Pode ser aplicado em pisos, paredes, bancadas, equipamentos ou em qualquer outra superfície lavável. ', 'Food Service'),
    ],
  ),
  section(
    'superficies-nao-lavaveis',
    'Superfícies Não Laváveis',
    'Solução para limpeza prática de equipamentos e superfícies sensíveis que não permitem lavagem direta com água.',
    `${foodSectionsBase}/superficies-nao-lavaveis.png`,
    [
      product('bioprotein.avif', 'Bioprotein', 'Limpador que une tensoativos e Peróxido de Hidrogênio promovendo a quebra de proteínas, gorduras e carboidratos. Ideal para equipamentos e superfícies não laváveis', 'Food Service'),
    ],
    undefined,
    'split-feature-left-image',
  ),
  section(
    'loucas-utensilios',
    'Louças e Utensílios',
    'Soluções para lavagem, clareamento e manutenção de louças, panelas, talheres e utensílios operacionais.',
    `${foodSectionsBase}/loucas-utensilios.png`,
    [
      product('bionew.avif', 'Bionew', 'Detergente neutro concentrado para uso manual ou imersão de louças, recipientes de cozinha e afins.', 'Food Service'),
      product('polichem-plus.avif', 'Polichem Plus', 'Limpador de base ácida especial para o clareamento em superfícies de alumínio que se encontram embaçadas e sem brilho, escuras e/ou manchadas.', 'Food Service'),
    ],
    undefined,
    'split-feature-right-image',
  ),
  section(
    'tabuas-polietileno',
    'Tábuas de Polietileno',
    'Solução para higienização de tábuas, utensílios e superfícies de preparo com foco em segurança alimentar.',
    `${foodSectionsBase}/tabuas-polietileno.png`,
    [product('bioclore-chef.webp', 'Bioclore Chef', 'Detergente alcalino clorado desenvolvido para limpeza e higienização de superfícies, garantindo alto poder de limpeza, alvejamento e desodorização.', 'Food Service')],
    undefined,
    'split-feature-left-image',
  ),
  section(
    'desincrustante-grill',
    'Desincrustante Grill',
    'Solução para limpeza pesada e remoção de gordura carbonizada em chapas, grelhas, fornos e equipamentos de cocção.',
    `${foodSectionsBase}/desincrustante-grill.png`,
    [product('forchem.avif', 'Forchem', 'Desincrustante cáustico com ação desengordurante, especial para a remoção de gorduras sólidas carbonizadas. Excelente para uso em fornos, chapas de lanches, bandejas de panificação e afins...', 'Food Service')],
    undefined,
    'split-feature-right-image',
  ),
  section(
    'sanitizacao-hortifruticolas',
    'Sanitização de Hortifrutícolas',
    'Soluções para sanitização segura de frutas, verduras e hortifrutícolas em rotinas profissionais de preparo alimentar.',
    `${foodSectionsBase}/sanitizacao-hortifruticolas.png`,
    [
      product('hipochem-2-5.avif', 'Hipochem 2,5%', 'Desinfetante para hortifrutícolas à base de cloro estabilizado, desenvolvido para a desinfecção de frutas, legumes e verduras. Possui laudos que comprovam sua ação de desinfecção contra as bactérias: Staphylococcus aureus, Salmonella choleraesuis, Escherichia coli. ', 'Food Service'),
      product('app-078.webp', 'App078', 'Ácido Peracético em pó. Eficiente bactericida indicado para área de cozinhas industriais, processamento de alimentos, indústrias alimentícias, fábricas de bebidas e equipamentos. Alta eficiência em largas escalas de pH podendo ser usado para hortifrutículas e equipamentos.', 'Food Service'),
    ],
    undefined,
    'split-feature-left-image',
  ),
  section(
    'maquina-lavar-loucas',
    'Máquinas de Lavar Louças',
    'Soluções para lavagem automática, dosagem controlada, secagem e acabamento profissional em louças e utensílios.',
    `${foodSectionsBase}/maquina-lavar-loucas.png`,
    [
      product('wm-25.avif', 'WM 25', 'Detergente especial para a utilização em máquinas lavadoras de louças. Possui em sua formulação cloro ativo que age como agente alvejante. Além de ser um produto econômico, não é agressivo ao equipamento.', 'Food Service'),
      product('final-dry.avif', 'Final Dry', 'Secante especial para a utilização em máquinas lavadoras de louças. Foi desenvolvido para a secagem total, evitando a formação de manchas d’água além de deixar os utensílios com mais brilho. Produto econômico e não agressivo ao equipamento.', 'Food Service'),
    ],
    undefined,
    'split-feature-right-image',
  ),
]

const differentialItems: CatalogSection['items'] = [
  { id: 'pops-personalizados', title: 'POPs personalizados', description: 'Procedimentos orientados para padronizar rotinas e reduzir desvios operacionais.', type: 'placeholder', metadata: { icon: 'FileCheck' } },
  { id: 'treinamento-pratico', title: 'Treinamento prático', description: 'Capacitação das equipes para aplicação correta e uso seguro das soluções.', type: 'placeholder', metadata: { icon: 'GraduationCap' } },
  { id: 'diluicao-controlada', title: 'Diluição controlada', description: 'Orientação para concentração correta, dosagem e melhor aproveitamento dos produtos.', type: 'placeholder', metadata: { icon: 'Droplets' } },
  { id: 'padronizacao-tecnica', title: 'Padronização técnica', description: 'Rotinas consistentes por ambiente, superfície e criticidade da operação.', type: 'placeholder', metadata: { icon: 'ClipboardCheck' } },
  { id: 'reducao-custos', title: 'Redução de custos', description: 'Menos desperdício, menos retrabalho e maior previsibilidade de consumo.', type: 'placeholder', metadata: { icon: 'TrendingDown' } },
  { id: 'suporte-especializado', title: 'Suporte especializado', description: 'Acompanhamento consultivo para evolução contínua da operação B2B.', type: 'placeholder', metadata: { icon: 'Headset' } },
]

const sectionGroups: CatalogSectionGroup[] = [
  {
    id: 'solucoes-hospitalares',
    title: 'Soluções Hospitalares',
    description: 'Linhas profissionais para ambientes clínicos, laboratoriais, áreas de apoio e superfícies de contato.',
    eyebrow: 'Linha Hospitalar',
    variant: 'hospitalar',
    sections: hospitalarSections,
  },
  {
    id: 'solucoes-food-service',
    title: 'Soluções Food Service Hospitalar',
    description: 'Produtos para cozinhas hospitalares, nutrição, copa e processamento seguro de alimentos.',
    eyebrow: 'Food Service Hospitalar',
    variant: 'food-service',
    sections: foodServiceSections,
  },
  {
    id: 'diferenciais-santorini',
    title: 'Diferenciais Santorini',
    description: 'Apoio técnico para transformar seleção de produtos em rotina operacional segura.',
    eyebrow: 'Consultoria Técnica',
    variant: 'differentials',
    image: `${base}/diferenciais/diferenciais-santorini.png`,
    imageAlt: 'Diferenciais técnicos Santorini para operação hospitalar',
    sections: [
      {
        id: 'diferenciais-operacionais',
        title: 'Diferenciais Santorini',
        items: differentialItems,
      },
    ],
  },
]

export const hospitalarCatalogData: Partial<Catalog> = {
  availability: 'available',
  status: 'available',
  title: 'Soluções Profissionais Linha Hospitalar',
  subtitle: 'Higiene, segurança e excelência em cada detalhe.',
  description:
    'Soluções completas e integradas para ambientes hospitalares, com foco em proteção, eficiência e processos adequados para cada necessidade.',
  tags: ['saúde', 'b2b', 'linha médica', 'controle', 'segurança'],
  heroImage: `${base}/hero/hospitalar.png`,
  heroImageAlt: 'Soluções profissionais Santorini para linha hospitalar',
  heroHighlights: [
    { id: 'pops', label: 'POPs', icon: 'FileCheck' },
    { id: 'fichas-tecnicas', label: 'Fichas Técnicas', icon: 'ClipboardCheck' },
    { id: 'registros', label: 'Registros', icon: 'BadgeCheck' },
    { id: 'treinamento', label: 'Treinamento', icon: 'GraduationCap' },
    { id: 'diluicao', label: 'Diluição correta', icon: 'Droplets' },
    { id: 'profissionalizacao', label: 'Profissionalização', icon: 'ShieldCheck' },
  ],
  indexGroups: [
    {
      id: 'index-main',
      title: 'Navegação principal',
      items: [
        { id: 'nav-hospitalar', label: 'Soluções Hospitalares', href: '#solucoes-hospitalares', variant: 'hospitalar' },
        { id: 'nav-food-service', label: 'Soluções Food Service', href: '#solucoes-food-service', variant: 'food-service' },
      ],
    },
    {
      id: 'index-hospitalar',
      title: 'Soluções Hospitalares',
      variant: 'hospitalar',
      items: hospitalarSections.map((item) => ({ id: `nav-${item.id}`, label: item.title, href: `#${item.id}`, variant: 'hospitalar' })),
    },
    {
      id: 'index-food-service',
      title: 'Soluções Food Service',
      variant: 'food-service',
      items: foodServiceSections.map((item) => ({ id: `nav-${item.id}`, label: item.title, href: `#${item.id}`, variant: 'food-service' })),
    },
    {
      id: 'index-extra',
      title: 'Apoio técnico',
      items: [{ id: 'nav-diferenciais', label: 'Diferenciais Santorini', href: '#diferenciais-santorini', variant: 'hospitalar' }],
    },
  ],
  actions: [
    {
      id: 'consultant',
      label: 'Fale com um Consultor',
      variant: 'primary',
      disabled: true,
    },
  ],
  finalCta: {
    title: 'Selecione os produtos e solicite uma proposta personalizada.',
    description: 'Adicione os produtos e solicite uma cotação por consultoria de vendas.',
    actions: [
      {
        id: 'finish-quote',
        label: 'Concluir Orçamento',
        variant: 'primary',
        disabled: true,
      },
    ],
  },
  sectionGroups,
  updatedAt: '2026-06-25',
}
