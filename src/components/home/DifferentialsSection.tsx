import { BookOpen, ShieldCheck, BadgeInfo, Scale, PiggyBank, LineChart, FlaskConical, Headphones } from 'lucide-react'
import styles from './DifferentialsSection.module.css'

const differentials = [
  { icon: ShieldCheck, label: 'POPs' },
  { icon: BookOpen, label: 'Treinamentos' },
  { icon: Headphones, label: 'Consultoria' },
  { icon: Scale, label: 'Legislação' },
  { icon: PiggyBank, label: 'Redução de Custos' },
  { icon: LineChart, label: 'Controle de Consumo' },
  { icon: FlaskConical, label: 'Diluição Correta' },
  { icon: BadgeInfo, label: 'Suporte Técnico' },
]

function DifferentialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Diferenciais Santorini</p>
        <h2 className={styles.title}>O que a proposta entrega além dos catálogos</h2>
        <p className={styles.subtitle}>
          A base institucional já deixa espaço para conteúdo de valor, operação comercial e suporte especializado.
        </p>
      </div>

      <div className={styles.grid}>
        {differentials.map((differential) => {
          const Icon = differential.icon

          return (
            <article key={differential.label} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={18} />
              </span>
              <h3 className={styles.label}>{differential.label}</h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default DifferentialsSection
