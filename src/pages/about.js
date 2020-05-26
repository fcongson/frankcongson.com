import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Slices } from '../components/slices'
import { PageHeader } from '../components/styles'

export const query = graphql`
  {
    prismic {
      allAbouts(uid: "about") {
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
              ...AboutBodyText
              ...AboutBodyImage
              ...AboutBodyFeatured
            }
          }
        }
      }
    }
  }

  fragment AboutBodyText on PRISMIC_AboutBodyText {
    type
    label
    primary {
      text
    }
  }

  fragment AboutBodyImage on PRISMIC_AboutBodyImage_with_caption {
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

  fragment AboutBodyFeatured on PRISMIC_AboutBodyFeatured_section {
    type
    label
    primary {
      section_image
      section_header
      section_text
      call_to_action_text
      call_to_action {
        _linkType
        __typename
        ... on PRISMIC__Document {
          _meta {
            uid
          }
        }
      }
    }
  }
`

const AboutContainer = styled.div`
  max-width: ${(props) => props.theme.layout.maxWidthPage};
  margin: 0 auto 4rem auto;
`

const About = ({ about }) => (
  <>
    <Hero
      image={
        <Img
          fluid={about.hero_imageSharp.childImageSharp.fluid}
          alt={about.hero_image.alt}
          style={{ height: '100%' }}
          imgStyle={{ opacity: 0.25 }}
        />
      }
      content={<PageHeader>{RichText.asText(about.page_header)}</PageHeader>}
    />
    <AboutContainer>
      <Slices slices={about.body} />
    </AboutContainer>
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allAbouts.edges.slice(0, 1).pop()

  if (!doc) return null

  const { seo_title, seo_description, seo_keywords, seo_image, _meta } = doc.node

  return (
    <Layout overlayHeader>
      <SEO
        title={seo_title}
        desc={seo_description}
        keywords={seo_keywords}
        image={seo_image}
        pathname={`/${_meta.uid}`}
      />
      <About about={doc.node} />
    </Layout>
  )
}
