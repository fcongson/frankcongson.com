import { MDXProvider } from '@mdx-js/react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, Quote, Section } from '../components/styles'

const shortcodes = {
  Link,
  wrapper: ({ children }) => (
    <Section>
      <Container>{children}</Container>
    </Section>
  ),
  blockquote: Quote,
}

export const blogPostQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        seo {
          image {
            publicURL
          }
          alt_text
        }
        title
        description
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

const Post = styled.article`
  margin: 0 auto 0 auto;

  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`

const PostHeader = styled.header`
  h1 {
    padding-bottom: 2rem;
  }

  .back {
    color: ${(props) => props.theme.colors.greys[1]};
    display: block;
    max-width: ${(props) => props.theme.sizes.maxWidthContainer};
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
      color: ${(props) => props.theme.colors.greys[1]};
      font-weight: normal;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 200ms ease-in-out;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.colors.greys[1]};
      }
    }
  }

  ${Container} {
    margin-bottom: 2rem;
  }
`

const PostFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.greys[4]};

  ${Container} {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
    margin-bottom: 0;
  }

  a {
    color: ${(props) => props.theme.colors.greys[0]};
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.olives[2]};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.greys[0]};
    }
  }
`

export default ({ data }) => {
  const {
    frontmatter: { title, description, keywords, slug, featured_image, seo },
    body,
  } = data.mdx

  return (
    <Layout>
      <SEO
        title={seo.title || title}
        desc={seo.description || description}
        keywords={[...(seo?.keywords ?? []), ...(keywords ?? [])].join(', ')}
        image={seo?.image?.publicURL}
        pathname={`/${slug}`}
        article
      />
      <Post>
        <PostHeader>
          <Section>
            <Container>
              <div className='back'>
                <Link to='/blog'>back to list</Link>
              </div>
              <h1>{title ? title : 'Untitled'}</h1>
              {!!featured_image && <Img fluid={featured_image.childImageSharp.fluid} alt={title} />}
            </Container>
          </Section>
        </PostHeader>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
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
      </Post>
    </Layout>
  )
}
