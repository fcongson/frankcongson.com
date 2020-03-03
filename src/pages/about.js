import { graphql } from 'gatsby'
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
            page_header
            seo_title
            seo_description
            seo_keywords
            seo_image
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
