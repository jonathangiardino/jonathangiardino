import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineGithub } from "react-icons/ai"
import { FiExternalLink } from "react-icons/fi"

const TileContainer = styled.div`
  flex: 0 0 auto;
  margin-right: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium};
  width: 25rem;
  height: 20rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.dark};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.1s linear;
  &:hover {
    box-shadow: ${props => props.theme.shadows.normal};
    background-color: ${props => props.theme.colors.dark};
  }
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.secondary};

    &:hover {
      box-shadow: ${props => props.theme.shadows.dark};
      background-color: ${props => props.theme.colors.dark};
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    width: 20rem;
    height: 18rem;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const IconsContainer = styled.div`
  display: flex;
`
const Title = styled.h1`
  font-size: ${props => props.theme.fontSize.smallTitle};
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: ${props => props.theme.spacing.xSmall};
  @media ${props => props.theme.breakpoints.mobile} {
    font-size: ${props => props.theme.fontSize.text};
  }
`
const Date = styled.p`
  font-size: ${props => props.theme.fontSize.extraSmall};
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeight.light};
  margin-bottom: ${props => props.theme.spacing.xSmall};
  letter-spacing: 0.3rem;
`
const Description = styled.p`
  font-size: ${props => props.theme.fontSize.extraSmall};
  color: ${props => props.theme.colors.light};
  font-weight: ${props => props.theme.fontWeight.light};
`

const BlogTile = ({ title, date, excerpt, slug, id }) => {
  return (
    <TileContainer>
      <TextContainer>
        <Date>{date}</Date>
        <Title>{title}</Title>

        <Description>{excerpt}</Description>
      </TextContainer>

      <IconsContainer>
        <a href={`/articles/${slug}`} target="_blank">
          <FiExternalLink
            style={{ color: "white", fontSize: "1.75rem", marginLeft: "1rem" }}
          />
        </a>
      </IconsContainer>
    </TileContainer>
  )
}

export default BlogTile
