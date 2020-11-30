import styled from 'styled-components';

import { generalStyles } from 'Styles/GlobalStyles';
import { ElementMixin } from 'Styles/Mixins';

export const Nav = styled.nav`
  ${ElementMixin}
  border-radius: 0;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  padding: 15px ${generalStyles.mobile.paddingVieport};
  @media (${generalStyles.breakpoint}) {
    font-size: initial; // 16px
    padding: 15px ${generalStyles.desktop.paddingVieport};
  }

  position: sticky;
  top: ${({ show }) => (show ? '0' : '-80px')};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: top 600ms;
`;

Nav.Title = styled.h1``;

Nav.ThemeButton = styled.button`
  font-size: 1em;

  color: inherit;
  background: transparent;
  border: none;

  display: inline-flex;
  align-items: center;

  outline: none;
  cursor: pointer;

  // Nested Span
  span {
    margin-left: 5px;
  }
`;

export const ToTop = styled.a.attrs(() => ({
  href: '#',
}))`
  color: inherit;
  text-decoration: none;
`;
