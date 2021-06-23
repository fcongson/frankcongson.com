import { LinkButton } from '@fcongson/lagom-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Mdx, MdxEdge } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'
import { Container, Section } from './styles'

const PostSummaryContainer = styled.div`
  ${Container} {
    max-width: 736px;
  }

  h2 {
    margin: 1rem 0;
    color: ${(props) => props.theme.colors.greys[0]};
    text-align: left;
    a {
      padding: 0;
      border: none;
      &:hover {
        border: none;
      }
    }
  }
`

const PostSummary: React.FunctionComponent<{ post: Mdx }> = ({ post }) => {
  const { slug, title, date, featured_image } = post.frontmatter ?? {}
  const to = `/blog/${slug}`
  return (
    <PostSummaryContainer key={post.id}>
      <Section>
        <Container>
          {!!featured_image && (
            <Link to={to}>
              <GatsbyImage image={featured_image.childImageSharp?.gatsbyImageData} alt={title ?? ''} />
            </Link>
          )}
          <h2>
            <Link to={to}>{title}</Link>
          </h2>
          <p>
            <time>{date}</time>
          </p>
          <p>{post.excerpt}</p>
          <LinkButton to={to}>Read more</LinkButton>
        </Container>
      </Section>
    </PostSummaryContainer>
  )
}

export const BlogPosts: React.FunctionComponent<{ posts: MdxEdge[] }> = ({ posts }) => {
  if (!posts) return null

  return (
    <>
      {posts.map((post) => (
        <PostSummary post={post.node} key={post.node.id} />
      ))}
    </>
  )
}
