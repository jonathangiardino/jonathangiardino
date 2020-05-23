import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Button from "./button"

const HeroContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    height: auto;
    flex-direction: column-reverse;
    justify-content: center;
  }
`
const TitleContainer = styled.div`
  width: 50%;
  display: block;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
    text-align: center;
  }
`
const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 140%;
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.small};
  }
`
const ImageWrapper = styled.div`
  width: 20rem;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 10rem;
  }
`
const Span = styled.span`
  color: ${props => props.theme.colors.primary};
`

const Hero = props => {
  const img = useStaticQuery(graphql`
    query {
      peep_jonathan_hero: file(relativePath: { eq: "peep-jonathan-hero.png" }) {
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
          My name is <Span>Jonathan Giardino</Span>. <br /> I design and develop
          awesome experiences for <Span>Web</Span> and <Span>Mobile</Span>.
        </HeroTitle>
        <Button text="Get in touch" action={() => alert("hello")} />
      </TitleContainer>
      <ImageWrapper>
        <Img fluid={img.peep_jonathan_hero.childImageSharp.fluid} />
      </ImageWrapper>
    </HeroContainer>
  )
}

export default Hero
