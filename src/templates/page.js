import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Slices } from '../components/slices'

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
              ...PageBodyFeatured
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
      caption
    }
  }

  fragment PageBodyFeatured on PRISMIC_PageBodyFeatured_section {
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

const Page = ({ page }) => (
  <>
    <div className='section'>
      <div className='container'>
        <h1 className='section-header'>{RichText.asText(page.page_header)}</h1>
      </div>
    </div>
    <div className='section'>
      <div className='container page-container'>
        <Slices slices={page.body} />
      </div>
    </div>
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allPages.edges.slice(0, 1).pop()

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
      <Page page={doc.node} />
    </Layout>
  )
}
