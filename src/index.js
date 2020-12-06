import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { FavsProvider } from './favsContext';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <FavsProvider>
        <App />
      </FavsProvider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    const waitingServiceWorker = registration.waiting;

    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener('statechange', event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
