import styled from 'styled-components'
import { LinkButton, SectionHeader } from './styles'

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

  ${LinkButton} {
    margin: 0 auto;
  }
`

const CallToAction = ({ header, text, callToAction, callToActionText }) => (
  <CallToActionContainer>
    {!!header && <SectionHeader>{header}</SectionHeader>}
    {!!text && <p>{text}</p>}
    {!!callToAction && !!callToActionText && <LinkButton to={`/${callToAction}`}>{callToActionText}</LinkButton>}
  </CallToActionContainer>
)

export default CallToAction
