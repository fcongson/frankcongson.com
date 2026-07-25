'use client'

import { Container, LinkButton, Section } from '@fcongson/lagom-ui'
import { NextLinkAdapter } from 'components/NextLinkAdapter'
import type { Post } from 'lib/content-types'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const PostSummaryContainer = styled.div`
  .lagom-container {
    max-width: 736px;
  }

  h2 {
    margin: 1rem 0;
    color: var(--lagom-semantic-color-fg-default);
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`

const PostSummary: React.FunctionComponent<{ post: Post }> = ({ post }) => {
  const { slug, title, date, featured_image, alt_text, excerpt } = post.frontmatter
  const to = `/blog/${slug}/`
  const imagePath = resolveImagePath(featured_image)
  return (
    <PostSummaryContainer>
      <Section>
        <Container>
          {!!imagePath && (
            <Link href={to}>
              <ImageWrapper>
                <Image src={imagePath} alt={alt_text ?? title ?? ''} fill style={{ objectFit: 'cover' }} />
              </ImageWrapper>
            </Link>
          )}
          <h2>
            <Link href={to}>{title}</Link>
          </h2>
          <p>
            <time>{post.dateFormatted ?? date}</time>
          </p>
          <p>{excerpt}</p>
          <LinkButton to={to} Component={NextLinkAdapter}>
            Read more
          </LinkButton>
        </Container>
      </Section>
    </PostSummaryContainer>
  )
}

export const BlogPosts: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  if (!posts) return null

  return (
    <>
      {posts.map((post) => (
        <PostSummary post={post} key={post.frontmatter.slug} />
      ))}
    </>
  )
}
