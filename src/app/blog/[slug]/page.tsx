import { JsonLd } from 'components/JsonLd'
import { buildMetadata } from 'lib/seo'
import { blogPostingSchema } from 'lib/structured-data'
import { getAllPosts, getPostBySlug } from 'lib/content'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { MdxBlockquote, MdxImage, MdxImageCaption, MdxLink, MdxLinkComponent, MdxSection } from './mdx-components'
import { PostShell } from './post-shell'

const mdxComponents = {
  Section: MdxSection,
  img: MdxImage,
  ImageCaption: MdxImageCaption,
  blockquote: MdxBlockquote,
  a: MdxLink,
  Link: MdxLinkComponent,
}

export const generateStaticParams = () => getAllPosts().map((post) => ({ slug: post.frontmatter.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { frontmatter } = post
  return buildMetadata({
    title: frontmatter.seo?.title ?? frontmatter.title,
    description: frontmatter.seo?.description ?? frontmatter.description,
    keywords: [...(frontmatter.seo?.keywords ?? []), ...(frontmatter.keywords ?? [])],
    image: frontmatter.seo?.image ?? frontmatter.featured_image,
    imageAlt: frontmatter.seo?.alt_text ?? frontmatter.alt_text,
    pathname: `/blog/${frontmatter.slug}`,
    article: true,
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content } = post

  return (
    <>
      <JsonLd data={blogPostingSchema(frontmatter)} />
      <PostShell
        title={frontmatter.title}
        featuredImage={frontmatter.featured_image}
        altText={frontmatter.alt_text}
        imageCaption={frontmatter.image_caption}
      >
        <MDXRemote source={content} components={mdxComponents} />
      </PostShell>
    </>
  )
}
