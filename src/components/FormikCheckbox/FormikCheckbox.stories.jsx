import React from 'react';
import FormikCheckbox from './FormikCheckbox';
import { Formik } from 'formik';

export default {
  component: FormikCheckbox,
  title: 'FormikCheckbox',
};

export const Default = () => {
  return (
    <Formik initialValues={{ name: false }} onSubmit={() => {}}>
      <FormikCheckbox name="test" label="Do you agree?" id="test" />
    </Formik>
  );
};
