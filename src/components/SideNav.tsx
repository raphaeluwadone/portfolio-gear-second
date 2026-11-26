import { sections, type SectionId } from '../content'
import styles from './SideNav.module.css'

type Props = { active: SectionId; onNavigate: (id: SectionId) => void }

export function SideNav({ active, onNavigate }: Props) {
  return (
    <nav className={styles.nav} aria-label="Sections">
      {sections.map(({ id, label }, i) => (
        <a
          key={id}
          href={`#${id}`}
          data-cursor-hover
          aria-current={active === id ? 'true' : undefined}
          className={styles.item}
          onClick={(e) => {
            e.preventDefault()
            onNavigate(id)
          }}
        >
          <span className={styles.dash} />
          <span className={styles.label}>
            {String(i + 1).padStart(2, '0')} · {label}
          </span>
        </a>
      ))}
    </nav>
  )
}
