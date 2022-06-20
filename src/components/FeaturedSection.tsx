import { Container, Section } from '@fcongson/lagom-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { ImageNode, useImage } from 'utils/useImage'

const FeaturedSectionContainer = styled.div<{
  imageAsBackground?: boolean
  colorAsBackground?: boolean
  backgroundColor?: string
}>`
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
    background-color: ${props.backgroundColor || props.theme.colors.greys[4]};
    
    div.image {
      padding-bottom: 4rem;
    }
    
    ${Container} {
      padding-top: 12rem;
      padding-bottom: 12rem;
      
      ${props.theme.mediaQueries.large} {
        padding-top: 8rem;
        padding-bottom: 8rem;
      }

      div:not(:last-of-type) {
        margin-bottom: 8rem;

        ${props.theme.mediaQueries.small} {
          margin-bottom: 4rem;
        }
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

type ImageBackgroundProps = {
  imageAlt?: string
  imageSharp: ImageNode
  children?: React.ReactNode
}

const ImageBackground: React.FunctionComponent<ImageBackgroundProps> = ({ imageAlt = '', imageSharp, children }) => {
  return (
    <FeaturedSectionContainer imageAsBackground>
      {!!imageSharp && (
        <div className='image'>
          <GatsbyImage
            image={imageSharp.childImageSharp?.gatsbyImageData}
            alt={imageAlt}
            style={{ height: '100%' }}
            objectPosition='center center'
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

type ColorBackgroundProps = {
  backgroundColor?: string
  children?: React.ReactNode
}

const ColorBackground: React.FunctionComponent<ColorBackgroundProps> = ({ backgroundColor, children }) => {
  return (
    <FeaturedSectionContainer colorAsBackground backgroundColor={backgroundColor}>
      <Section>
        <Container>{children}</Container>
      </Section>
    </FeaturedSectionContainer>
  )
}

export const FeaturedSection: React.FunctionComponent<
  { imageAsBackground?: boolean; image?: string } & Omit<ImageBackgroundProps, 'imageSharp'> & ColorBackgroundProps
> = ({ imageAsBackground, image, ...restProps }) => {
  const imageSharp = useImage()(image)

  if (imageSharp && imageAsBackground) return <ImageBackground imageSharp={imageSharp} {...restProps} />
  return <ColorBackground {...restProps} />
}
