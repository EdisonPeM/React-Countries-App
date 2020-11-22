import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import useHiddenOnScroll from 'Hooks/useHiddenOnScroll';

import themes from 'Styles/Themes';

import IosMoon from 'react-ionicons/lib/IosMoon';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

import { Nav, ToTop, ThemeButton } from './Navbar.styles';

function Navbar({ changeTheme }) {
  const [showNav] = useHiddenOnScroll();
  const currentTheme = useContext(ThemeContext);

  return (
    <Nav show={showNav}>
      <h3>
        <ToTop href="#">Where in the world?</ToTop>
      </h3>
      <ThemeButton onClick={changeTheme}>
        {currentTheme === themes.light ? (
          <IosMoonOutline color={currentTheme.color} />
        ) : (
          <IosMoon color={currentTheme.color} />
        )}
        <span>Dark Mode</span>
      </ThemeButton>
    </Nav>
  );
}

export default Navbar;
