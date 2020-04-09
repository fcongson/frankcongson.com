import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React, { useReducer } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, PageHeader, Section } from '../components/styles'

export const query = graphql`
  {
    prismic {
      allPhotographys(uid: "photography") {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            hero_image
            hero_imageSharp {
              childImageSharp {
                fluid(maxWidth: 1120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            page_header
            seo_title
            seo_description
            seo_keywords
            seo_image
            images {
              image
              imageSharp {
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
  }
`

const PhotographyContainer = styled.div`
  .photography-image {
    width: 100%;
    padding: 0 4rem;

    &:not(:last-of-type) {
      padding-bottom: 2rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      padding: 0 2rem;

      &:not(:last-of-type) {
        padding-bottom: 1rem;
      }
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      padding: 0;

      &:not(:last-of-type) {
        padding-bottom: 0.5rem;
      }
    }
  }
`

const limit = 5

const Photography = ({ photography }) => {
  const [{ images }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'next':
          return { images: photography.images.slice(0, state.images.length + limit) }
        default:
          return
      }
    },
    { images: photography.images.slice(0, limit) }
  )

  return (
    <>
      <Hero
        image={
          <Img
            fluid={photography.hero_imageSharp.childImageSharp.fluid}
            alt={photography.hero_image.alt}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.5 }}
          />
        }
        content={<PageHeader>{RichText.asText(photography.page_header)}</PageHeader>}
      />
      <PhotographyContainer>
        <Section>
          <Container>
            <InfiniteScroll
              dataLength={images.length}
              next={() => dispatch({ type: 'next' })}
              hasMore={images.length < photography.images.length}>
              {images.map(({ image, imageSharp }) => (
                <div className='photography-image' key={image.url}>
                  <Img fluid={imageSharp.childImageSharp.fluid} alt={image.alt} />
                </div>
              ))}
            </InfiniteScroll>
          </Container>
        </Section>
      </PhotographyContainer>
    </>
  )
}

export default ({ data }) => {
  const doc = data.prismic.allPhotographys.edges.slice(0, 1).pop()

  if (!doc) return null

  const { seo_title, seo_description, seo_keywords, seo_image, _meta } = doc.node

  return (
    <Layout overlayHeader>
      <SEO
        title={seo_title}
        desc={seo_description}
        keywords={seo_keywords}
        image={seo_image}
        pathname={`/${_meta.uid}`}
      />
      <Photography photography={doc.node} />
    </Layout>
  )
}
