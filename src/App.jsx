import { useState } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import themes from 'Utils/Themes';

import GlobalStyles from 'Styles/GlobalStyles';

import Navbar from 'Components/Navbar';
import Home from 'Pages/Home';
import Detail from 'Pages/Detail';

function App() {
  const [appTheme, setAppTheme] = useState(themes.light);

  const toggleTheme = () => {
    setAppTheme(appTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Navbar changeTheme={toggleTheme} />
      <Router>
        <Home path="/" />
        <Detail path="/:name" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
