import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Tile from "./tile"

const SectionContainer = styled.div`
  padding: 0;
`

const ArrowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: ${props => props.theme.spacing.medium};
`

const HorizontalContainer = styled.div`
  padding: ${props => props.theme.spacing.large};
  padding-top: 0;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child::after {
    content: "";
    flex: 0 0 ${props => props.theme.spacing.xSmall};
  }
`

const HorizontalScroll = () => {
  const img = useStaticQuery(graphql`
    query {
      arrowRight: file(relativePath: { eq: "arrow-right.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SectionContainer id="work">
      <ArrowContainer>
        <Img
          fluid={img.arrowRight.childImageSharp.fluid}
          style={{ width: "4rem" }}
        />
      </ArrowContainer>

      <HorizontalContainer>
        <Tile
          title="whauh.com"
          date="2019/2020"
          description="Whauh! is an independent freelance agency focused on creating Webflow sites"
          url="https://www.whauh.com/"
        />
        <Tile
          title="Plant Based Burgers"
          date="2019"
          description="A series of (Plant-based) burger animations simple to understand and easy to use. Free to clone in your projects. Realised using Vanilla JS and SASS."
          url="https://jonathangiardino.github.io/plant-based-burger-animations/"
          github="https://github.com/jonathangiardino/plant-based-burger-animations"
        />
        <Tile
          title="Circles"
          date="2019"
          description="Click on any letter on your keyboard to generate a circle and to trigger a sound. Realised with Javascript, PaperJS and HowlerJS. Desktop only"
          url="https://jonathangiardino.github.io/circles/"
          github="https://github.com/jonathangiardino/circles"
        />
        <Tile
          title="Mijke Res Coaching"
          date="2019"
          description="Mijke Res coaching is an online life coaching services website realised with Webflow, custom code and Calendly integration."
          url="https://mijkeres.com"
        />
        <Tile
          title="'rita"
          date="2019"
          description="Single page application that helps you find pizza around your position or in a specific location. Realised with HTML, CSS, JS and Google Maps API.."
          url="https://jonathangiardino.github.io/rita/"
          github="https://github.com/jonathangiardino/rita"
        />
        <Tile
          title="Podcast template"
          date="2019"
          description="Mijke Res coaching is an online life coaching services website realised with Webflow, custom code and Calendly integration."
          url="https://podcast-template-cool.webflow.io/"
        />
        <Tile
          title="Dummy Webflow Ecommerce"
          date="2019"
          description="eCommerce template resembling a shoes' shop.
          Products images are not licensed while Home and Contact page's ones are taken from Unsplash."
          url="https://dummy-shop.webflow.io/"
        />
        <Tile
          title="The Monkees"
          date="2018"
          description="Fictitious music-band website template for old and new fans. My first project ever."
          url="https://jonathangiardino.github.io/themonkees/"
          github="https://github.com/jonathangiardino/themonkees"
        />
      </HorizontalContainer>
    </SectionContainer>
  )
}

export default HorizontalScroll
