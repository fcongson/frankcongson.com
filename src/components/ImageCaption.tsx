import { Container, Section } from '@fcongson/lagom-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { ImageNode, useImage } from 'utils/useImage'

const Image = styled.div`
  .block-img {
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: auto;
    }
  }

  .emphasized {
    ${(props) => props.theme.mediaQueries.emphasized} {
      width: 130%;
      margin: 0 -15% 2rem -15%;
    }
  }

  .full-width {
    max-height: 100vh;
    margin-bottom: 8rem;

    ${(props) => props.theme.mediaQueries.small} {
      margin-bottom: 4rem;
    }
  }

  .image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: ${(props) => props.theme.colors.greys[1]};
  }
`

type ImageProps = {
  imageSharp: ImageNode
  altText?: string
  caption?: string
}

const DefaultImage: React.FunctionComponent<ImageProps> = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <Section>
        <Container>
          <figure className='block-img'>
            <GatsbyImage image={imageSharp.childImageSharp?.gatsbyImageData} alt={altText ?? ''} />
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figure>
        </Container>
      </Section>
    </Image>
  )
}

const EmphasizedImage: React.FunctionComponent<ImageProps> = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <Section>
        <Container>
          <figure className='block-img emphasized'>
            <GatsbyImage image={imageSharp.childImageSharp?.gatsbyImageData} alt={altText ?? ''} />
            {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
          </figure>
        </Container>
      </Section>
    </Image>
  )
}

const FullWidthImage: React.FunctionComponent<ImageProps> = ({ imageSharp, altText, caption }) => {
  return (
    <Image>
      <figure className='block-img full-width'>
        <GatsbyImage
          image={imageSharp.childImageSharp?.gatsbyImageData}
          alt={altText ?? ''}
          style={{ maxHeight: '100vh' }}
          objectPosition='center center'
        />
        {caption && caption !== '' ? <figcaption className='image-label'>{caption}</figcaption> : null}
      </figure>
    </Image>
  )
}

export const ImageCaption: React.FunctionComponent<
  { emphasized?: boolean; fullwidth?: boolean; image: string } & Omit<ImageProps, 'imageSharp'>
> = ({ emphasized, fullwidth, image, ...restProps }) => {
  const imageSharp = useImage()(image)

  if (!imageSharp) return null

  if (emphasized) return <EmphasizedImage {...restProps} imageSharp={imageSharp} />
  if (fullwidth) return <FullWidthImage {...restProps} imageSharp={imageSharp} />
  return <DefaultImage {...restProps} imageSharp={imageSharp} />
}
