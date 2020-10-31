import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const Section = styled.section`
  ${space}
  ${layout}

  /* Fallback */
  padding: 0 1rem;

  /* iOS 11 */
  padding-left: calc(max(1rem, constant(safe-area-inset-left)));
  padding-right: calc(max(1rem, constant(safe-area-inset-right)));

  /* iOS 11.2+ */
  padding-left: calc(max(1rem, env(safe-area-inset-left)));
  padding-right: calc(max(1rem, env(safe-area-inset-right)));
`

Section.defaultProps = {
  maxWidth: 'maxWidthSection',
  margin: '0 auto',
}
