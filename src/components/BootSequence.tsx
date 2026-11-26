import { useEffect, useState } from 'react'
import { bootScript } from '../content'
import styles from './BootSequence.module.css'

const LINE_MS = 380
const HOLD_MS = 700

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (shown < bootScript.length) {
      const t = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 0 : LINE_MS)
      return () => clearTimeout(t)
    }
    const t = setTimeout(onDone, HOLD_MS)
    return () => clearTimeout(t)
  }, [shown, onDone])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') onDone()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onDone])

  return (
    <div className={styles.overlay} onClick={onDone} role="status" aria-live="polite">
      <div className={styles.log}>
        {bootScript.slice(0, shown).map((line) => (
          <div key={line}>{line}</div>
        ))}
        <div className={styles.hint}>(click to skip)</div>
      </div>
    </div>
  )
}
