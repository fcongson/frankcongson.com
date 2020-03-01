import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'

export const query = graphql`
  {
    prismic {
      allPhotographys(uid: "photography") {
        edges {
          node {
            _meta {
              id
              type
            }
            page_header
          }
        }
      }
    }
  }
`

const Photography = ({ photography }) => (
  <div className='section'>
    <div className='container'>
      <h1 className='section-header'>{RichText.asText(photography.page_header)}</h1>
    </div>
  </div>
)

export default ({ data }) => {
  const doc = data.prismic.allPhotographys.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <Photography photography={doc.node} />
    </Layout>
  )
}
