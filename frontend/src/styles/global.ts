import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

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
    overflow-x: hidden;
  }

  :root {
    --purple: #684DB9;
    --green: #78E5D5;
    --red: #E57878;
    --black: #000;
    --white: #FFF;
    --lightPurple: #D9E5F1;
    --gray: #878787;
    --lightGray: #CCCCCC;
  }
`;