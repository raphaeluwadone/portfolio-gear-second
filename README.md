# Portfolio

One-page portfolio for Raphael Uwadone (AKA Dønatellø), plus a case study page per project.
Vite + React + TypeScript, CSS Modules, no other runtime dependencies.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run lint
```

## Where things live

- `src/content.ts`: all copy, links, projects, experience, terminal responses, and the two feature flags (`cursorEnabled`, `terminalEggEnabled`).
- `src/sections/`: home page sections.
- `src/components/`: page-wide pieces (boot sequence, cursor, terminal, starfield, side nav).
- `src/case-study/`: the case study template. Each project has an entry at `projects/<slug>/index.html` (listed in `vite.config.ts`) whose `data-study` picks its content from `caseStudies` in `src/content.ts`. Screenshots live in `public/<slug>/`.
- `src/styles/global.css`: design tokens, keyframes, reveal and reduced-motion rules.
