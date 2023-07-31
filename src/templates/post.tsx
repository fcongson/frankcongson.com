import { Container, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { MDXProvider } from '@mdx-js/react'
import { Props } from '@mdx-js/react/lib'
import { Layout } from 'components/layouts'
import { SEO as Seo } from 'components/SEO'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Blog_PostQuery } from 'graphql-types'
import React from 'react'
import styled from 'styled-components'
import { ImageNode, useImage } from 'utils/useImage'

const createImage = (image: ImageNode, alt?: string) => {
  // [Support gifs in gatsby-image](https://github.com/gatsbyjs/gatsby/discussions/29410)
  if (image?.extension === 'gif') {
    return <img src={image?.publicURL ?? ''} alt={alt} />
  }
  return <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt={alt ?? ''} />
}

const shortcodes: Props['components'] = {
  Section: ({ children }: { children?: React.ReactNode }) => (
    <Section>
      <Container>{children}</Container>
    </Section>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    const image = useImage()(src)
    if (!image) return null
    return <ImageCaption image={createImage(image, alt)} />
  },
  blockquote: Quote,
  ImageCaption: ({
    image,
    altText,
    caption,
    emphasized,
    fullwidth,
  }: {
    image: string
    altText: string
    caption: string
    emphasized: boolean
    fullwidth: boolean
  }) => {
    const imageNode = useImage()(image)
    if (!imageNode) return null
    return (
      <ImageCaption
        image={createImage(imageNode, altText)}
        caption={caption}
        emphasized={emphasized}
        fullwidth={fullwidth}
      />
    )
  },
  Link,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => {
    const internalDomain = 'https://frankcongson.com'
    return href?.startsWith(internalDomain) ? (
      <Link to={href.replace(internalDomain, '')}>{children}</Link>
    ) : (
      <a href={href}>{children}</a>
    )
  },
}

export const BLOG_POST_QUERY = graphql`
  query BLOG_POST($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        seo {
          title
          description
          keywords
          image {
            publicURL
          }
          alt_text
        }
        title
        description
        date(formatString: "MMM DD, YYYY")
        keywords
        slug
        featured_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        alt_text
        image_caption
      }
    }
  }
`

const PostContent = styled.article`
  margin: 0 auto 0 auto;

  ${Container} {
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
  }
`

const PostHeader = styled.header`
  h1 {
    padding-bottom: 2rem;
  }

  .back {
    color: var(--lagom-semantic-color-fg-subtle);
    display: block;
    max-width: ${(props) => props.theme.sizes.maxWidthContainer};
    margin: 0 auto 2em auto;
    font-family: var(--lagom-core-font-families-sans-serif);
    font-size: 16px;

    &:before {
      content: '←';
      display: inline-block;
      position: relative;
      margin-right: 0.5rem;
    }

    a {
      color: var(--lagom-semantic-color-fg-subtle);
      font-weight: normal;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 200ms ease-in-out;

      &:hover {
        border-bottom: 1px solid var(--lagom-semantic-color-fg-subtle);
      }
    }
  }

  ${Container} {
    margin-bottom: 2rem;
  }

  margin-bottom: 4rem;
`

const PostFooter = styled.footer`
  background-color: var(--lagom-semantic-color-bg-muted);

  ${Container} {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: ${(props) => props.theme.sizes.maxWidthContent};
    margin-bottom: 0;
  }

  a {
    color: var(--lagom-semantic-color-fg-muted);
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--lagom-semantic-color-border-muted);
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid var(--lagom-semantic-color-border-default);
    }
  }
`

const Post: React.FunctionComponent<{ data: Blog_PostQuery; children: any }> = ({ data, children }) => {
  const { title, description, keywords, slug, featured_image, alt_text, image_caption, seo } =
    data.mdx?.frontmatter ?? {}

  return (
    <Layout>
      <Seo
        title={seo?.title ?? title}
        desc={seo?.description ?? description ?? undefined}
        keywords={[...(seo?.keywords ?? []), ...(keywords ?? [])].join(', ')}
        image={seo?.image?.publicURL ?? undefined}
        imageAlt={seo?.alt_text ?? alt_text ?? undefined}
        pathname={`/${slug}`}
        article
      />
      <PostContent>
        <PostHeader>
          <Section>
            <Container>
              <div className='back'>
                <Link to='/blog/'>back to list</Link>
              </div>
              <h1>{title ? title : 'Untitled'}</h1>
            </Container>
          </Section>
          {!!featured_image && (
            <ImageCaption
              image={
                <GatsbyImage image={featured_image.childImageSharp?.gatsbyImageData} alt={alt_text ?? title ?? ''} />
              }
              caption={image_caption ?? ''}
            />
          )}
        </PostHeader>
        {children ? <MDXProvider components={shortcodes}>{children}</MDXProvider> : null}
        <PostFooter>
          <Section>
            <Container>
              <h3>
                Thoughts? Send me a{' '}
                <a href='https://twitter.com/fcongson' target='_blank' rel='noopener noreferrer'>
                  tweet
                </a>
                !
              </h3>
            </Container>
          </Section>
        </PostFooter>
      </PostContent>
    </Layout>
  )
}

export default Post
