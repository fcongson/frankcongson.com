import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Slices } from '../components/slices'
import { Container, Section } from '../components/styles'

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
    max-width: 800px;
  }
`

const PageHeader = styled.h1`
  font-family: ${props => props.theme.fonts.sanSerif};
  font-style: normal;
  font-weight: bold;
  font-size: 121.5px;
  line-height: 148px;
  text-align: center;
  margin: 0 auto 4rem auto;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
    font-size: 54px;
    line-height: 66px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    font-size: 36px;
    line-height: 44px;
  }
`

export default ({ data }) => {
  const doc = data.prismic.allPages.edges.slice(0, 1).pop()

  if (!doc) return null

  const { seo_title, seo_description, seo_keywords, seo_image, _meta, page_header, body } = doc.node

  return (
    <Layout>
      <SEO
        title={seo_title}
        desc={seo_description}
        keywords={seo_keywords}
        image={seo_image}
        pathname={`/${_meta.uid}`}
      />
      <Page>
        <Section>
          <Container>
            <PageHeader>{RichText.asText(page_header)}</PageHeader>
          </Container>
        </Section>
        <Slices slices={body} />
      </Page>
    </Layout>
  )
}
