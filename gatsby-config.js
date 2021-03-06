const siteConfig = require('./site-config')

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  pathPrefix: '/srd-gameday',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./node_modules/grommet/node_modules"]
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.googleAnalyticsTrackingId
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SRD`,
        short_name: `SRD`,
        start_url: `/srd-gameday`,
        background_color: `#ffffff`,
        theme_color: `#E13987`,
        display: `minimal-ui`,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    }
    ]
}
