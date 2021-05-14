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
    justify-content: space-evenly;
    padding: 1.5rem 0;
  }
`

const ImageWrapper = styled.a`
  text-decoration: none;
  padding: 1rem;
  margin: 1rem;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0.3rem;
    margin: 0.3rem;
  }
`

const Footer = props => {
  const { state } = useContext(Context)

  const img = useStaticQuery(graphql`
    query {
      githubBlack: file(relativePath: { eq: "github-black.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubWhite: file(relativePath: { eq: "github-white.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      webflow: file(relativePath: { eq: "webflow.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devWhite: file(relativePath: { eq: "devWhite.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dev: file(relativePath: { eq: "dev.png" }) {
        childImageSharp {
          fixed(width: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dribbble: file(relativePath: { eq: "dribbble.png" }) {
        childImageSharp {
          fixed(width: 30) {
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
      <ImageWrapper href="https://medium.com/@jonathangiardino" target="_blank">
        <Img fixed={img.medium.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper href="https://dev.to/jonathan_gardn" target="_blank">
        <Img
          fixed={
            state.isDark
              ? img.devWhite.childImageSharp.fixed
              : img.dev.childImageSharp.fixed
          }
        />
      </ImageWrapper>
      <ImageWrapper
        href="https://dribbble.com/jonathangiardino"
        target="_blank"
      >
        <Img fixed={img.dribbble.childImageSharp.fixed} />
      </ImageWrapper>
    </FooterContainer>
  )
}

export default Footer
