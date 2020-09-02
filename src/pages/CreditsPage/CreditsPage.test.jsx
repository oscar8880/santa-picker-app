import React from 'react';
import { render } from '@testing-library/react';

import CreditsPage from './CreditsPage';

test('matches snapshot', async () => {
  const { asFragment } = render(<CreditsPage />);

  expect(asFragment()).toMatchSnapshot();
});
