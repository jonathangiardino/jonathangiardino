import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date
        excerpt
        title
      }
    }
  }
`

const Article = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  return (
    <Layout>
      <h1 style={{ fontSize: "10rem" }}>{content.title}</h1>
    </Layout>
  )
}

export default Article
