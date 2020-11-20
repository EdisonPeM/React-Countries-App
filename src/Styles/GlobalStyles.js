import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;

    color: ${props => props.theme.color};
    background-color: ${props => props.theme.bg};
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
