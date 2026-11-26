import type { CSSProperties } from 'react'

type Props = { className?: string; style?: CSSProperties }

const svg = (props: Props, size: number, viewBox = '0 0 24 24') => ({
  width: size,
  height: size,
  viewBox,
  'aria-hidden': true,
  className: props.className,
  style: props.style,
})

export const CodeBrackets = ({ color = 'var(--green)', size = 30, ...p }: Props & { color?: string; size?: number }) => (
  <svg {...svg(p, size)}>
    <path d="M8 6 3 12l5 6M16 6l5 6-5 6" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const SmallBrackets = ({ color = 'var(--blue)', size = 26, ...p }: Props & { color?: string; size?: number }) => (
  <svg {...svg(p, size)}>
    <path d="M9 3 5 8l4 5M15 3l4 5-4 5" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const NodeLink = (p: Props) => (
  <svg {...svg(p, 24)}>
    <circle cx="12" cy="12" r="3" fill="var(--pink)" />
    <circle cx="4" cy="12" r="1.6" fill="var(--pink)" />
    <circle cx="20" cy="12" r="1.6" fill="var(--pink)" />
    <line x1="7" y1="12" x2="9" y2="12" stroke="var(--pink)" strokeWidth="1.2" />
    <line x1="15" y1="12" x2="17" y2="12" stroke="var(--pink)" strokeWidth="1.2" />
  </svg>
)

export const StrawHat = (p: Props) => (
  <svg width="46" height="30" viewBox="0 0 64 40" aria-hidden className={p.className} style={p.style}>
    <ellipse cx="32" cy="30" rx="30" ry="8" fill="none" stroke="var(--green)" strokeWidth="1.8" />
    <path d="M14 28 Q14 8 32 8 Q50 8 50 28" fill="none" stroke="var(--green)" strokeWidth="1.8" />
    <rect x="14" y="24" width="36" height="5" fill="var(--pink)" opacity="0.85" />
  </svg>
)

export const Crosshair = (p: Props) => (
  <svg {...svg(p, 22)}>
    <g stroke="var(--green)" strokeWidth="1.4" fill="none">
      <rect x="9" y="9" width="6" height="6" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="22" />
      <line x1="2" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="22" y2="12" />
    </g>
  </svg>
)

export const Compass = (p: Props) => (
  <svg {...svg(p, 32)}>
    <circle cx="12" cy="12" r="7" fill="none" stroke="var(--green)" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="2" fill="var(--green)" />
    <g stroke="var(--green)" strokeWidth="1.4">
      <line x1="12" y1="1" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="23" />
      <line x1="1" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="23" y2="12" />
      <line x1="4" y1="4" x2="7.5" y2="7.5" />
      <line x1="16.5" y1="16.5" x2="20" y2="20" />
      <line x1="4" y1="20" x2="7.5" y2="16.5" />
      <line x1="16.5" y1="7.5" x2="20" y2="4" />
    </g>
  </svg>
)

export const OrbitRings = (p: Props & { parallax?: number }) => (
  <svg width="360" height="360" viewBox="0 0 360 360" aria-hidden className={p.className} style={p.style} data-parallax={p.parallax}>
    <circle cx="180" cy="180" r="160" fill="none" stroke="var(--green)" strokeDasharray="2 10" style={{ transformOrigin: '180px 180px', animation: 'spinSlow 40s linear infinite' }} />
    <circle cx="180" cy="180" r="110" fill="none" stroke="var(--pink)" strokeDasharray="1 8" style={{ transformOrigin: '180px 180px', animation: 'spinReverse 30s linear infinite' }} />
    <circle cx="340" cy="180" r="5" fill="var(--green)" style={{ transformOrigin: '180px 180px', animation: 'spinSlow 40s linear infinite' }} />
  </svg>
)
