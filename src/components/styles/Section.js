import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidthSection};
  margin: 0 auto;

  /* Fallback */
  padding: 0 1rem;

  /* iOS 11 */
  padding-left: calc(max(1rem, constant(safe-area-inset-left)));
  padding-right: calc(max(1rem, constant(safe-area-inset-right)));

  /* iOS 11.2+ */
  padding-left: calc(max(1rem, env(safe-area-inset-left)));
  padding-right: calc(max(1rem, env(safe-area-inset-right)));
`
