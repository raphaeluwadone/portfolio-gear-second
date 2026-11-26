import { useCallback, useState } from 'react'
import { HoverPhrase } from '../components/HoverPhrase'
import { CodeBrackets, NodeLink, OrbitRings, StrawHat } from '../components/Decorations'
import { availabilityLines, heroIntro, taglines } from '../content'
import { useTypewriter } from '../hooks/useTypewriter'
import s from './shared.module.css'
import styles from './Hero.module.css'

type Props = {
  sectionRef: (el: HTMLElement | null) => void
  revealed: boolean
  animate: boolean
  onSeeWork: () => void
  onOpenTerminal?: () => void
}

export function Hero({ sectionRef, revealed, animate, onSeeWork, onOpenTerminal }: Props) {
  const [availability, setAvailability] = useState(0)
  const nextAvailability = useCallback(() => setAvailability((i) => (i + 1) % availabilityLines.length), [])
  const typed = useTypewriter(taglines, nextAvailability, animate)

  return (
    <section id="about" ref={sectionRef} data-revealed={revealed || undefined} className={styles.hero}>
      <div className={`${s.orb} ${styles.orbA}`} data-parallax="0.35" aria-hidden="true" />
      <div className={`${s.orb} ${styles.orbB}`} data-parallax="-0.55" aria-hidden="true" />
      <OrbitRings className={styles.rings} parallax={0.7} />

      <div className={styles.sysLabel}>PORTFOLIO.SYS / 2026</div>

      <CodeBrackets className={s.float} style={{ top: '22%', left: '8%', opacity: 0.5, ['--dur' as string]: '7s' }} />
      <NodeLink className={s.float} style={{ bottom: '18%', left: '14%', opacity: 0.45, ['--dur' as string]: '9s', ['--delay' as string]: '1.5s' }} />

      <div className={`${styles.inner} reveal-item`}>
        <div className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          <span aria-live="polite">{availabilityLines[availability]}</span>
          <span className={styles.sep} aria-hidden="true">·</span>
          <span className={styles.welcome} lang="ja">
            ようこそ
          </span>
        </div>
        <HoverPhrase slot={0} className={styles.phrase} />

        <div className={styles.nameRow}>
          <h1 className={styles.name}>Raphael Uwadone</h1>
          <StrawHat className={styles.hat} />
        </div>

        <div className={styles.aka}>
          AKA <span>Dønatellø</span>
        </div>

        <p className={styles.typed} aria-label={taglines.join(' ')}>
          <span aria-hidden="true">
            {typed}
            <span className={styles.caret}>_</span>
          </span>
        </p>

        <p className={styles.intro}>{heroIntro}</p>

        <div className={styles.ctas}>
          <button type="button" data-cursor-hover className={`${s.btn} ${s.primary} ${styles.seeWork}`} onClick={onSeeWork}>
            See the work →
          </button>
          {onOpenTerminal && (
            <button type="button" data-cursor-hover className={`${s.btn} ${s.ghost}`} onClick={onOpenTerminal}>
              <span className={styles.prompt}>&gt;_</span> open terminal
            </button>
          )}
        </div>

        <div className={styles.hint}>
          scroll, there's more ↓ <span>// psst, try the arrow keys</span>
        </div>
      </div>
    </section>
  )
}
