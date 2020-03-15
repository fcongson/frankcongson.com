import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import SEO from '../components/SEO'

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

const About = ({ about }) => (
  <>
    <div className='section'>
      <div className='container'>
        <div className='hero-image'>
          <Img fluid={about.hero_imageSharp.childImageSharp.fluid} alt={about.hero_image.alt} />
        </div>
      </div>
    </div>
    <div className='section'>
      <div className='container'>
        <h1 className='section-header'>{RichText.asText(about.page_header)}</h1>
      </div>
    </div>
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allAbouts.edges.slice(0, 1).pop()

  if (!doc) return null

  const { seo_title, seo_description, seo_keywords, seo_image, _meta } = doc.node

  return (
    <Layout>
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
