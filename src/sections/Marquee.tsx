import { Fragment } from 'react'
import { marqueeWords } from '../content'
import styles from './Marquee.module.css'

export function Marquee() {
  const run = (hidden: boolean) => (
    <div className={styles.run} aria-hidden={hidden || undefined}>
      {marqueeWords.map((word) => (
        <Fragment key={word}>
          <span className={styles.word}>{word}</span>
          <span className={styles.spark} aria-hidden="true">
            ✦
          </span>
        </Fragment>
      ))}
    </div>
  )
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {run(false)}
        {run(true)}
      </div>
    </div>
  )
}
