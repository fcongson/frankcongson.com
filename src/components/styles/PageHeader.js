import styled from 'styled-components'
import { space, typography } from 'styled-system'

export const PageHeader = styled.h1`
  ${typography}
  ${space}
`

PageHeader.defaultProps = {
  fontFamily: 'sansSerif',
  fontWeight: 'header',
  fontSize: [6, null, 7, null, 8],
  lineHeight: [6, null, 7, null, 8],
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: [4, null, null, null, 5],
}
