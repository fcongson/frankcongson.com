import type { MetadataRoute } from 'next'
import siteMetadata from '../../content/data/siteMetadata.json'

// Required for `output: 'export'`: robots.txt is generated once at build time.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  }
}
