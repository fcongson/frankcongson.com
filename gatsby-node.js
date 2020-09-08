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
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `/blog/${node.frontmatter.slug}`,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/post.js`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })

  // Create blog pages
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
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
      component: path.resolve(`./src/templates/page.js`),
      context: { id: node.id },
    })
  })
}
