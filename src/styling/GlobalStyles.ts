import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *:before, 
  *:after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.4rem;
    font-family: 'Lato', sans-serif;
    color: #444;
  }

  h1{
    font-size: 32px;
    font-weight: bold;
  }

  h2{
      font-size: 30px;
      font-weight: bold;
  }

  h3{
      font-size: 24px;
      font-weight: bold;
  }

  h4{
      font-size: 16px;
      font-weight: bold;
  }

  h5{
      font-size: 13px;
      font-weight: bold;
  }

  h6{
      font-size: 11px;
      font-weight: bold;
  }

  p{
      font-size: 15px;
      font-weight: normal;
      line-height: 24px;
      color: $paragraph-color;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

`;
