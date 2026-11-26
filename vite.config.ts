import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        astro: resolve(import.meta.dirname, 'projects/astro/index.html'),
        mergewatch: resolve(import.meta.dirname, 'projects/mergewatch/index.html'),
        coinfidant: resolve(import.meta.dirname, 'projects/coinfidant/index.html'),
        rattle: resolve(import.meta.dirname, 'projects/rattle/index.html'),
      },
    },
  },
})
