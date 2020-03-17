import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { FeaturedSection, ImageCaption, Text } from '../components/slices'

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

const Slices = ({ slices }) => {
  return (
    slices?.map((slice, index) => {
      const res = (() => {
        switch (slice.type) {
          case 'text':
            return (
              <div key={index} className='slice-wrapper'>
                {<Text slice={slice} />}
              </div>
            )

          case 'image_with_caption':
            return (
              <div key={index} className='slice-wrapper'>
                {<ImageCaption slice={slice} />}
              </div>
            )

          case 'featured_section':
            return (
              <div key={index}>
                <FeaturedSection slice={slice} />
              </div>
            )

          default:
            return
        }
      })()
      return res
    }) ?? null
  )
}

const About = ({ about }) => (
  <>
    <div className='section'>
      <div className='container about-header'>
        <div className='container hero-image'>
          <div className='hero-image'>
            <Img fluid={about.hero_imageSharp.childImageSharp.fluid} alt={about.hero_image.alt} />
          </div>
        </div>
        <div className='container section-header'>
          <h1 className='section-header'>{RichText.asText(about.page_header)}</h1>
        </div>
      </div>
    </div>
    <div className='section'>
      <div className='container about-container'>
        <Slices slices={about.body} />
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
