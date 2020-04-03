import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => props.theme.layout.maxWidthContainer};
  margin: 0 auto 128px auto;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 0 auto 64px auto;
  }
`
