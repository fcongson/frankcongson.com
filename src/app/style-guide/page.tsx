import { getAllPosts } from 'lib/content'
import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import { StyleGuideClient } from './style-guide-client'

export const metadata: Metadata = buildMetadata({
  title: 'Style Guide',
  description:
    'A living style guide for frankcongson.com: typography, components, and layout from the Lagom UI design system.',
  pathname: '/style-guide',
})

export default function StyleGuide() {
  const posts = getAllPosts().slice(0, 3)
  return <StyleGuideClient posts={posts} />
}
