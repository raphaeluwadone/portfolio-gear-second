import { HoverPhrase } from '../components/HoverPhrase'
import { SmallBrackets } from '../components/Decorations'
import { projects } from '../content'
import s from './shared.module.css'
import styles from './Projects.module.css'

type Props = { sectionRef: (el: HTMLElement | null) => void; revealed: boolean }

export function Projects({ sectionRef, revealed }: Props) {
  return (
    <section id="projects" ref={sectionRef} data-revealed={revealed || undefined} className={`${s.section} ${styles.section}`}>
      <div className={s.watermark} style={{ top: 20, ['--stroke' as string]: 'rgb(92 255 138 / 0.12)' }} data-parallax="0.25" aria-hidden="true">
        01
      </div>

      <div className={`${s.content} ${styles.header}`}>
        <h2 className={`${s.h2} reveal-item`}>
          Selected work <HoverPhrase slot={1} />
        </h2>
        <span className={styles.aside}>no interns were harmed</span>
      </div>

      <SmallBrackets className={s.float} style={{ top: 100, right: '14%', opacity: 0.4, zIndex: 1, ['--delay' as string]: '0.7s' }} />

      <ul className={`${s.content} ${styles.list}`}>
        {projects.map((p, i) => {
          const external = p.href.startsWith('http')
          return (
            <li key={p.name} className="reveal-item" style={{ ['--i' as string]: i }}>
              <a
                data-cursor-hover
                href={p.href}
                className={styles.row}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{p.name}</h3>
                    <span className={styles.status} style={{ background: p.color }} aria-hidden="true" />
                  </div>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.quip}>{p.quip}</div>
                  <div className={`${s.tags} ${styles.tags}`}>
                    {p.tags.map((t) => (
                      <span key={t} className={s.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className={styles.view}>{external ? 'code ↗' : 'view →'}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
