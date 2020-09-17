import React from 'react';
import { render } from '@testing-library/react';

import PrivacyPage from './PrivacyPage';

test('matches snapshot', async () => {
  const { asFragment } = render(<PrivacyPage />);

  expect(asFragment()).toMatchSnapshot();
});
