import styled from 'styled-components'
import Layout from '../components/layouts'
import { PageHeader } from '../components/styles'

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.greyDark20};
    font-weight: normal;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.greyDark20};
    }
  }
`

export default () => (
  <Layout>
    <NotFound>
      <PageHeader>404</PageHeader>
      <h2>Page not found</h2>
      <p>
        <a href='/'>Return to homepage</a>
      </p>
    </NotFound>
  </Layout>
)
