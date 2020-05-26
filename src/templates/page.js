import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Slices } from '../components/slices'
import { Container, PageHeader, Section } from '../components/styles'

export const query = graphql`
  query PageQuery($uid: String) {
    prismic {
      allPages(uid: $uid) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid(maxWidth: 1120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            page_header
            seo_title
            seo_description
            seo_keywords
            seo_image
            body {
              __typename
              ...PageBodyText
              ...PageBodyQuote
              ...PageBodyImage
            }
          }
        }
      }
    }
  }

  fragment PageBodyText on PRISMIC_PageBodyText {
    type
    label
    primary {
      text
    }
  }

  fragment PageBodyQuote on PRISMIC_PageBodyQuote {
    type
    label
    primary {
      quote
    }
  }

  fragment PageBodyImage on PRISMIC_PageBodyImage_with_caption {
    type
    label
    primary {
      image
      imageSharp {
        childImageSharp {
          fluid(maxWidth: 1120, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caption
    }
  }
`

const Page = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.layout.maxWidthPage};
  }
`

export default ({ data }) => {
  const doc = data.prismic.allPages.edges.slice(0, 1).pop()

  if (!doc) return null

  const {
    seo_title,
    seo_description,
    seo_keywords,
    seo_image,
    _meta,
    hero_image,
    hero_imageSharp,
    page_header,
    body,
  } = doc.node

  return (
    <Layout overlayHeader={!!hero_image}>
      <SEO
        title={seo_title}
        desc={seo_description}
        keywords={seo_keywords}
        image={seo_image}
        pathname={`/${_meta.uid}`}
      />
      {!!hero_image && (
        <Hero
          image={
            <Img
              fluid={hero_imageSharp.childImageSharp.fluid}
              alt={hero_image.alt}
              style={{ height: '100%' }}
              imgStyle={{ opacity: 0.25 }}
            />
          }
          content={<PageHeader>{RichText.asText(page_header)}</PageHeader>}
        />
      )}
      <Page>
        {!hero_image && (
          <Section>
            <Container>
              <PageHeader>{RichText.asText(page_header)}</PageHeader>
            </Container>
          </Section>
        )}
        <Slices slices={body} />
      </Page>
    </Layout>
  )
}
