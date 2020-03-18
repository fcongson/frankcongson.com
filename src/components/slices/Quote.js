import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) => (
  <div className='slice-quote'>
    <blockquote>{RichText.asText(slice.primary.quote)}</blockquote>
  </div>
)
