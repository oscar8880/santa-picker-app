import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FormPage from './FormPage/FormPage';
import styles from './Routes.module.scss';
import CreditsPage from './CreditsPage/CreditsPage';
import SubmittedPage from './SubmittedPage/SubmittedPage';
import ErrorPage from './ErrorPage/ErrorPage';
import PrivacyPage from './PrivacyPage/PrivacyPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const Routes = () => {
  return (
    <main className={styles.Routes}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <PrivateRoute
          render={() => <FormPage />}
          path="/form"
          exact
        ></PrivateRoute>
        <Route path="/submitted">
          <SubmittedPage />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/credits">
          <CreditsPage />
        </Route>
        <Route path="/privacy">
          <PrivacyPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
