import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import type { ContentPage, Post, PostFrontmatter } from './content-types'

export type { ContentPage, Post, PostFrontmatter, PageSection, SeoFrontmatter } from './content-types'
export { isGif, resolveImagePath } from './image-utils'

const CONTENT_DIR = path.join(process.cwd(), 'content')
const POSTS_DIR = path.join(CONTENT_DIR, 'posts')
const PAGES_DIR = path.join(CONTENT_DIR, 'pages')

const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })

const readPostDir = (slugDir: string): Post => {
  const fullPath = path.join(POSTS_DIR, slugDir, 'index.mdx')
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const frontmatter = data as PostFrontmatter
  return {
    frontmatter,
    content,
    dateFormatted: formatDate(frontmatter.date),
  }
}

export const getAllPosts = (): Post[] => {
  const dirs = fs.readdirSync(POSTS_DIR, { withFileTypes: true }).filter((d) => d.isDirectory())
  const posts = dirs.map((d) => readPostDir(d.name)).filter((post) => post.frontmatter.published !== false)
  return posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
}

export const getPostBySlug = (slug: string): Post | undefined => getAllPosts().find((p) => p.frontmatter.slug === slug)

export const POSTS_PER_PAGE = 6

export const getPaginatedPosts = (page: number) => {
  const posts = getAllPosts()
  const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const start = (page - 1) * POSTS_PER_PAGE
  return {
    posts: posts.slice(start, start + POSTS_PER_PAGE),
    numPages,
    currentPage: page,
  }
}

export const getAllPageSlugs = (): string[] =>
  fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''))

export const getPageBySlug = (slug: string): ContentPage | undefined => {
  const fullPath = path.join(PAGES_DIR, `${slug}.json`)
  if (!fs.existsSync(fullPath)) return undefined
  const json = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  return { slug, ...json }
}
