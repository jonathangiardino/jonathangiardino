import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import GlobalStateProvider from "./src/store/GlobalStateProvider"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
  color: ${props => props.theme.colors.primary}
}
p {
  padding: 0.75rem 0;
}
h3 {
  margin-top: 1rem;
}
`

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  </GlobalStateProvider>
)
