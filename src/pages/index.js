import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'

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
            page_description
            body {
              __typename
              ... on PRISMIC_HomeBodyFeatured_section {
                type
                label
                primary {
                  section_image
                  section_title
                  section_description
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

const Home = ({ home }) => (
  <div className='container' data-wio-id={home._meta.id}>
    <div className='hero-image'>
      <img className='hero-image' src={home.hero_image.url} alt={home.hero_image.alt} />
    </div>
    <h1 className='page-header'>{RichText.asText(home.page_header)}</h1>
    <p className='page-description'>{RichText.asText(home.page_description)}</p>
  </div>
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
