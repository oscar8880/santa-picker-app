import styles from './FormPage.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import Text from '../../components/Text/Text';
import Action from '../../components/Action/Action';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput';
import { Container, Row, Col } from 'react-grid-system';
import { Formik, Form } from 'formik';
import ReactGA from 'react-ga';
import history from '../../history';
import FormikCheckbox from '../../components/FormikCheckbox/FormikCheckbox';
import {
  getFormValidationSchema,
  generateNameAndEmailFields,
  getInitialValues,
} from '../../components/ParticipantForm/ParticipantForm';
import { ParticipantContext } from '../../context/ParticipantContext';
import { request, defaultOptions } from '../../utils/request';
import { useAuth0 } from '@auth0/auth0-react';
import { useSpring, animated, config, useTransition } from 'react-spring';

const FormPage = () => {
  const [numParticipants, setNumParticipants] = useState(3);
  const [spendingLimitChecked, setSpendingLimitChecked] = useState(false);
  const [initialValues, setInitialValues] = useState(
    getInitialValues(numParticipants, spendingLimitChecked),
  );
  const [validationSchema, setValidationSchema] = useState(
    getFormValidationSchema(numParticipants, spendingLimitChecked),
  );
  const [accessToken, setAccessToken] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { setParticipantsData } = useContext(ParticipantContext);

  const { getAccessTokenSilently } = useAuth0();

  const contentProps = useSpring({
    config: config.gentle,
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -70,
  });

  const spendLimitProps = useSpring({
    config: config.stiff,
    opacity: spendingLimitChecked ? 1 : 0,
    marginRight: spendingLimitChecked ? 0 : -70,
  });

  useEffect(() => setLoaded(true), []);

  useEffect(() => {
    getAccessTokenSilently()
      .then((response) => {
        setAccessToken(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // eslint-disable-line

  useEffect(() => {
    setInitialValues(getInitialValues(numParticipants, spendingLimitChecked));
    setValidationSchema(
      getFormValidationSchema(numParticipants, spendingLimitChecked),
    );
  }, [numParticipants, spendingLimitChecked]);

  const handleSubmit = (values) => {
    ReactGA.event({
      category: 'Form',
      action: 'Form Submit',
      value: numParticipants,
    });
    setIsProcessing(true);
    const requestBody = {
      organiserName: values.organiserName,
      spendingLimit: values.spendingLimit,
      contacts: [],
    };

    for (let i = 0; i < numParticipants; i++) {
      requestBody.contacts.push({
        name: values[`participantName${i}`],
        email: values[`participantEmail${i}`],
      });
    }

    request('/email', {
      ...defaultOptions,
      method: 'POST',
      headers: {
        ...defaultOptions.headers,
        Authorization: `Bearer ${accessToken}`,
      },
      body: requestBody,
    })
      .then((pairedContacts) => {
        console.log(pairedContacts);
        setParticipantsData(requestBody);
        history.push('/submitted');
      })
      .catch((error) => {
        console.log(error);
        history.push('/error');
      });
  };

  const fields = generateNameAndEmailFields(numParticipants);

  const listTransitions = useTransition(fields, {
    config: config.stiff,
    from: { opacity: 0, transform: 'translate3d(-25%, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0%, 0px, 0px)' },
    leave: { opacity: 0, transform: 'translate3d(-50px, 0px, 0px)' },
    keys: fields.map((_, index) => index),
  });

  const enclosedFields = listTransitions((styles, item) => (
    <animated.div style={styles}>{item}</animated.div>
  ));

  return (
    <div className={styles.FormPage}>
      <PageWrapper>
        {loaded && (
          <animated.div style={contentProps}>
            <Container fluid>
              <Row justify="start">
                <Col>
                  <div className={styles.FormPage__Title}>
                    <Text tagName="h1" appearance="h1">
                      Participants
                    </Text>
                  </div>
                  <div className={styles.FormPage__BlurbText}>
                    <Text tagName="p" appearance="h5">
                      Fill out the name and email address of every person taking
                      part
                    </Text>
                  </div>
                </Col>
              </Row>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                setFieldValue
              >
                {({ setFieldValue }) => (
                  <Form>
                    <div className={styles.FormPage__Section}>
                      {enclosedFields}
                      <Row>
                        <Col xs={12} sm={6}>
                          <div className={styles.FormPage__Button}>
                            <Action
                              tagName="button"
                              fullWidth={true}
                              type="button"
                              appearance="button-primary-outline"
                              onClick={() => {
                                setFieldValue(
                                  `participantName${numParticipants - 1}`,
                                  '',
                                );
                                setFieldValue(
                                  `participantEmail${numParticipants - 1}`,
                                  '',
                                );
                                setNumParticipants(
                                  numParticipants > 3
                                    ? numParticipants - 1
                                    : numParticipants,
                                );
                              }}
                            >
                              Remove participant
                            </Action>
                          </div>
                        </Col>
                        <Col xs={12} sm={6}>
                          <div className={styles.FormPage__Button}>
                            <Action
                              fullWidth={true}
                              tagName="button"
                              type="button"
                              appearance="button-primary"
                              onClick={() =>
                                setNumParticipants(
                                  numParticipants < 30
                                    ? numParticipants + 1
                                    : numParticipants,
                                )
                              }
                            >
                              Add participant
                            </Action>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className={styles.FormPage__Section}>
                      <Row>
                        <Col>
                          <div className={styles.FormPage__Checkbox}>
                            <FormikCheckbox
                              key="spendingLimitCheckbox"
                              id="spendingLimitCheckbox"
                              name="spendingLimitCheckbox"
                              label="Include a recommended spend limit?"
                              onChange={() => {
                                setSpendingLimitChecked(!spendingLimitChecked);
                                setFieldValue('spendingLimit', '');
                              }}
                            />
                          </div>
                        </Col>
                      </Row>
                      {spendingLimitChecked && (
                        <animated.div style={spendLimitProps}>
                          <Row key="spendingLimit">
                            <div className={styles.FormPage__InputRow}>
                              <Col xs={12} sm={6} offset={{ sm: 6 }}>
                                <div className={styles.FormPage__Input}>
                                  <FormikTextInput
                                    label="Spend limit"
                                    name="spendingLimit"
                                    id="spendingLimit"
                                    type="text"
                                  />
                                </div>
                              </Col>
                            </div>
                          </Row>
                        </animated.div>
                      )}
                    </div>
                    <Row key="organiserName">
                      <div className={styles.FormPage__InputRow}>
                        <Col xs={12} sm={6} offset={{ sm: 6 }}>
                          <div className={styles.FormPage__Input}>
                            <FormikTextInput
                              label="Organiser name"
                              name="organiserName"
                              id="organiserName"
                              type="text"
                            />
                          </div>
                        </Col>
                      </div>
                    </Row>
                    <Row justify="end">
                      <Col xs={12} sm={6}>
                        <div className={styles.FormPage__Submit}>
                          <Action
                            tagName="button"
                            fullWidth={true}
                            type="submit"
                            appearance="button-secondary"
                            disabled={isProcessing}
                          >
                            {isProcessing ? 'Submitting...' : 'Submit'}
                          </Action>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
              <Row>
                <Col md={6} offset={{ md: 6 }}>
                  <div className={styles.FormPage__BlurbText}>
                    <Text>
                      P.S. None of this information is saved or used other than
                      to send out the Santa allocations!
                    </Text>
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

export default FormPage;
