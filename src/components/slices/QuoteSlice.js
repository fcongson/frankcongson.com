import { RichText } from 'prismic-reactjs'
import React from 'react'
import Quote from '../Quote'

const QuoteSlice = ({ slice }) => {
  const { quote } = slice.primary
  return <Quote>{RichText.asText(quote)}</Quote>
}

export default QuoteSlice
