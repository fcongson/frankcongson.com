import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import { useImageSharp } from '../utils/useImageSharp'
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

const DefaultImage = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <Section>
        <Container>
          <figcaption className='block-img'>
            <Img fluid={imageSharp.childImageSharp.fluid} alt={altText} />
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

const EmphasizedImage = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <Section>
        <Container>
          <figcaption className='block-img emphasized'>
            <Img fluid={imageSharp.childImageSharp.fluid} alt={altText} />
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figcaption>
        </Container>
      </Section>
    </Image>
  )
}

const FullWidthImage = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <figcaption className='block-img full-width'>
        <Img
          fluid={imageSharp.childImageSharp.fluid}
          alt={altText}
          style={{ maxHeight: '100vh' }}
          imgStyle={{ objectPosition: 'center center' }}
        />
        {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
      </figcaption>
    </Image>
  )
}

const ImageCaption = ({ emphasized, fullwidth, image, ...restProps }) => {
  const imageSharp = useImageSharp()(image)

  if (emphasized) return <EmphasizedImage {...restProps} imageSharp={imageSharp} />
  if (fullwidth) return <FullWidthImage {...restProps} imageSharp={imageSharp} />
  return <DefaultImage {...restProps} imageSharp={imageSharp} />
}

export default ImageCaption
