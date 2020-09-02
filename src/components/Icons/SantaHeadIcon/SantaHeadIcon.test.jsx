import React from 'react';
import { render } from '@testing-library/react';

import SantaHeadIcon from './SantaHeadIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<SantaHeadIcon />);

  expect(asFragment()).toMatchSnapshot();
});
