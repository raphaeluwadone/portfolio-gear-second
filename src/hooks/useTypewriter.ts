import { useEffect, useRef, useState } from 'react'

const TYPE_MS = 45
const ERASE_MS = 25
const PAUSE_MS = 1800

/** Types each phrase, pauses, erases it, then calls onCycle and moves to the next. */
export function useTypewriter(phrases: string[], onCycle: () => void, enabled: boolean) {
  const [text, setText] = useState('')
  const onCycleRef = useRef(onCycle)
  useEffect(() => {
    onCycleRef.current = onCycle
  })

  useEffect(() => {
    if (!enabled) return
    let timer: ReturnType<typeof setTimeout>
    let index = 0
    let chars = 0
    let erasing = false

    const tick = () => {
      const phrase = phrases[index % phrases.length]
      if (!erasing) {
        chars++
        setText(phrase.slice(0, chars))
        if (chars >= phrase.length) {
          erasing = true
          timer = setTimeout(tick, PAUSE_MS)
          return
        }
        timer = setTimeout(tick, TYPE_MS)
      } else {
        chars--
        setText(phrase.slice(0, Math.max(chars, 0)))
        if (chars <= 0) {
          erasing = false
          index++
          onCycleRef.current()
        }
        timer = setTimeout(tick, chars <= 0 ? TYPE_MS : ERASE_MS)
      }
    }
    timer = setTimeout(tick, TYPE_MS)
    return () => clearTimeout(timer)
  }, [phrases, enabled])

  return enabled ? text : phrases[0]
}
