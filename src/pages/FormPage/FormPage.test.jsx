import React from 'react';
import { render } from '@testing-library/react';

import FormPage from './FormPage';
import { Auth0Provider } from '@auth0/auth0-react';

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});
global.crypto.subtle = {};

test('matches snapshot', async () => {
  const { asFragment } = render(
    <Auth0Provider>
      <FormPage />
    </Auth0Provider>,
  );

  expect(asFragment()).toMatchSnapshot();
});
