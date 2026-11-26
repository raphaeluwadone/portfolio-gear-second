import { HoverPhrase } from '../components/HoverPhrase'
import { Crosshair } from '../components/Decorations'
import { skillGroups } from '../content'
import s from './shared.module.css'
import styles from './Stack.module.css'

type Props = { sectionRef: (el: HTMLElement | null) => void; revealed: boolean }

export function Stack({ sectionRef, revealed }: Props) {
  return (
    <section id="skills" ref={sectionRef} data-revealed={revealed || undefined} className={s.section}>
      <div className={s.watermark} style={{ top: 0, ['--stroke' as string]: 'rgb(92 216 255 / 0.1)' }} data-parallax="0.3" aria-hidden="true">
        03
      </div>

      <h2 className={`${s.h2} ${s.content} ${styles.heading} reveal-item`}>
        Stack <HoverPhrase slot={3} color="var(--blue)" />
      </h2>

      <div className={`${s.content} ${styles.grid}`}>
        {skillGroups.map((group, i) => (
          <div key={group.title} className={`${styles.card} reveal-item`} style={{ ['--i' as string]: i }}>
            <Crosshair className={`${s.float} ${styles.corner}`} />
            <h3 className={styles.title}>{group.title}</h3>
            <ul className={styles.skills}>
              {group.items.map((skill) => (
                <li key={skill} data-cursor-hover className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
