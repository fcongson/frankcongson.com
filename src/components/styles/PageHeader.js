import styled from 'styled-components'

export const PageHeader = styled.h1`
  font-family: ${(props) => props.theme.fonts.sansSerif};
  font-style: normal;
  font-weight: bold;
  font-size: 121.5px;
  line-height: 148px;
  text-align: center;
  margin: 0 auto 4rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints[3]}) {
    font-size: 81px;
    line-height: 99px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: ${(props) => props.theme.breakpoints[1]}) {
    font-size: 54px;
    line-height: 66px;
  }
`
