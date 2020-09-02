import React from 'react';
import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('matches snapshot', async () => {
  const { asFragment } = render(<HomePage />);

  expect(asFragment()).toMatchSnapshot();
});
