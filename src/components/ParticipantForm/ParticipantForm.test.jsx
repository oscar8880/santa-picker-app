import React from 'react';
import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';

import { generateNameAndEmailFields } from './ParticipantForm';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>{generateNameAndEmailFields()}</Form>
    </Formik>,
  );

  expect(asFragment()).toMatchSnapshot();
});
