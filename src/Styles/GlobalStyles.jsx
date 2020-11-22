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

export const breakpoints = {
  mobileS: `min-width: 320px`,
  mobileM: `min-width: 375px`,
  mobileL: `min-width: 425px`,
  tablet: `min-width: 768px`,
  laptop: `min-width: 1024px`,
  laptopL: `min-width: 1440px`,
  desktop: `min-width: 2560px`,
};

export const generalStyles = {
  breakpoint: breakpoints.tablet,
  mobile: {
    paddingVieport: '15px',
  },
  desktop: {
    paddingVieport: '80px',
  },
};

export default GlobalStyle;
