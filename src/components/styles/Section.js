import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  max-width: ${props => props.theme.layout.maxWidthSection};
  margin: 0 auto;

  /* Fallback */
  padding: 0 1rem;

  /* iOS 11 */
  padding-left: calc(max(1rem, constant(safe-area-inset-left)));
  padding-right: calc(max(1rem, constant(safe-area-inset-right)));

  /* iOS 11.2+ */
  padding-left: calc(max(1rem, env(safe-area-inset-left)));
  padding-right: calc(max(1rem, env(safe-area-inset-right)));

  h1,
  h2 {
    font-weight: bold;
    font-size: 81px;
    line-height: 99px;
    margin: 0 auto 4rem auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 54px;
      line-height: 66px;
      margin: 0 auto 2rem auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    font-weight: normal;
    font-size: 20px;
    margin: 0 auto 4rem auto;
    padding: 0 2rem 0 2rem;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 16px;
      margin: 0 auto 2rem auto;
      padding: 0 1rem 0 1rem;
    }
  }
`
