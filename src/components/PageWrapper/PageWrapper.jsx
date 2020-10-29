import React from 'react';
import PropTypes from 'prop-types';

import styles from './PageWrapper.module.scss';

const PageWrapper = ({ children }) => (
  <div className={styles.PageWrapper}>{children}</div>
);

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.any,
  ]),
};

export default PageWrapper;
