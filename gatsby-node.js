exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
        edges {
          node {
            id
            frontmatter {
              date
              description
              excerpt
              title
              slug
            }
          }
        }
      }
    }
  `)

  if (data.errors) {
    console.log("error retriveing blog articles")
    return
  }

  const articleTemplate = require.resolve(`./src/templates/article.js`)

  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    actions.createPage({
      path: `/articles/${slug}/`,
      component: articleTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
