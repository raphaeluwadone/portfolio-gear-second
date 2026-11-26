import { useEffect, useRef, useState } from 'react'
import styles from './CustomCursor.module.css'

const QUERY = '(min-width: 901px) and (pointer: fine)'

/** Green caret + trailing pink ring. Grows over any [data-cursor-hover] element. */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(() => window.matchMedia(QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = () => setActive(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!active) return
    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e: MouseEvent) => {
      const t = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      if (dot.current) dot.current.style.transform = t
      if (ring.current) ring.current.style.transform = t
    }
    const setHover = (e: MouseEvent, on: boolean) => {
      if ((e.target as Element).closest?.('[data-cursor-hover]')) ring.current?.classList.toggle(styles.hover, on)
    }
    const onOver = (e: MouseEvent) => setHover(e, true)
    const onOut = (e: MouseEvent) => setHover(e, false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
    }
  }, [active])

  if (!active) return null
  return (
    <>
      <div ref={dot} className={styles.dot} aria-hidden="true" />
      <div ref={ring} className={styles.ring} aria-hidden="true" />
    </>
  )
}
