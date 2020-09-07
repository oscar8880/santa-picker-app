import React from 'react';
import { render } from '@testing-library/react';

import FormPage from './FormPage';

test('matches snapshot', async () => {
  const { asFragment } = render(<FormPage />);

  expect(asFragment()).toMatchSnapshot();
});
