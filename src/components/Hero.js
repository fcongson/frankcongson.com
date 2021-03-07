import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  display: grid;
  overflow: hidden;
  margin: 0 auto 8rem auto;

  ${(props) => props.theme.mediaQueries.small} {
    margin: 0 auto 4rem auto;
  }
`

const HeroImage = styled.div`
  grid-area: 1 / 1;
  width: 100%;
  height: 100vh;
`

const HeroContent = styled.div`
  grid-area: 1 / 1;
  justify-self: center;
  align-self: center;
  z-index: 1;
  overflow: hidden;
`

const Hero = ({ image, content }) => (
  <HeroContainer>
    {!!image ? <HeroImage>{image}</HeroImage> : null}
    {!!content ? <HeroContent>{content}</HeroContent> : null}
  </HeroContainer>
)

export default Hero
