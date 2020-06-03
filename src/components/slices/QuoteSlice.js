import { RichText } from 'prismic-reactjs'
import React from 'react'
import { Container, Quote, Section } from '../styles'

const QuoteSlice = ({ slice }) => {
  const { quote } = slice.primary
  return (
    <Section>
      <Container>
        <Quote>{RichText.asText(quote)}</Quote>
      </Container>
    </Section>
  )
}

export default QuoteSlice
