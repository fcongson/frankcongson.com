const path = require('path')

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MdxFrontmatter implements Node {
      title: String!
      description: String
      date: Date! @dateformat
      slug: String!
      featured_image: File @fileByRelativePath
      alt_text: String
      image_caption: String
      keywords: [String]
      seo: SEO
      published: Boolean
    }
    type Mdx implements Node {
      fields: Fields
    }
    type Fields {
      slug: String
    }
    type SEO {
      title: String
      description: String
      keywords: [String]
      image: File @fileByRelativePath
      alt_text: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      allPagesJson {
        totalCount
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create post pages from mdx files
  const posts = result.data.allMdx.edges
  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post.tsx`),
      context: { id: node.id },
    })
  })

  // Create blog pages
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve('./src/templates/blog.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  // Create pages from json files
  const pages = result.data.allPagesJson.edges
  pages.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/templates/page.tsx`),
      context: { id: node.id },
    })
  })
}
