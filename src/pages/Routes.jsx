import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FormPage from './FormPage/FormPage';
import styles from './Routes.module.scss';
import CreditsPage from './CreditsPage/CreditsPage';
import SubmittedPage from './SubmittedPage/SubmittedPage';
import ErrorPage from './ErrorPage/ErrorPage';

const Routes = () => {
  return (
    <main className={styles.Routes}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/form" exact>
          <FormPage />
        </Route>
        <Route path="/submitted" exact>
          <SubmittedPage />
        </Route>
        <Route path="/error" exact>
          <ErrorPage />
        </Route>
        <Route path="/credits" exact>
          <CreditsPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
