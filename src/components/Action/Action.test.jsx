import React from 'react';
import { render } from '@testing-library/react';

import Action from './Action';

test('matches snapshot', async () => {
  const { asFragment } = render(<Action />);

  expect(asFragment()).toMatchSnapshot();
});

test('matches snapshot with props set', async () => {
  const { asFragment } = render(
    <Action appearance="button-secondary-outline" tagName="a" />,
  );

  expect(asFragment()).toMatchSnapshot();
});
