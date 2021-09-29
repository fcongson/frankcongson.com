import { Container, Section } from '@fcongson/lagom-ui'
import { ForestrySections } from 'components/forestry'
import { Hero } from 'components/Hero'
import { Layout } from 'components/layouts'
import home from 'content/data/home.json'
import { motion, Variants } from 'framer-motion'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import { useImage } from 'utils/useImage'

const Container_HomeContent = styled(Container)`
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

const Home: React.FunctionComponent = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.5, triggerOnce: true })
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.5, triggerOnce: true })

  const getImage = useImage()
  const heroImage = getImage(home.hero_image.image)
  const mainContentImage = getImage(home.main_content.image)

  const textMotion: Variants = {
    visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.7 } },
    hidden: { translateY: -80, opacity: 0 },
  }

  return (
    <Layout overlayHeader>
      <Hero
        imageProps={{
          image: heroImage?.childImageSharp?.gatsbyImageData,
          alt: home.hero_image.alt_text,
          style: { height: '100%' },
          objectPosition: 'center bottom',
        }}
      />
      <Section>
        <Container_HomeContent>
          <motion.div
            className='text'
            ref={textRef}
            initial='hidden'
            animate={textInView ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
            }}>
            <motion.h1 variants={textMotion}>{home.main_content.header}</motion.h1>
            <motion.p variants={textMotion}>{home.main_content.text}</motion.p>
          </motion.div>
          {!!mainContentImage && (
            <motion.div
              className='image'
              ref={imageRef}
              initial='hidden'
              animate={imageInView ? 'visible' : 'hidden'}
              variants={{
                visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.9 } },
                hidden: { translateY: 100, opacity: 0 },
              }}>
              <GatsbyImage
                image={mainContentImage.childImageSharp?.gatsbyImageData}
                alt={home.main_content.alt_text}
                style={{ height: '100%' }}
                objectPosition='center center'
              />
            </motion.div>
          )}
        </Container_HomeContent>
      </Section>
      <ForestrySections sections={home.sections} />
    </Layout>
  )
}

export default Home
