import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import Layout from '../components/layouts'
import { Slices } from '../components/slices'

// Query for the Blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
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
              __typename
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
              ... on PRISMIC_PostBodyQuote {
                type
                label
                primary {
                  quote
                }
              }
              ... on PRISMIC_PostBodyImage_with_caption {
                type
                label
                primary {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 1120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  caption
                }
              }
            }
          }
        }
      }
    }
  }
`

// Display the title, date, and content of the Post
const PostBody = ({ blogPost }) => {
  const titled = blogPost.title.length !== 0
  return (
    <>
      <div className='section'>
        <div className='container post-header post-container'>
          <div className='back'>
            <Link to='/blog'>back to list</Link>
          </div>
          <h1>{titled ? RichText.asText(blogPost.title) : 'Untitled'}</h1>
        </div>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <div className='section'>
        <div className='container post-container'>
          <Slices slices={blogPost.body} />
        </div>
      </div>
    </>
  )
}

export default props => {
  // Define the Post content returned from Prismic
  const doc = props.data.prismic.allPosts.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout>
      <PostBody blogPost={doc.node} />
    </Layout>
  )
}
