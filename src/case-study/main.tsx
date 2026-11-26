import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/global.css'
import { CaseStudy } from './CaseStudy'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CaseStudy />
  </StrictMode>,
)
