import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from 'Styles/Themes';

import useLocalStorage from 'Hooks/useLocalStorage';

import GlobalStyles from 'Styles/GlobalStyles';
import ThemedStyles from 'Styles/ThemedStyles';

import Navbar from 'Layout/Navbar';
import ViewPort from 'Layout/ViewPort';
import Footer from 'Layout/Footer';

// import { Router } from '@reach/router';
import RouterFade from 'Components/RouterFade';

import Home from 'Pages/Home';
// import Detail from 'Pages/Detail';

import loadable from '@loadable/component';
import { Helmet } from 'react-helmet-async';
const Detail = loadable(() => import('Pages/Detail'));

const mq = window.matchMedia('(prefers-color-scheme: dark)');

function App() {
  const [appTheme, setAppTheme] = useLocalStorage(
    mq.matches ? 'dark' : 'light',
    'theme'
  );

  const toggleTheme = () => {
    setAppTheme(appTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const changeMedia = () => {
      setAppTheme(mq.matches ? 'dark' : 'light');
    };

    mq.addListener(changeMedia);
    return () => mq.removeListener(changeMedia);
  }, [setAppTheme]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={themes[appTheme].bg} />
      </Helmet>
      <GlobalStyles />
      <ThemeProvider theme={themes[appTheme]}>
        <ThemedStyles />
        <Navbar changeTheme={toggleTheme} />
        <ViewPort>
          <RouterFade>
            <Home path="/" default />
            <Detail path="/:code" />
          </RouterFade>
        </ViewPort>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
