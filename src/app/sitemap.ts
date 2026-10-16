import { getAllPageSlugs, getAllPosts } from 'lib/content'
import type { MetadataRoute } from 'next'
import siteMetadata from '../../content/data/siteMetadata.json'

// Required for `output: 'export'`: the sitemap is generated once at build time.
export const dynamic = 'force-static'

const url = (pathname: string) => `${siteMetadata.siteUrl}${pathname}`

export default function sitemap(): MetadataRoute.Sitemap {
  // Standalone routes, plus any content/pages/*.json page (e.g. /uses). Deduped because the
  // dedicated routes (about, photography, ...) can also appear as content pages.
  const pagePaths = new Set([
    '/about/',
    '/photography/',
    '/blog/',
    '/style-guide/',
    ...getAllPageSlugs().map((s) => `/${s}/`),
  ])

  return [
    { url: url('/'), priority: 1 },
    ...[...pagePaths].map((pathname) => ({ url: url(pathname), priority: 0.8 })),
    ...getAllPosts().map(({ frontmatter }) => ({
      url: url(`/blog/${frontmatter.slug}/`),
      lastModified: new Date(frontmatter.date),
      priority: 0.6,
    })),
  ]
}
