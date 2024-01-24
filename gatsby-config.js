/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Paul's Portentous Publication`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `pages`,
         path: `${__dirname}/src/pages`,
       },
     },
  ],
}