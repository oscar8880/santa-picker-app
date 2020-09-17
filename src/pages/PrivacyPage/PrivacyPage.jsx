import styles from './PrivacyPage.module.scss';
import React from 'react';
import Text from '../../components/Text/Text';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';

const PrivacyPage = () => {
  return (
    <div className={styles.PrivacyPage}>
      <PageWrapper>
        <Container fluid>
          <Row justify="start">
            <Col xs={12} md={8} lg={8}>
              <div className={styles.PrivacyPage__Title}>
                <Text appearance="h1" tagName="h1">
                  Privacy Policy
                </Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>Version: September 10, 2020</Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>
                  Santa Picker is a personal project created primarly as a
                  learning exercise.
                </Text>
              </div>
              <div className={styles.PrivacyPage__Subtitle}>
                <Text tagName="h2" appearance="h5">
                  How is personal data used?
                </Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>
                  A limited amount of personal data is processed solely in order
                  to perform the function of picking secret santa names and
                  informing participants of the results.
                </Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>
                  Your data is not provided to third parties such as
                  advertisers.
                </Text>
              </div>
              <div className={styles.PrivacyPage__Subtitle}>
                <Text tagName="h2" appearance="h5">
                  What personal data is stored?
                </Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>
                  In order to use the name picking service, you are required to
                  sign up by providing an email address or using a Google
                  account. This email address is stored securely on the Auth0
                  platform and is used solely for the purpose of signing in to
                  the site. You will not be sent emails beyond the emails which
                  deliver name picking results.
                </Text>
              </div>
              <div className={styles.PrivacyPage__Text}>
                <Text>No other personal data is stored.</Text>
              </div>
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default PrivacyPage;
