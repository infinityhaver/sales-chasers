module.exports = {
    siteMetadata: {
      title: `Sales Chasers`,
        siteUrl: `https://www.saleschasers.com`,
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-image`,
      `gatsby-background-image`,
      `gatsby-plugin-fontawesome-css`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `assets`,
          path: `${__dirname}/images`,
        },
      },
    ]
}