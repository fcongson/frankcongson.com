import { PageHeader } from '@fcongson/lagom-ui'
import { Layout } from 'components/layouts'
import React from 'react'
import styled from 'styled-components'

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.greys[1]};
    font-weight: normal;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.greys[1]};
    }
  }
`

const NotFound: React.FunctionComponent = () => (
  <Layout>
    <NotFoundContent>
      <PageHeader>404</PageHeader>
      <h2>Page not found</h2>
      <p>
        <a href='/'>Return to homepage</a>
      </p>
    </NotFoundContent>
  </Layout>
)

export default NotFound
