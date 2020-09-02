import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

test('matches snapshot', async () => {
  const { asFragment } = render(<Text />);

  expect(asFragment()).toMatchSnapshot();
});
