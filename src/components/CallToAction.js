import React from 'react'
import styled from 'styled-components'
import { LinkButton } from './styles'

const CallToActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 81px;
    line-height: 99px;
    text-align: center;
    margin: 0 auto 4rem auto;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 54px;
      line-height: 66px;
      margin: 0 auto 2rem auto;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    font-weight: normal;
    font-size: 20px;
    text-align: center;
    margin: 0 auto 4rem auto;
    padding: 0 2rem 0 2rem;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 16px;
      margin: 0 auto 2rem auto;
      padding: 0 1rem 0 1rem;
    }
  }

  ${LinkButton} {
    margin: 0 auto;
  }
`

const CallToAction = ({ header, text, callToAction, callToActionText }) => (
  <CallToActionContainer>
    {!!header && <h2>{header}</h2>}
    {!!text && <p>{text}</p>}
    {!!callToAction && !!callToActionText && <LinkButton to={`/${callToAction}`}>{callToActionText}</LinkButton>}
  </CallToActionContainer>
)

export default CallToAction
