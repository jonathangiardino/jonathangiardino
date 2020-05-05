import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Button from "./button"

const HeroContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const TitleContainer = styled.div`
  width: 50%;
  display: block;
`
const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 140%;
`
const Span = styled.span`
  color: ${props => props.theme.colors.primary};
`

const Hero = props => {
  const img = useStaticQuery(graphql`
    query {
      peepJonathan: file(relativePath: { eq: "peep-jonathan.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroContainer>
      <TitleContainer>
        <HeroTitle>
          ( “Hello, World” ) 👋 <br />
          My name is <Span>Jonathan Giardino</Span>. <br /> I design and build
          awesome stuff for the <Span>Web</Span> and <Span>iOS</Span>.
        </HeroTitle>
        <Button text="Drop me a line" action={() => alert("hello")} />
      </TitleContainer>
      <Img
        fluid={img.peepJonathan.childImageSharp.fluid}
        style={{ width: "20rem" }}
      />
    </HeroContainer>
  )
}

export default Hero
