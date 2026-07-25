'use client'

import { CallToAction, Container, FeaturedSection, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { FillImageBox } from 'components/FillImageBox'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'

export type ForestrySection = {
  template: string
  [key: string]: any
}

const Wrapper: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
)

const getSection = (section: ForestrySection, unwrapped: boolean, index: number): React.ReactElement | undefined => {
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <FeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          image={
            section.image ? (
              <FillImageBox style={{ height: 'max(calc(100vh - 20vh), 700px)' }}>
                <Image
                  src={resolveImagePath(section.image) ?? ''}
                  alt={section.alt_text ?? ''}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                />
              </FillImageBox>
            ) : undefined
          }
        >
          <ForestrySections sections={section.sections} unwrapped />
        </FeaturedSection>
      )

    case 'call-to-action':
      return (
        <CallToAction
          key={key}
          header={section.header}
          text={section.text}
          actionLink={section.call_to_action.url}
          actionText={section.call_to_action.text}
        />
      )

    case 'image-caption':
      return (
        <ImageCaption
          key={key}
          emphasized={section.emphasized}
          fullwidth={section.fullwidth}
          image={
            <FillImageBox $aspectRatio='16 / 9'>
              <Image
                src={resolveImagePath(section.image) ?? ''}
                alt={section.alt_text ?? ''}
                fill
                style={{ objectFit: 'cover' }}
              />
            </FillImageBox>
          }
          caption={section.caption}
        />
      )

    case 'quote':
      return unwrapped ? (
        <Quote key={key}>{section.quote}</Quote>
      ) : (
        <Wrapper key={key}>
          <Quote>{section.quote}</Quote>
        </Wrapper>
      )

    case 'text':
      return unwrapped ? (
        <div key={key} dangerouslySetInnerHTML={{ __html: section.text }} />
      ) : (
        <Wrapper key={key}>
          <div dangerouslySetInnerHTML={{ __html: section.text }} />
        </Wrapper>
      )

    default:
      return undefined
  }
}

export const ForestrySections: React.FunctionComponent<{
  sections: ForestrySection[]
  unwrapped?: boolean
}> = ({ sections, unwrapped = false }) =>
  !sections ? null : <>{Array.from(sections).map((section, index) => getSection(section, unwrapped, index))}</>
