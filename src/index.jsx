import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { setConfiguration } from 'react-grid-system';
import ReactGA from 'react-ga';
import history from './history';

import './scss/index.scss';

import App from './App';
import AuthProviderWithHistory from './components/AuthProviderWithHistory/AuthProviderWithHistory';

const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(trackingId, {
  debug: true,
  titleCase: false,
});

setConfiguration({
  gutterWidth: 40,
  gridColumns: 12,
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <AuthProviderWithHistory>
        <App />
      </AuthProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
