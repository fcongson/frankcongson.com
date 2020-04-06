import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import { Slices } from '../components/slices'
import { Container, Section } from '../components/styles'

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

const Post = styled.div`
  margin: 0 auto 8rem auto;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 0 auto 4rem auto;
  }

  ${Container} {
    max-width: 800px;
    margin-bottom: 0;
  }
`

const PostHeader = styled.div`
  padding: 20px;

  .back {
    color: ${props => props.theme.colors.greyDark20};
    display: block;
    max-width: ${props => props.theme.layout.maxWidthContainer};
    margin: 0 auto 2em auto;
    font-family: ${props => props.theme.fonts.sanSerif};
    font-size: 16px;

    &:before {
      content: '←';
      display: inline-block;
      position: relative;
      margin-right: 0.5rem;
    }

    a {
      color: ${props => props.theme.colors.greyDark20};
      padding-bottom: 0.25rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 100ms ease-in-out;

      &:hover {
        border-bottom: 1px solid ${props => props.theme.colors.greyDark20};
      }
    }
  }
`

export default props => {
  const doc = props.data.prismic.allPosts.edges.slice(0, 1).pop()

  if (!doc) return null

  const { title, body } = doc.node
  const titled = title.length !== 0

  return (
    <Layout>
      <Post>
        <Section>
          <Container>
            <PostHeader>
              <div className='back'>
                <Link to='/blog'>back to list</Link>
              </div>
              <h1>{titled ? RichText.asText(title) : 'Untitled'}</h1>
            </PostHeader>
          </Container>
        </Section>
        <Slices slices={body} />
      </Post>
    </Layout>
  )
}
