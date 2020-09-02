import styles from './Header.module.scss';
import Text from '../Text/Text';
import React from 'react';
import SantaHeadIcon from '../Icons/SantaHeadIcon/SantaHeadIcon';

const Header = () => {
  return (
    <header className={styles.Header}>
      <SantaHeadIcon width={65} />
      <div className={styles.Header__Text}>
        <Text appearance="h1">Santa Picker</Text>
      </div>
    </header>
  );
};

export default Header;
