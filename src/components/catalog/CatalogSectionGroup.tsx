import type { CatalogSectionGroup as CatalogSectionGroupType } from '../../types/catalog'
import CatalogDifferentials from './CatalogDifferentials'
import CatalogVisualSection from './CatalogVisualSection'
import styles from './CatalogSectionGroup.module.css'

type CatalogSectionGroupProps = {
  groups: CatalogSectionGroupType[]
  onAddToBudget?: () => void
  onRemoveFromBudget?: () => void
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

function CatalogSectionGroup({ groups, onAddToBudget, onRemoveFromBudget }: CatalogSectionGroupProps) {
  const visibleGroups = groups.length > 0 ? groups : placeholderGroups

  function getNextSectionId(groupIndex: number, sectionIndex: number) {
    const currentGroup = visibleGroups[groupIndex]
    const nextSectionInGroup = currentGroup?.sections[sectionIndex + 1]

    if (nextSectionInGroup) {
      return nextSectionInGroup.id
    }

    const nextGroup = visibleGroups.slice(groupIndex + 1).find((group) => group.variant !== 'differentials')
    if (!nextGroup) {
      const fallbackGroup = visibleGroups.slice(groupIndex + 1).find((group) => group.variant === 'differentials')
      return fallbackGroup?.id
    }

    return nextGroup.sections[0]?.id
  }

  return (
    <section className={styles.wrapper} aria-label="Seções do catálogo">
      {visibleGroups.map((group) => {
        if (group.variant === 'differentials') {
          return <CatalogDifferentials key={group.id} group={group} />
        }

        const tone = group.variant === 'food-service' ? 'food-service' : 'hospitalar'
        const groupIndex = visibleGroups.findIndex((item) => item.id === group.id)

        return (
          <article
            key={group.id}
            id={group.id}
            className={`${styles.group} ${tone === 'food-service' ? styles.foodService : ''}`}
          >
            <div className={styles.groupHeader}>
              <p>{group.eyebrow ?? 'Grupo'}</p>
              <h2>{group.title}</h2>
              {group.description ? <span>{group.description}</span> : null}
            </div>

            <div className={styles.sections}>
              {group.sections.length > 0 ? (
                group.sections.map((section, sectionIndex) => (
                  <CatalogVisualSection
                    key={section.id}
                    section={section}
                    sectionIndex={sectionIndex}
                    nextSectionId={getNextSectionId(groupIndex, sectionIndex)}
                    tone={tone}
                    onAddToBudget={onAddToBudget}
                    onRemoveFromBudget={onRemoveFromBudget}
                  />
                ))
              ) : (
                <div className={styles.emptyCard}>
                  <h3>Conteúdo em preparação</h3>
                  <p>Este grupo está pronto para receber seções reais do catálogo.</p>
                </div>
              )}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default CatalogSectionGroup
