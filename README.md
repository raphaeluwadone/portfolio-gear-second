# Portfolio

One-page portfolio for Raphael Uwadone (AKA Dønatellø), plus the Astro case study page.
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
- `src/case-study/`: the Astro page, served at `/projects/astro/` (second Vite entry in `vite.config.ts`).
- `src/styles/global.css`: design tokens, keyframes, reveal and reduced-motion rules.
