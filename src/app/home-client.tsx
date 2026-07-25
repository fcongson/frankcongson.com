'use client'

import { Container, Hero, Section, useTheme } from '@fcongson/lagom-ui'
import { FillImageBox } from 'components/FillImageBox'
import { ForestrySections } from 'components/forestry'
import { Layout } from 'components/layouts'
import { Variants, motion } from 'framer-motion'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const Container_HomeContent = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  ${(props) => props.theme.mediaQueries!.small} {
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

      ${(props) => props.theme.mediaQueries!.large} {
        font-size: 54px;
        line-height: 66px;
        margin: 0 auto 2rem auto;
      }

      ${(props) => props.theme.mediaQueries!.small} {
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

      ${(props) => props.theme.mediaQueries!.large} {
        font-size: 16px;
        margin: 0 auto 2rem auto;
        padding: 0 1rem 0 1rem;
      }

      ${(props) => props.theme.mediaQueries!.small} {
        text-align: center;
      }
    }

    ${(props) => props.theme.mediaQueries!.large} {
      padding-top: 4rem;
    }

    ${(props) => props.theme.mediaQueries!.small} {
      width: 100%;
      padding-top: 0;
    }
  }

  div.image {
    position: relative;
    width: 448px;
    height: 598px;
    margin-left: 8rem;

    ${(props) => props.theme.mediaQueries!.large} {
      height: 448px;
      margin-left: 2rem;
    }

    ${(props) => props.theme.mediaQueries!.small} {
      width: 100%;
      height: 400px;
      margin-left: 0;
      padding: 0 1rem 0 1rem;
    }
  }
`

type HomeData = {
  hero_image: { image: string; alt_text: string }
  main_content: { header: string; text: string; image: string; alt_text: string }
  sections: any[]
}

export const HomeClient: React.FunctionComponent<{ home: HomeData }> = ({ home }) => {
  const theme = useTheme()

  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.5, triggerOnce: true })
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.5, triggerOnce: true })

  const heroImagePath = resolveImagePath(home.hero_image.image)
  const mainContentImagePath = resolveImagePath(home.main_content.image)

  const textMotion: Variants = {
    visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.7 } },
    hidden: { translateY: -80, opacity: 0 },
  }

  return (
    <Layout overlayHeader>
      <Hero
        image={
          <FillImageBox>
            <Image
              src={heroImagePath ?? ''}
              alt={home.hero_image.alt_text}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
            />
          </FillImageBox>
        }
      />
      <Section>
        <Container_HomeContent theme={theme}>
          <motion.div
            className='text'
            ref={textRef}
            initial='hidden'
            animate={textInView ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
            }}
          >
            <motion.h1 variants={textMotion}>{home.main_content.header}</motion.h1>
            <motion.p variants={textMotion}>{home.main_content.text}</motion.p>
          </motion.div>
          {!!mainContentImagePath && (
            <motion.div
              className='image'
              ref={imageRef}
              initial='hidden'
              animate={imageInView ? 'visible' : 'hidden'}
              variants={{
                visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.9 } },
                hidden: { translateY: 100, opacity: 0 },
              }}
            >
              <Image
                src={mainContentImagePath}
                alt={home.main_content.alt_text}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
              />
            </motion.div>
          )}
        </Container_HomeContent>
      </Section>
      <ForestrySections sections={home.sections} />
    </Layout>
  )
}
