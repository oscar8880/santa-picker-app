import React from 'react';
import { render } from '@testing-library/react';

import SantaHatIcon from './SantaHatIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<SantaHatIcon />);

  expect(asFragment()).toMatchSnapshot();
});
