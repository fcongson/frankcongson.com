import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React, { Fragment } from 'react'

// Default Image
const DefaultImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <div className='slice-image'>
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
    </div>
  )
}

// Emphasized Image
const EmphasizedImage = ({ slice }) => {
  const { image, imageSharp, caption } = slice.primary
  return (
    <div className='slice-image'>
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
    </div>
  )
}

// Full Width Image
const FullWidthImage = ({ slice }) => {
  const { image, caption } = slice.primary
  return (
    <div className='slice-image full-width-image' style={{ backgroundImage: 'url(' + image.url + ')' }}>
      <div className='wrapper'>
        {caption && RichText.asText(caption) !== '' ? (
          <span className='image-label'>{RichText.asText(caption)}</span>
        ) : null}
      </div>
    </div>
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
