module.exports = {
  siteMetadata: {
    title: `Stocksy`,
    description: `Meta description for this microsite will be provided by the client here.`,
    author: `David Elster, GitHub/LinkedIn: delster`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // CMS
    `gatsby-plugin-netlify-cms`,
    // Styling
    `gatsby-plugin-styled-components`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `stocksy-microsite`,
        short_name: `stocksy`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    // PWA & Offline Functionality
    `gatsby-plugin-offline`,
  ],
}
