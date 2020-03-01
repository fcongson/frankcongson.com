import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'

export const query = graphql`
  {
    prismic {
      allAbouts(uid: "about") {
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

const About = ({ about }) => (
  <div className='section'>
    <div className='container'>
      <h1 className='section-header'>{RichText.asText(about.page_header)}</h1>
    </div>
  </div>
)

export default ({ data }) => {
  const doc = data.prismic.allAbouts.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <About about={doc.node} />
    </Layout>
  )
}
