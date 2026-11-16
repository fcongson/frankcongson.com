'use client'

import { CallToAction, Container, FeaturedSection, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { ContourLines } from 'components/ContourLines'
import { FillImageBox } from 'components/FillImageBox'
import { headerLabel } from 'components/styles'
import { CornerMarks, Coordinates } from 'components/ViewfinderFrame'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import styled, { css } from 'styled-components'

// Anchors decorations (e.g. ContourLines) that sit behind a section's content.
//
// `$overlayOpacity` tunes how strongly the section's photo is washed toward the theme background
// (white in light mode, dark grey in dark mode), per photo, to keep text legible over busier images.
// A single number applies to both themes; `{ light, dark }` tunes each. Omitted values keep the theme default.
type OverlayOpacity = number | { light?: number; dark?: number }

const overlayVar = (opacity?: number) => (opacity != null ? `--lagom-semantic-opacity-overlay: ${opacity};` : '')

// Opt-in (`text_labels` on a featured section): text and button sit on dark labels so they stay
// legible over busy photos.
const labelStyles = css`
  /* Dark, blurred button with white text so it stays legible over busy photos. The library sets an
     inline transparent background-color on the link, so the dark tint is painted as a background-image
     (a flat gradient) over it, with the photo blurred behind. */
  &.lagom-featured-section--image-background .lagom-button {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    backdrop-filter: blur(8px);
    color: #fff;
  }

  /* Solid black label behind the text so it stays legible over the photo. */
  &.lagom-featured-section--image-background .lagom-call-to-action {
    align-items: center;

    h1,
    h2,
    h3 {
      ${headerLabel}
      margin-bottom: 1.5rem;
    }

    /* The text is wrapped in an inline span so each line gets its own bar that hugs the text.
       The paragraph's line-height leaves the gap between bars. */
    p {
      max-width: 36rem;
      padding: 0;
      color: #fff;
      line-height: 2;
    }

    .label-text {
      background-color: #000;
      padding: 0.15em 0.75rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }
  }
`

const DecoratedFeaturedSection = styled(FeaturedSection)<{ $overlayOpacity?: OverlayOpacity; $labels?: boolean }>`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  ${(props) =>
    overlayVar(typeof props.$overlayOpacity === 'object' ? props.$overlayOpacity.light : props.$overlayOpacity)}

  [data-lagom-theme~='dark'] & {
    ${(props) =>
      overlayVar(typeof props.$overlayOpacity === 'object' ? props.$overlayOpacity.dark : props.$overlayOpacity)}
  }

  ${(props) => props.$labels && labelStyles}
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

const getSection = (
  section: SectionData,
  unwrapped: boolean,
  index: number,
  textLabels: boolean,
): React.ReactElement | undefined => {
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <DecoratedFeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          $overlayOpacity={section.overlay_opacity}
          $labels={section.text_labels}
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
          <PageSections sections={section.sections} unwrapped textLabels={section.text_labels} />
        </DecoratedFeaturedSection>
      )

    case 'call-to-action':
      return (
        <CallToAction
          key={key}
          header={section.header}
          text={textLabels ? <span className='label-text'>{section.text}</span> : section.text}
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
              {/* Full-width photos run to the screen edge, so the marks and readout sit inside them. */}
              {section.decoration === 'viewfinder' && (
                <CornerMarks
                  inset={section.fullwidth ? '28px' : '-10px'}
                  tone={section.fullwidth ? 'light' : 'theme'}
                />
              )}
              {section.coordinates &&
                (section.fullwidth ? (
                  <Coordinates placement='bottom-center' tone='light' label>
                    {section.coordinates}
                  </Coordinates>
                ) : (
                  <Coordinates>{section.coordinates}</Coordinates>
                ))}
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
  // Set by a parent featured section that opted in to `text_labels`.
  textLabels?: boolean
}> = ({ sections, unwrapped = false, textLabels = false }) =>
  !sections ? null : (
    <>{Array.from(sections).map((section, index) => getSection(section, unwrapped, index, textLabels))}</>
  )
