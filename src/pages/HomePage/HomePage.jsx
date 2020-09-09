import styles from './HomePage.module.scss';
import React from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import presentImage from '../../images/chimneyPresent.png';

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <PageWrapper>
        <Container fluid>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className={styles.HomePage__StrapLine}>
                <Text appearance="h6" tagName="h1">
                  Secret Santa by email
                </Text>
              </div>
              <ul className={styles.HomePage__BlurbTextList}>
                <li className={styles.HomePage__BlurbTextListItem}>
                  <Text appearance="h5">Guaranteed to be random</Text>
                </li>
                <li className={styles.HomePage__BlurbTextListItem}>
                  <Text appearance="h5">Fully anonymous assignments</Text>
                </li>
                <li className={styles.HomePage__BlurbTextListItem}>
                  <Text appearance="h5">No hat required!</Text>
                </li>
              </ul>
              <div className={styles.HomePage__CTA}>
                <Action tagName="Link" to="/form" appearance="button-secondary">
                  Get Started
                </Action>
              </div>
            </Col>
            <Col xs={12} md={6} lg={5} offset={{ lg: 1 }}>
              <div className={styles.HomePage__Image}>
                <img src={presentImage} alt="Sleigh" width="80%"></img>
              </div>
            </Col>
          </Row>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default HomePage;
