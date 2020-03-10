import { createGlobalStyle } from 'styled-components';

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
    font-family: sans-serif;
  }

  h1{
    font-size: 70px;
    font-weight: 600;
  }
`;
