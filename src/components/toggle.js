import React, { useContext } from "react"
import styled from "styled-components"

import Context from "../store/context"
import { BsMoon } from "react-icons/bs"
import { FiSun } from "react-icons/fi"

// style
const Container = styled.div`
  margin-left: ${props => props.theme.spacing.large};
  display: flex;
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 1.8rem;
`

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + span {
    background-color: ${props => props.theme.colors.primary};
  }
  :focus + span {
    box-shadow: 0 0 1px #2196f3;
  }
  :checked + span:before {
    -webkit-transform: translateX(2.2rem);
    -ms-transform: translateX(2.2rem);
    transform: translateX(2.2rem);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.secondary};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1.8rem;
  ::before {
    position: absolute;
    content: "";
    height: 1.6rem;
    width: 1.6rem;
    left: 0.1rem;
    bottom: 0.1rem;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1.8rem;
  }
`

const Icon = styled.div`
  margin-left: ${props => props.theme.spacing.xSmall};
  display: flex;
  align-items: center;
  transition: 0.4s;
`

const Toggle = props => {
  const { state, dispatch } = useContext(Context)

  return (
    <Container>
      <Switch>
        <Input onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })} />
        <Slider />
      </Switch>
      <Icon>{state.isDark ? <FiSun /> : <BsMoon />}</Icon>
    </Container>
  )
}

// component
const ToggleDarkMode = () => <Toggle />

// methods

export default ToggleDarkMode
