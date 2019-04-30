module.exports = {
  siteMetadata: {
    title: `Stocksy`,
    description: `Meta description for this microsite will be provided by the client here.`,
    author: `David Elster, GitHub/LinkedIn: delster`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // Styling
    `gatsby-plugin-styled-components`,
    // CMS
    `gatsby-plugin-netlify-cms`,
    // Source Images from Filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Source Landing Page Data from Markdown Files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `landingpages`,
        path: `${__dirname}/landingpages`,
      },
    },
    // Markdown Parser
    `gatsby-transformer-remark`,
    // PWA Manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stocksy-microsite`,
        short_name: `stocksy`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#FF3F58`, // Websafe Version would be #FF3366
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    // PWA & Offline Functionality
    `gatsby-plugin-offline`,
  ],
}
