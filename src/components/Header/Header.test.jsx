import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Header from './Header';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
