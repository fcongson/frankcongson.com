import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
            images {
              image
              imageSharp {
                childImageSharp {
                  fluid(maxWidth: 1120, quality: 100) {
                    ...GatsbyImageSharpFluid
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

const Photography = ({ photography }) => (
  <div className='section'>
    <div className='container'>
      <h1 className='section-header'>{RichText.asText(photography.page_header)}</h1>
    </div>
    <div className='container photography-container'>
      {photography.images.map(({ image, imageSharp }) => (
        <div className='photography-image' key={image.url}>
          <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
        </div>
      ))}
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
