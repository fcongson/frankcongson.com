import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import about from '../../content/data/about.json'
import ForestrySections from '../components/forestry'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import { PageHeader } from '../components/styles'
import { useImageSharp } from '../utils/useImageSharp'

const AboutContainer = styled.div`
  max-width: ${(props) => props.theme.layout.maxWidthPage};
  margin: 0 auto 4rem auto;
`

const About = () => {
  const image = useImageSharp()(about.hero_image.image)

  return (
    <Layout overlayHeader>
      {/* <SEO title={seo_title} desc={seo_description} keywords={seo_keywords} image={seo_image} pathname='/about' /> */}
      <Hero
        image={
          <Img
            fluid={image.childImageSharp.fluid}
            alt={about.hero_image.alt_text}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.25 }}
          />
        }
        content={<PageHeader>{about.page_header}</PageHeader>}
      />
      <AboutContainer>
        <ForestrySections sections={about.sections} />
      </AboutContainer>
    </Layout>
  )
}

export default About
