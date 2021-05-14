import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdEmail } from "react-icons/md"

import Context from "../store/context"
import MenuItem from "./menuItem"
import ToggleDarkMode from "./toggle"

// Style
const Nav = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${props => props.theme.spacing.small};
`
const Menu = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${props => props.theme.spacing.medium};
  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }
`
// Component
const Header = () => {
  const { state } = useContext(Context)

  return (
    <Nav>
      <Menu>
        {/* <MenuItem title="Work" anchor="#work" />
        <MenuItem title="Profile" anchor="#about" />
        <MenuItem title="Stack" anchor="#skills" /> */}
        <ToggleDarkMode />
      </Menu>
    </Nav>
  )
}

export default Header
