import { Container, Hero, PageHeader } from '@fcongson/lagom-ui'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import photography from 'content/data/photography.json'
import { motion } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useImage } from 'utils/useImage'

const PhotographyImage = styled(motion.div)<{ label: string }>`
  display: grid;
  align-items: center;

  ${(props) => props.theme.mediaQueries.small} {
    padding: 0 0.5rem;
  }

  div.image {
    width: 80vw;

    ::after {
      content: '${(props) => props.label}';
    }
  }
`

const Photography: React.FunctionComponent = () => {
  const getImage = useImage()
  const heroImage = getImage(photography.hero_image.image)
  const seoImage = getImage(photography.seo.image)
  const { seo, sections: images } = photography
  const totalImages = images.length

  return (
    <Layout overlayHeader>
      <Seo
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage?.publicURL ?? ''}
        imageAlt={seo?.alt_text}
        pathname='/photography'
      />
      <Hero
        image={
          <GatsbyImage
            image={heroImage?.childImageSharp?.gatsbyImageData}
            alt={photography.hero_image.alt_text}
            style={{ height: '100%' }}
          />
        }>
        <PageHeader>{photography.page_header}</PageHeader>
      </Hero>
      {images.map(({ image, alt_text, caption }, index) => {
        const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.2, triggerOnce: true })
        const imageSharp = getImage(image)
        return (
          <PhotographyImage
            key={image}
            label={`${index + 1} / ${totalImages}`}
            ref={imageRef}
            initial='hidden'
            animate={imageInView ? 'visible' : 'hidden'}
            variants={{
              visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.5 } },
              hidden: { translateY: 100, opacity: 0 },
            }}>
            <Container display='flex' flexDirection='row'>
              <div className='image'>
                <GatsbyImage image={imageSharp?.childImageSharp?.gatsbyImageData} alt={alt_text} />
              </div>
            </Container>
          </PhotographyImage>
        )
      })}
    </Layout>
  )
}

export default Photography
