import React from 'react';
import { render } from '@testing-library/react';

import LoginIcon from './LoginIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<LoginIcon />);

  expect(asFragment()).toMatchSnapshot();
});
