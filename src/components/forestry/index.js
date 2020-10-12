import React from 'react'
import CallToAction from '../CallToAction'
import FeaturedSection from '../FeaturedSection'
import ImageCaption from '../ImageCaption'
import { Container, Quote, Section } from '../styles'

const Wrapper = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
)

const getSection = (section, unwrapped, index) => {
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <FeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          imageAlt={section.alt_text}
          image={section.image}>
          <ForestrySections sections={section.sections} unwrapped />
        </FeaturedSection>
      )

    case 'call-to-action':
      return (
        <CallToAction
          key={key}
          header={section.header}
          text={section.text}
          callToAction={section.call_to_action.url}
          callToActionText={section.call_to_action.text}
        />
      )

    case 'image-caption':
      return (
        <ImageCaption
          key={key}
          emphasized={section.emphasized}
          fullwidth={section.fullwidth}
          image={section.image}
          altText={section.alt_text}
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
      return
  }
}

export const ForestrySections = ({ sections, unwrapped = false }) =>
  !sections ? null : Array.from(sections).map((section, index) => getSection(section, unwrapped, index))

export default ForestrySections
