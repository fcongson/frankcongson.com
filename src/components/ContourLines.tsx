import React from 'react'

type ContourOptions = {
  /** Contour centre, in viewBox units (1200 x 800). */
  cx: number
  cy: number
  /** Number of contour rings and the gap between them. */
  rings: number
  step: number
  /** How strongly the terrain wobbles (0 = perfect circles). */
  wobble: number
  /** Horizontal stretch of the rings. */
  stretch: number
  /** Phase offsets so each instance has its own terrain. */
  phase: [number, number, number]
}

const POINTS = 56
const round = (n: number) => Math.round(n * 10) / 10

// Low-frequency angular noise in [-1, 1], shared by every ring so rings never cross.
const noise = (theta: number, [p1, p2, p3]: [number, number, number]) =>
  Math.sin(2 * theta + p1) * 0.5 + Math.sin(3 * theta + p2) * 0.3 + Math.sin(5 * theta + p3) * 0.2

// Closed Catmull-Rom spline through the points, expressed as cubic beziers.
const smoothClosedPath = (pts: [number, number][]) => {
  const n = pts.length
  let d = `M${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % n]
    const p3 = pts[(i + 2) % n]
    d += `C${round(p1[0] + (p2[0] - p0[0]) / 6)} ${round(p1[1] + (p2[1] - p0[1]) / 6)} ${round(p2[0] - (p3[0] - p1[0]) / 6)} ${round(p2[1] - (p3[1] - p1[1]) / 6)} ${p2[0]} ${p2[1]}`
  }
  return `${d}Z`
}

// Deterministic (no Math.random) so server and client render identical markup.
const buildContours = ({ cx, cy, rings, step, wobble, stretch, phase }: ContourOptions) =>
  Array.from({ length: rings }, (_, i) => {
    const k = i + 1
    const drift: [number, number, number] = [phase[0] + k * 0.05, phase[1] - k * 0.04, phase[2] + k * 0.03]
    const pts = Array.from({ length: POINTS }, (_, j): [number, number] => {
      const theta = (j / POINTS) * Math.PI * 2
      const r = k * step * (1 + wobble * noise(theta, drift))
      return [round(cx + Math.cos(theta) * r * stretch), round(cy + Math.sin(theta) * r)]
    })
    return smoothClosedPath(pts)
  })

const VARIANTS = {
  // Rings rise from behind the portrait on the right.
  intro: buildContours({ cx: 880, cy: 420, rings: 16, step: 62, wobble: 0.28, stretch: 1.25, phase: [0.4, 1.9, 3.1] }),
  // Rings settle in from the lower left.
  quiet: buildContours({ cx: 180, cy: 640, rings: 16, step: 66, wobble: 0.3, stretch: 1.2, phase: [2.2, 0.7, 4.4] }),
}

/**
 * Decorative topographic contour lines. Fills its nearest positioned ancestor and sits
 * behind its content, so the parent needs `position: relative; isolation: isolate; overflow: hidden`.
 */
export const ContourLines: React.FunctionComponent<{ variant?: keyof typeof VARIANTS }> = ({ variant = 'intro' }) => (
  <svg
    aria-hidden='true'
    focusable='false'
    viewBox='0 0 1200 800'
    preserveAspectRatio='xMidYMid slice'
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      color: 'var(--lagom-semantic-color-fg-default)',
      opacity: 0.07,
    }}
  >
    {VARIANTS[variant].map((d, i) => (
      <path key={i} d={d} fill='none' stroke='currentColor' strokeWidth={1} vectorEffect='non-scaling-stroke' />
    ))}
  </svg>
)
