import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { caseStudies } from '../content'
import '../styles/global.css'
import { CaseStudy } from './CaseStudy'

const root = document.getElementById('root')!
const study = caseStudies.find((c) => c.slug === root.dataset.study) ?? caseStudies[0]

createRoot(root).render(
  <StrictMode>
    <CaseStudy study={study} />
  </StrictMode>,
)
