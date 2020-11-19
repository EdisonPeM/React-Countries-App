import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'Components/Navbar';

import Home from 'Pages/Home';
import Detail from 'Pages/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/:name" component={Detail}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
