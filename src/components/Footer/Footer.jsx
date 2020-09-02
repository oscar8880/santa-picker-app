import styles from './Footer.module.scss';
import Action from '../Action/Action';
import React from 'react';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Item}>
        <Action appearance="none" tagName="Link" to="/credits">
          Credits
        </Action>
      </div>
      <div className={styles.Footer__Item}>
        <Action
          appearance="none"
          tagName="a"
          target="_blank"
          href="https://github.com/oscar8880"
        >
          Github
        </Action>
      </div>
    </footer>
  );
};

export default Footer;
