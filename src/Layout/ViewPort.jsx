import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

const Main = styled.main`
  padding: 0 ${generalStyles.mobile.paddingX};
  @media (${generalStyles.breakpoint}) {
    padding: 0 ${generalStyles.desktop.paddingX};
  }
`;

export default Main;
