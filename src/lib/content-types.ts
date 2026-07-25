// Type-only definitions shared between the server-only content loader
// (content.ts) and client components that render this data.

export type SeoFrontmatter = {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  alt_text?: string
}

export type PostFrontmatter = {
  title: string
  description?: string
  date: string
  slug: string
  featured_image?: string
  alt_text?: string
  keywords?: string[]
  seo?: SeoFrontmatter
  published?: boolean
  excerpt?: string
  image_caption?: string
}

export type Post = {
  frontmatter: PostFrontmatter
  content: string
  dateFormatted: string
}

export type PageSection = {
  template: string
  [key: string]: unknown
}

export type ContentPage = {
  slug: string
  seo?: SeoFrontmatter
  hero_image?: { image: string; alt_text?: string }
  page_header?: string
  sections: PageSection[]
}
