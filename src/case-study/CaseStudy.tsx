import { Starfield } from '../components/Starfield'
import { caseStudies, type CaseStudyContent } from '../content'
import s from '../sections/shared.module.css'
import styles from './CaseStudy.module.css'

export function CaseStudy({ study }: { study: CaseStudyContent }) {
  const index = caseStudies.indexOf(study)
  const next = caseStudies[(index + 1) % caseStudies.length]
  const wide = study.shotLayout === 'wide'

  return (
    <div className={styles.page}>
      <Starfield variant="twinkle" clusters={0} scattered={24} />

      <a href="/#projects" className={styles.backFloating}>
        ← back to portfolio
      </a>

      <header className={styles.header}>
        <div className={`${s.orb} ${styles.orb}`} aria-hidden="true" />
        <div className={styles.eyebrow}>CASE STUDY / {String(index + 1).padStart(2, '0')}</div>
        <h1 className={styles.title}>{study.name}</h1>
        <p className={styles.summary}>{study.summary}</p>
        <div className={`${s.tags} ${styles.tags}`}>
          {study.tags.map((t) => (
            <span key={t} className={`${s.tag} ${styles.tag}`}>
              {t}
            </span>
          ))}
        </div>
        <a href={study.repo} className={styles.repoLink} target="_blank" rel="noopener noreferrer">
          view the code on GitHub ↗
        </a>
      </header>

      <section className={styles.hero}>
        <img className={styles.heroShot} src={study.hero.src} alt={study.hero.alt} width={2880} height={1800} />
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

      <section className={wide ? `${styles.shots} ${styles.shotsWide}` : styles.shots}>
        {study.shots.map((shot) => (
          <figure key={shot.src} className={wide ? styles.shotWide : styles.shot}>
            <img src={shot.src} alt={shot.alt} width={wide ? 2880 : 780} height={wide ? 1800 : 1600} loading="lazy" />
            <figcaption>{shot.caption}</figcaption>
          </figure>
        ))}
      </section>

      <footer className={styles.footer}>
        <a href="/#projects" className={styles.backButton}>
          ← back to portfolio
        </a>
        <a href={`/projects/${next.slug}/`} className={styles.nextLink}>
          next: {next.name} →
        </a>
      </footer>
    </div>
  )
}
