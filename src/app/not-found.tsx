'use client'

import { PageHeader } from '@fcongson/lagom-ui'
import { Layout } from 'components/layouts'
import Link from 'next/link'
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

export default function NotFound() {
  return (
    <Layout>
      <Custom404Content>
        <PageHeader>404</PageHeader>
        <h2>Page not found</h2>
        <p>
          <Link href='/'>Return to homepage</Link>
        </p>
      </Custom404Content>
    </Layout>
  )
}
