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
} from '@fcongson/lagom-ui'
import { BlogPosts } from 'components/BlogPosts'
import { Layout } from 'components/layouts'
import { theme } from 'components/styles'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Query } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'

export const STYLE_GUIDE_QUERY = graphql`
  query STYLE_GUIDE {
    file(relativePath: { eq: "sample-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3, skip: 0) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            slug
            keywords
            featured_image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            alt_text
          }
        }
      }
    }
  }
`

const Container_StyleGuide = styled(Container)`
  margin: 8rem auto;

  ${(props) => props.theme.mediaQueries.small} {
    margin: 4rem auto;
  }
`

const StyleGuide: React.FunctionComponent<{ data: Query }> = ({ data }) => {
  const imageSharp = data.file
  const image = 'sample-image.jpg'
  const altText = 'Sample image'

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
            This, is a living document showcasing the designs I have incorporated into my brand. As I grow my design
            system, <a href='https://lagom-ui.netlify.app/'>Lagom-UI</a>, I will use this document to ensure the
            components remain cohesive as they move into the browser.
          </p>
          <h3>Have a look at my Design Systems journey</h3>
          <p>
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
                <em>Continuing to grow</em> 🌱
              </li>
            </ul>
          </p>
        </Container>
      </Section>

      {/* Typography */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction header='Typography.' text='Typography styles' actionLink='#typography' actionText='↓' />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='typography'>
          <h1>H1 Lorem Ipsum</h1>
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
          <p>
            <pre>Preformatted. Lorem ipsum dolor sit amet</pre>
          </p>
        </Container>
      </Section>

      {/* Page Header */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Page Header.'
              text={['Page header using the ', <code>{'<PageHeader />'}</code>, ' component.']}
              actionLink='#page-header'
              actionText='↓'
            />
          </FeaturedSection>
        </Container_StyleGuide>
      </Section>
      <Section>
        <Container id='page-header'>
          <PageHeader>Lorem Ipsum</PageHeader>
        </Container>
      </Section>

      {/* Quote */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Quote.'
              text={[
                'Quotes using the ',
                <code>{'<Quote />'}</code>,
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
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Layout.'
              text={[
                'Layouts using the ',
                <code>{'<Section />'}</code>,
                ' and ',
                <code>{'<Container />'}</code>,
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
            of <code>{`${theme.sizes.maxWidthSection}`}</code>.
          </p>
          <h2>
            <code>{'<Container />'}</code>
          </h2>
          <p>
            The <code>{'<Container />'}</code> component creates a responsive wrapper around body content with a max
            width of <code>{`${theme.sizes.maxWidthContainer}`}</code>. This component is used within the{' '}
            <code>{'<Section />'}</code> component.
          </p>
        </Container>
      </Section>

      {/* Image Caption */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Image Caption.'
              text={[
                'Images with caption using the ',
                <code>{'<ImageCaption />'}</code>,
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
      <ImageCaption
        image={
          <GatsbyImage
            image={imageSharp?.childImageSharp?.gatsbyImageData}
            alt={altText}
            style={{ height: '100%' }}
            objectPosition='center center'
          />
        }
        caption='Default. Lorem ipsum dolor sit amet'
      />
      <ImageCaption
        image={
          <GatsbyImage
            image={imageSharp?.childImageSharp?.gatsbyImageData}
            alt={altText}
            style={{ height: '100%' }}
            objectPosition='center center'
          />
        }
        caption='Emphasized. Lorem ipsum dolor sit amet'
        emphasized
      />
      <ImageCaption
        image={
          <GatsbyImage
            image={imageSharp?.childImageSharp?.gatsbyImageData}
            alt={altText}
            style={{ height: '100%' }}
            objectPosition='center center'
          />
        }
        caption='Fullwidth. Lorem ipsum dolor sit amet'
        fullwidth
      />

      {/* Featured Section */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Featured Section.'
              text={['Featured sections using the ', <code>{'<FeaturedSection />'}</code>, ' component.']}
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
      <FeaturedSection
        image={
          <GatsbyImage
            image={imageSharp?.childImageSharp?.gatsbyImageData}
            alt={altText}
            style={{ height: '100%' }}
            objectPosition='center center'
          />
        }
        imageAsBackground>
        <p>Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection>
        <p>Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSection>
      <FeaturedSection backgroundColor={theme.colors.olives[2]}>
        <GatsbyImage image={imageSharp?.childImageSharp?.gatsbyImageData} alt={altText} />
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
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Call To Action.'
              text={[
                'Call to action using the ',
                <code>{'<CallToAction />'}</code>,
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
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Hero.'
              text={[
                'Hero using the ',
                <code>{'<Hero />'}</code>,
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
      <Hero
        image={
          <GatsbyImage
            image={imageSharp?.childImageSharp?.gatsbyImageData}
            alt={'Alt text'}
            style={{ height: '100%', opacity: 0.7 }}
          />
        }>
        <PageHeader>Lorem Ipsum</PageHeader>
      </Hero>

      {/* Blog Posts */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Blog Posts.'
              text={[
                'Blog posts using the ',
                <code>{'<BlogPosts />'}</code>,
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
          <BlogPosts posts={data.allMdx.edges} />
        </Container>
      </Section>

      {/* Link Button */}
      <Section>
        <Container_StyleGuide>
          <FeaturedSection>
            <CallToAction
              header='Link Button.'
              text={['Link button using the ', <code>{'<LinkButton />'}</code>, ' component.']}
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

export default StyleGuide
