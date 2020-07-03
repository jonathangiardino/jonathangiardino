import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import BlogTile from "./BlogTile"

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

const BlogScroll = () => {
  const query = useStaticQuery(graphql`
    query {
      arrowRight: file(relativePath: { eq: "arrow-right.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
        edges {
          node {
            id
            frontmatter {
              title
              excerpt
              date
              slug
            }
          }
        }
      }
    }
  `)

  const posts = query.allMarkdownRemark.edges

  return (
    <SectionContainer id="work">
      <ArrowContainer>
        <Img
          fluid={query.arrowRight.childImageSharp.fluid}
          style={{ width: "4rem" }}
        />
      </ArrowContainer>
      <HorizontalContainer>
        {posts.map(
          ({
            node: {
              id,
              frontmatter: { title, date, excerpt, slug },
            },
          }) => {
            return (
              <BlogTile
                key={id}
                title={title}
                date={date}
                description={excerpt}
                slug={slug}
              />
            )
          }
        )}
      </HorizontalContainer>
    </SectionContainer>
  )
}

export default BlogScroll
