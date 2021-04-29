import styled from 'styled-components'
import { space, SpaceProps, typography, TypographyProps } from 'styled-system'

export const SectionHeader = styled.h2<TypographyProps & SpaceProps>`
  ${typography}
  ${space}
`

SectionHeader.defaultProps = {
  fontFamily: 'sansSerif',
  fontWeight: 'header',
  fontSize: [5, null, 6, null, 7],
  lineHeight: [5, null, 6, null, 7],
  textAlign: 'center',
  margin: '0 auto',
  marginBottom: [4, null, null, null, 5],
}
