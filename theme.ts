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

  .fab {
    font-family: "Font Awesome 5 Brands";
    width: 12px;
    height: 12px;
    color: #000;
  }
`

export default theme
