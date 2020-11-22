import styled from 'styled-components';

import { generalStyles } from 'Styles/GlobalStyles';
import { ElementMixin } from 'Styles/StyledElement';

export const Nav = styled.nav`
  ${ElementMixin}
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  padding: 15px ${generalStyles.mobile.paddingXVieport};
  @media (${generalStyles.breakpoint}) {
    font-size: initial;
    padding: 15px ${generalStyles.desktop.paddingXVieport};
  }

  position: sticky;
  top: ${({ show }) => (show ? '0' : '-80px')};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: top 600ms;
`;

export const ThemeButton = styled.button`
  color: inherit;
  background: transparent;
  border: none;

  display: inline-flex;
  align-items: center;

  outline: none;
  cursor: pointer;

  & > span {
    margin-left: 5px;
  }
`;

export const ToTop = styled.a`
  color: inherit;
  text-decoration: none;
`;
