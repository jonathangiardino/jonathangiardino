import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
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
  width: 22rem;
  display: flex;
  justify-content: center;
  
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
          ( “Hello, World” 👋) <br />I am <Span>Jonathan Giardino</Span>. <br />{" "}
          I love designing and developing<br />
          cool stuff for the Web.<br />
          <Span> Fancy a chat?</Span>
        </HeroTitle>
        <Button text="Get in touch" action={() => scrollTo("#contact")} />
      </TitleContainer>
      <ImageWrapper>
        <Img style={{width: "90%"}} fluid={img.peep_jonathan_hero.childImageSharp.fluid} />
      </ImageWrapper>
    </HeroContainer>
  )
}

export default Hero
