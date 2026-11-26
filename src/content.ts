// Placeholder copy (per the handoff): contact email, social links, employers, and
// every project except Astro. Replace with real content before launch.

export const features = {
  cursorEnabled: true,
  terminalEggEnabled: true,
}

export const links = {
  email: 'hello@example.com',
  github: '#',
  linkedin: '#',
}

export type SectionId = 'about' | 'projects' | 'experience' | 'skills' | 'now' | 'contact'

export const sections: { id: SectionId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Stack' },
  { id: 'now', label: 'Now' },
  { id: 'contact', label: 'Contact' },
]

export const bootScript = [
  '$ initializing portfolio...',
  '$ loading experience.json ... done',
  '$ compiling personality.tsx ... done',
  '$ setting sail...',
]

export const taglines = [
  'I build fast, opinionated frontends.',
  "and I don't run from a slow query.",
  'currently allergic to unnecessary meetings.',
  'ship it, then make it beautiful.',
]

export const availabilityLines = [
  'available for select projects',
  'currently overcaffeinated',
  'open to interesting problems',
  'searching for the One Piece of clean code',
  'chasing my own Grand Line',
  'assembling nakama, one PR at a time',
  'always up for the next adventure',
]

export const heroIntro =
  "I build the interface, then wire the API and database underneath it, because someone has to, and I'd rather it be someone who already knows how the button feels to click."

export const phrasePool = [
  { jp: '冒険', romaji: 'Bōken', en: 'Adventure' },
  { jp: '仲間', romaji: 'Nakama', en: 'Crew / comrades' },
  { jp: '諦めない', romaji: 'Akiramenai', en: 'Never give up' },
  { jp: '一歩ずつ', romaji: 'Ippo zutsu', en: 'One step at a time' },
  { jp: '夢', romaji: 'Yume', en: 'Dream' },
  { jp: '自由', romaji: 'Jiyū', en: 'Freedom' },
  { jp: '挑戦', romaji: 'Chōsen', en: 'Challenge' },
  { jp: '海賊', romaji: 'Kaizoku', en: 'Pirate' },
  { jp: '宝物', romaji: 'Takaramono', en: 'Treasure' },
  { jp: '頑張れ', romaji: 'Ganbare', en: 'Do your best' },
  { jp: '信頼', romaji: 'Shinrai', en: 'Trust' },
  { jp: '情熱', romaji: 'Jōnetsu', en: 'Passion' },
  { jp: '覚悟', romaji: 'Kakugo', en: 'Resolve' },
  { jp: '未来', romaji: 'Mirai', en: 'Future' },
  { jp: '進化', romaji: 'Shinka', en: 'Evolution' },
  { jp: '絆', romaji: 'Kizuna', en: 'Bond' },
  { jp: '好奇心', romaji: 'Kōkishin', en: 'Curiosity' },
  { jp: '道', romaji: 'Michi', en: 'The path' },
]

export const marqueeWords = ['REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'AWS', 'STILL DEBUGGING CSS']

export type Project = {
  name: string
  desc: string
  tags: string[]
  color: string
  quip: string
  href: string
}

export const projects: Project[] = [
  {
    name: 'Astro',
    desc: 'Team-management platform for youth sports leagues: real-time rosters, scheduling, and a coach-facing admin console.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: 'var(--green)',
    quip: '"it just works" (a coach, probably)',
    href: '/projects/astro/',
  },
  {
    name: 'Realtime Ops Dashboard',
    desc: 'Internal analytics tool streaming live metrics over WebSockets, with a Node/Postgres service layer underneath.',
    tags: ['TypeScript', 'WebSockets', 'AWS'],
    color: 'var(--pink)',
    quip: 'zero refreshes required, mostly zero bugs',
    href: '#',
  },
  {
    name: 'Component Library & Design Tooling',
    desc: 'A shared UI kit and theming layer adopted across three product teams, cutting new-screen build time in half.',
    tags: ['Design Systems', 'React', 'CI/CD'],
    color: 'var(--blue)',
    quip: 'built with nakama, not just teammates',
    href: '#',
  },
]

export const experience = [
  {
    period: '2024–now',
    role: 'Senior Frontend Engineer',
    company: 'Current Co.',
    desc: 'Own the front-of-stack for the flagship product; ship API and schema changes when the feature calls for it.',
    current: true,
  },
  {
    period: '2021–2024',
    role: 'Frontend Engineer',
    company: 'Prior Co.',
    desc: 'Built and maintained the customer-facing dashboard; introduced the internal component library.',
    current: false,
  },
  {
    period: '2019–2021',
    role: 'Full-Stack Developer',
    company: 'Earlier Co.',
    desc: 'Worked across a small Node/React stack, from database schema to production UI.',
    current: false,
  },
]

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'CSS / Design Systems', 'Accessibility'] },
  { title: 'Backend & infra', items: ['Node.js', 'PostgreSQL', 'REST / GraphQL', 'AWS', 'Docker'] },
]

export const nowItems = [
  { label: 'Building', value: 'a side project worth shipping' },
  { label: 'Learning', value: 'Rust, slowly' },
  { label: 'Reading', value: 'whatever is open in 12 tabs' },
  { label: 'Rewatching', value: 'One Piece, from episode 1 (again)' },
]

export const terminalResponses: Record<string, string> = {
  help: 'commands: about, projects, skills, contact, coffee, whoami, sudo, onepiece, nakama, strawhat, devilfruit, oda, wano, gear5, konnichiwa, clear',
  whoami: 'Raphael Uwadone, AKA Dønatellø. A frontend engineer who reads the backend logs too.',
  about: 'frontend-leaning full-stack engineer. see the About section ↑',
  projects: '3 shipped things live in the Projects section. scroll up.',
  experience: 'the timeline lives in the Experience section.',
  skills: 'React · TypeScript · Node.js · PostgreSQL · AWS, mostly.',
  now: "what I'm building, learning, reading and rewatching, in the Now section.",
  contact: `${links.email}, or use the buttons in Contact.`,
  coffee: 'brewing... here you go. (no emoji here, just imagine it)',
  sudo: 'nice try.',
  onepiece: 'still airing, still watching, still convinced Oda will land it.',
  nakama: "yes, I call my teammates that. no, I won't stop.",
  grandline: "that's basically what I call a legacy codebase with no docs.",
  strawhat: 'one hat, one crew, one very overdue refactor.',
  devilfruit: 'mine would be the Debug-Debug Fruit. eats bugs, gains none of the powers.',
  oda: 'the only person allowed to miss deadlines and still be a genius.',
  wano: 'the arc, the aesthetic, the entire vibe of this portfolio, honestly.',
  gear5: 'what I call the mental state after the 4th cup of coffee.',
  konnichiwa: "konnichiwa! (that's about the extent of my Japanese, sorry)",
}

export const astroCaseStudy = {
  name: 'Astro',
  summary: 'Team-management platform for youth sports leagues: real-time rosters, scheduling, and a coach-facing admin console.',
  tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
  stats: [
    { value: '2 weeks → 4 hrs', label: 'season setup time' },
    { value: '3', label: 'leagues onboarded in year one' },
    { value: '0', label: 'group texts about schedule changes (down from many)' },
  ],
  story: [
    {
      heading: 'The problem',
      body: 'League coordinators were juggling rosters, schedules, and coach communication across spreadsheets, group texts, and a handful of disconnected tools. Nothing talked to each other, and every season start was a scramble.',
    },
    {
      heading: 'What I built',
      body: 'A React front end with a real-time layer for live roster updates, backed by a Node/Express API and PostgreSQL for scheduling logic and history. I owned the product end to end: schema design, API, and every screen coaches and admins touch.',
    },
    {
      heading: 'The outcome',
      body: 'Season setup went from days to minutes, and coaches stopped asking "did you see my text?" Rosters and schedule changes now show up everywhere at once.',
    },
  ],
  shots: ['Roster screen', 'Scheduling screen', 'Coach console'],
}
