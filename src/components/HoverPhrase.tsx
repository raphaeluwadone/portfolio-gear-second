import { useEffect, useState } from 'react'
import { phrasePool } from '../content'
import styles from './HoverPhrase.module.css'

const ROTATE_MS = 8000

type Props = { slot: number; color?: string; size?: number; className?: string }

/** Rotating Japanese word; hover or focus shows romaji + English and pauses on that word. */
export function HoverPhrase({ slot, color = 'var(--green)', size = 15, className }: Props) {
  const [offset, setOffset] = useState(0)
  const [frozen, setFrozen] = useState<number | null>(null)

  useEffect(() => {
    const t = setInterval(() => setOffset((o) => (o + 1) % phrasePool.length), ROTATE_MS)
    return () => clearInterval(t)
  }, [])

  const rotIndex = (offset + slot * 3) % phrasePool.length
  const phrase = phrasePool[frozen ?? rotIndex]
  const open = () => setFrozen(rotIndex)
  const close = () => setFrozen(null)

  return (
    <span
      tabIndex={0}
      className={[styles.phrase, className].filter(Boolean).join(' ')}
      style={{ color, borderBottomColor: color, fontSize: size }}
      onMouseEnter={open}
      onMouseLeave={close}
      onFocus={open}
      onBlur={close}
    >
      {frozen != null ? `${phrase.romaji} · ${phrase.en}` : <span lang="ja">{phrase.jp}</span>}
    </span>
  )
}
