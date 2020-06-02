import React from 'react'
import styled from 'styled-components'
import { Container, Section } from './styles'

const QuoteContainer = styled.div`
  blockquote {
    margin-bottom: 2rem;
    padding-left: 1rem;
    border-left: 4px solid ${(props) => props.theme.colors.greyDark40};
    display: inline-block;
    font-family: ${(props) => props.theme.fonts.serif};
    font-style: italic;
    font-size: 24px;
    color: ${(props) => props.theme.colors.greyDark20};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      border-left: 2px solid ${(props) => props.theme.colors.greyDark40};
      font-size: 16px;
    }

    @media screen and (min-width: ${(props) => props.theme.layout.minWidthEmph}) {
      width: 130%;
      margin: 0 -15% 2rem -15%;
      font-size: 24px;
      padding-left: 2rem;
      border-left: 4px solid ${(props) => props.theme.colors.greyDark40};
    }

    &:before {
      content: open-quote;
      font-family: ${(props) => props.theme.fonts.serif};
      font-size: 2em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    &:after {
      content: close-quote;
      font-family: ${(props) => props.theme.fonts.serif};
      font-size: 2em;
      line-height: 0.1em;
      margin-left: 0.025em;
      vertical-align: -0.4em;
    }
  }
`

const Quote = ({ children }) => (
  <QuoteContainer>
    <Section>
      <Container>
        <blockquote>{children}</blockquote>
      </Container>
    </Section>
  </QuoteContainer>
)

export default Quote
