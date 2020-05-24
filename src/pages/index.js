import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Hero from "../components/hero"
import HorizontalScroll from "../components/horizontalScroll"
import About from "../components/about"
import Skills from "../components/skills"
import Contact from "../components/contact"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Hero />
      <HorizontalScroll />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default IndexPage
