import { useCallback, useEffect, useRef, useState } from 'react'
import type { SectionId } from '../content'

/** Tracks the section in view and which sections have been revealed at least once. */
export function useSectionTracker() {
  const elements = useRef(new Map<SectionId, HTMLElement>())
  const [active, setActive] = useState<SectionId>('about')
  const [revealed, setRevealed] = useState<Set<SectionId>>(() => new Set())

  useEffect(() => {
    const idFor = new Map([...elements.current].map(([id, el]) => [el, id]))
    const idsOf = (entries: IntersectionObserverEntry[]) =>
      entries.filter((e) => e.isIntersecting).flatMap((e) => idFor.get(e.target as HTMLElement) ?? [])

    const reveal = new IntersectionObserver(
      (entries) => {
        const ids = idsOf(entries)
        if (ids.length) setRevealed((prev) => (ids.every((id) => prev.has(id)) ? prev : new Set([...prev, ...ids])))
      },
      { threshold: 0.3 },
    )
    idFor.forEach((_, el) => reveal.observe(el))

    // Active = last section whose top has passed 35% of the viewport, so short sections can't steal it.
    let frame = 0
    const updateActive = () => {
      frame = 0
      const line = window.innerHeight * 0.35
      let current: SectionId = 'about'
      for (const [id, el] of elements.current) if (el.getBoundingClientRect().top <= line) current = id
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateActive)
    }
    updateActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      reveal.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const register = useCallback(
    (id: SectionId) => (el: HTMLElement | null) => {
      if (el) elements.current.set(id, el)
    },
    [],
  )

  const scrollTo = useCallback((id: SectionId) => {
    const el = elements.current.get(id)
    if (!el) return
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: smooth ? 'smooth' : 'auto' })
  }, [])

  return { active, revealed, register, scrollTo }
}
