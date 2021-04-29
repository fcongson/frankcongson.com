import ForestrySections, { ForestrySection } from 'components/forestry'
import Hero from 'components/Hero'
import Layout from 'components/layouts'
import Seo from 'components/SEO'
import { Container, PageHeader, Section } from 'components/styles'
import { graphql } from 'gatsby'
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
          imageProps={{
            image: heroImage?.childImageSharp?.gatsbyImageData,
            alt: hero_image.alt_text ?? '',
            style: { height: '100%', opacity: 0.4 },
          }}>
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
