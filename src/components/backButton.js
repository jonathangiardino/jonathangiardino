import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Context from "../store/context"

const MenuLink = styled.p`
  margin-left: ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.fontSize.extraSmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  transition: all 0.6 ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.primary} !important;
  }
`

const BackButton = ({ anchor, title }) => {
  const { state } = useContext(Context)

  return (
    <Link to={`${anchor}`} style={{ textDecoration: "none" }}>
      <MenuLink style={{ color: state.isDark ? "#fff" : "#09323a" }}>
        {title}
      </MenuLink>
    </Link>
  )
}

export default BackButton
