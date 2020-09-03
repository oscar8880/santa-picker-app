import styles from './Text.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ tagName = 'p', appearance = 'p', className, children }) => {
  const Tag = tagName;
  return (
    <Tag
      className={classNames(
        styles.Text,
        className,
        styles[`Text__${appearance}`],
      )}
    >
      {children}
    </Tag>
  );
};

Text.propTypes = {
  tagName: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']),
  appearance: PropTypes.oneOf([
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'banner',
  ]),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Text;
