import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import { Container, Section } from '../styles'

const Text = styled.div`
  a {
    text-decoration: none;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 2px solid ${props => props.theme.colors.oliveLight40};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${props => props.theme.colors.greyDark40};
    }
  }

  .block-img {
    img {
      max-width: 100%;
    }

    a {
      background: none;
    }
  }
`

export default ({ slice }) => (
  <Text>
    <Section>
      <Container>
        <div>{RichText.render(slice.primary.text, linkResolver, htmlSerializer)}</div>
      </Container>
    </Section>
  </Text>
)
