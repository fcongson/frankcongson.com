'use client'

import { Hero, PageHeader, useTheme } from '@fcongson/lagom-ui'
import { FillImageBox } from 'components/FillImageBox'
import { ForestrySections } from 'components/forestry'
import { Layout } from 'components/layouts'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
  .lagom-container {
    max-width: ${(props) => props.theme.sizes!.maxWidthContent};
  }
`

type AboutData = {
  hero_image: { image: string; alt_text: string }
  page_header: string
  sections: any[]
}

export const AboutClient: React.FunctionComponent<{ about: AboutData }> = ({ about }) => {
  const theme = useTheme()
  const heroImagePath = resolveImagePath(about.hero_image.image)

  return (
    <Layout overlayHeader>
      <Hero
        image={
          <FillImageBox>
            <Image src={heroImagePath ?? ''} alt={about.hero_image.alt_text} fill style={{ objectFit: 'cover' }} />
          </FillImageBox>
        }
      >
        <PageHeader>{about.page_header}</PageHeader>
      </Hero>
      <AboutContainer theme={theme}>
        <ForestrySections sections={about.sections} />
      </AboutContainer>
    </Layout>
  )
}
