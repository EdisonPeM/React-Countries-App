import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
  * {
    box-sizing: border-box;
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

export default GlobalStyle;
