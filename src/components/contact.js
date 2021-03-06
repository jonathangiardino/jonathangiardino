import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { MdEmail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"

import Context from "../store/context"

const ContactContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    height: 40vh;
  }
`
const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${props => props.theme.spacing.medium};

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    text-align: center;
    flex-direction: column;
  }
`
const ContactTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-right: 2rem;

  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.smallTitle};
    margin-bottom: ${props => props.theme.spacing.small};
    margin-right: 0;
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
const ContactRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.xSmall} 0;
  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: center;
    width: 100%;
  }
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.theme.spacing.medium};
  @media ${props => props.theme.breakpoints.mobile} {
    margin-right: 0;
    padding: 0 ${props => props.theme.spacing.small};
  }
`
const Text = styled.a`
  display: flex;
  text-decoration: none;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 140%;
`

const Contact = props => {
  const { state } = useContext(Context)

  const img = useStaticQuery(graphql`
    query {
      peep_jonathan_sitting: file(
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
    <ContactContainer id="contact">
      <TitleContainer>
        <ContactTitle>Drop me a line</ContactTitle>
        <ContactRow>
          <Text
            style={{ color: state.isDark ? "#fff" : "#09323a" }}
            href="mailto:hello@jonathangiardino.com?subject=Hello%20Jonathan%2C%20let's%20have%20a%20chat!&body=Replace%20this%20text%20with%20your%20message%20%3A"
          >
            <Icon style={{ color: state.isDark ? "#fff" : "#09323a" }}>
              <MdEmail style={{ fontSize: "2rem" }} />
            </Icon>
          </Text>
          <Text
            style={{ color: state.isDark ? "#fff" : "#09323a" }}
            href="https://twitter.com/jonathan_gardn"
            target="_blank"
          >
            <Icon style={{ color: " #00acee" }}>
              <FaTwitter style={{ fontSize: "2rem" }} />
            </Icon>
          </Text>
        </ContactRow>
      </TitleContainer>
      {/* <ImageWrapper>
        <Img style={{width: "100%"}} fluid={img.peep_jonathan_sitting.childImageSharp.fluid} />
      </ImageWrapper> */}
    </ContactContainer>
  )
}

export default Contact
