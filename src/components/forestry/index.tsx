import { CallToAction, Container, FeaturedSection, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { compile, run } from '@mdx-js/mdx'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { Fragment, useEffect, useState } from 'react'
import { useImage } from 'utils/useImage'
import * as runtime from 'react/jsx-runtime' // Production.
// import * as runtime from 'react/jsx-dev-runtime' // Development.

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
  const [mdxModule, setMdxModule] = useState<any>()
  const Content = mdxModule ? mdxModule.default : Fragment

  useEffect(() => {
    if (section.template === 'text') {
      ;(async () => {
        const code = String(
          await compile(section.text, {
            outputFormat: 'function-body',
            development: false,
            // ^-- Generate code for production.
            // `false` if you use `/jsx-runtime` on client, `true` if you use
            // `/jsx-dev-runtime`.
            /* …otherOptions */
          })
        )
        setMdxModule(await run(code, runtime))
      })()
    }
  }, [])

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
              style={{ height: 'max(calc(100vh - 20vh), 700px)' }}
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
        <Content />
      ) : (
        <Wrapper key={key}>
          <Content />
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
