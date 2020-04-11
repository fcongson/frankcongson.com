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

const PhotographyImage = styled.div`
  height: 100vh;
  display: grid;
  align-items: center;
  margin: 0 auto 4rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletPortrait}) {
    margin: 0 auto 2rem auto;
  }

  ${Container} {
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletPortrait}) {
      flex-direction: column-reverse;
    }
  }

  div.description {
    width: 160px;
    background-color: ${(props) => props.theme.colors.greyDark40};
    color: ${(props) => props.theme.colors.greyLight40};
    font-size: 36px;
    line-height: 44px;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    text-align: center;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletPortrait}) {
      width: 100%;
      height: 64px;
      font-size: 24px;
      line-height: 29px;
      padding: 1rem;
    }
  }

  div.image {
    width: 100%;
    max-height: calc(100vh - 4rem); /* 100vh - margins */
    margin: 0 0 0 2rem;

    picture {
      object-position: left center;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      max-height: calc(100vh - 2rem); /* 100vh - margins */
      margin: 0 0 0 1rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletPortrait}) {
      max-height: calc(100vh - 3rem - 64px); /* 100vh - margins - description height */
      margin: 0 0 1rem 0;

      picture {
        object-position: center center;
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
      <InfiniteScroll
        dataLength={images.length}
        next={() => dispatch({ type: 'next' })}
        hasMore={images.length < photography.images.length}>
        {images.map(({ image, imageSharp }, index) => (
          <PhotographyImage key={image.url}>
            <Section>
              <Container>
                <div className='description'>
                  {index + 1} / {photography.images.length}
                </div>
                <div className='image'>
                  <Img
                    fluid={imageSharp.childImageSharp.fluid}
                    alt={image.alt}
                    style={{ maxHeight: 'inherit' }}
                    imgStyle={{ objectFit: 'contain', objectPosition: 'inherit' }}
                  />
                </div>
              </Container>
            </Section>
          </PhotographyImage>
        ))}
      </InfiniteScroll>
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
