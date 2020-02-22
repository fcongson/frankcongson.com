const { apiEndpoint } = require('./prismic-config')
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Frank Congson`,
    description: `Photography, Travel, Minimalism, Design, & Development`,
    keywords: `photography, travel, minimalism, design, web design, development, web development`,
    author: `Frank Congson`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        accessToken: `${process.env.API_KEY}`,
        path: '/preview',
        previews: true,
        pages: [
          {
            type: 'Post',
            match: '/blog/:uid',
            path: '/blog-preview',
            component: require.resolve('./src/templates/post.js')
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
