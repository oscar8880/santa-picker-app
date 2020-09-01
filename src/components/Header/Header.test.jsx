import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

test('matches snapshot', async () => {
  const { asFragment } = render(<Header />);

  expect(asFragment()).toMatchSnapshot();
});
