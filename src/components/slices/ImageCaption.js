import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container, Section } from '../styles'

const Image = styled.div`
  .block-img {
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .emphasized {
    @media screen and (min-width: ${props => props.theme.layout.minWidthEmph}) {
      width: 130%;
      margin: 0 -15% 2rem -15%;
    }
  }

  .full-width {
    max-height: 100vh;
  }

  .image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: ${props => props.theme.colors.greyDark20};
  }
`

// Default Image
const DefaultImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <Image>
      <Section>
        <Container>
          <figcaption className='block-img'>
            {imageSharp ? (
              <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
            ) : (
              <img src={image.url} alt={image.alt} />
            )}
            {caption && RichText.asText(caption) !== '' ? (
              <figcaption className='image-label'>{RichText.asText(caption)}</figcaption>
            ) : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

// Emphasized Image
const EmphasizedImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <Image>
      <Section>
        <Container>
          <figcaption className='block-img emphasized'>
            {imageSharp ? (
              <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
            ) : (
              <img src={image.url} alt={image.alt} />
            )}
            {caption && RichText.asText(caption) !== '' ? (
              <figcaption className='image-label'>{RichText.asText(caption)}</figcaption>
            ) : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

// Full Width Image
const FullWidthImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <Image>
      <figcaption className='block-img full-width'>
        {imageSharp ? (
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            alt={image.alt}
            style={{ maxHeight: '100vh' }}
            imgStyle={{ objectPosition: 'center center' }}
          />
        ) : (
          <img src={image.url} alt={image.alt} />
        )}
        {caption && RichText.asText(caption) !== '' ? (
          <figcaption className='image-label'>{RichText.asText(caption)}</figcaption>
        ) : null}
      </figcaption>
    </Image>
  )
}

// Function to determine the image type
const renderSwitch = function(slice) {
  switch (slice.label) {
    case 'image-full-width':
      return <FullWidthImage slice={slice} />
    case 'emphasized':
      return <EmphasizedImage slice={slice} />
    default:
      return <DefaultImage slice={slice} />
  }
}

export default ({ slice }) => {
  return <Fragment>{renderSwitch(slice)}</Fragment>
}
