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
      allHomes(uid: null) {
        edges {
          node {
            _meta {
              id
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
            body {
              __typename
              ... on PRISMIC_HomeBodyFeatured_section {
                type
                label
                primary {
                  section_image
                  section_imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 1120, quality: 100) {
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

  h1 {
    font-weight: bold;
    font-size: 121.5px;
    line-height: 148px;
    margin: 0 auto 64px auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 54px;
      line-height: 66px;
      margin: 0 auto 32px auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      font-size: 36px;
      line-height: 44px;
    }
  }

  p {
    font-weight: normal;
    font-size: 20px;
    max-width: 544px;
    margin: 0 auto 64px auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 16px;
      margin: 0 auto 32px auto;
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthMobileLandscape}) {
      max-width: 440px;
      padding: 0 16px 0 16px;
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
          <h1>{RichText.asText(home.page_header)}</h1>
          <p>{RichText.asText(home.page_text)}</p>
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
