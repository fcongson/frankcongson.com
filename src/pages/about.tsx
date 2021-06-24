import { Container } from '@fcongson/lagom-ui'
import { ForestrySections } from 'components/forestry'
import { Hero } from 'components/Hero'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import { PageHeader, theme } from 'components/styles'
import about from 'content/data/about.json'
import React from 'react'
import { useImage } from 'utils/useImage'

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
        pathname='/about'
      />
      <Hero
        imageProps={{
          image: heroImage?.childImageSharp?.gatsbyImageData,
          alt: about.hero_image.alt_text,
          style: { height: '100%', opacity: 0.4 },
        }}>
        <PageHeader>{about.page_header}</PageHeader>
      </Hero>
      <Container maxWidth={theme.sizes.maxWidthContent}>
        <ForestrySections sections={about.sections} />
      </Container>
    </Layout>
  )
}

export default About
