import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import SEO from '../components/SEO'

export const query = graphql`
  {
    prismic {
      allPhotographys(uid: "photography") {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            hero_image
            page_header
            seo_title
            seo_description
            seo_keywords
            seo_image
            images {
              image
            }
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
    <div className='container photography-container'>
      {photography.images.map(({ image, index }) => {
        return <img key={index} className='photography-image' src={image.url} alt={image.alt} />
      })}
    </div>
  </div>
)

export default ({ data }) => {
  const doc = data.prismic.allPhotographys.edges.slice(0, 1).pop()

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
      <Photography photography={doc.node} />
    </Layout>
  )
}
