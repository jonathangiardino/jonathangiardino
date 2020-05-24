import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Context from "../store/context"

const SkillsContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: 50vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(8, 10%);
  grid-template-rows: 40% 40%;
  @media ${props => props.theme.breakpoints.mobile} {
    height: auto;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(4, auto);
  }
`

const ImageWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
`

const Skills = props => {
  const { state } = useContext(Context)

  const img = useStaticQuery(graphql`
    query {
      html5: file(relativePath: { eq: "html5.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      css3: file(relativePath: { eq: "css3.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sass: file(relativePath: { eq: "sass.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bootstrap: file(relativePath: { eq: "bootstrap.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      javascript: file(relativePath: { eq: "javascript.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      typescript: file(relativePath: { eq: "typescript.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vuejs: file(relativePath: { eq: "vuejs.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      reactLogo: file(relativePath: { eq: "react-logo.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      nativescript: file(relativePath: { eq: "nativescript.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      swift: file(relativePath: { eq: "swift.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      npm: file(relativePath: { eq: "npm.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      yarn: file(relativePath: { eq: "yarn.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      git: file(relativePath: { eq: "git.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubBlack: file(relativePath: { eq: "github-black.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      githubWhite: file(relativePath: { eq: "github-white.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      sketch: file(relativePath: { eq: "sketch.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      webflow: file(relativePath: { eq: "webflow.png" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <SkillsContainer>
      <ImageWrapper>
        <Img fixed={img.html5.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.css3.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.sass.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.bootstrap.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.javascript.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.typescript.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.vuejs.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.reactLogo.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.nativescript.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.swift.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.npm.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.yarn.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.git.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img
          fixed={
            state.isDark
              ? img.githubWhite.childImageSharp.fixed
              : img.githubBlack.childImageSharp.fixed
          }
        />
      </ImageWrapper>

      <ImageWrapper>
        <Img fixed={img.sketch.childImageSharp.fixed} />
      </ImageWrapper>
      <ImageWrapper>
        <Img fixed={img.webflow.childImageSharp.fixed} />
      </ImageWrapper>
    </SkillsContainer>
  )
}

export default Skills
