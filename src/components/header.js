import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdEmail } from "react-icons/md"

import Context from "../store/context"
import MenuItem from "./menuItem"
import ToggleDarkMode from "./toggle"

// Style
const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${props => props.theme.spacing.medium} 0;
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
`
// Component
const Header = () => {
  const { state } = useContext(Context)

  return (
    <Nav>
      <Menu>
        <MenuItem title="Work" />
        <MenuItem title="Profile" />
        <MenuItem title="Stack" />
        <MenuItem title="Blog" />
        <Link to="/page-2/" style={{ textDecoration: "none" }}>
          <MenuIcon style={{ color: state.isDark ? "#fff" : "#09323a" }}>
            <MdEmail style={{ fontSize: "1.5rem" }} />
          </MenuIcon>
        </Link>
        <ToggleDarkMode />
      </Menu>
    </Nav>
  )
}

export default Header
