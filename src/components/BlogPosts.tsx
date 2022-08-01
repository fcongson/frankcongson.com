import { Container, LinkButton, Section } from '@fcongson/lagom-ui'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Blog_ListQuery } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'

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

const PostSummary: React.FunctionComponent<{ post: Blog_ListQuery['allMdx']['edges'][0]['node'] }> = ({ post }) => {
  const { slug, title, date, featured_image, alt_text } = post.frontmatter ?? {}
  const to = `/blog/${slug}`
  return (
    <PostSummaryContainer key={post.id}>
      <Section>
        <Container>
          {!!featured_image && (
            <Link to={to}>
              <GatsbyImage image={featured_image.childImageSharp?.gatsbyImageData} alt={alt_text ?? title ?? ''} />
            </Link>
          )}
          <h2>
            <Link to={to}>{title}</Link>
          </h2>
          <p>
            <time>{date}</time>
          </p>
          <p>{post.excerpt}</p>
          <LinkButton to={to} Component={Link}>
            Read more
          </LinkButton>
        </Container>
      </Section>
    </PostSummaryContainer>
  )
}

export const BlogPosts: React.FunctionComponent<{ posts: Blog_ListQuery['allMdx']['edges'] }> = ({ posts }) => {
  if (!posts) return null

  return (
    <>
      {posts.map((post) => (
        <PostSummary post={post.node} key={post.node.id} />
      ))}
    </>
  )
}
