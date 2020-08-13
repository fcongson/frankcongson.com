import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import blog from '../../content/data/blog.json'
import BlogPosts from '../components/BlogPosts'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import { Container, PageHeader, Section } from '../components/styles'
import { useImageSharp } from '../utils/useImageSharp'

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
            tags
            featured_image {
              childImageSharp {
                fluid(maxWidth: 1120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
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

const Pagination = ({ numPages, currentPage }) => {
  const previousPage = currentPage - 1
  const nextPage = currentPage + 1
  const previousTo = previousPage > 1 ? `/blog/page/${previousPage}` : '/blog'
  const nextTo = `/blog/page/${nextPage}`
  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <Link className='previous' to={previousTo}>
          ← Newer
        </Link>
      )}
      Page {currentPage} of {numPages}
      {currentPage < numPages && (
        <Link className='next' to={nextTo}>
          Older →
        </Link>
      )}
    </PaginationContainer>
  )
}

const Blog = ({ data: { allMdx }, pageContext: { numPages, currentPage } }) => {
  const image = useImageSharp()(blog.hero_image.image)

  return (
    <Layout overlayHeader>
      {/* <SEO title={seo_title} desc={seo_description} keywords={seo_keywords} image={seo_image} pathname='/blog' /> */}
      <Hero
        image={
          <Img
            fluid={image.childImageSharp.fluid}
            alt={blog.hero_image.alt_text}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.5 }}
          />
        }
        content={<PageHeader>{blog.page_header}</PageHeader>}
      />
      <BlogPosts posts={allMdx.edges} />
      <Section>
        <Container>
          <Pagination numPages={numPages} currentPage={currentPage} />
        </Container>
      </Section>
    </Layout>
  )
}

export default Blog
