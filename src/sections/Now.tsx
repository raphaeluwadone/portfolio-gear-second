import { HoverPhrase } from '../components/HoverPhrase'
import { nowItems } from '../content'
import s from './shared.module.css'
import styles from './Now.module.css'

type Props = { sectionRef: (el: HTMLElement | null) => void; revealed: boolean }

export function Now({ sectionRef, revealed }: Props) {
  return (
    <section id="now" ref={sectionRef} data-revealed={revealed || undefined} className={`${s.section} ${s.alt} ${styles.section}`}>
      <h2 className={`${s.h2} ${styles.heading}`}>
        Right now <HoverPhrase slot={4} size={14} />
      </h2>
      <p className={styles.sub}>a running log, updated whenever something sticks</p>
      <dl className={styles.grid}>
        {nowItems.map((item, i) => (
          <div key={item.label} className={styles.item} style={{ ['--i' as string]: i }}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
