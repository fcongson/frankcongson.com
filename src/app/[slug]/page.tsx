import { getAllPageSlugs, getPageBySlug } from 'lib/content'
import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ContentPageClient } from './content-page-client'

// Routes that already have a dedicated static page and should not be
// shadowed by a content/pages/*.json entry of the same slug.
const RESERVED_SLUGS = ['about', 'photography', 'blog', 'style-guide']

export const generateStaticParams = () =>
  getAllPageSlugs()
    .filter((slug) => !RESERVED_SLUGS.includes(slug))
    .map((slug) => ({ slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getPageBySlug(slug)
  if (!page) return {}
  return buildMetadata({
    title: page.seo?.title,
    description: page.seo?.description,
    keywords: page.seo?.keywords,
    image: page.seo?.image,
    imageAlt: page.seo?.alt_text,
    pathname: `/${slug}`,
  })
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (RESERVED_SLUGS.includes(slug)) notFound()
  const page = getPageBySlug(slug)
  if (!page) notFound()

  return <ContentPageClient page={page} />
}
