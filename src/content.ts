export const features = {
  cursorEnabled: true,
  terminalEggEnabled: true,
}

export const links = {
  email: 'raphaeluwadone@gmail.com',
  github: 'https://github.com/raphaeluwadone',
  linkedin: 'https://www.linkedin.com/in/raphaeluwadone',
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

export const marqueeWords = ['REACT', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'KOTLIN', 'STILL DEBUGGING CSS']

export type Project = {
  name: string
  desc: string
  tags: string[]
  color: string
  quip: string
  href: string
  repo: string
  live?: string
}

export const projects: Project[] = [
  {
    name: 'Astro',
    desc: 'The club app for a 70+ player Sunday five-a-side group: pay-first sign-ups, captain drafts, live results, ratings and a whole season of stats.',
    tags: ['React', 'Supabase', 'PostgreSQL', 'Paystack'],
    color: 'var(--green)',
    quip: '"who scored the most this season?" now has an answer',
    href: '/projects/astro/',
    repo: 'https://github.com/raphaeluwadone/astro-world',
    live: 'https://astro-dry-run.netlify.app/',
  },
  {
    name: 'Mergewatch',
    desc: 'One dashboard for every pull request that needs you, from GitHub and linked Jira tickets, showing only what changed since you last looked.',
    tags: ['React', 'TanStack Query', 'Hono', 'SQLite'],
    color: 'var(--pink)',
    quip: 'for when the review queue becomes a lifestyle',
    href: '/projects/mergewatch/',
    repo: 'https://github.com/raphaeluwadone/mergewatch',
  },
  {
    name: 'Coinfidant',
    desc: 'An installable budgeting app built around the pay cycle: it splits each salary across bills, savings and debt, then sets a weekly spending budget.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Fly.io'],
    color: 'var(--blue)',
    quip: 'budgets by payday, not by calendar',
    href: '/projects/coinfidant/',
    repo: 'https://github.com/raphaeluwadone/coinfidant',
  },
  {
    name: 'Rattle',
    desc: 'A voice-first todo app: talk or type to the assistant and it adds, edits and completes tasks. Jira integration in progress.',
    tags: ['React', 'Hono', 'PostgreSQL', 'OAuth'],
    color: 'var(--green)',
    quip: 'the todo list that actually listens',
    href: '/projects/rattle/',
    repo: 'https://github.com/raphaeluwadone/rattle',
  },
]

export const experience = [
  {
    period: '2025–now',
    role: 'Software Engineer',
    company: 'Enflux (Estia Inc.)',
    desc: 'Education analytics for universities. Moved eight front-end modules onto a new typed platform API behind config flags, and built the Faculty Workload chair review and copy-forward flows.',
    current: true,
  },
  {
    period: '2023–2025',
    role: 'Lead Front-end Engineer',
    company: 'Blended Technology',
    desc: 'Sole front-end engineer for most of my time on the Delta State University student portal: fee payments, course registration and student records.',
    current: false,
  },
  {
    period: '2021–2024',
    role: 'Front-end Engineer (Contract)',
    company: 'Qaltrak Technologies',
    desc: 'Built the shipper, carrier and admin front ends of the FreightHero marketplace in Next.js, Remix and SvelteKit, then moved into Kotlin and Quarkus back-end work.',
    current: false,
  },
  {
    period: '2020–2021',
    role: 'Front-end Instructor',
    company: 'Tech Studio Academy',
    desc: 'Taught HTML, CSS and JavaScript to about 50 students across three cohorts, and mentored them through their capstone projects.',
    current: false,
  },
  {
    period: '2019–2020',
    role: 'Graphic and Product Designer',
    company: 'Cloudware Technologies',
    desc: 'Marketing graphics, social assets and web layouts. Where the eye for detail started.',
    current: false,
  },
]

export const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js / Remix', 'TanStack Router & Query', 'Tailwind / Chakra UI', 'Accessibility (WCAG)', 'Vitest / Playwright'],
  },
  {
    title: 'Backend & infra',
    items: ['Node.js / Hono', 'Python / Flask', 'Kotlin / Quarkus', 'PostgreSQL / Drizzle', 'Docker / Fly.io', 'GitHub Actions'],
  },
]

export const nowItems = [
  { label: 'Building', value: 'Astro, for my Sunday football group' },
  { label: 'Learning', value: 'Rust, slowly' },
  { label: 'Reading', value: 'whatever is open in 12 tabs' },
  { label: 'Rewatching', value: 'One Piece, from episode 1 (again)' },
]

export const terminalResponses: Record<string, string> = {
  help: 'commands: about, projects, skills, contact, coffee, whoami, sudo, onepiece, nakama, strawhat, devilfruit, oda, wano, gear5, konnichiwa, clear',
  whoami: 'Raphael Uwadone, AKA Dønatellø. A front-end engineer in Lagos who reads the backend logs too.',
  about: 'frontend-leaning full-stack engineer. see the About section ↑',
  projects: '4 things I built live in the Projects section. scroll up.',
  experience: 'the timeline lives in the Experience section.',
  skills: 'React · TypeScript · Node.js · PostgreSQL · Python · Kotlin, mostly.',
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

export type Shot = { src: string; alt: string; caption: string }

export type CaseStudyContent = {
  slug: string
  name: string
  summary: string
  tags: string[]
  repo: string
  live?: string
  stats: { value: string; label: string }[]
  story: { heading: string; body: string }[]
  hero: { src: string; alt: string }
  /** 'phone' for portrait mobile captures, 'wide' for desktop ones. */
  shotLayout: 'phone' | 'wide'
  shots: Shot[]
}

const astro: CaseStudyContent = {
  slug: 'astro',
  repo: 'https://github.com/raphaeluwadone/astro-world',
  live: 'https://astro-dry-run.netlify.app/',
  shotLayout: 'phone',
  name: 'Astro',
  summary: "The club app for a 70+ player Sunday five-a-side football group: sign-ups, payments, teams, results and the season's history in one place.",
  tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Paystack'],
  stats: [
    { value: '70+', label: 'players on the roster' },
    { value: 'pay first', label: 'gets the place, with a waitlist behind it' },
    { value: 'MOTM', label: 'vote and player ratings after every game' },
  ],
  story: [
    {
      heading: 'The problem',
      body: 'Running Sunday football for 70-odd players means weekly sign-ups, match fees, quarterly dues, picking teams, recording results and keeping a season of stats. None of it lived in one place.',
    },
    {
      heading: 'What I built',
      body: 'A React and TypeScript app on Supabase. Most of the rules live in Postgres: row-level security decides who can see and change what, and the trickier flows (claiming a place, swaps, the captain draft, payments) are database functions with their own SQL tests. Paystack takes fees, dues and the kitty, with webhooks and a reconcile job for when a callback goes missing.',
    },
    {
      heading: 'What it does',
      body: 'Players sign up and pay for their place, captains draft the teams, results go in live, and every game ends with ratings and a Man of the Match vote. Profiles, rankings, Player of the Month, yearly badges and the Salami Cup keep the history in one place.',
    },
  ],
  hero: {
    src: '/astro/astro-dashboard.jpg',
    alt: "Astro's home screen: next matchday, the Salami Cup countdown, open ratings and last week's results.",
  },
  shots: [
    { src: '/astro/astro-matchday.jpg', caption: 'Matchday: claim a spot, first to pay', alt: 'Matchday screen on a phone, with ratings open and a button to claim a Sunday spot.' },
    { src: '/astro/astro-result.jpg', caption: 'Match result and Man of the Match', alt: 'A match result on a phone: Epsilon 1, Alpha 4, with scorers and the Man of the Match vote.' },
    { src: '/astro/astro-profile.jpg', caption: 'Player card and profile', alt: 'A player profile on a phone, showing the rating, position and favourite number on a player card.' },
  ],
}

const mergewatch: CaseStudyContent = {
  slug: 'mergewatch',
  repo: 'https://github.com/raphaeluwadone/mergewatch',
  shotLayout: 'wide',
  name: 'Mergewatch',
  summary: 'One dashboard for every pull request that needs you, from GitHub and linked Jira tickets, showing only what changed since you last looked.',
  tags: ['React', 'TanStack Query', 'Hono', 'SQLite', 'Drizzle'],
  stats: [
    { value: '1 board', label: 'for PRs you author, review, add by link or get through Jira' },
    { value: 'diff-only', label: 'shows what changed since you last looked' },
    { value: '56', label: 'tests across the server, web app and shared parsing' },
  ],
  story: [
    {
      heading: 'The problem',
      body: "Pull requests that need me are spread across repos, review requests, CI runs and Jira tickets. GitHub's own notifications either bury the one thing I have to do or ping me for things I don't.",
    },
    {
      heading: 'What I built',
      body: 'A Hono API with SQLite through Drizzle that polls GitHub and Jira, stores a snapshot of each PR, and works out what changed since you last opened it. GitHub and Jira tokens are encrypted at rest. An optional agent reads failed check logs, redacted first, and says whether the failure came from the diff or is just flaky. The React dashboard groups PRs by whose move it is: yours, someone else\'s, or nobody\'s yet.',
    },
    {
      heading: 'What it does',
      body: 'Merging is only offered once every check, review and conflict is clear, and the merge is pinned to the commit you were looking at, so a late push makes GitHub reject it. PRs that are not ready can hand off to GitHub auto-merge. Push notifications respect quiet hours and muted PRs, and a demo mode runs the whole thing without a GitHub account.',
    },
  ],
  hero: {
    src: '/mergewatch/mergewatch-dashboard.jpg',
    alt: 'The Mergewatch dashboard: seven PRs that need you, each card showing its status, the latest comment and check results.',
  },
  shots: [
    { src: '/mergewatch/mergewatch-pr.jpg', caption: 'A PR panel: checks, Jira ticket, merge readiness', alt: 'A pull request side panel with a failing check, its linked Jira ticket and the list of CI checks.' },
    { src: '/mergewatch/mergewatch-merge.jpg', caption: 'Merging, pinned to the commit you reviewed', alt: 'The merge dialog for an approved PR, with the merge method and an option to delete the branch.' },
    { src: '/mergewatch/mergewatch-list.jpg', caption: 'The same queue as a compact list', alt: 'The dashboard in list view, with one row per pull request.' },
  ],
}

const coinfidant: CaseStudyContent = {
  slug: 'coinfidant',
  repo: 'https://github.com/raphaeluwadone/coinfidant',
  shotLayout: 'phone',
  name: 'Coinfidant',
  summary: 'An installable budgeting app built around the pay cycle, not the calendar month, for people paying down debt.',
  tags: ['React', 'TanStack Router', 'NestJS', 'PostgreSQL', 'Drizzle', 'Fly.io'],
  stats: [
    { value: '3 phases', label: 'stabilise, attack debt, then build savings' },
    { value: '29', label: 'budget rules written down and tested one by one' },
    { value: '112', label: 'tests on the budget engine alone' },
  ],
  story: [
    {
      heading: 'The problem',
      body: 'Budgeting apps think in calendar months, but money arrives on payday. If you are paying down debt, the real questions are what you can spend today and where the leftover should go, and a monthly spreadsheet does not answer either.',
    },
    {
      heading: 'What I built',
      body: 'The core is a pure TypeScript budget engine with no I/O and no clock. It takes a cycle\'s settings, bills, debts and transactions and recomputes every number from scratch, so back-dated entries just work. Each rule is written down in a spec and referenced by the tests that cover it. Around it sits a NestJS API on Postgres, which connects as a restricted role that cannot change the schema, and a React PWA. One Fly.io app serves both.',
    },
    {
      heading: 'What it does',
      body: 'When your salary lands, Coinfidant splits it across bills, savings goals, debt repayments and the people you support, then turns what is left into a weekly budget and a daily allowance. Underspend and it asks whether the leftover attacks your most expensive debt or goes to savings. An end-of-cycle coach, written by Claude from your actual numbers, and evening check-ins keep it honest.',
    },
  ],
  hero: {
    src: '/coinfidant/coinfidant-dashboard.jpg',
    alt: 'The Coinfidant Today screen on desktop: extra money for debt this month, safe-to-spend today, the phase tracker and the current debt target.',
  },
  shots: [
    { src: '/coinfidant/coinfidant-sweep.jpg', caption: 'Leftover from last week: attack debt or save', alt: 'A phone screen offering to throw last week\'s leftover at the credit card or save it.' },
    { src: '/coinfidant/coinfidant-today.jpg', caption: 'Today: what you can safely spend', alt: 'The Today screen on a phone, showing extra money for debt and the safe amount to spend today.' },
    { src: '/coinfidant/coinfidant-debts.jpg', caption: 'Debt board: most expensive first', alt: 'The debt board on a phone, with the credit card as the current target and the car loan queued.' },
  ],
}

const rattle: CaseStudyContent = {
  slug: 'rattle',
  repo: 'https://github.com/raphaeluwadone/rattle',
  shotLayout: 'phone',
  name: 'Rattle',
  summary: 'A voice-first todo app. Talk or type to the assistant and it adds, edits, completes and deletes tasks.',
  tags: ['React', 'Vite', 'Hono', 'PostgreSQL', 'Web Speech API', 'OAuth'],
  stats: [
    { value: 'say it once', label: 'and the assistant files it with a date, priority and project' },
    { value: '4 ways', label: 'to sign in: password, magic link, Google, Atlassian' },
    { value: '120', label: 'tests across the web app and API' },
  ],
  story: [
    {
      heading: 'The problem',
      body: 'Most tasks occur to me mid-thought, and opening a form with five fields is enough friction to lose them. I wanted to say "add the sprint notes for Friday" and be done.',
    },
    {
      heading: 'What I built',
      body: 'A React front end with an assistant that turns plain sentences into task changes, using the Web Speech API for voice and falling back to typing in browsers without it. The Hono and Postgres API handles accounts and tasks. Sign-in covers email and password, single-use magic links, and Google and Atlassian OAuth. Sessions are opaque tokens in HttpOnly cookies, and the database stores only their hashes.',
    },
    {
      heading: 'What it does',
      body: 'Tasks are grouped by due date, project or priority, with subtasks, and every change the assistant makes comes with an undo. It can greet you with what is overdue and read replies out loud, and it connects to Mergewatch and Google Calendar. Jira import is next.',
    },
  ],
  hero: {
    src: '/rattle/rattle-dashboard.jpg',
    alt: 'Rattle on desktop: the task list grouped by due date beside a conversation with the assistant.',
  },
  shots: [
    { src: '/rattle/rattle-list.jpg', caption: 'Your list, grouped by due date', alt: 'The task list on a phone, with today\'s tasks, priorities, projects and subtasks.' },
    { src: '/rattle/rattle-projects.jpg', caption: 'The same tasks, grouped by project', alt: 'Tasks on a phone grouped by project, with Work and Football sections.' },
    { src: '/rattle/rattle-chat.jpg', caption: 'Talk to it, with undo on every change', alt: 'The assistant on a phone confirming a due date change, with an undo toast.' },
  ],
}

export const caseStudies: CaseStudyContent[] = [astro, mergewatch, coinfidant, rattle]
