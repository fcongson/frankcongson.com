import { RichText } from 'prismic-reactjs'
import React from 'react'
import { linkResolver } from '../../utils/linkResolver'
import htmlSerializer from '../../utils/htmlSerializer'

export default ({ slice }) => {
  return (
    <>
      <div className='section'>
        <div className='container'>
          <img className='featured-image' src={slice.primary.section_image.url} alt={slice.primary.section_image.alt} />
        </div>
      </div>
      <div className='section'>
        <div className='container'>
          <h2 className='section-header'>
            {RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}
          </h2>
          <p className='section-text'>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
          {/* {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)} */}
        </div>
      </div>
    </>
  )
}
