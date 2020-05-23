import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Context from "../store/context"

const MenuLink = styled.a`
  margin-left: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSize.extraSmall};
  font-weight: ${props => props.theme.fontWeight.light};
  transition: all 0.6 ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.primary} !important;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`

const MenuItem = props => {
  const { state } = useContext(Context)

  return (
    <Link to="/page-2/" style={{ textDecoration: "none" }}>
      <MenuLink style={{ color: state.isDark ? "#fff" : "#09323a" }}>
        {props.title}
      </MenuLink>
    </Link>
  )
}

export default MenuItem
