import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React, { Fragment } from 'react'
import styled from 'styled-components'

const SliceImage = styled.div`
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

  .image-label {
    display: block;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    color: ${props => props.theme.colors.grey};
  }
`

const FullWidthSliceImage = styled(SliceImage)`
  height: 400px;
  position: relative;
  font-family: ${props => props.theme.fonts.sansSerif};
  font-weight: 400;
  background-image: url(${props => props.backgroundImage});
  background-color: ${props => props.theme.colors.white};
  background-size: cover;
  color: ${props => props.theme.colors.white};
  margin-bottom: 3rem;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletPortrait}) {
    padding: 20px;
    height: 200px;
  }

  .wrapper {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletPortrait}) {
      width: 80%;
    }
  }

  .image-label {
    font-size: 40px;
    font-weight: 700;
    color: ${props => props.theme.colors.white};

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletPortrait}) {
      font-size: 25px;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }
`

// Default Image
const DefaultImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <SliceImage>
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
    </SliceImage>
  )
}

// Emphasized Image
const EmphasizedImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <SliceImage>
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
    </SliceImage>
  )
}

// Full Width Image
const FullWidthImage = ({ slice }) => {
  const { image, caption } = slice.primary
  return (
    <FullWidthSliceImage backgroundImage={image.url}>
      <div className='wrapper'>
        {caption && RichText.asText(caption) !== '' ? (
          <span className='image-label'>{RichText.asText(caption)}</span>
        ) : null}
      </div>
    </FullWidthSliceImage>
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
