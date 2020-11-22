import { createGlobalStyle } from 'styled-components';
import GlobalFonts from './GlobalFonts';

const GlobalStyle = createGlobalStyle`    
  ${GlobalFonts}

  * {
    box-sizing: border-box;
  }  

  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 300; // light
  }

  img {
    max-width: 100%
  }

  a {
    color: inherit;
  }

  b {
    font-weight: 600;
  }

  h1 {
    font-size: 1.5em;
    font-weight: 800;
  }
`;

export const generalStyles = {
  breakpoint: 'min-width: 768px',
  mobile: {
    paddingVieport: '15px',
  },
  desktop: {
    paddingVieport: '80px',
  },
};

export default GlobalStyle;
