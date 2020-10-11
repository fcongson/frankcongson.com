import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { useImage } from '../utils/useImage'
import { Container, Section } from './styles'

const FeaturedSectionContainer = styled.div`
  display: grid;

  ${(props) =>
    props.imageAsBackground &&
    `
      min-height: 100vh;

      div.image {
        grid-area: 1 / 1;
        height: 100vh;
        opacity: 0.5;
      }

      ${Section} {
        z-index: 1;
      }
      `}

  ${(props) =>
    props.colorAsBackground &&
    `
    background-color: ${props.backgroundColor || props.theme.colors.greyLight40};
    
    div.image {
      padding-bottom: 4rem;
    }
    
    ${Container} {
      padding-top: 12rem;
      padding-bottom: 12rem;
      
      @media (max-width: ${props.theme.breakpoints.maxWidthTabletLandscape}) {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }
    }
    `}

  ${Section} {
    grid-area: 1 / 1;
    align-self: center;
  }

  ${Container} {
    margin-bottom: 0;
  }

  div.image {
    width: 100%;
  }

  div.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const ImageBackground = ({ imageAlt, imageSharp, children }) => {
  return (
    <FeaturedSectionContainer imageAsBackground>
      {!!imageSharp && (
        <div className='image'>
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            alt={imageAlt}
            style={{ height: '100%' }}
            imgStyle={{ objectPosition: 'center center' }}
          />
        </div>
      )}
      <Section>
        <Container>
          <div className='content'>{children}</div>
        </Container>
      </Section>
    </FeaturedSectionContainer>
  )
}

const ColorBackground = ({ backgroundColor, children }) => {
  return (
    <FeaturedSectionContainer colorAsBackground backgroundColor={backgroundColor}>
      <Section>
        <Container>{children}</Container>
      </Section>
    </FeaturedSectionContainer>
  )
}

const FeaturedSectionRefactor = ({ imageAsBackground, image, ...restProps }) => {
  const imageSharp = useImage()(image)

  if (imageAsBackground) return <ImageBackground imageSharp={imageSharp} {...restProps} />
  return <ColorBackground {...restProps} />
}

export default FeaturedSectionRefactor
