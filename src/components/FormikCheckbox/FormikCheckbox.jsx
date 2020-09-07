// import styles from './FormikCheckbox.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { useField } from 'formik';

const FormikCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

FormikCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default FormikCheckbox;
