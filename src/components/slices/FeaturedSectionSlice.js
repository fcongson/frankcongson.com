import { RichText } from 'prismic-reactjs'
import React from 'react'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import FeaturedSection from '../FeaturedSection'

const FeaturedSectionSlice = ({ slice }) => {
  const {
    label,
    primary: { section_image, section_imageSharp, section_header, section_text, call_to_action, call_to_action_text },
  } = slice

  return (
    <FeaturedSection
      imageAsBackground={label === 'image_background'}
      image={section_image}
      imageSharp={section_imageSharp}
      header={RichText.asText(section_header, linkResolver, htmlSerializer)}
      text={RichText.asText(section_text, linkResolver, htmlSerializer)}
      callToAction={call_to_action}
      callToActionText={RichText.asText(call_to_action_text, linkResolver, htmlSerializer)}
    />
  )
}

export default FeaturedSectionSlice
