import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Context from "../store/context"

const MenuLink = styled.a`
  margin-left: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSize.extraSmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  transition: all 0.6 ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.primary} !important;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`

const MenuItem = ({ anchor, title }) => {
  const { state } = useContext(Context)

  return (
    <a href={`#${anchor}`} style={{ textDecoration: "none" }}>
      <MenuLink style={{ color: state.isDark ? "#fff" : "#09323a" }}>
        {title}
      </MenuLink>
    </a>
  )
}

export default MenuItem
