import styles from './Action.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Action = ({
  tagName = 'button',
  appearance = 'button-primary',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const Tag = tagName === 'Link' ? Link : tagName;
  return (
    <Tag
      className={classNames(
        className,
        styles.Action,
        styles[`Action__Appearance--${appearance}`],
        {
          [styles.Action__FullWidth]: fullWidth,
        },
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Action.propTypes = {
  tagName: PropTypes.oneOf(['button', 'a', 'Link']),
  appearance: PropTypes.oneOf([
    'button-primary',
    'button-secondary',
    'button-primary-outline',
    'button-secondary-outline',
    'a',
    'none',
  ]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Action;
