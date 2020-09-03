import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { setConfiguration } from 'react-grid-system';
import history from './history';

import './scss/index.scss';

import App from './App';

setConfiguration({
  gutterWidth: 40,
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
