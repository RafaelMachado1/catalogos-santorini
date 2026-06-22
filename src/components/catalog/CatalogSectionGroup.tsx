import type { CatalogSectionGroup as CatalogSectionGroupType } from '../../types/catalog'
import styles from './CatalogSectionGroup.module.css'

type CatalogSectionGroupProps = {
  groups: CatalogSectionGroupType[]
}

const placeholderGroups: CatalogSectionGroupType[] = [
  {
    id: 'placeholder-overview',
    title: 'Estrutura do catálogo',
    description: 'Os grupos de seções, produtos, materiais técnicos e CTAs comerciais serão adicionados nas próximas etapas.',
    sections: [
      {
        id: 'placeholder-section',
        title: 'Seções em preparação',
        description: 'Base pronta para receber produtos, FDS, vídeos, imagens, carrinho e orçamento.',
        items: [],
      },
    ],
  },
]

function CatalogSectionGroup({ groups }: CatalogSectionGroupProps) {
  const visibleGroups = groups.length > 0 ? groups : placeholderGroups

  return (
    <section className={styles.wrapper} aria-label="Seções do catálogo">
      {visibleGroups.map((group) => (
        <article key={group.id} className={styles.group}>
          <div className={styles.groupHeader}>
            <p className={styles.eyebrow}>Grupo</p>
            <h2>{group.title}</h2>
            {group.description ? <p>{group.description}</p> : null}
          </div>

          <div className={styles.sections}>
            {group.sections.length > 0 ? (
              group.sections.map((section) => (
                <div key={section.id} className={styles.sectionCard}>
                  <span />
                  <h3>{section.title}</h3>
                  {section.description ? <p>{section.description}</p> : null}
                  <small>{section.items.length} itens configurados</small>
                </div>
              ))
            ) : (
              <div className={styles.sectionCard}>
                <span />
                <h3>Conteúdo em preparação</h3>
                <p>Este grupo está pronto para receber seções reais do catálogo.</p>
                <small>0 itens configurados</small>
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}

export default CatalogSectionGroup
