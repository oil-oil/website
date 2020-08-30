import { createGlobalStyle, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  color: {
    primary: "#fe0000",
  },
};

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
  }

  a {
    &:link {
      color: #555;
      text-decoration: none;
    }
  }
`

export default theme
