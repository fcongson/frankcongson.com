import { RichText } from 'prismic-reactjs'
import React from 'react'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import { Container, Section } from '../styles'

const TextSlice = ({ slice }) => {
  const { text } = slice.primary
  return (
    <Section>
      <Container>{RichText.render(text, linkResolver, htmlSerializer)}</Container>
    </Section>
  )
}

export default TextSlice
