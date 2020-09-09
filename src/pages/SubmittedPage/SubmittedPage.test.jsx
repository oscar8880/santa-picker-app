import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import SubmittedPage from './SubmittedPage';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SubmittedPage />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
