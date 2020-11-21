import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
  * {
    box-sizing: border-box;
  }  

  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;

    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bg};
  }

  img {
    max-width: 100%
  }

  a {
    color: inherit;
  }
`;

export const generalStyles = {
  breakpoint: 'min-width: 768px',
  mobile: {
    paddingX: '15px',
  },
  desktop: {
    paddingX: '80px',
  },
};

export default GlobalStyle;
