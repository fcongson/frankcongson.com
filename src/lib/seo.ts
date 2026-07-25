import type { Metadata } from 'next'
import siteMetadata from '../../content/data/siteMetadata.json'
import { resolveImagePath } from './content'

export const buildMetadata = ({
  title,
  description,
  keywords,
  image,
  imageAlt,
  pathname,
  article = false,
}: {
  title?: string
  description?: string
  keywords?: string | string[]
  image?: string
  imageAlt?: string
  pathname?: string
  article?: boolean
}): Metadata => {
  const resolvedImage = resolveImagePath(image) ?? siteMetadata.image
  const keywordList = Array.isArray(keywords)
    ? keywords
    : keywords
      ? keywords.split(',').map((k) => k.trim())
      : undefined
  const url = pathname ? `${siteMetadata.siteUrl}${pathname}` : siteMetadata.siteUrl

  return {
    title: title || undefined,
    description: description || siteMetadata.description,
    keywords: keywordList,
    alternates: { canonical: url },
    openGraph: {
      title: title ? `${title} - ${siteMetadata.title}` : siteMetadata.title,
      description: description || siteMetadata.description,
      url,
      siteName: siteMetadata.facebook,
      images: resolvedImage ? [{ url: resolvedImage, alt: imageAlt || '' }] : undefined,
      locale: siteMetadata.siteLocale,
      type: article ? 'article' : 'website',
    },
    twitter: {
      card: 'summary_large_image',
      creator: siteMetadata.twitter,
      title: title ? `${title} - ${siteMetadata.title}` : siteMetadata.title,
      description: description || siteMetadata.description,
      images: resolvedImage ? [resolvedImage] : undefined,
    },
  }
}
