import { useCallback, useEffect, useState } from 'react'
import { BootSequence } from './components/BootSequence'
import { CustomCursor } from './components/CustomCursor'
import { ScreenOverlay } from './components/ScreenOverlay'
import { ScrollProgress } from './components/ScrollProgress'
import { SideNav } from './components/SideNav'
import { Starfield } from './components/Starfield'
import { Terminal } from './components/Terminal'
import { Toast } from './components/Toast'
import { features } from './content'
import { useKonami } from './hooks/useKonami'
import { useParallax } from './hooks/useParallax'
import { useReducedMotion } from './hooks/useReducedMotion'
import { useSectionTracker } from './hooks/useSectionTracker'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Marquee } from './sections/Marquee'
import { Now } from './sections/Now'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

const BOOTED_KEY = 'booted'

function hasBooted() {
  try {
    return sessionStorage.getItem(BOOTED_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const reducedMotion = useReducedMotion()
  const [booting, setBooting] = useState(() => !reducedMotion && !hasBooted())
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [konami, setKonami] = useState(false)
  const { active, revealed, register, scrollTo } = useSectionTracker()

  const finishBoot = useCallback(() => {
    setBooting(false)
    try {
      sessionStorage.setItem(BOOTED_KEY, '1')
    } catch {
      // Storage blocked: the boot just plays again next time.
    }
  }, [])
  const toggleTerminal = useCallback(() => setTerminalOpen((o) => !o), [])

  useEffect(() => {
    if (booting || !location.hash) return
    const frame = requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView())
    return () => cancelAnimationFrame(frame)
  }, [booting])

  useParallax(!reducedMotion)
  useKonami(() => {
    setKonami(true)
    setTimeout(() => setKonami(false), 3000)
  })

  return (
    <>
      <Starfield />
      <ScreenOverlay />
      <ScrollProgress />
      {features.cursorEnabled && <CustomCursor />}
      {booting && <BootSequence onDone={finishBoot} />}
      {konami && <Toast>CHEAT CODE ACCEPTED: +∞ coffee granted</Toast>}

      <SideNav active={active} onNavigate={scrollTo} />

      <main>
        <Hero
          sectionRef={register('about')}
          revealed={!booting}
          animate={!reducedMotion}
          onSeeWork={() => scrollTo('projects')}
          onOpenTerminal={features.terminalEggEnabled ? toggleTerminal : undefined}
        />
        <Marquee />
        <Projects sectionRef={register('projects')} revealed={revealed.has('projects')} />
        <Experience sectionRef={register('experience')} revealed={revealed.has('experience')} />
        <Stack sectionRef={register('skills')} revealed={revealed.has('skills')} />
        <Now sectionRef={register('now')} revealed={revealed.has('now')} />
        <Contact sectionRef={register('contact')} revealed={revealed.has('contact')} hasTerminal={features.terminalEggEnabled} />
      </main>

      {features.terminalEggEnabled && <Terminal open={terminalOpen} onToggle={toggleTerminal} onNavigate={scrollTo} />}
    </>
  )
}
