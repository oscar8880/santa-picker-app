import styles from './FormikCheckbox.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { useField } from 'formik';

const FormikCheckbox = ({ label, id, name, onChange, ...props }) => {
  const [field] = useField({ ...props, name, type: 'checkbox' });

  const handleChange = (event) => {
    field.onChange(event);
    onChange && onChange(!field.value);
  };

  return (
    <div className={styles.FormikCheckbox__Container}>
      <input
        type="checkbox"
        id={id}
        className={styles.FormikCheckbox__Input}
        {...field}
        {...props}
        onChange={handleChange}
      />
      <label className={styles.FormikCheckbox__Label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

FormikCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FormikCheckbox;
