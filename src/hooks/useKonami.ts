import { useEffect, useRef } from 'react'

const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function useKonami(onMatch: () => void) {
  const onMatchRef = useRef(onMatch)
  useEffect(() => {
    onMatchRef.current = onMatch
  })

  useEffect(() => {
    let buffer: string[] = []
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      buffer = [...buffer, e.key.length === 1 ? e.key.toLowerCase() : e.key].slice(-SEQUENCE.length)
      if (buffer.join() === SEQUENCE.join()) {
        buffer = []
        onMatchRef.current()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}
