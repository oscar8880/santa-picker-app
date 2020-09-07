import styles from './FormPage.module.scss';
import React, { useState } from 'react';
import Text from '../../components/Text/Text';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput';
import { Container, Row, Col } from 'react-grid-system';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikCheckbox from '../../components/FormikCheckbox/FormikCheckbox';

const FormPage = () => {
  const [numParticipants, setNumParticipants] = useState(3);
  const handleSubmit = (values) => {
    console.log(values);
  };

  const generateValidationSchema = () => {
    const schema = {};
    for (let i = 0; i < numParticipants; i++) {
      schema[`participantName${i}`] = Yup.string()
        .required('Required')
        .min(2, 'Must be at least two characters')
        .max(30, 'Must be 30 characters or fewer');
      schema[`participantEmail${i}`] = Yup.string()
        .email('Invalid email address')
        .required('Required')
        .max(100, 'Must be 100 characters or fewer');
    }
    return Yup.object().shape(schema);
  };

  const generateInitialValues = () => {
    const values = {};
    for (let i = 0; i < numParticipants; i++) {
      values[`participantName${i}`] = '';
      values[`participantEmail${i}`] = '';
    }
    return values;
  };

  const generateFormFields = () => {
    const fields = [];
    for (let i = 0; i < numParticipants; i++) {
      fields.push(
        <Row key={`participantKey${i}`}>
          <div className={styles.FormPage__InputRow}>
            <Col xs={12} sm={6}>
              <div className={styles.FormPage__Input}>
                <FormikTextInput
                  label="Name"
                  name={`participantName${i}`}
                  id={`participantName${i}`}
                  type="text"
                />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className={styles.FormPage__Input}>
                <FormikTextInput
                  label="Email"
                  name={`participantEmail${i}`}
                  id={`participantEmail${i}`}
                  type="text"
                />
              </div>
            </Col>
          </div>
        </Row>,
      );
    }
    fields.push(
      <FormikCheckbox
        key="acceptedTerms"
        id="acceptedTerms"
        name="acceptedTerms"
      >
        Add a spending limit?
      </FormikCheckbox>,
    );
    return fields;
  };

  return (
    <div className={styles.FormPage}>
      <PageWrapper>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className={styles.FormPage__Title}>
                <Text tagName="h1" appearance="h1">
                  Participant details
                </Text>
              </div>
              <div className={styles.FormPage__BlurbText}>
                <Text tagName="p" appearance="h5">
                  Fill out the name and email address of each person taking part
                </Text>
              </div>
            </Col>
          </Row>
          <Formik
            initialValues={generateInitialValues()}
            validationSchema={generateValidationSchema()}
            onSubmit={handleSubmit}
          >
            <Form>
              {generateFormFields()}
              <button
                type="button"
                onClick={() => setNumParticipants(numParticipants + 1)}
              >
                Add
              </button>
              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <div className={styles.FormPage__BlurbText}>
            <Text tagName="p" appearance="h5">
              None of this information is saved or used other than to send out
              the Santa allocations
            </Text>
          </div>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default FormPage;
