import styles from './CreditsPage.module.scss';
import React from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';

const CreditsPage = () => {
  return (
    <div className={styles.CreditsPage}>
      <PageWrapper>
        <Container fluid>
          <Row>
            <Col xs={12} md={8} lg={8}>
              <div className={styles.CreditsPage__Title}>
                <Text appearance="h6" tagName="h1">
                  Credits
                </Text>
              </div>
              <ul className={styles.CreditsPage__CreditList}>
                <li className={styles.CreditsPage__CreditListItem}>
                  <Text>
                    Header/footer background ‘Argyle’ made by Will Monson from:
                    <Action
                      href="https://www.flaticon.com/authors/pixelmeetup"
                      title="Pixelmeetup"
                      appearance="a"
                    >
                      https://www.transparenttextures.com
                    </Action>
                  </Text>
                </li>
                <li className={styles.CreditsPage__CreditListItem}>
                  <Text>
                    Icons made by{' '}
                    <Action
                      href="https://www.flaticon.com/authors/pixelmeetup"
                      title="Pixelmeetup"
                      appearance="a"
                    >
                      Pixelmeetup
                    </Action>
                    ,{' '}
                    <Action
                      href="http://www.freepik.com/"
                      title="Freepik"
                      appearance="a"
                    >
                      Freepik
                    </Action>{' '}
                    and{' '}
                    <Action
                      href="https://www.flaticon.com/authors/pixel-perfect"
                      title="Pixel perfect"
                      appearance="a"
                    >
                      Pixel Perfect
                    </Action>{' '}
                    from:{' '}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </Text>
                </li>
                <li className={styles.CreditsPage__CreditListItem}>
                  <Text></Text>
                </li>
              </ul>
              <div className={styles.CreditsPage__CTA}>
                <Action tagName="Link" to="/" appearance="button-secondary">
                  Home
                </Action>
              </div>
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default CreditsPage;
