import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import { Container, LinkButton, Section } from '../styles'

const FeaturedSection = styled.div`
  display: grid;

  ${props =>
    props.imageBackground &&
    `
      height: 100vh;

      div.image {
        grid-area: 1 / 1;
        height: 100vh;
        opacity: 0.5;
      }

      ${Section} {
        z-index: 1;
      }
    `}

  ${props =>
    props.colorBackground &&
    `
      background-color: ${props.theme.colors.greyLight40};

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

      @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
        font-size: 54px;
        line-height: 66px;
        margin: 0 auto 2rem auto;
      }

      @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
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

      @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
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

// Image Background
const ImageBackground = ({ slice }) => {
  return (
    <FeaturedSection imageBackground>
      {!!slice.primary.section_imageSharp && (
        <div className='image'>
          <Img
            fluid={slice.primary.section_imageSharp.childImageSharp.fluid}
            alt={slice.primary.section_image.alt}
            style={{ height: '100%' }}
            imgStyle={{ objectPosition: 'center center' }}
          />
        </div>
      )}
      <Section>
        <Container>
          <div className='text'>
            <h2>{RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}</h2>
            <p>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
            <LinkButton to={`/${slice.primary.call_to_action._meta.uid}`}>
              {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </FeaturedSection>
  )
}

// Color Background
const ColorBackground = ({ slice }) => {
  return (
    <FeaturedSection colorBackground>
      <Section>
        <Container>
          {!!slice.primary.section_imageSharp && (
            <div className='image'>
              <Img
                fluid={slice.primary.section_imageSharp.childImageSharp.fluid}
                alt={slice.primary.section_image.alt}
              />
            </div>
          )}
          <div className='text'>
            <h2>{RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}</h2>
            <p>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
            <LinkButton to={`/${slice.primary.call_to_action._meta.uid}`}>
              {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </FeaturedSection>
  )
}

const renderSwitch = slice => {
  switch (slice.label) {
    case 'image_background':
      return <ImageBackground slice={slice} />
    case 'color_background':
    default:
      return <ColorBackground slice={slice} />
  }
}

export default ({ slice }) => renderSwitch(slice)
