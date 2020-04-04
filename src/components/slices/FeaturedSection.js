import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import { Container, LinkButton, Section } from '../styles'

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

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
    
    p {
      text-align: center;
    }
  }

  ${LinkButton} {
    margin: 0 auto;
  }
`

// Image Background
const ImageBackground = ({ slice }) => {
  return (
    <FeaturedContainer imageBackground>
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
    </FeaturedContainer>
  )
}

// Color Background
const ColorBackground = ({ slice }) => {
  return (
    <FeaturedContainer colorBackground>
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
    </FeaturedContainer>
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
