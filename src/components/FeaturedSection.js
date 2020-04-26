import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { Container, LinkButton, Section } from './styles'

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

      ${Container} {
        padding-top: 8rem;
        padding-bottom: 8rem;
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
  
  div.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    h2 {
      font-weight: bold;
      font-size: 81px;
      line-height: 99px;
      margin: 0 auto 4rem auto;

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
        font-size: 54px;
        line-height: 66px;
        margin: 0 auto 2rem auto;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
        font-size: 36px;
        line-height: 44px;
      }
    }

    p {
      font-weight: normal;
      font-size: 20px;
      text-align: center;
      margin: 0 auto 4rem auto;
      padding: 0 2rem 0 2rem;

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
        font-size: 16px;
        margin: 0 auto 2rem auto;
        padding: 0 1rem 0 1rem;
      }
    }
  }

  ${LinkButton} {
    margin: 0 auto;
  }
`

const ImageBackground = ({ image, imageSharp, header, text, callToAction, callToActionText }) => {
  return (
    <FeaturedSectionContainer imageAsBackground>
      {!!imageSharp && (
        <div className='image'>
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            alt={image.alt}
            style={{ height: '100%' }}
            imgStyle={{ objectPosition: 'center center' }}
          />
        </div>
      )}
      <Section>
        <Container>
          <div className='text'>
            <h2>{header}</h2>
            <p>{text}</p>
            <LinkButton to={`/${callToAction}`}>{callToActionText}</LinkButton>
          </div>
        </Container>
      </Section>
    </FeaturedSectionContainer>
  )
}

const ColorBackground = ({ backgroundColor, image, imageSharp, header, text, callToAction, callToActionText }) => {
  return (
    <FeaturedSectionContainer colorAsBackground backgroundColor={backgroundColor}>
      <Section>
        <Container>
          {!!imageSharp && (
            <div className='image'>
              <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
            </div>
          )}
          <div className='text'>
            <h2>{header}</h2>
            <p>{text}</p>
            <LinkButton to={`/${callToAction}`}>{callToActionText}</LinkButton>
          </div>
        </Container>
      </Section>
    </FeaturedSectionContainer>
  )
}

const FeaturedSection = (props) => {
  if (props.imageAsBackground) return <ImageBackground {...props} />
  return <ColorBackground {...props} />
}

export default FeaturedSection
