import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'

export default ({ slice }) => {
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='featured-image'>
            <Img fluid={slice.primary.section_imageSharp.childImageSharp.fluid} alt={slice.primary.section_image.alt} />
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='container featured-container'>
          <h2 className='section-header'>
            {RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}
          </h2>
          <p className='section-text'>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
          <Link className='call-to-action button' to={`/${slice.primary.call_to_action._meta.uid}`}>
            {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)}
          </Link>
        </div>
      </div>
    </>
  )
}
