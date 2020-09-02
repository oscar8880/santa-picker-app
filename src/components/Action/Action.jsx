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
}) => {
  const Tag = tagName === 'Link' ? Link : tagName;
  return (
    <Tag
      className={classNames(
        styles.Action,
        styles[`Action__Appearance--${appearance}`],
        {
          [styles.Action__FullWidth]: fullWidth,
        },
      )}
    >
      {children}
    </Tag>
  );
};

Action.propTypes = {
  tagName: PropTypes.oneOf(['button', 'a', 'link']),
  appearance: PropTypes.oneOf([
    'button-primary',
    'button-secondary',
    'button-primary-outline',
    'button-secondary-outline',
    'a',
    'link',
  ]),
  fullWidth: PropTypes.bool,
  children: PropTypes.string,
};

export default Action;
