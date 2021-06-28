import { LinkButton, SectionHeader } from '@fcongson/lagom-ui'
import React from 'react'
import styled from 'styled-components'

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    margin: 0 auto 4rem auto;
    padding: 0 2rem 0 2rem;

    ${(props) => props.theme.mediaQueries.large} {
      font-size: 16px;
      margin: 0 auto 2rem auto;
      padding: 0 1rem 0 1rem;
    }
  }
`

export const CallToAction: React.FunctionComponent<{
  header?: string
  text?: string | JSX.Element | (string | JSX.Element)[]
  callToAction?: string
  callToActionText?: string
}> = ({ header, text, callToAction, callToActionText }) => (
  <CallToActionContainer>
    {!!header && <SectionHeader>{header}</SectionHeader>}
    {!!text && <p>{text}</p>}
    {!!callToAction && !!callToActionText && (
      <LinkButton to={`/${callToAction}`} margin='0 auto' backgroundColor='transparent'>
        {callToActionText}
      </LinkButton>
    )}
  </CallToActionContainer>
)
