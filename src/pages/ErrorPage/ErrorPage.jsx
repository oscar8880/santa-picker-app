import styles from './ErrorPage.module.scss';
import React, { useState, useEffect } from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import chimneySantaImage from '../../images/chimneySanta.png';
import { useSpring, animated, config } from 'react-spring';

const ErrorPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  return (
    <div className={styles.ErrorPage}>
      <PageWrapper>
        {loaded && (
          <animated.div style={contentProps}>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <div className={styles.ErrorPage__StrapLine}>
                    <Text appearance="h6" tagName="h1">
                      Oops!
                    </Text>
                  </div>
                  <ul className={styles.ErrorPage__BlurbTextList}>
                    <li className={styles.ErrorPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        Santa got stuck along the way and wasn&apos;t able to
                        deliver the emails
                      </Text>
                    </li>
                    <li className={styles.ErrorPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        There&apos;s a good chance he&apos;s already used up his
                        email quota
                      </Text>
                    </li>
                    <li className={styles.ErrorPage__BlurbTextListItem}>
                      <Text appearance="h5">Please try again</Text>
                    </li>
                  </ul>
                  <div className={styles.ErrorPage__CTA}>
                    <Action tagName="Link" to="/" appearance="button-secondary">
                      Home
                    </Action>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={5} offset={{ lg: 1 }}>
                  <div className={styles.ErrorPage__Image}>
                    <img
                      src={chimneySantaImage}
                      alt="Sleigh"
                      width="80%"
                      height="80%"
                    ></img>
                  </div>
                </Col>
              </Row>
            </Container>
          </animated.div>
        )}
      </PageWrapper>
    </div>
  );
};

export default ErrorPage;
