const siteMetadata = require('./content/data/siteMetadata.json')
const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frank Congson`,
        short_name: `Frank`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `content/images/webclip.png`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: ``,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        content: path.join(__dirname, `content`),
        components: path.join(__dirname, `src/components`),
        pages: path.join(__dirname, `src/pages`),
        stylesheets: path.join(__dirname, `src/stylesheets`),
        templates: path.join(__dirname, `src/templates`),
        utils: path.join(__dirname, `src/utils`),
      },
    },
    'gatsby-plugin-netlify',
  ],
}
