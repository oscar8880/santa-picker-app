import React from 'react';
import { render } from '@testing-library/react';

import PageWrapper from './PageWrapper';

test('matches snapshot', async () => {
  const { asFragment } = render(<PageWrapper>Content</PageWrapper>);

  expect(asFragment()).toMatchSnapshot();
});
