import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'

export default ({ slice }) => {
  return (
    <>
      <div className='section'>
        <div className='container'>
          <img className='featured-image' src={slice.primary.section_image.url} alt={slice.primary.section_image.alt} />
        </div>
      </div>
      <div className='section'>
        <div className='container featured-container'>
          <h2 className='section-header'>
            {RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}
          </h2>
          <p className='section-text'>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
          <button className='call-to-action'>
            <Link to={`/${slice.primary.call_to_action._meta.uid}`}>
              {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)}
            </Link>
          </button>
        </div>
      </div>
    </>
  )
}
