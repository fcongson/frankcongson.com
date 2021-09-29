import { Container, Hero, PageHeader, Section } from '@fcongson/lagom-ui'
import { ForestrySection, ForestrySections } from 'components/forestry'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Query } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'
import { useImage } from 'utils/useImage'

export const PAGE_QUERY = graphql`
  query PAGE($id: String) {
    pagesJson(id: { eq: $id }) {
      id
      slug
      seo {
        title
        description
        keywords
        image
        alt_text
      }
      hero_image {
        image
        alt_text
      }
      page_header
      sections {
        template
        text
      }
    }
  }
`

const PageContent = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`

const Page: React.FunctionComponent<{ data: Query }> = ({ data }) => {
  const { slug, seo, hero_image, page_header, sections } = data.pagesJson ?? {}
  const getImage = useImage()
  const heroImage = getImage(hero_image?.image ?? undefined)
  const seoImage = getImage(seo?.image ?? undefined)

  return (
    <Layout overlayHeader={!!hero_image}>
      <Seo
        title={seo?.title ?? undefined}
        desc={seo?.description ?? undefined}
        keywords={seo?.keywords?.join(', ')}
        image={seoImage?.publicURL ?? undefined}
        pathname={`/${slug}`}
      />
      {!!hero_image && (
        <Hero
          image={
            <GatsbyImage
              image={heroImage?.childImageSharp?.gatsbyImageData}
              alt={hero_image.alt_text ?? ''}
              style={{ height: '100%', opacity: 0.4 }}
            />
          }>
          <PageHeader>{page_header}</PageHeader>
        </Hero>
      )}
      <PageContent>
        {!hero_image && (
          <Section>
            <Container>
              <PageHeader>{page_header}</PageHeader>
            </Container>
          </Section>
        )}
        <ForestrySections sections={sections as ForestrySection[]} />
      </PageContent>
    </Layout>
  )
}

export default Page
