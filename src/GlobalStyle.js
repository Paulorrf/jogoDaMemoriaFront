import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
