import { useEffect, useRef } from 'react'
import styles from './ScrollProgress.module.css'

/** Blinking block whose left edge tracks scroll %; stops blinking while scrolling. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    let idle: ReturnType<typeof setTimeout>
    const update = () => {
      frame = 0
      const el = bar.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0
      el.style.left = `calc(${pct}% - 4px)`
      el.classList.add(styles.scrolling)
      clearTimeout(idle)
      idle = setTimeout(() => el.classList.remove(styles.scrolling), 400)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      clearTimeout(idle)
    }
  }, [])

  return <div ref={bar} className={styles.bar} aria-hidden="true" />
}
