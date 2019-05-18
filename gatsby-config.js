module.exports = {
  siteMetadata: {
    title: `Stocksy`,
    description: `Stocksy United leads the way with a highly curated collection of stock photography. Browse our galleries and find the latest stock images and video clips.`,
    author: `@delster2`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // Styling
    `gatsby-plugin-styled-components`,
    // CMS
    `gatsby-plugin-netlify-cms`,
    // Markdown Parser
    `gatsby-transformer-remark`,
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
