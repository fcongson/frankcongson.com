import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useScrollPosition } from 'utils/useScrollPosition'

const StyledScrollProgress = styled.div<{ progress?: number }>`
  position: fixed;
  top: 0;
  height: var(--lagom-core-spacing-md);
  width: ${(props) => `${props.progress ?? 0}%`};
  /* background-color: var(--lagom-semantic-color-accent-bg); */
  background-color: var(--lagom-core-colors-olive-base);
  z-index: 2000;
`

export const ScrollProgress = () => {
  const { handleScroll, scrollProgress } = useScrollPosition()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <StyledScrollProgress progress={scrollProgress * 100} />
}
