'use client'

import { useTheme } from '@fcongson/lagom-ui'
import React from 'react'
import styled from 'styled-components'

const Caption = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.5rem;
  margin: 14px 0 0 0;
  padding: 0;
  color: var(--lagom-semantic-color-fg-subtle);
  font-size: 11px;
  line-height: 1.4;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-variant-numeric: tabular-nums;
  text-align: left;

  .group {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.25rem;
  }

  .index {
    color: var(--lagom-semantic-color-fg-default);
  }

  ${(props) => props.theme.mediaQueries!.small} {
    font-size: 10px;
    letter-spacing: 0.1em;
  }
`

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * A quiet, EXIF-style caption for a photo: frame counter and location on the left,
 * and exposure / coordinates on the right. Every field except the counter is optional.
 */
export const ExifCaption: React.FunctionComponent<{
  index: number
  total: number
  location?: string
  coordinates?: string
  exposure?: string
  className?: string
}> = ({ index, total, location, coordinates, exposure, className }) => {
  const theme = useTheme()
  return (
    <Caption theme={theme} className={className}>
      <span className='group'>
        <span className='index'>
          {pad(index + 1)} / {pad(total)}
        </span>
        {location && <span>{location}</span>}
      </span>
      {(exposure || coordinates) && (
        <span className='group'>
          {exposure && <span>{exposure}</span>}
          {coordinates && <span>{coordinates}</span>}
        </span>
      )}
    </Caption>
  )
}
