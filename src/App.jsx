import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import themes from 'Utils/Themes';

import useLocalStorage from 'Hooks/useLocalStorage';

import GlobalStyles from 'Styles/GlobalStyles';
import ThemedStyles from 'Styles/ThemedStyles';

import Navbar from 'Layout/Navbar';
import ViewPort from 'Layout/ViewPort';

import Home from 'Pages/Home';
import Detail from 'Pages/Detail';

function App() {
  const [appTheme, setAppTheme] = useLocalStorage('light', 'theme');

  const toggleTheme = () => {
    setAppTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes[appTheme]}>
        <ThemedStyles />
        <Navbar changeTheme={toggleTheme} />
        <ViewPort>
          <Router>
            <Home path="/" />
            <Detail path="/:name" />
          </Router>
        </ViewPort>
      </ThemeProvider>
    </>
  );
}

export default App;
