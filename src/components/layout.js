import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Context from "../store/context"

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.main};
  text-decoration: none;
`

const Layout = ({ children }) => {
  const { state } = useContext(Context)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      Corner: file(relativePath: { eq: "Corner.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Body
      style={{
        backgroundColor: state.isDark ? "#09323a" : "#fff",
        color: state.isDark ? "#fff" : "#09323a",
      }}
    >
      <Img
        fluid={data.Corner.childImageSharp.fluid}
        style={{ width: "5rem", position: "absolute", top: "0", left: "0" }}
      />
      <main>{children}</main>
    </Body>
  )
}

export default Layout
