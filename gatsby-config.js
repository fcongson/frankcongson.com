const { apiEndpoint } = require('./prismic-config')
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Frank Congson`,
    titleTemplate: `$s - Frank Congson`,
    description: `Photography, Travel, Minimalism, Design, & Development`,
    headline: `Photography, Travel, Minimalism, Design, & Development`,
    keywords: `photography, travel, minimalism, design, web design, development, web development`,
    author: `Frank Congson`,
    siteUrl: `https://www.frankcongson.com`,
    siteLanguage: `en`,
    siteLocale: `en_US`,
    image: `/images/logo.jpg`,
    twitter: `@fcongson`,
    twitterUrl: `https://twitter.com/fcongson`,
    facebook: `Frank Congson`,
    facebookUrl: `https://www.facebook.com/fcongson`,
    instagramUrl: `https://www.instagram.com/fcongson`,
    youtubeUrl: `https://www.youtube.com/channel/UCY6yq-YHsNzdchUlMlUn3TQ`,
    linkedinUrl: `https://www.linkedin.com/in/fcongson`,
    githubUrl: `https://github.com/fcongson`,
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
            component: require.resolve('./src/templates/post.js'),
          },
          {
            type: 'Page',
            match: '/:uid',
            path: '/page-preview',
            component: require.resolve('./src/templates/page.js'),
          },
        ],
        omitPrismicScript: true,
      },
    },
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
        icon: `src/images/webclip.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
