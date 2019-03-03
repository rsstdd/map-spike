module.exports = {
  siteMetadata: {
    title: `Spike`,
    description: ``,
    author: `Ross Todd rssmtdd@gmail.com`,
    menuLinks: [
      {
        name: '',
        link: '/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      precision: 8, // For Bootstrap
    },
  ],
}
