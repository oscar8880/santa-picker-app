import styles from './Text.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Text = ({ tagName = 'p', appearance = 'p', children }) => {
  const Tag = tagName;
  return (
    <Tag className={classNames(styles.Text, styles[`Text__${appearance}`])}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  tagName: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span']),
  appearance: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.string,
};

export default Text;
