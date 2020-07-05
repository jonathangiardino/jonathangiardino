import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout.js"
import Contact from "../components/contact"
import Footer from "../components/footer"
import BlogHeader from "../components/blogHeader.js"

const TitleContainer = styled.div`
  width: 50%;
  display: block;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 90%;
    text-align: center;
  }
`
const ArticleTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  font-weight: ${props => props.theme.fontWeight.bold};
  line-height: 140%;

  color: ${props => props.theme.colors.primary};
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.small};
  }
`

const ArticleContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 0;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    height: auto;
    max-width: 100vw;
  }
`

const TextContainer = styled.div`
  width: 50%;
  display: block;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    max-width: 100vw;
    padding: ${props => props.theme.spacing.small};
    margin: ${props => props.theme.spacing.small};
  }
`
const ArticleText = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  line-height: 140%;
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.small};
    max-width: 100vw;
  }
`
const SmallText = styled.p`
  font-size: ${props => props.theme.fontSize.xSmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  line-height: 140%;
  color: ${props => props.theme.colors.lightBlue};
  margin-bottom: ${props => props.theme.spacing.medium};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`

const Article = ({ data }) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <BlogHeader />
      <ArticleContainer>
        <TextContainer>
          <ArticleText>{content.frontmatter.date}</ArticleText>
          <ArticleTitle>{content.frontmatter.title}</ArticleTitle>
          <SmallText>Reading time {content.timeToRead} min</SmallText>
          <div
            style={{ color: "inherit", textDecoration: "inherit" }}
            dangerouslySetInnerHTML={{ __html: content.html }}
          ></div>
        </TextContainer>
      </ArticleContainer>
      <Contact />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      rawMarkdownBody
      html
      timeToRead
      frontmatter {
        date
        excerpt
        title
      }
    }
  }
`

export default Article
