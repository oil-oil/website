import styled, { createGlobalStyle, DefaultTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const theme: DefaultTheme = {
  color: {
    primary: "#fe2601",
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
      &:hover {
        color: ${props => props.theme.color.primary};
      }
    }
  }
`

export default theme
