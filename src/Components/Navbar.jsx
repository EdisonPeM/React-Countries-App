import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import themes from 'Utils/Themes';

import IosMoon from 'react-ionicons/lib/IosMoon';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

import ElementMixin from 'UI/ElementMixin';

const Nav = styled.nav`
  ${ElementMixin}
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
`;

function Navbar({ changeTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <Nav>
      <h2>Where in the world?</h2>
      <button onClick={changeTheme}>
        {theme === themes.light ? (
          <>
            <IosMoonOutline />
            Light Mode
          </>
        ) : (
          <>
            <IosMoon />
            Dark Mode
          </>
        )}
      </button>
    </Nav>
  );
}

export default Navbar;
