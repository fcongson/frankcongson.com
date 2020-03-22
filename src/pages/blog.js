import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/layouts'
import SEO from '../components/SEO'

export const query = graphql`
  {
    prismic {
      allBlogs(uid: "blog") {
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
          }
        }
      }
    }
  }
`

const Blog = ({ blog }) => (
  <>
    <div className='section'>
      <div className='container blog-header'>
        <div className='hero-image'>
          <Img fluid={blog.hero_imageSharp.childImageSharp.fluid} alt={blog.hero_image.alt} />
        </div>
        <h1 className='section-header'>{RichText.asText(blog.page_header)}</h1>
      </div>
    </div>
    <BlogPosts />
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allBlogs.edges.slice(0, 1).pop()

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
      <Blog blog={doc.node} />
    </Layout>
  )
}
