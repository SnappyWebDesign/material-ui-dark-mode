module.exports = {
  siteMetadata: {
    title: `Gatsby Material-UI Demo Template`,
    description: `Barebones Gatsby/Material-UI Template for Demonstrations via SnappyWebDesign.net`,
    author: `@snappy_web`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `roboto condensed\::300,400,400i,500,600,700,800,900`,
          `work sans\::300,400,400i,500,600,700,800,900`
        ],
        display: "swap",
        attributes: {
          rel: "preload",
          as: "font"
        }
      }
    }
  ]
}
