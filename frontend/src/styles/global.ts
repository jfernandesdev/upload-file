import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

  :root {
    --purple: #684DB9;
    --green: #83EBD5;
    --red: #D76474;
    --black: #000;
    --white: #FFF;
    --lightPurple: #D9E5F1;
    --gray: #878787;
    --lightGray: #CCCCCC;
  }
`;