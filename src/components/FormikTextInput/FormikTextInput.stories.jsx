import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik, Form } from 'formik';

export default {
  component: FormikTextInput,
  title: 'FormikTextInput',
};

export const Default = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <FormikTextInput name="input" id="input" label="Input" />
      </Form>
    </Formik>
  );
};
