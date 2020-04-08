import styled from 'styled-components'

export const PageHeader = styled.h1`
  font-family: ${props => props.theme.fonts.sansSerif};
  font-style: normal;
  font-weight: bold;
  font-size: 121.5px;
  line-height: 148px;
  text-align: center;
  margin: 0 auto 4rem auto;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
    font-size: 54px;
    line-height: 66px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    font-size: 36px;
    line-height: 44px;
  }
`
