'use client'

import styled from 'styled-components'

// next/image's `fill` mode absolutely-positions the <img>, which requires a
// sized, positioned ancestor. lagom-ui's image slots (Hero, FeaturedSection)
// already size their wrapping element via CSS grid but don't set `position`,
// so this box supplies that. Pass `aspectRatio` for contexts (like
// ImageCaption) where the parent doesn't already have a fixed height.
export const FillImageBox = styled.div<{ $aspectRatio?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.$aspectRatio ? 'auto' : '100%')};
  aspect-ratio: ${(props) => props.$aspectRatio ?? 'auto'};
`
