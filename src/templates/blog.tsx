import { Container, PageHeader, Section } from '@fcongson/lagom-ui'
import { BlogPosts } from 'components/BlogPosts'
import { Hero } from 'components/Hero'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import blog from 'content/data/blog.json'
import { graphql, Link } from 'gatsby'
import { Query } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'
import { useImage } from 'utils/useImage'

export const BLOG_LIST_QUERY = graphql`
  query BLOG_LIST($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
            keywords
            featured_image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`

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

type PaginationProps = { numPages: number; currentPage: number }

const Pagination: React.FunctionComponent<PaginationProps> = ({ numPages, currentPage }) => {
  const previousPage = currentPage - 1
  const nextPage = currentPage + 1
  const previousTo = previousPage > 1 ? `/blog/page/${previousPage}` : '/blog'
  const nextTo = `/blog/page/${nextPage}`
  return (
    <PaginationContainer>
      <Section>
        <Container>
          {currentPage > 1 && (
            <Link className='previous' to={previousTo}>
              ← Newer
            </Link>
          )}
          {currentPage < numPages && (
            <Link className='next' to={nextTo}>
              Older →
            </Link>
          )}
        </Container>
      </Section>
    </PaginationContainer>
  )
}

const Blog: React.FunctionComponent<{ data: Query; pageContext: PaginationProps }> = ({
  data: { allMdx },
  pageContext: { numPages, currentPage },
}) => {
  const getImage = useImage()
  const heroImage = getImage(blog.hero_image.image)
  const seoImage = getImage(blog.seo.image)
  const { seo } = blog

  return (
    <Layout overlayHeader>
      <Seo
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage?.publicURL ?? undefined}
        pathname='/blog'
      />
      <Hero
        imageProps={{
          image: heroImage?.childImageSharp?.gatsbyImageData,
          alt: blog.hero_image.alt_text,
          style: { height: '100%', opacity: 0.7 },
        }}>
        <PageHeader>{blog.page_header}</PageHeader>
      </Hero>
      <BlogPosts posts={allMdx.edges} />
      {numPages > 1 && <Pagination numPages={numPages} currentPage={currentPage} />}
    </Layout>
  )
}

export default Blog
