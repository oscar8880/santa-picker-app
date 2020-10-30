import styles from './SubmittedPage.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { Container, Row, Col } from 'react-grid-system';
import sleighImage from '../../images/sleigh.png';
import { useSpring, animated, config } from 'react-spring';
import { ParticipantContext } from '../../context/ParticipantContext';
import { simpleCypher } from '../../utils/simpleCypher';
import CopyIcon from '../../components/Icons/CopyIcon/CopyIcon';

const SubmittedPage = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const { participantsData } = useContext(ParticipantContext);

  const copyToClipboard = (string) => {
    navigator.clipboard.writeText(string);
  };

  const resultLinkBase =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/result/'
      : 'https://santa-picker.netlify.app/result/';

  const resultLinks = participantsData.contacts.map((contactData) => {
    return `${resultLinkBase}${
      participantsData.spendingLimit || '_'
    }Y${simpleCypher(contactData.contact.name)}J${simpleCypher(
      contactData.assignedContact.name,
    )}T${simpleCypher(participantsData.organiserName)}`;
  });

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  const handleTextAreaFocus = (event) => event.target.select();

  const linkAssignments = (
    <ul className={styles.SubmittedPage__BlurbTextList}>
      {participantsData.contacts.map((contactData, i) => {
        return (
          <li
            key={resultLinks[i]}
            className={styles.SubmittedPage__BlurbTextListItem}
          >
            <Text appearance="h5" className={styles.SubmittedPage__Name}>
              {contactData.contact.name}
            </Text>
            <div className={styles.SubmittedPage__LinkContainer}>
              <textarea
                onClick={handleTextAreaFocus}
                readOnly
                className={styles.SubmittedPage__TextArea}
              >
                {resultLinks[i]}
              </textarea>
              <Action
                tagName="button"
                type="button"
                onClick={copyToClipboard(resultLinks[i])}
                className={styles.SubmittedPage__CopyButton}
              >
                <CopyIcon width={25} />
              </Action>
            </div>
          </li>
        );
      })}
    </ul>
  );

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
                    <li className={styles.SubmittedPage__BlurbTextListItem}>
                      <Text appearance="h5">
                        Alternatively, send your santas their personalised link
                        below:
                      </Text>
                    </li>
                  </ul>
                  {linkAssignments}
                  <div className={styles.SubmittedPage__CTA}>
                    <Action tagName="Link" to="/" appearance="button-secondary">
                      Back
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
