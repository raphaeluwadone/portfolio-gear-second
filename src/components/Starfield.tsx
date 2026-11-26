import { useMemo } from 'react'
import styles from './Starfield.module.css'

const PALETTE = ['var(--star)', 'var(--star)', 'var(--star)', 'var(--green)', 'var(--pink)', 'var(--blue)']

type Star = { left: number; top: number; size: number; color: string; opacity: number; name: string; duration: number; delay: number }

function makeStar(left: number, top: number, variants: 'full' | 'twinkle'): Star {
  const roll = variants === 'twinkle' ? 0 : Math.random()
  const clamp = (n: number) => Math.max(0, Math.min(100, n))
  return {
    left: clamp(left),
    top: clamp(top),
    size: 1 + Math.random() * 2.2,
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    opacity: 0.3 + Math.random() * 0.6,
    name: roll < 0.5 ? 'twinkle' : roll < 0.8 ? 'starDrift' : 'twinkle, starDrift',
    duration: roll < 0.5 ? 2 + Math.random() * 3 : 6 + Math.random() * 10,
    delay: Math.random() * 6,
  }
}

function generate(variants: 'full' | 'twinkle', clusters: number, scattered: number) {
  const stars: Star[] = []
  for (let c = 0; c < clusters; c++) {
    const cx = Math.random() * 100
    const cy = Math.random() * 100
    const count = 4 + Math.floor(Math.random() * 5)
    for (let i = 0; i < count; i++) stars.push(makeStar(cx + (Math.random() - 0.5) * 9, cy + (Math.random() - 0.5) * 9, variants))
  }
  for (let i = 0; i < scattered; i++) stars.push(makeStar(Math.random() * 100, Math.random() * 100, variants))
  return stars
}

type Props = { variant?: 'full' | 'twinkle'; clusters?: number; scattered?: number }

export function Starfield({ variant = 'full', clusters = 6, scattered = 18 }: Props) {
  const stars = useMemo(() => generate(variant, clusters, scattered), [variant, clusters, scattered])
  return (
    <div className={styles.field} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className={styles.star}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            boxShadow: `0 0 4px ${s.color}`,
            opacity: s.opacity,
            animationName: s.name,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
