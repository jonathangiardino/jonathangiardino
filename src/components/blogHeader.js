import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdEmail } from "react-icons/md"

import Context from "../store/context"
import BackButton from "./backButton"
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


const BlogHeader = () => {
  const { state } = useContext(Context)

  return (
    <Nav>
      <Menu>
        <BackButton title="Back" anchor="/" />
        <ToggleDarkMode />
      </Menu>
    </Nav>
  )
}

export default BlogHeader
