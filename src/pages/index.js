import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero />
    </Layout>
  )
}

export default IndexPage
