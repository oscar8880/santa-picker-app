import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ErrorPage from './ErrorPage';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
