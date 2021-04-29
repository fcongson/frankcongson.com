import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

export const Container = styled.div<SpaceProps & LayoutProps>`
  ${space}
  ${layout}
`

Container.defaultProps = {
  maxWidth: 'maxWidthContainer',
  margin: '0 auto',
  marginBottom: [5, null, 6, null],
}
