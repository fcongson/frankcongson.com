import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Date, RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import { linkResolver } from '../utils/linkResolver'
import { Container, Section } from './styles'

// Query for the Blog Post content in Prismic
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

const PostSummaryContainer = styled.div`
  ${Container} {
    max-width: 736px;
  }

  h2 {
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.greyDark40};
    text-align: left;
  }

  a {
    padding: 0;
    border: none;
    &:hover {
      border: none;
    }
  }

  .blog-post-meta {
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    color: ${(props) => props.theme.colors.greyDark20};
  }
`

// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // Find the first text slice of post's body
  let firstTextSlice = post.body.find((slice) => slice.type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 140
    let text = RichText.asText(firstTextSlice.primary.text)
    let limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return <p>{limitedText.substring(0, limitedText.lastIndexOf(' ')) + '...'}</p>
    } else {
      // If it's shorter than the limit, just show it normally
      return <p>{text}</p>
    }
  } else {
    // If there are no slices of type 'text', return nothing
    return null
  }
}

// Function to retrieve the first image
const firstImage = (post) => {
  let firstImageSlice = post.body.find((slice) => slice.type === 'image_with_caption')
  if (firstImageSlice != null) {
    const { image, imageSharp } = firstImageSlice.primary
    return imageSharp ? (
      <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
    ) : (
      <img src={image.url} alt={image.alt} />
    )
  } else {
    return null
  }
}

// A summary of the Blog Post
const PostSummary = ({ post }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(postDate)
    : ''

  // Default title when post has no title set
  const defaultTitle = 'Untitled'

  return (
    <PostSummaryContainer key={post.id}>
      <Section>
        <Container>
          <Link to={linkResolver(post._meta)}>{firstImage(post)}</Link>
          <h2>
            {/* We render a link to a particular post using the linkResolver for the url and its title */}
            <Link to={linkResolver(post._meta)}>
              {RichText.asText(post.title).length !== 0 ? RichText.asText(post.title) : defaultTitle}
            </Link>
          </h2>
          <p className='blog-post-meta'>
            <time>{postDate}</time>
          </p>
          {/* Renders a small preview of the post's text */}
          {firstParagraph(post)}
        </Container>
      </Section>
    </PostSummaryContainer>
  )
}

const BlogPosts = (props) => {
  // Define the Blog Post content returned from Prismic
  const posts = props.data.prismic.allPosts.edges

  if (!posts) return null

  return posts.map((post) => <PostSummary post={post.node} key={post.node._meta.id} />)
}

export default () => <StaticQuery query={query} render={(data) => <BlogPosts data={data} />} />
