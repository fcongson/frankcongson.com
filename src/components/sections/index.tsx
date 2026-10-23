'use client'

import { CallToAction, Container, FeaturedSection, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { ContourLines } from 'components/ContourLines'
import { FillImageBox } from 'components/FillImageBox'
import { CornerMarks, Coordinates } from 'components/ViewfinderFrame'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

// Anchors decorations (e.g. ContourLines) that sit behind a section's content.
//
// `$overlayOpacity` tunes how strongly the section's photo is washed toward the theme background
// (white in light mode, dark grey in dark mode), per photo, to keep text legible over busier images.
// A single number applies to both themes; `{ light, dark }` tunes each. Omitted values keep the theme default.
type OverlayOpacity = number | { light?: number; dark?: number }

const overlayVar = (opacity?: number) => (opacity != null ? `--lagom-semantic-opacity-overlay: ${opacity};` : '')

const DecoratedFeaturedSection = styled(FeaturedSection)<{ $overlayOpacity?: OverlayOpacity }>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  ${(props) =>
    overlayVar(typeof props.$overlayOpacity === 'object' ? props.$overlayOpacity.light : props.$overlayOpacity)}

  [data-lagom-theme~='dark'] & {
    ${(props) =>
      overlayVar(typeof props.$overlayOpacity === 'object' ? props.$overlayOpacity.dark : props.$overlayOpacity)}
  }

  /* Blur the photo behind buttons, matching the header's backdrop blur. */
  &.lagom-featured-section--image-background .lagom-button {
    backdrop-filter: blur(8px);
  }
`

export type SectionData = {
  template: string
  // Section fields come from CMS front matter and vary by template.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Wrapper: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
)

const getSection = (section: SectionData, unwrapped: boolean, index: number): React.ReactElement | undefined => {
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <DecoratedFeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          $overlayOpacity={section.overlay_opacity}
          image={
            section.image ? (
              <FillImageBox style={{ height: 'max(calc(100vh - 20vh), 700px)' }}>
                <Image
                  src={resolveImagePath(section.image) ?? ''}
                  alt={section.alt_text ?? ''}
                  fill
                  style={{ objectFit: 'cover', objectPosition: section.image_position ?? 'center center' }}
                />
                {section.decoration === 'viewfinder' && <CornerMarks inset='28px' tone='light' />}
                {section.coordinates && (
                  <Coordinates placement='bottom-center' tone='light'>
                    {section.coordinates}
                  </Coordinates>
                )}
              </FillImageBox>
            ) : undefined
          }
        >
          {section.decoration === 'contours' && <ContourLines variant='quiet' />}
          <PageSections sections={section.sections} unwrapped />
        </DecoratedFeaturedSection>
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

export const PageSections: React.FunctionComponent<{
  sections: SectionData[]
  unwrapped?: boolean
}> = ({ sections, unwrapped = false }) =>
  !sections ? null : <>{Array.from(sections).map((section, index) => getSection(section, unwrapped, index))}</>
