import blog from '../../../content/data/blog.json'
import { getPaginatedPosts } from 'lib/content'
import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import { BlogListClient } from './blog-list-client'

export const metadata: Metadata = buildMetadata({
  title: blog.seo?.title || undefined,
  description: blog.seo?.description || undefined,
  keywords: blog.seo?.keywords,
  image: blog.seo?.image || undefined,
  imageAlt: blog.seo?.alt_text,
  pathname: '/blog',
})

export default function BlogIndex() {
  const { posts, numPages, currentPage } = getPaginatedPosts(1)
  return <BlogListClient posts={posts} numPages={numPages} currentPage={currentPage} />
}
