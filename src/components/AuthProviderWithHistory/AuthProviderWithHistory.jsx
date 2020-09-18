import React from 'react';

import history from '../../history';
import { Auth0Provider } from '@auth0/auth0-react';
import PropTypes from 'prop-types';

const AuthProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://santa-picker.netlify.app'
      }
      audience={audience}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

AuthProviderWithHistory.propTypes = {
  children: PropTypes.node,
};

export default AuthProviderWithHistory;
