import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, Section } from '../components/styles'

const shortcodes = { Link } // Provide common components here

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        seo {
          title
          description
          keywords
          image {
            publicURL
          }
          alt_text
        }
        title
        date(formatString: "MMM DD, YYYY")
        keywords
        slug
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
`

const Post = styled.div`
  margin: 0 auto 8rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 0 auto 4rem auto;
  }

  ${Container} {
    max-width: ${(props) => props.theme.layout.maxWidthPage};
    /* margin-bottom: 0; */
  }
`

const PostHeader = styled.div`
  padding-bottom: 2rem;

  .back {
    color: ${(props) => props.theme.colors.greyDark20};
    display: block;
    max-width: ${(props) => props.theme.layout.maxWidthContainer};
    margin: 0 auto 2em auto;
    font-family: ${(props) => props.theme.fonts.sanSerif};
    font-size: 16px;

    &:before {
      content: '←';
      display: inline-block;
      position: relative;
      margin-right: 0.5rem;
    }

    a {
      color: ${(props) => props.theme.colors.greyDark20};
      font-weight: normal;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 200ms ease-in-out;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.colors.greyDark20};
      }
    }
  }
`

const PostFooter = styled.div`
  background-color: ${(props) => props.theme.colors.greyLight40};

  ${Container} {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: ${(props) => props.theme.layout.maxWidthPage};
    margin-bottom: 0;
  }

  a {
    color: ${(props) => props.theme.colors.greyDark40};
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.oliveLight40};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.greyDark40};
    }
  }
`

export default function PageTemplate({ data }) {
  const {
    frontmatter: { title, slug, featured_image, seo },
    body,
  } = data.mdx

  return (
    <Layout>
      <SEO
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seo?.image?.publicURL}
        pathname={`/${slug}`}
        article
      />
      <Post>
        <Section>
          <Container>
            <PostHeader>
              <div className='back'>
                <Link to='/blog'>back to list</Link>
              </div>
              <h1>{title ? title : 'Untitled'}</h1>
            </PostHeader>
          </Container>
        </Section>
        <Section>
          <Container>{!!featured_image && <Img fluid={featured_image.childImageSharp.fluid} alt={title} />}</Container>
        </Section>
        <Section>
          <Container>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </Container>
        </Section>
      </Post>
      <PostFooter>
        <Section>
          <Container>
            <h3>
              Thoughts? Send me a{' '}
              <a href='https://twitter.com/fcongson' target='_blank' rel='noopener noreferrer'>
                tweet
              </a>
              !
            </h3>
          </Container>
        </Section>
      </PostFooter>
    </Layout>
  )
}
