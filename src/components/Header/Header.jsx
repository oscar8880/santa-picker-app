import styles from './Header.module.scss';
import Text from '../Text/Text';
import Action from '../Action/Action';
import React from 'react';
import SantaHeadIcon from '../Icons/SantaHeadIcon/SantaHeadIcon';
import { useAuth0 } from '@auth0/auth0-react';
import LoginIcon from '../Icons/LoginIcon/LoginIcon';
import LogoutIcon from '../Icons/LogoutIcon/LogoutIcon';

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const LoginButton = () => (
    <Action
      appearance="none"
      tagName="button"
      type="button"
      onClick={loginWithRedirect}
    >
      <LoginIcon width={35} />
    </Action>
  );

  const LogoutButton = () => (
    <Action appearance="none" tagName="button" type="button" onClick={logout}>
      <LogoutIcon width={35} />
    </Action>
  );

  return (
    <header className={styles.Header}>
      <div className={styles.Header__Wrapper}>
        <div className={styles.Header__Banner}>
          <Action appearance="none" tagName="Link" to="/">
            <SantaHeadIcon width={65} />
          </Action>
          <div className={styles.Header__Text}>
            <Action appearance="none" tagName="Link" to="/">
              <Text appearance="banner">Santa Picker</Text>
            </Action>
          </div>
        </div>
        <div className={styles.Header__Authentication}>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
};

export default Header;
