import { RichText } from 'prismic-reactjs'
import React from 'react'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import Text from '../Text'

const TextSlice = ({ slice }) => {
  const { text } = slice.primary
  return <Text>{RichText.render(text, linkResolver, htmlSerializer)}</Text>
}

export default TextSlice
