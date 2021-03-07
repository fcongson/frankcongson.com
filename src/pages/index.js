import { GatsbyImage } from 'gatsby-plugin-image'
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

  ${(props) => props.theme.mediaQueries.small} {
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

      ${(props) => props.theme.mediaQueries.large} {
        font-size: 54px;
        line-height: 66px;
        margin: 0 auto 2rem auto;
      }

      ${(props) => props.theme.mediaQueries.small} {
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

      ${(props) => props.theme.mediaQueries.large} {
        font-size: 16px;
        margin: 0 auto 2rem auto;
        padding: 0 1rem 0 1rem;
      }

      ${(props) => props.theme.mediaQueries.small} {
        text-align: center;
      }
    }

    ${(props) => props.theme.mediaQueries.large} {
      padding-top: 4rem;
    }

    ${(props) => props.theme.mediaQueries.small} {
      width: 100%;
      padding-top: 0;
    }
  }

  div.image {
    width: 448px;
    height: 598px;
    margin-left: 8rem;

    ${(props) => props.theme.mediaQueries.large} {
      height: 448px;
      margin-left: 2rem;
    }

    ${(props) => props.theme.mediaQueries.small} {
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
          <GatsbyImage
            image={heroImage.childImageSharp.gatsbyImageData}
            alt={home.hero_image.alt_text}
            style={{ height: '100%' }}
            objectPosition='center bottom'
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
                <GatsbyImage
                  image={mainContentImage.childImageSharp.gatsbyImageData}
                  alt={home.main_content.alt_text}
                  style={{ height: '100%' }}
                  objectPosition='center center'
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
