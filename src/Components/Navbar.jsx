import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import themes from 'Utils/Themes';

import IosMoon from 'react-ionicons/lib/IosMoon';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

function Navbar({ changeTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;
