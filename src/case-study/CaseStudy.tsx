import { Starfield } from '../components/Starfield'
import { astroCaseStudy as study } from '../content'
import s from '../sections/shared.module.css'
import styles from './CaseStudy.module.css'

// TODO: swap the ScreenshotSlot placeholders for real screenshots once they exist.
function ScreenshotSlot({ label, tall }: { label: string; tall?: boolean }) {
  return (
    <div className={tall ? `${styles.slot} ${styles.slotTall}` : styles.slot} role="img" aria-label={`${label} (screenshot coming soon)`}>
      <span>{label}</span>
    </div>
  )
}

export function CaseStudy() {
  return (
    <div className={styles.page}>
      <Starfield variant="twinkle" clusters={0} scattered={24} />

      <a href="/" className={styles.backFloating}>
        ← back to portfolio
      </a>

      <header className={styles.header}>
        <div className={`${s.orb} ${styles.orb}`} aria-hidden="true" />
        <div className={styles.eyebrow}>CASE STUDY / 01</div>
        <h1 className={styles.title}>{study.name}</h1>
        <p className={styles.summary}>{study.summary}</p>
        <div className={`${s.tags} ${styles.tags}`}>
          {study.tags.map((t) => (
            <span key={t} className={`${s.tag} ${styles.tag}`}>
              {t}
            </span>
          ))}
        </div>
      </header>

      <section className={styles.hero}>
        <ScreenshotSlot label="Drop a screenshot of Astro's dashboard" tall />
      </section>

      <section className={styles.stats}>
        {study.stats.map((stat) => (
          <div key={stat.label}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section className={styles.story}>
        {study.story.map((block) => (
          <div key={block.heading}>
            <h2 className={styles.storyHeading}>{block.heading}</h2>
            <p className={styles.storyBody}>{block.body}</p>
          </div>
        ))}
      </section>

      <section className={styles.shots}>
        {study.shots.map((label) => (
          <ScreenshotSlot key={label} label={label} />
        ))}
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerNote}>built solo, shipped with nakama-level pride</div>
        <a href="/" className={styles.backButton}>
          ← back to portfolio
        </a>
      </footer>
    </div>
  )
}
