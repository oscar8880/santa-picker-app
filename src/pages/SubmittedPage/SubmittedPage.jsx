import styles from './SubmittedPage.module.scss';
import React, { useState, useEffect } from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import sleighImage from '../../images/sleigh.png';
import { useSpring, animated, config } from 'react-spring';

const SubmittedPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  return (
    <div className={styles.SubmittedPage}>
      <PageWrapper>
        {loaded && (
          <animated.div style={contentProps}>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <div className={styles.SubmittedPage__StrapLine}>
                    <Text appearance="h6" tagName="h1">
                      Success!
                    </Text>
                  </div>
                  <ul className={styles.SubmittedPage__BlurbTextList}>
                    <li className={styles.SubmittedPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        Emails are on their way to your Secret Santas
                      </Text>
                    </li>
                    <li className={styles.SubmittedPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        The courier elves might get lost so check your spam
                        folder if they&apos;re taking a while
                      </Text>
                    </li>
                  </ul>
                  <div className={styles.SubmittedPage__CTA}>
                    <Action tagName="Link" to="/" appearance="button-secondary">
                      Home
                    </Action>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={5} offset={{ lg: 1 }}>
                  <div className={styles.SubmittedPage__Image}>
                    <img
                      src={sleighImage}
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

export default SubmittedPage;
