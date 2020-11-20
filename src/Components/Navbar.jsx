import React, { useContext } from 'react';
import ThemeContext from 'Utils/ThemeContext';

import IosMoon from 'react-ionicons/lib/IosMoon';
import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>Where in the world?</h2>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <IosMoonOutline /> : <IosMoon />}
        <span>{theme} Mode</span>
      </button>
    </nav>
  );
}

export default Navbar;
