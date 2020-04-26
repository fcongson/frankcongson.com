import { RichText } from 'prismic-reactjs'
import React from 'react'
import ImageCaption from '../ImageCaption'

const ImageCaptionSlice = ({ slice }) => {
  const {
    label,
    primary: { image, imageSharp, caption },
  } = slice

  return (
    <ImageCaption
      emphasized={label === 'emphasized'}
      fullwidth={label === 'image-full-width'}
      image={image}
      imageSharp={imageSharp}
      caption={RichText.asText(caption)}
    />
  )
}

export default ImageCaptionSlice
