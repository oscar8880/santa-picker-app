import React from 'react';
import { render } from '@testing-library/react';

import LogoutIcon from './LogoutIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<LogoutIcon />);

  expect(asFragment()).toMatchSnapshot();
});
