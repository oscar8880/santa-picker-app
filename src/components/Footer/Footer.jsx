import styles from './Footer.module.scss';
import Text from '../Text/Text';
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Text appearance="p">Footer</Text>
    </footer>
  );
};

export default Footer;
