'use client'

import { Container, Hero, PageHeader, useTheme } from '@fcongson/lagom-ui'
import { ExifCaption } from 'components/ExifCaption'
import { FillImageBox } from 'components/FillImageBox'
import { Layout } from 'components/layouts'
import { motion } from 'framer-motion'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const PhotographyImage = styled(motion.div)`
  display: grid;
  align-items: center;

  ${(props) => props.theme.mediaQueries!.small} {
    padding: 0 0.5rem;
  }

  div.image {
    position: relative;
    width: 80vw;
    aspect-ratio: 3 / 2;
  }

  /* Match the photo's width, which can exceed the container's max-width on wide screens. */
  .exif-caption {
    width: 80vw;
  }
`

type PhotographySection = {
  image: string
  alt_text: string
  caption: string
  location?: string
  coordinates?: string
  exposure?: string
}

type PhotographyData = {
  hero_image: { image: string; alt_text: string }
  page_header: string
  sections: PhotographySection[]
}

const PhotographyItem: React.FunctionComponent<
  Pick<PhotographySection, 'image' | 'alt_text' | 'location' | 'coordinates' | 'exposure'> & {
    index: number
    totalImages: number
  }
> = ({ image, alt_text, location, coordinates, exposure, index, totalImages }) => {
  const theme = useTheme()
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.2, triggerOnce: true })
  const imagePath = resolveImagePath(image)

  return (
    <PhotographyImage
      theme={theme}
      ref={imageRef}
      initial='hidden'
      animate={imageInView ? 'visible' : 'hidden'}
      variants={{
        visible: { translateY: 0, opacity: 1, transition: { ease: 'linear', duration: 0.5 } },
        hidden: { translateY: 100, opacity: 0 },
      }}
    >
      <Container style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='image'>{imagePath && <Image src={imagePath} alt={alt_text} fill />}</div>
        <ExifCaption
          className='exif-caption'
          index={index}
          total={totalImages}
          location={location}
          coordinates={coordinates}
          exposure={exposure}
        />
      </Container>
    </PhotographyImage>
  )
}

export const PhotographyClient: React.FunctionComponent<{ photography: PhotographyData }> = ({ photography }) => {
  const heroImagePath = resolveImagePath(photography.hero_image.image)
  const { sections: images } = photography
  const totalImages = images.length

  return (
    <Layout overlayHeader>
      <Hero
        image={
          <FillImageBox>
            <Image
              src={heroImagePath ?? ''}
              alt={photography.hero_image.alt_text}
              fill
              style={{ objectFit: 'cover' }}
            />
          </FillImageBox>
        }
      >
        <PageHeader>{photography.page_header}</PageHeader>
      </Hero>
      {images.map(({ image, alt_text, location, coordinates, exposure }, index) => (
        <PhotographyItem
          key={image}
          image={image}
          alt_text={alt_text}
          location={location}
          coordinates={coordinates}
          exposure={exposure}
          index={index}
          totalImages={totalImages}
        />
      ))}
    </Layout>
  )
}
