import siteMetadata from '../../content/data/siteMetadata.json'
import type { PostFrontmatter } from './content-types'
import { resolveImagePath } from './image-utils'

const { siteUrl } = siteMetadata
const personId = `${siteUrl}/#person`
const websiteId = `${siteUrl}/#website`

const absolute = (pathname: string) => `${siteUrl}${pathname}`

const personRef = { '@id': personId }

export const personSchema = () => ({
  '@type': 'Person',
  '@id': personId,
  name: siteMetadata.author,
  url: siteUrl,
  sameAs: [
    siteMetadata.twitterUrl,
    siteMetadata.facebookUrl,
    siteMetadata.instagramUrl,
    siteMetadata.youtubeUrl,
    siteMetadata.linkedinUrl,
    siteMetadata.githubUrl,
    siteMetadata.devUrl,
  ].filter(Boolean),
})

export const websiteSchema = () => ({
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: siteMetadata.title,
  description: siteMetadata.description,
  inLanguage: siteMetadata.siteLanguage,
  author: personRef,
  publisher: personRef,
})

/** Structured data for the home page: the site and the person behind it. */
export const homeSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [websiteSchema(), personSchema()],
})

export const blogPostingSchema = (frontmatter: PostFrontmatter) => {
  const url = absolute(`/blog/${frontmatter.slug}/`)
  const image = resolveImagePath(frontmatter.seo?.image ?? frontmatter.featured_image) ?? siteMetadata.image
  const keywords = [...(frontmatter.seo?.keywords ?? []), ...(frontmatter.keywords ?? [])]

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#post`,
    headline: frontmatter.seo?.title ?? frontmatter.title,
    description: frontmatter.seo?.description ?? frontmatter.description ?? siteMetadata.description,
    datePublished: new Date(frontmatter.date).toISOString(),
    image: absolute(image),
    url,
    mainEntityOfPage: url,
    inLanguage: siteMetadata.siteLanguage,
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    author: { '@type': 'Person', name: siteMetadata.author, url: siteUrl, '@id': personId },
    publisher: personRef,
  }
}
