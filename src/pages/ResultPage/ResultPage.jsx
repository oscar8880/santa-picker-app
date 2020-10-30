import styles from './ResultPage.module.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Text from '../../components/Text/Text';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import sleighImage from '../../images/sleigh.png';
import { useSpring, animated, config } from 'react-spring';
import { reverseCypher, toTitleCase } from '../../utils/simpleCypher';

const ResultPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  const query = useParams();
  const elements = query.info.split(/[A-Z]/);
  const [
    spendingLimit,
    name,
    secretSanta,
    organiserName,
  ] = elements.map((elem) => toTitleCase(reverseCypher(elem)));

  return (
    <div className={styles.ResultPage}>
      <PageWrapper>
        {loaded && (
          <animated.div style={contentProps}>
            <Container fluid>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <div className={styles.ResultPage__StrapLine}>
                    <Text appearance="h6" tagName="h1">
                      Hi {name}!
                    </Text>
                  </div>
                  <ul className={styles.ResultPage__BlurbTextList}>
                    <li className={styles.ResultPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        {organiserName} has nominated you to be part of a Secret
                        Santa group!
                      </Text>
                    </li>
                    <li className={styles.ResultPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        You need to get a present for {secretSanta}.
                      </Text>
                    </li>
                    {spendingLimit !== ' ' && (
                      <li className={styles.ResultPage__BlurbTextListItem}>
                        <Text appearance="h5">
                          {`There's a recommended spend limit of ${spendingLimit}`}
                          .
                        </Text>
                      </li>
                    )}
                    <li className={styles.ResultPage__BlurbTextListItem}>
                      <Text appearance="h5">Happy gift hunting!</Text>
                    </li>
                  </ul>
                </Col>
                <Col xs={12} md={6} lg={5} offset={{ lg: 1 }}>
                  <div className={styles.ResultPage__Image}>
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

export default ResultPage;
