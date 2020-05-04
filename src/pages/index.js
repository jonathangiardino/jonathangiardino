import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => {
  const img = useStaticQuery(graphql`
    query {
      peepJonathan: file(relativePath: { eq: "peep-jonathan.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      peepJonathanSitting: file(
        relativePath: { eq: "peep-jonathan-sitting.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <div style={{ maxWidth: "350px" }}>
        <Img fluid={img.peepJonathan.childImageSharp.fluid} />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
