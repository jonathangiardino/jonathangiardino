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

const HorizontalScroll = data => {
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

  const projects = data.data.allMarkdownRemark.edges

  return (
    <SectionContainer id="work">
      <ArrowContainer>
        <Img
          fluid={img.arrowRight.childImageSharp.fluid}
          style={{ width: "4rem" }}
        />
      </ArrowContainer>
      <HorizontalContainer>
        {projects.map(
          ({
            node: {
              frontmatter: { project, date, description, url, github },
            },
          }) => {
            return (
              <Tile
                key={url}
                title={project}
                date={date}
                description={description}
                url={url}
                github={github}
              />
            )
          }
        )}
      </HorizontalContainer>
    </SectionContainer>
  )
}

export default HorizontalScroll
