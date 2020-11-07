import styled from 'styled-components'
import { layout, space } from 'styled-system'

export const Container = styled.div`
  ${space}
  ${layout}
`

Container.defaultProps = {
  maxWidth: 'maxWidthContainer',
  margin: '0 auto',
  marginBottom: [5, null, 6, null],
}
