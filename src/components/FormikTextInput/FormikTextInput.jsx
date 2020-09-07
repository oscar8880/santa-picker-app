import styles from './FormikTextInput.module.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useField } from 'formik';

const FormikTextInput = ({ label, ...props }) => {
  const [inFocus, setInFocus] = useState(false);
  const [valuePresent, setValuePresent] = useState(false);
  const [field, meta] = useField(props);

  const handleChange = (e) => {
    if (e.target.value === '') {
      setValuePresent(false);
    } else {
      setValuePresent(true);
    }
  };

  return (
    <div
      className={styles.FormikTextInput__Container}
      onFocus={() => setInFocus(true)}
      onBlur={() => setInFocus(false)}
      onChange={handleChange}
    >
      <label
        htmlFor={props.id || props.name}
        className={classNames(styles.FormikTextInput__Label, {
          [styles.FormikTextInput__LabelAsLabel]: inFocus || valuePresent,
          [styles.FormikTextInput__LabelAsPlaceholder]:
            !inFocus && !valuePresent,
        })}
      >
        {label}
      </label>
      <input className={styles.FormikTextInput__Input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={styles.FormikTextInput__Error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

FormikTextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default FormikTextInput;
