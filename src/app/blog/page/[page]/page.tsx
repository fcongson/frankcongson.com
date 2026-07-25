import { getPaginatedPosts } from 'lib/content'
import { notFound } from 'next/navigation'
import { BlogListClient } from '../../blog-list-client'

export const generateStaticParams = () => {
  const { numPages } = getPaginatedPosts(1)
  // Page 1 is served at /blog/, so only generate /blog/page/2/, /blog/page/3/, etc.
  return Array.from({ length: Math.max(numPages - 1, 0) }, (_, i) => ({ page: String(i + 2) }))
}

export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params
  const pageNumber = Number(page)
  if (!Number.isInteger(pageNumber) || pageNumber < 2) notFound()

  const { posts, numPages, currentPage } = getPaginatedPosts(pageNumber)
  if (posts.length === 0) notFound()

  return <BlogListClient posts={posts} numPages={numPages} currentPage={currentPage} />
}
