import styles from './Header.module.scss';
import Text from '../Text/Text';
import Action from '../Action/Action';
import React from 'react';
import SantaHeadIcon from '../Icons/SantaHeadIcon/SantaHeadIcon';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__Wrapper}>
        <Action appearance="none" tagName="Link" to="/">
          <SantaHeadIcon width={65} />
        </Action>
        <div className={styles.Header__Text}>
          <Action appearance="none" tagName="Link" to="/">
            <Text appearance="banner">Santa Picker</Text>
          </Action>
        </div>
      </div>
    </header>
  );
};

export default Header;
