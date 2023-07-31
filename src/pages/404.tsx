import { PageHeader } from '@fcongson/lagom-ui'
import { Layout } from 'components/layouts'
import React from 'react'
import styled from 'styled-components'

const Custom404Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: var(--lagom-semantic-color-fg-subtle);
    font-weight: normal;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 1px solid var(--lagom-semantic-color-fg-subtle);
    }
  }
`

const Custom404: React.FunctionComponent = () => (
  <Layout>
    <Custom404Content>
      <PageHeader>404</PageHeader>
      <h2>Page not found</h2>
      <p>
        <a href='/'>Return to homepage</a>
      </p>
    </Custom404Content>
  </Layout>
)

export default Custom404
