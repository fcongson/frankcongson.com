import { Container, Hero, PageHeader } from '@fcongson/lagom-ui'
import { ForestrySections } from 'components/forestry'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import about from 'content/data/about.json'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { useImage } from 'utils/useImage'

const AboutContainer = styled.div`
  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`

const About: React.FunctionComponent = () => {
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
        image={seoImage?.publicURL ?? ''}
        imageAlt={seo?.alt_text}
        pathname='/about'
      />
      <Hero
        image={
          <GatsbyImage
            image={heroImage?.childImageSharp?.gatsbyImageData}
            alt={about.hero_image.alt_text}
            style={{ height: '100%', opacity: 0.7 }}
          />
        }>
        <PageHeader>{about.page_header}</PageHeader>
      </Hero>
      <AboutContainer>
        <ForestrySections sections={about.sections} />
      </AboutContainer>
    </Layout>
  )
}

export default About
