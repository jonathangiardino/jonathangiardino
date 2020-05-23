import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  outline-color: ${props => props.theme.colors.primary};
  outline-offset: 0.5rem;
  width: 12.5rem;
  height: 3.125rem;
  border-radius: 0.5rem;
  border: 0.15rem solid ${props => props.theme.colors.dark};
  margin: 1rem 0;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  box-shadow: ${props => props.theme.shadows.normal};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSize.extraSmall};
  font-weight: ${props => props.theme.fontWeight.medium};
  cursor: pointer;
  transition: all 0.1s linear;
  &:hover {
    transform: translateX(0.1rem) translateY(0.1rem);
    box-shadow: ${props => props.theme.shadows.reduced};
  }
`

const Button = props => {
  return <ButtonStyled onClick={props.action}>{props.text}</ButtonStyled>
}

export default Button
