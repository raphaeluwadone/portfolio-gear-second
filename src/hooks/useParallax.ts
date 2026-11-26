import { useEffect } from 'react'

/**
 * Shifts every [data-parallax="<speed>"] element by its section's distance from the viewport
 * centre times speed, so it sits at rest when its section is centred. Uses `translate` so it
 * composes with CSS transform animations (drift, spin).
 */
export function useParallax(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    const els = [...document.querySelectorAll<HTMLElement>('[data-parallax]')]
    let frame = 0
    const update = () => {
      frame = 0
      const mid = window.innerHeight / 2
      for (const el of els) {
        const box = (el.closest('section') ?? el).getBoundingClientRect()
        const offset = mid - (box.top + box.height / 2)
        el.style.translate = `0 ${offset * Number(el.dataset.parallax)}px`
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      for (const el of els) el.style.translate = ''
    }
  }, [enabled])
}
