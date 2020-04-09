import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { PageHeader } from '../components/styles'

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
    <Hero
      image={
        <Img
          fluid={blog.hero_imageSharp.childImageSharp.fluid}
          alt={blog.hero_image.alt}
          style={{ height: '100%' }}
          imgStyle={{ opacity: 0.5 }}
        />
      }
      content={<PageHeader>{RichText.asText(blog.page_header)}</PageHeader>}
    />
    <BlogPosts />
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allBlogs.edges.slice(0, 1).pop()

  if (!doc) return null

  const { seo_title, seo_description, seo_keywords, seo_image, _meta } = doc.node

  return (
    <Layout overlayHeader>
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
