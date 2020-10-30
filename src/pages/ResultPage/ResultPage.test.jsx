import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ResultPage from './ResultPage';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <MemoryRouter>
      <ResultPage />
    </MemoryRouter>,
  );

  expect(asFragment()).toMatchSnapshot();
});
