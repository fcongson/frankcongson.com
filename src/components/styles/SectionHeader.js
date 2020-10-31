import styled from 'styled-components'

export const SectionHeader = styled.h2`
  font-weight: bold;
  font-size: 81px;
  line-height: 99px;
  text-align: center;
  margin: 0 auto 4rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    font-size: 54px;
    line-height: 66px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: 36px;
    line-height: 44px;
  }
`
