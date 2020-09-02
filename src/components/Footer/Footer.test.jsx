import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Footer from './Footer';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
