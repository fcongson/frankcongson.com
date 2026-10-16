'use client'

import { Container, Hero, PageHeader, Section, useTheme } from '@fcongson/lagom-ui'
import { FillImageBox } from 'components/FillImageBox'
import { PageSections } from 'components/sections'
import { Layout } from 'components/layouts'
import type { ContentPage } from 'lib/content-types'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const PageContent = styled.div`
  .lagom-container {
    max-width: ${(props) => props.theme.sizes!.maxWidthContent};
  }
`

export const ContentPageClient: React.FunctionComponent<{ page: ContentPage }> = ({ page }) => {
  const { hero_image, page_header, sections } = page
  const theme = useTheme()
  const heroImagePath = resolveImagePath(hero_image?.image)

  return (
    <Layout overlayHeader={!!hero_image}>
      {!!hero_image && (
        <Hero
          image={
            <FillImageBox>
              <Image src={heroImagePath ?? ''} alt={hero_image.alt_text ?? ''} fill style={{ objectFit: 'cover' }} />
            </FillImageBox>
          }
        >
          <PageHeader>{page_header}</PageHeader>
        </Hero>
      )}
      <PageContent theme={theme}>
        {!hero_image && (
          <Section>
            <Container>
              <PageHeader>{page_header}</PageHeader>
            </Container>
          </Section>
        )}
        <PageSections sections={sections} />
      </PageContent>
    </Layout>
  )
}
