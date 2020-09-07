import React from 'react';
import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';

import FormikTextInput from './FormikTextInput';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormikTextInput name="input" id="input" label="Input" />
      </Form>
    </Formik>,
  );

  expect(asFragment()).toMatchSnapshot();
});
