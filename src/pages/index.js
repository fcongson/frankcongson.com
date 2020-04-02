import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import { Slices } from '../components/slices'

export const query = graphql`
  {
    prismic {
      allHomes(uid: null) {
        edges {
          node {
            _meta {
              id
              type
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            page_header
            page_text
            body {
              __typename
              ... on PRISMIC_HomeBodyFeatured_section {
                type
                label
                primary {
                  section_image
                  section_imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 1120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
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
            }
          }
        }
      }
    }
  }
`

const Home = ({ home }) => (
  <>
    <div className='hero-image home-hero-image'>
      <Img
        fluid={home.hero_imageSharp.childImageSharp.fluid}
        alt={home.hero_image.alt}
        style={{ height: '100%' }}
        imgStyle={{ objectPosition: 'center bottom' }}
      />
    </div>
    <div className='home-content'>
      <div className='section'>
        <div className='container'>
          <h1 className='section-header'>{RichText.asText(home.page_header)}</h1>
          <p className='section-text'>{RichText.asText(home.page_text)}</p>
        </div>
      </div>
      <Slices slices={home.body} />
    </div>
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allHomes.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout page='home'>
      <Home home={doc.node} />
    </Layout>
  )
}
