'use client'

import { Container, Hero, PageHeader, Section, useTheme } from '@fcongson/lagom-ui'
import { BlogPosts } from 'components/BlogPosts'
import { FillImageBox } from 'components/FillImageBox'
import { Layout } from 'components/layouts'
import blog from 'content/data/blog.json'
import type { Post } from 'lib/content-types'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.div`
  text-align: center;
  .previous {
    padding-right: 1rem;
  }
  .next {
    padding-left: 1rem;
  }
  a {
    padding: 0;
    border: none;
    &:hover {
      border: none;
    }
  }
`

const Pagination: React.FunctionComponent<{ numPages: number; currentPage: number }> = ({ numPages, currentPage }) => {
  const previousPage = currentPage - 1
  const previousTo = previousPage > 1 ? `/blog/page/${previousPage}/` : '/blog/'
  const nextTo = `/blog/page/${currentPage + 1}/`
  return (
    <PaginationContainer>
      <Section>
        <Container>
          {currentPage > 1 && (
            <Link className='previous' href={previousTo}>
              ← Newer
            </Link>
          )}
          {currentPage < numPages && (
            <Link className='next' href={nextTo}>
              Older →
            </Link>
          )}
        </Container>
      </Section>
    </PaginationContainer>
  )
}

export const BlogListClient: React.FunctionComponent<{
  posts: Post[]
  numPages: number
  currentPage: number
}> = ({ posts, numPages, currentPage }) => {
  useTheme()
  const heroImagePath = resolveImagePath(blog.hero_image.image)

  return (
    <Layout overlayHeader>
      <Hero
        image={
          <FillImageBox>
            <Image src={heroImagePath ?? ''} alt={blog.hero_image.alt_text} fill style={{ objectFit: 'cover' }} />
          </FillImageBox>
        }
      >
        <PageHeader>{blog.page_header}</PageHeader>
      </Hero>
      <BlogPosts posts={posts} />
      {numPages > 1 && <Pagination numPages={numPages} currentPage={currentPage} />}
    </Layout>
  )
}
