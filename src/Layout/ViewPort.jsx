import styled from 'styled-components';
import { generalStyles } from 'Styles/GlobalStyles';

const Main = styled.main`
  padding: 0 ${generalStyles.mobile.paddingVieport};
  @media (${generalStyles.breakpoint}) {
    padding: 0 ${generalStyles.desktop.paddingVieport};
  }
`;

export default Main;
