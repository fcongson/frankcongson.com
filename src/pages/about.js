import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import about from '../../content/data/about.json'
import ForestrySections from '../components/forestry'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import Seo from '../components/SEO'
import { Container, PageHeader } from '../components/styles'
import { useImage } from '../utils/useImage'

const AboutContainer = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }

  /* margin: 0 auto 4rem auto; */
`

const About = () => {
  const getImage = useImage()
  const heroImage = getImage(about.hero_image.image)
  const seoImage = getImage(about.seo.image)
  const { seo } = about

  return (
    <Layout overlayHeader>
      <Seo
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage?.publicURL}
        pathname='/about'
      />
      <Hero
        image={
          <GatsbyImage
            image={heroImage.childImageSharp.gatsbyImageData}
            alt={about.hero_image.alt_text}
            style={{ height: '100%', opacity: 0.4 }}
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
