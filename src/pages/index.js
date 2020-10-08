import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import home from '../../content/data/home.json'
import ForestrySections from '../components/forestry'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import { Container, Section } from '../components/styles'
import { useImage } from '../utils/useImage'

const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
    flex-direction: column;
  }

  div.text {
    width: 352px;
    padding-top: 2rem;

    h1 {
      font-weight: bold;
      font-size: 81px;
      line-height: 99px;
      text-align: right;
      margin: 0 auto 4rem auto;

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
        font-size: 54px;
        line-height: 66px;
        margin: 0 auto 2rem auto;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
        font-size: 36px;
        line-height: 44px;
        text-align: center;
      }
    }

    p {
      font-weight: normal;
      font-size: 20px;
      text-align: left;
      margin: 0 auto 4rem auto;
      padding: 0;

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
        font-size: 16px;
        margin: 0 auto 2rem auto;
        padding: 0 1rem 0 1rem;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
        text-align: center;
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      padding-top: 4rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
      width: 100%;
      padding-top: 0;
    }
  }

  div.image {
    width: 448px;
    height: 598px;
    margin-left: 8rem;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      height: 448px;
      margin-left: 2rem;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
      width: 100%;
      height: 100%;
      margin-left: 0;
      padding: 0 1rem 0 1rem;
    }
  }
`

const Home = () => {
  const getImage = useImage()
  const heroImage = getImage(home.hero_image.image)
  const mainContentImage = getImage(home.main_content.image)

  return (
    <Layout overlayHeader>
      <Hero
        image={
          <Img
            fluid={heroImage.childImageSharp.fluid}
            alt={home.hero_image.alt_text}
            style={{ height: '100%' }}
            imgStyle={{ objectPosition: 'center bottom' }}
          />
        }
      />
      <Section>
        <Container>
          <HomeContent>
            <div className='text'>
              <h1>{home.main_content.header}</h1>
              <p>{home.main_content.text}</p>
            </div>
            {!!mainContentImage && (
              <div className='image'>
                <Img
                  fluid={mainContentImage.childImageSharp.fluid}
                  alt={home.main_content.alt_text}
                  style={{ height: '100%' }}
                  imgStyle={{ objectPosition: 'center center' }}
                />
              </div>
            )}
          </HomeContent>
        </Container>
      </Section>
      <ForestrySections sections={home.sections} />
    </Layout>
  )
}

export default Home
