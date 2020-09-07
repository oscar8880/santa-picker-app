import React from 'react';
import { render } from '@testing-library/react';
import { Formik, Form } from 'formik';

import FormikCheckbox from './FormikCheckbox';

test('matches snapshot', async () => {
  const { asFragment } = render(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormikCheckbox id="test" name="test" label="test" />
      </Form>
    </Formik>,
  );

  expect(asFragment()).toMatchSnapshot();
});
