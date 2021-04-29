import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

export const Section = styled.section<SpaceProps & LayoutProps>`
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
