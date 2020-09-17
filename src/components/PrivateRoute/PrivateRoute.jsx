import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const PrivateRoute = ({ render, ...args }) => (
  <Route component={withAuthenticationRequired(render)} {...args} />
);

PrivateRoute.propTypes = {
  render: PropTypes.func,
};

export default PrivateRoute;
