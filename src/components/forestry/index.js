import React from 'react'
import FeaturedSection from '../FeaturedSection'
import ImageCaption from '../ImageCaption'
import { Container, Quote, Section } from '../styles'

const getSection = (section, index) => {
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <FeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          imageAlt={section.alt_text}
          image={section.image}
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
      return (
        <Section key={key}>
          <Container>
            <Quote>{section.quote}</Quote>
          </Container>
        </Section>
      )

    case 'text':
      return (
        <Section key={key}>
          <Container>
            <div dangerouslySetInnerHTML={{ __html: section.text }} />
          </Container>
        </Section>
      )

    default:
      return
  }
}

export const ForestrySections = ({ sections }) => (!sections ? null : Array.from(sections).map(getSection))

export default ForestrySections
