import React from 'react'
import { Container, Section } from './styles'

const Text = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
)

export default Text
