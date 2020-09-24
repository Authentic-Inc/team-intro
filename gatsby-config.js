module.exports = {
  pathPrefix: `/team-intro`,
  siteMetadata: {
    siteTitle: `Authentic`,
    siteTitleAlt: `Authentic`,
    siteHeadline: `Authentic`,
    siteUrl: `https://authentic.com`,
    siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@Authentic`,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
}
