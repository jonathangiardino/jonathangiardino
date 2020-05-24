import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Context from "../store/context"

const FooterContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
  }
`

const ImageWrapper = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 1rem;
`

const Footer = props => {
  const { state } = useContext(Context)

  const img = useStaticQuery(graphql`
    query {
      githubBlack: file(relativePath: { eq: "github-black.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubWhite: file(relativePath: { eq: "github-white.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      webflow: file(relativePath: { eq: "webflow.png" }) {
        childImageSharp {
          fixed(width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <ImageWrapper href="https://github.com/jonathangiardino" target="_blank">
        <Img
          fixed={
            state.isDark
              ? img.githubWhite.childImageSharp.fixed
              : img.githubBlack.childImageSharp.fixed
          }
        />
      </ImageWrapper>
      <ImageWrapper href="https://webflow.com/jonathangiardino" target="_blank">
        <Img fixed={img.webflow.childImageSharp.fixed} />
      </ImageWrapper>
    </FooterContainer>
  )
}

export default Footer
