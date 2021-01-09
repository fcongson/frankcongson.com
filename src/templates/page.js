import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import ForestrySections from '../components/forestry'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, PageHeader, Section } from '../components/styles'
import { useImage } from '../utils/useImage'

export const pageQuery = graphql`
  query PageQuery($id: String) {
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

const Page = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`

export default ({ data }) => {
  const { slug, seo, hero_image, page_header, sections } = data.pagesJson
  const getImage = useImage()
  const heroImage = getImage(hero_image.image)
  const seoImage = getImage(seo.image)

  return (
    <Layout overlayHeader={!!hero_image}>
      <SEO
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage}
        pathname={`/${slug}`}
      />
      {!!hero_image && (
        <Hero
          image={
            <Img
              fluid={heroImage.childImageSharp.fluid}
              alt={hero_image.alt_text}
              style={{ height: '100%' }}
              imgStyle={{ opacity: 0.25 }}
            />
          }
          content={<PageHeader>{page_header}</PageHeader>}
        />
      )}
      <Page>
        {!hero_image && (
          <Section>
            <Container>
              <PageHeader>{page_header}</PageHeader>
            </Container>
          </Section>
        )}
        <ForestrySections sections={sections} />
      </Page>
    </Layout>
  )
}
