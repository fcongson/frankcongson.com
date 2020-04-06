import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => props.theme.layout.maxWidthContainer};
  margin: 0 auto 8rem auto;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 0 auto 4rem auto;
  }
`
