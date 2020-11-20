import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'Utils/ThemeContext';

import GlobalStyles from 'Styles/GlobalStyles';

import Navbar from 'Components/Navbar';

import Home from 'Pages/Home';
import Detail from 'Pages/Detail';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/:name" component={Detail}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
