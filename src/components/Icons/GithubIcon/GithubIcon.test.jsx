import React from 'react';
import { render } from '@testing-library/react';

import GithubIcon from './GithubIcon';

test('matches snapshot', async () => {
  const { asFragment } = render(<GithubIcon />);

  expect(asFragment()).toMatchSnapshot();
});
