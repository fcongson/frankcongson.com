import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import { FeaturedSection } from '../components/slices'

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
            page_header
            page_text
            body {
              __typename
              ... on PRISMIC_HomeBodyFeatured_section {
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

const Slices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.type) {
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
  })
}

const Home = ({ home }) => (
  <>
    <div className='section' data-wio-id={home._meta.id}>
      <div className='container'>
        <img className='hero-image' src={home.hero_image.url} alt={home.hero_image.alt} />
      </div>
    </div>
    <div className='section'>
      <div className='container'>
        <h1 className='section-header'>{RichText.asText(home.page_header)}</h1>
        <p className='section-text'>{RichText.asText(home.page_text)}</p>
      </div>
    </div>
    <Slices slices={home.body} />
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allHomes.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <Home home={doc.node} />
    </Layout>
  )
}
