import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import HorizontalScroll from "../components/horizontalScroll"
import BlogScroll from "../components/blogScroll"
import About from "../components/about"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero />
      <HorizontalScroll data={data} />
      <About />
      <Skills />
      <BlogScroll />
      <Contact />
      <Footer />
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" } }) {
      edges {
        node {
          id
          frontmatter {
            date
            description
            github
            project
            url
          }
        }
      }
    }
  }
`

export default IndexPage
