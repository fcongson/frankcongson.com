import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layouts'
import { Slices } from '../components/slices'
import { Container, Section } from '../components/styles'

export const query = graphql`
  {
    prismic {
      allHomes(uid: "home") {
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
                fluid(maxWidth: 2000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            page_header
            page_text
            image
            imageSharp {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            body {
              __typename
              ... on PRISMIC_HomeBodyFeatured_section {
                type
                label
                primary {
                  section_image
                  section_imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                  section_header
                  section_text
                  call_to_action_text
                  call_to_action {
                    _linkType
                    __typename
                    ... on PRISMIC__Document {
                      _meta {
                        uid
                      }
                    }
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

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  z-index: -1000;
`

const HomeContent = styled.div`
  margin-top: 100vh;
  text-align: center;
`

const HomeDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
    flex-direction: column;
  }

  h1 {
    font-weight: bold;
    font-size: 81px;
    line-height: 99px;
    text-align: right;
    margin: 0 auto 4rem auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 54px;
      line-height: 66px;
      margin: 0 auto 2rem auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      font-size: 36px;
      text-align: center;
      line-height: 44px;
    }
  }

  p {
    font-weight: normal;
    font-size: 20px;
    text-align: left;
    margin: 0 auto 4rem auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 16px;
      margin: 0 auto 2rem auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      padding: 0 1rem 0 1rem;
    }
  }

  div.text {
    width: 352px;
    padding-top: 2rem;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      padding-top: 4rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      width: 100%;
      padding-top: 0;
    }
  }

  div.image {
    width: 448px;
    height: 598px;
    margin-left: 8rem;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      height: 448px;
      margin-left: 2rem;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      width: 100%;
      height: 100%;
      margin-left: 0;
      padding: 0 1rem 0 1rem;
    }
  }
`

const Home = ({ home }) => (
  <>
    <HeroImage>
      <Img
        fluid={home.hero_imageSharp.childImageSharp.fluid}
        alt={home.hero_image.alt}
        style={{ height: '100%' }}
        imgStyle={{ objectPosition: 'center bottom' }}
      />
    </HeroImage>
    <HomeContent>
      <Section>
        <Container>
          <HomeDescription>
            <div className='text'>
              <h1>{RichText.asText(home.page_header)}</h1>
              <p>{RichText.asText(home.page_text)}</p>
            </div>
            {!!home.imageSharp && (
              <div className='image'>
                <Img
                  fluid={home.imageSharp.childImageSharp.fluid}
                  alt={home.image.alt}
                  style={{ height: '100%' }}
                  imgStyle={{ objectPosition: 'center center' }}
                />
              </div>
            )}
          </HomeDescription>
        </Container>
      </Section>
      <Slices slices={home.body} />
    </HomeContent>
  </>
)

export default ({ data }) => {
  const doc = data.prismic.allHomes.edges.slice(0, 1).pop()

  if (!doc) return null

  return (
    <Layout page='home'>
      <Home home={doc.node} />
    </Layout>
  )
}
