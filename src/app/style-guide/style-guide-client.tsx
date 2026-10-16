'use client'

import {
  CallToAction,
  Container,
  FeaturedSection,
  Hero,
  ImageCaption,
  LinkButton,
  PageHeader,
  Quote,
  Section,
  SectionHeader,
  useTheme,
} from '@fcongson/lagom-ui'
import { BlogPosts } from 'components/BlogPosts'
import { FillImageBox } from 'components/FillImageBox'
import { Layout } from 'components/layouts'
import type { Post } from 'lib/content-types'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

// The style guide shows an H1, but the page already has its own <h1> (the page header), and a page should
// have only one. This reproduces the global `h1` styles on a <div> so the specimen looks identical.
// Likewise, the PageHeader specimens below are rendered as `<div className='lagom-page-header'>`.
const H1Specimen = styled.div`
  font-family: var(--lagom-core-font-families-heading);
  font-weight: var(--lagom-core-font-weights-heading-bold);
  margin-bottom: 1rem;
  font-size: var(--lagom-core-font-sizes-h1);
  line-height: var(--lagom-core-line-heights-heading);

  @media screen and (width <= 768px) {
    font-size: var(--lagom-core-font-sizes-h2);
  }
`

const Container_StyleGuide = styled(Container)`
  /* target component classname to increase specificity */
  &.lagom-container {
    margin: 8rem auto;

    ${(props) => props.theme.mediaQueries!.small} {
      margin: 4rem auto;
    }
  }
`

const SampleImage: React.FunctionComponent<{ aspectRatio?: string; style?: React.CSSProperties }> = ({
  aspectRatio,
  style,
}) => (
  <FillImageBox $aspectRatio={aspectRatio} style={style}>
    <Image src={resolveImagePath('sample-image.jpg') ?? ''} alt='Sample image' fill style={{ objectFit: 'cover' }} />
  </FillImageBox>
)

// FeaturedSection's `imageAsBackground` variant has no intrinsic height of its
// own — it relies on the image filling the grid cell (same reason Hero.css
// hardcodes a height, but FeaturedSection.css doesn't). Mirrors the fix in
// components/sections/index.tsx.
const featuredSectionImageStyle: React.CSSProperties = { height: 'max(calc(100vh - 20vh), 700px)' }

export const StyleGuideClient: React.FunctionComponent<{ posts: Post[] }> = ({ posts }) => {
  const theme = useTheme()

  return (
    <Layout>
      <Section>
        <Container>
          <PageHeader>Style Guide.</PageHeader>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2>
            The brand style guide for <a href='https://frankcongson.com/'>FrankCongson.com</a>.
          </h2>
          <p>
            This style guide is a living document showcasing the designs I have incorporated into my brand. As I grow my
            design system, <a href='https://lagom-ui.netlify.app/'>Lagom-UI</a>, I will use this document to ensure the
            components remain cohesive as they move from Figma to the browser.
          </p>
          <h3>Have a look at my Design Systems journey</h3>
          <ul>
            <li>
              Part 1,{' '}
              <a href='https://frankcongson.com/blog/creating-a-component-library'>Creating a Component Library</a>
            </li>
            <li>
              Part 2, <a href='https://frankcongson.com/blog/design-systems-thinking'>Design Systems Thinking</a>
            </li>
            <li>
              Part 3, <a href='https://frankcongson.com/blog/component-design-in-figma'>Component Design In Figma</a>
            </li>
            <li>
              Part 4, <a href='https://frankcongson.com/blog/design-tokens-to-dark-mode'>Design Tokens To Dark Mode</a>
            </li>
            <li>
              <em>Continuing to grow</em> 🌱
            </li>
          </ul>
        </Container>
      </Section>

      {/* Typography */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction header='Typography.' text='Typography styles' actionLink='#typography' actionText='↓' />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='typography'>
          <H1Specimen>H1 Lorem Ipsum</H1Specimen>
          <h2>H2 Lorem Ipsum</h2>
          <h3>H3 Lorem Ipsum</h3>
          <h4>H4 Lorem Ipsum</h4>
          <h5>H5 Lorem Ipsum</h5>
          <h6>H6 Lorem Ipsum</h6>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <p>
            Paragraph. <a href='style-guide/#typography'>Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            <strong>Bold. Lorem ipsum dolor sit amet</strong>
          </p>
          <p>
            <em>Italic. Lorem ipsum dolor sit amet</em>
          </p>
          <p>
            <code>Code. Lorem ipsum dolor sit amet</code>
          </p>
          <pre>Preformatted. Lorem ipsum dolor sit amet</pre>
        </Container>
      </Section>

      {/* Page Header */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Page Header.'
              text={['Page header using the ', <code key='c'>{'<PageHeader />'}</code>, ' component.']}
              actionLink='#page-header'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='page-header'>
          <div className='lagom-page-header'>Lorem Ipsum</div>
        </Container>
      </Section>

      {/* Section Header */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Section Header.'
              text={['Section header using the ', <code key='c'>{'<SectionHeader />'}</code>, ' component.']}
              actionLink='#section-header'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='section-header'>
          <SectionHeader>Lorem Ipsum</SectionHeader>
        </Container>
      </Section>

      {/* Quote */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Quote.'
              text={[
                'Quotes using the ',
                <code key='c'>{'<Quote />'}</code>,
                ' component. This component provides responsive quote blocks that are emphasized on larger screens.',
              ]}
              actionLink='#quote'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='quote'>
          <Quote>
            <p>Short quote.</p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>Medium quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <p>
              Long quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </Quote>
          <p>
            Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <Quote>
            <h2>Multi-line quote.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </Quote>
        </Container>
      </Section>

      {/* Layout */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Layout.'
              text={[
                'Layouts using the ',
                <code key='c1'>{'<Section />'}</code>,
                ' and ',
                <code key='c2'>{'<Container />'}</code>,
                ' components.',
              ]}
              actionLink='#layout'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='layout'>
          <h2>
            <code>{'<Section />'}</code>
          </h2>
          <p>
            The <code>{'<Section />'}</code> component creates a full width wrapper around body content with a max width
            of <code>{`${theme?.sizes?.maxWidthSection}`}</code>.
          </p>
          <h2>
            <code>{'<Container />'}</code>
          </h2>
          <p>
            The <code>{'<Container />'}</code> component creates a responsive wrapper around body content with a max
            width of <code>{`${theme?.sizes?.maxWidthContainer}`}</code>. This component is used within the{' '}
            <code>{'<Section />'}</code> component.
          </p>
        </Container>
      </Section>

      {/* Image Caption */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Image Caption.'
              text={[
                'Images with caption using the ',
                <code key='c'>{'<ImageCaption />'}</code>,
                ' component. This component provides responsive images with optional comments. Images also have the option of being emphasized or fullwidth.',
              ]}
              actionLink='#image-caption'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='image-caption'>
          <h2>Variations</h2>
          <p>
            There are three variations of the <code>{'<ImageCaption />'}</code> component. The default image will stay
            within the container. On larger screens, the <code>emphasized</code> image will expand beyond the width of
            the container. The <code>fullwidth</code> image will span the full width and height of the viewport. For all
            variations, the caption is optional.
          </p>
        </Container>
      </Section>
      <ImageCaption image={<SampleImage aspectRatio='16 / 9' />} caption='Default. Lorem ipsum dolor sit amet' />
      <ImageCaption
        image={<SampleImage aspectRatio='16 / 9' />}
        caption='Emphasized. Lorem ipsum dolor sit amet'
        emphasized
      />
      <ImageCaption
        image={<SampleImage aspectRatio='21 / 9' />}
        caption='Fullwidth. Lorem ipsum dolor sit amet'
        fullwidth
      />

      {/* Featured Section */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Featured Section.'
              text={['Featured sections using the ', <code key='c'>{'<FeaturedSection />'}</code>, ' component.']}
              actionLink='#featured-section'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='featured-section'>
          <h2>Variations</h2>
          <p>
            There are two variations of the <code>{'<FeaturedSection />'}</code> component. The default will put content
            in front of a color background. The <code>imageAsBackground</code> variation will put content in front of a
            provided image with the image at 50% opacity.
          </p>
        </Container>
      </Section>
      <FeaturedSection image={<SampleImage style={featuredSectionImageStyle} />} imageAsBackground>
        <p>Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection image={<SampleImage style={featuredSectionImageStyle} />} imageAsBackground framed>
        <p>Image Background Framed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection>
        <p>Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection framed>
        <p>Color Background Framed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection backgroundColor='var(--lagom-semantic-color-accent-bg)'>
        <SampleImage aspectRatio='16 / 9' />
        <p>Color Background with Image. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection>
        <CallToAction
          header='Lorem Ipsum.'
          text='With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          actionLink='#featured-section'
          actionText='Lorem ipsum dolor sit amet'
        />
      </FeaturedSection>

      {/* Call To Action */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Call To Action.'
              text={[
                'Call to action using the ',
                <code key='c'>{'<CallToAction />'}</code>,
                ' component. This component provides a header, text, and button.',
              ]}
              actionLink='#call-to-action'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='call-to-action'>
          <CallToAction
            header='Lorem Ipsum.'
            text='With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            actionLink='#call-to-action'
            actionText='Lorem ipsum dolor sit amet'
          />
        </Container>
      </Section>

      {/* Hero */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Hero.'
              text={[
                'Hero using the ',
                <code key='c'>{'<Hero />'}</code>,
                ' component. This component provides full width and full height section, displaying content in front of a provided image.',
              ]}
              actionLink='#hero'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='hero'></Container>
      </Section>
      <Hero image={<SampleImage />}>
        <div className='lagom-page-header'>Lorem Ipsum</div>
      </Hero>

      {/* Blog Posts */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Blog Posts.'
              text={[
                'Blog posts using the ',
                <code key='c'>{'<BlogPosts />'}</code>,
                ' component. This component provides a single column layout of blog posts in descending date order.',
              ]}
              actionLink='#blog-posts'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='blog-posts'>
          <BlogPosts posts={posts} />
        </Container>
      </Section>

      {/* Link Button */}
      <Section>
        <Container_StyleGuide theme={theme}>
          <FeaturedSection>
            <CallToAction
              header='Link Button.'
              text={[
                'Link button using the ',
                <code key='c1'>{'<LinkButton />'}</code>,
                " component. This component wraps a link with a the style of a button. It also accepts framework specific link components such as Next's ",
                <code key='c2'>{'<Link />'}</code>,
                ' component.',
              ]}
              actionLink='#link-button'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='link-button'>
          <LinkButton to='#link-button'>Link button</LinkButton>
        </Container>
      </Section>
    </Layout>
  )
}
