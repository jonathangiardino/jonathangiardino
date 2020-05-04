import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Context from "../store/context"

const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: ${props => props.theme.fonts.main};
  text-decoration: none;
`

const Container = styled.div`
  height: 100%;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
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
    }
  `)

  return (
    <Body
      style={{
        backgroundColor: state.isDark ? "#09323a" : "#fff",
        color: state.isDark ? "#fff" : "#09323a",
      }}
    >
      <Container>
        <main>{children}</main>
      </Container>
    </Body>
  )
}

export default Layout
