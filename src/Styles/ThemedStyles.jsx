import { createGlobalStyle } from 'styled-components';

const ThemedStyles = createGlobalStyle`
  body{
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bg};
  }
`;

export default ThemedStyles;
