import { HoverPhrase } from '../components/HoverPhrase'
import { Compass } from '../components/Decorations'
import { links } from '../content'
import s from './shared.module.css'
import styles from './Contact.module.css'

type Props = { sectionRef: (el: HTMLElement | null) => void; revealed: boolean; hasTerminal: boolean }

export function Contact({ sectionRef, revealed, hasTerminal }: Props) {
  return (
    <section id="contact" ref={sectionRef} data-revealed={revealed || undefined} className={`${s.section} ${styles.section}`}>
      <Compass className={s.float} style={{ top: 56, left: '6%', opacity: 0.4, ['--dur' as string]: '8.5s', ['--delay' as string]: '0.4s' }} />
      <div className={`${s.orb} ${styles.blob}`} data-parallax="0.5" aria-hidden="true" />

      <h2 className={`${styles.heading} ${s.content} reveal-item`}>
        Got something worth building? <em>Let's talk.</em>
      </h2>
      <HoverPhrase slot={5} color="var(--pink)" className={`${s.content} ${styles.phrase}`} />

      <div className={`${s.content} ${styles.actions}`}>
        <a data-cursor-hover href={`mailto:${links.email}`} className={`${s.btn} ${s.primary}`}>
          Say hello
        </a>
        <a data-cursor-hover href={links.github} className={`${s.btn} ${s.ghost}`} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a data-cursor-hover href={links.linkedin} className={`${s.btn} ${s.ghost}`} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>

      <p className={`${s.content} ${styles.footer}`}>
        Built by hand, fueled by coffee, and a lifelong search for the One Piece of side projects.
        {hasTerminal ? ' Try the terminal (bottom right), or the Konami code.' : ' Try the Konami code.'}
      </p>
    </section>
  )
}
