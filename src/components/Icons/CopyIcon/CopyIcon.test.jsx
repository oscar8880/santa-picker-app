import React from 'react';
import { render } from '@testing-library/react';

import CopyIcon from './CopyIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<CopyIcon />);

  expect(asFragment()).toMatchSnapshot();
});
