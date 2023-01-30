import { CallToAction, Container, FeaturedSection, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useImage } from 'utils/useImage'

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
  const getImage = useImage()
  const key = `${section.template}.${index}`
  switch (section.template) {
    case 'featured-section':
      return (
        <FeaturedSection
          key={key}
          imageAsBackground={section.image_as_background}
          backgroundColor={section.background_color}
          image={
            <GatsbyImage
              image={getImage(section.image)?.childImageSharp?.gatsbyImageData}
              alt={section.alt_text}
              style={{ height: 'max(calc(100vh - 20vh), 700px)', opacity: 0.45 }}
              objectPosition='center center'
            />
          }>
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
            <GatsbyImage image={getImage(section.image)?.childImageSharp?.gatsbyImageData} alt={section.alt_text} />
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
      return
  }
}

export const ForestrySections: React.FunctionComponent<{
  sections: ForestrySection[]
  unwrapped?: boolean
}> = ({ sections, unwrapped = false }) =>
  !sections ? null : <>{Array.from(sections).map((section, index) => getSection(section, unwrapped, index))}</>
