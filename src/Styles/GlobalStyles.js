import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    
  body {
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;

    ${props => console.log(props.theme)}
  }
`;

export default GlobalStyle;
