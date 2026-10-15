'use client'

import React from 'react'
import styled from 'styled-components'

type Tone = 'theme' | 'light'

const toneColor = (tone: Tone) =>
  tone === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'var(--lagom-semantic-color-fg-muted)'

const CORNER_SIZE = '14px'

const Corner = styled.span<{ $pos: 'tl' | 'tr' | 'bl' | 'br' }>`
  position: absolute;
  width: ${CORNER_SIZE};
  height: ${CORNER_SIZE};
  border: 0 solid currentColor;
  ${(p) => (p.$pos[0] === 't' ? 'top: 0; border-top-width: 1px;' : 'bottom: 0; border-bottom-width: 1px;')}
  ${(p) => (p.$pos[1] === 'l' ? 'left: 0; border-left-width: 1px;' : 'right: 0; border-right-width: 1px;')}
`

const Marks = styled.span<{ $inset: string; $tone: Tone }>`
  position: absolute;
  inset: ${(p) => p.$inset};
  color: ${(p) => toneColor(p.$tone)};
  pointer-events: none;
  /* Over photos, invert against whatever is underneath so the marks read on bright and dark areas alike. */
  ${(p) => (p.$tone === 'light' ? 'color: #fff; mix-blend-mode: difference;' : '')}
`

/**
 * Decorative camera-viewfinder corner marks. Fills its nearest positioned ancestor;
 * a negative `inset` draws the marks outside the parent's edge.
 */
export const CornerMarks: React.FunctionComponent<{ inset?: string; tone?: Tone }> = ({
  inset = '0px',
  tone = 'theme',
}) => (
  <Marks aria-hidden='true' $inset={inset} $tone={tone}>
    <Corner $pos='tl' />
    <Corner $pos='tr' />
    <Corner $pos='bl' />
    <Corner $pos='br' />
  </Marks>
)

const Readout = styled.span<{ $placement: 'below' | 'bottom-center'; $tone: Tone }>`
  position: absolute;
  color: ${(p) => toneColor(p.$tone)};
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.14em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  pointer-events: none;
  ${(p) =>
    p.$placement === 'below'
      ? 'top: 100%; left: 0; margin-top: 18px;'
      : 'bottom: 28px; left: 50%; transform: translateX(-50%);'}
`

/**
 * Small coordinate readout (e.g. "64.8°N 23.7°W"). Positioned against the nearest positioned ancestor.
 */
export const Coordinates: React.FunctionComponent<{
  children: React.ReactNode
  placement?: 'below' | 'bottom-center'
  tone?: Tone
}> = ({ children, placement = 'below', tone = 'theme' }) => (
  <Readout $placement={placement} $tone={tone}>
    {children}
  </Readout>
)
