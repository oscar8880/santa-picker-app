import styles from './CreditsPage.module.scss';
import React, { useState, useEffect } from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import { useSpring, animated, config } from 'react-spring';

const CreditsPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  return (
    <div className={styles.CreditsPage}>
      <PageWrapper>
        {loaded && (
          <animated.div style={contentProps}>
            <Container fluid>
              <Row>
                <Col xs={12} md={7} lg={7}>
                  <div className={styles.CreditsPage__Title}>
                    <Text appearance="h1" tagName="h1">
                      Credits
                    </Text>
                  </div>
                  <ul className={styles.CreditsPage__CreditList}>
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
                    <li className={styles.CreditsPage__CreditListItem}>
                      <Text>
                        Header/footer background ‘Argyle’ made by Will Monson
                        from:
                        <Action
                          href="https://www.flaticon.com/authors/pixelmeetup"
                          title="Pixelmeetup"
                          appearance="a"
                        >
                          https://www.transparenttextures.com
                        </Action>
                      </Text>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </animated.div>
        )}
      </PageWrapper>
    </div>
  );
};

export default CreditsPage;
