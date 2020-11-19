import React from 'react';

import IosMoonOutline from 'react-ionicons/lib/IosMoonOutline';

function Navbar() {
  return (
    <nav>
      <h2>Where in the world?</h2>
      <div>
        <IosMoonOutline />
        Dark Mode
      </div>
    </nav>
  );
}

export default Navbar;
