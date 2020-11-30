import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
