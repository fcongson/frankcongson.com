import React from 'react'
import styled from 'styled-components'
import { Container, Section } from './styles'

const TextContainer = styled.div`
  a {
    color: ${(props) => props.theme.colors.greyDark40};
    text-decoration: none;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.oliveLight40};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.greyDark40};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a {
      font-weight: inherit;
    }
  }
`

const Text = ({ text }) => (
  <TextContainer>
    <Section>
      <Container>
        <div>{text}</div>
      </Container>
    </Section>
  </TextContainer>
)

export default Text
