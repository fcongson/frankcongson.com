import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { Container, Section } from './styles'

const Image = styled.div`
  .block-img {
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .emphasized {
    @media screen and (min-width: ${(props) => props.theme.layout.minWidthEmph}) {
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
    color: ${(props) => props.theme.colors.greyDark20};
  }
`

const DefaultImage = ({ image, imageSharp, caption }) => {
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
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

const EmphasizedImage = ({ image, imageSharp, caption }) => {
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
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

const FullWidthImage = ({ image, imageSharp, caption }) => {
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
        {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
      </figcaption>
    </Image>
  )
}

const ImageCaption = (props) => {
  const { emphasized, fullwidth } = props
  if (emphasized) return <EmphasizedImage {...props} />
  if (fullwidth) return <FullWidthImage {...props} />
  return <DefaultImage {...props} />
}

export default ImageCaption
