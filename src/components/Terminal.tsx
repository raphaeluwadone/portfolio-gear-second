import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { terminalResponses, type SectionId } from '../content'
import styles from './Terminal.module.css'

type Line = { text: string; kind: 'meta' | 'cmd' | 'out' }

const SCROLL_TARGETS: SectionId[] = ['about', 'projects', 'experience', 'skills', 'now', 'contact']
const BANNER: Line = { text: "portfolio terminal v3.0, type 'help'", kind: 'meta' }

type Props = { open: boolean; onToggle: () => void; onNavigate: (id: SectionId) => void }

export function Terminal({ open, onToggle, onNavigate }: Props) {
  const [lines, setLines] = useState<Line[]>([BANNER])
  const input = useRef<HTMLInputElement>(null)
  const body = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) input.current?.focus()
  }, [open])

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (cmd === 'clear') {
      setLines([])
      return
    }
    if ((SCROLL_TARGETS as string[]).includes(cmd)) onNavigate(cmd as SectionId)
    const out = terminalResponses[cmd] ?? `command not found: ${raw.trim()} (try 'help')`
    setLines((prev) => [...prev, { text: `$ ${raw.trim()}`, kind: 'cmd' }, { text: out, kind: 'out' }])
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') onToggle()
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      run(e.currentTarget.value)
      e.currentTarget.value = ''
    }
  }

  return (
    <div className={styles.dock}>
      {open && (
        <div className={styles.window} role="dialog" aria-label="Portfolio terminal">
          <div className={styles.titlebar}>
            <span>visitor@portfolio: ~</span>
            <button type="button" data-cursor-hover className={styles.close} onClick={onToggle} aria-label="Close terminal">
              ✕
            </button>
          </div>
          <div ref={body} className={styles.body} aria-live="polite">
            {lines.map((line, i) => (
              <div key={i} className={styles[line.kind]}>
                {line.text}
              </div>
            ))}
          </div>
          <label className={styles.prompt}>
            <span aria-hidden="true">$</span>
            <span className="visually-hidden">Command</span>
            <input
              ref={input}
              type="text"
              placeholder="type 'help'"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              onKeyDown={onKeyDown}
            />
          </label>
        </div>
      )}
      <button
        type="button"
        data-cursor-hover
        className={styles.fab}
        onClick={onToggle}
        aria-expanded={open}
        aria-label={open ? 'Close terminal' : 'Open terminal'}
      >
        &gt;_
      </button>
    </div>
  )
}
