import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import BlogPosts from '../components/BlogPosts'
import CallToAction from '../components/CallToAction'
import FeaturedSectionRefactor from '../components/FeaturedSectionRefactor'
import Hero from '../components/Hero'
import ImageCaption from '../components/ImageCaption'
import Layout from '../components/layouts'
import theme, { Container, LinkButton, PageHeader, Quote, Section } from '../components/styles'

export const styleGuideQuery = graphql`
  query styleGuideQuery {
    file(relativePath: { eq: "sample-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1120, quality: 100) {
          ...GatsbyImageSharpFluid
        }
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
                fluid(maxWidth: 1120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const StyleGuideContainer = styled(Container)`
  margin: 8rem auto;

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthMobileLandscape}) {
    margin: 4rem auto;
  }
`

export default ({ data }) => {
  const imageSharp = data.file
  const image = '/content/images/sample-image.jpg'
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
          <h2>This is my style guide.</h2>
          <p>
            This style guide will be a living document to showcase the designs I have incorporated into my website. It
            will help me keep track of things as I grow this space.
          </p>
        </Container>
      </Section>
      {/* Typography */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Typography.'
              text='Typography styles'
              callToAction='style-guide/#typography'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
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
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Page Header.'
              text={['Page header using the ', <code>{'<PageHeader />'}</code>, ' component.']}
              callToAction='style-guide/#page-header'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='page-header'>
          <PageHeader>Lorem Ipsum</PageHeader>
        </Container>
      </Section>
      {/* Quote */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Quote.'
              text={[
                'Quotes using the ',
                <code>{'<Quote />'}</code>,
                ' component. This component provides responsive quote blocks that are emphasized on larger screens.',
              ]}
              callToAction='style-guide/#quote'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
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
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Layout.'
              text={[
                'Layouts using the ',
                <code>{'<Section />'}</code>,
                ' and ',
                <code>{'<Container />'}</code>,
                ' components.',
              ]}
              callToAction='style-guide/#layout'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='layout'>
          <h2>
            <code>{'<Section />'}</code>
          </h2>
          <p>
            The <code>{'<Section />'}</code> component creates a full width wrapper around body content with a max width
            of <code>{`${theme.layout.maxWidthSection}`}</code>.
          </p>
          <h2>
            <code>{'<Container />'}</code>
          </h2>
          <p>
            The <code>{'<Container />'}</code> component creates a responsive wrapper around body content with a max
            width of <code>{`${theme.layout.maxWidthContainer}`}</code>. This component is used within the{' '}
            <code>{'<Section />'}</code> component.
          </p>
        </Container>
      </Section>
      {/* Image Caption */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Image Caption.'
              text={[
                'Images with caption using the ',
                <code>{'<ImageCaption />'}</code>,
                ' component. This component provides responsive images with optional comments. Images also have the option of being emphasized or fullwidth.',
              ]}
              callToAction='style-guide/#image-caption'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
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
      <ImageCaption image={image} altText={altText} caption='Default. Lorem ipsum dolor sit amet' id='image-caption' />
      <ImageCaption image={image} altText={altText} caption='Emphasized. Lorem ipsum dolor sit amet' emphasized />
      <ImageCaption image={image} altText={altText} caption='Fullwidth. Lorem ipsum dolor sit amet' fullwidth />
      {/* Featured Section */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Featured Section.'
              text={[
                'Featured sections using the ',
                <code>{'<FeaturedSectionRefactor />'}</code>,
                ' component. This component provides a featured section with header, text, and call to action.',
              ]}
              callToAction='style-guide/#featured-section'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='featured-section'>
          <h2>Variations</h2>
          <p>
            There are three variations of the <code>{'<FeaturedSectionRefactor />'}</code> component. The default will
            put content in front of a color background. The <code>imageAsBackground</code> variation will put content in
            front of a provided image with the image at 50% opacity.
          </p>
        </Container>
      </Section>
      <FeaturedSectionRefactor imageAlt={altText} image={image} imageAsBackground>
        <p>Image Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSectionRefactor>
      <FeaturedSectionRefactor>
        <p>Color Background. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSectionRefactor>
      <FeaturedSectionRefactor backgroundColor={theme.colors.oliveLight40}>
        <Img fluid={imageSharp.childImageSharp.fluid} alt={altText} />
        <p>Color Background with Image. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </FeaturedSectionRefactor>
      <FeaturedSectionRefactor>
        <CallToAction
          header='Lorem Ipsum.'
          text='With Call To Action. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          callToAction='style-guide/#featured-section'
          callToActionText='Lorem ipsum dolor sit amet'
        />
      </FeaturedSectionRefactor>
      {/* Hero */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Hero.'
              text={[
                'Hero using the ',
                <code>{'<Hero />'}</code>,
                ' component. This component provides full width and full height section, displaying content in front of a provided image.',
              ]}
              callToAction='style-guide/#hero'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='hero'></Container>
      </Section>
      <Hero
        image={
          <Img
            fluid={imageSharp.childImageSharp.fluid}
            alt={'Alt text'}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.5 }}
          />
        }
        content={<PageHeader>Lorem Ipsum</PageHeader>}
      />
      {/* Blog Posts */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Blog Posts.'
              text={[
                'Blog posts using the ',
                <code>{'<BlogPosts />'}</code>,
                ' component. This component provides a single column layout of blog posts in descending date order.',
              ]}
              callToAction='style-guide/#blog-posts'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='blog-posts'>
          <BlogPosts posts={data.allMdx.edges} />
        </Container>
      </Section>
      {/* Link Button */}
      <Section>
        <StyleGuideContainer>
          <FeaturedSectionRefactor>
            <CallToAction
              header='Link Button.'
              text={['Link button using the ', <code>{'<LinkButton />'}</code>, ' component.']}
              callToAction='style-guide/#link-button'
              callToActionText='↓'
            />
          </FeaturedSectionRefactor>
        </StyleGuideContainer>
      </Section>
      <Section>
        <Container id='link-button'>
          <LinkButton to='style-guide/style-guide/#link-button'>Link button</LinkButton>
        </Container>
      </Section>
    </Layout>
  )
}
