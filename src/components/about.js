import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const AboutContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 0;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    height: auto;
    flex-direction: column;
    justify-content: center;
  }
`
const TextContainer = styled.div`
  width: 50%;
  display: block;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
    text-align: center;
    margin-top: 3rem;
  }
`
const AboutText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
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

const About = props => {
  const img = useStaticQuery(graphql`
    query {
      peep_jonathan_standing: file(
        relativePath: { eq: "peep-jonathan-standing.png" }
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
    <AboutContainer>
      <ImageWrapper>
        <Img fluid={img.peep_jonathan_standing.childImageSharp.fluid} />
      </ImageWrapper>
      <TextContainer>
        <AboutText>
          I am a <Span>Frontend & Mobile developer</Span> from Italy living in
          Amsterdam, passionate about creating amazing experiences for web and
          mobile. I have a solid background in Retail, Sales, Customer support,
          Localization, Translation and Project Management that add up a
          business side of me which often comes handy. Last but not least, I am
          extremely eager to learn and express my creativity to the fullest on a
          daily basis.
        </AboutText>
      </TextContainer>
    </AboutContainer>
  )
}

export default About
