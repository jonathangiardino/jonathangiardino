module.exports = {
  siteMetadata: {
    title: `Jonathan Giardino`,
    description: `I am a Web Developer from Italy living in Amsterdam, passionate about creating amazing experiences for the web and mobile apps. Follow me on Twitter @jonathan_gardn`,
    author: `@jonathan_gardn`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/pages/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles/blog-posts`,
      },
    },
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Solarized Light",
                dark: "Monokai Dimmed",
              },
            },
          },
          `gatsby-remark-line-breaks`,
        ],
      },
    },
    `gatsby-plugin-netlify-cms`,
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
  ],
}
