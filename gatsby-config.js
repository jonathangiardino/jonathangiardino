module.exports = {
  siteMetadata: {
    title: `Jonathan Giardino`,
    description: `I am a Frontend & iOS developer from Italy living in Amsterdam, The Netherlands, passionate about creating amazing experiences for web and mobile. Follow me on Twitter @jonathan_gardn`,
    author: `@jonathan_gardn`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `react-icons`,
    `local-storage-fallback`,
    `kursor`,
    `smooth-scroll`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jonathan Giardino`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/peep-jonathan-hero.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Monospace\:300,400,600,900`,
          `Poppins\:300,400,600,900`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
