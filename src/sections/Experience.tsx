import { HoverPhrase } from '../components/HoverPhrase'
import { experience } from '../content'
import s from './shared.module.css'
import styles from './Experience.module.css'

type Props = { sectionRef: (el: HTMLElement | null) => void; revealed: boolean }

export function Experience({ sectionRef, revealed }: Props) {
  return (
    <section id="experience" ref={sectionRef} data-revealed={revealed || undefined} className={`${s.section} ${s.alt}`}>
      <div className={s.watermark} style={{ bottom: -40, ['--stroke' as string]: 'rgb(255 79 216 / 0.1)' }} data-parallax="-0.4" aria-hidden="true">
        02
      </div>

      <h2 className={`${s.h2} ${s.content} ${styles.heading} reveal-item`}>
        Experience <HoverPhrase slot={2} color="var(--pink)" />
      </h2>

      <ol className={`${s.content} ${styles.timeline}`}>
        {experience.map((job, i) => (
          <li key={job.period} className={`${styles.entry} reveal-item`} style={{ ['--i' as string]: i }}>
            <div className={styles.period}>{job.period}</div>
            <div className={styles.rail} aria-hidden="true">
              <span className={job.current ? `${styles.dot} ${styles.current}` : styles.dot} />
              <span className={styles.line} />
            </div>
            <div className={styles.body}>
              <h3 className={styles.role}>
                {job.role} · {job.company}
              </h3>
              <p className={styles.desc}>{job.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
