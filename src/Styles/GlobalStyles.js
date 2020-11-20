import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`    
  * {
    box-sizing: border-box;
  }  
  
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;

    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bg};
  }

  img {
    max-width: 100%
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
