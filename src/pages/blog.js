import { graphql } from 'gatsby'
import React from 'react'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/layouts'

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    prismic {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  // Define the Blog Post content returned from Prismic
  const posts = data.prismic.allPosts.edges

  return (
    <Layout>
      <h1>Blog</h1>
      <BlogPosts posts={posts} />
    </Layout>
  )
}
