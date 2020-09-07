import React from 'react';
import FormikCheckbox from './FormikCheckbox';
import { Formik, Form } from 'formik';

export default {
  component: FormikCheckbox,
  title: 'FormikCheckbox',
};

export const Default = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormikCheckbox name="oi" label="Input" />
      </Form>
    </Formik>
  );
};
