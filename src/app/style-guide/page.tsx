import { getAllPosts } from 'lib/content'
import { StyleGuideClient } from './style-guide-client'

export default function StyleGuide() {
  const posts = getAllPosts().slice(0, 3)
  return <StyleGuideClient posts={posts} />
}
