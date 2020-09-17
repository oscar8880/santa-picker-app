import styles from './ParticipantForm.module.scss';
import React from 'react';
import FormikTextInput from '../../components/FormikTextInput/FormikTextInput';
import { Row, Col } from 'react-grid-system';
import * as Yup from 'yup';
import Text from '../../components/Text/Text';
import SantaHatIcon from '../Icons/SantaHatIcon/SantaHatIcon';
import {
  includesCurrencySymbol,
  validCurrencyAmount,
} from '../../constants/regex';

export const getFormValidationSchema = (
  numParticipants = 3,
  spendingLimitChecked = false,
) => {
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

  if (spendingLimitChecked) {
    schema.spendingLimit = Yup.string()
      .required('Required')
      .matches(includesCurrencySymbol, 'Please specify a currency')
      .matches(validCurrencyAmount, 'Please enter a valid amount');
  }

  schema.organiserName = Yup.string()
    .required('Required')
    .min(2, 'Must be at least two characters')
    .max(30, 'Must be 30 characters or fewer');

  return Yup.object().shape(schema);
};

export const getInitialValues = (
  numParticipants = 3,
  spendingLimitChecked = false,
) => {
  const values = {};
  for (let i = 0; i < numParticipants; i++) {
    values[`participantName${i}`] = '';
    values[`participantEmail${i}`] = '';
  }

  if (spendingLimitChecked) {
    values.spendingLimit = '';
  }

  values.organiserName = '';

  return values;
};

const iconColours = [
  '#FF3A2F',
  '#FFA500',
  '#FFCB17',
  '#798517',
  '#226F61',
  '#AD85FF',
  '#CA61C3',
];

export const generateNameAndEmailFields = (numParticipants = 3) => {
  const fields = [];
  for (let i = 0; i < numParticipants; i++) {
    fields.push(
      <div key={`name-email-row-${i}`}>
        <Row>
          <Col>
            <div className={styles.ParticipantForm__Participant}>
              <div
                className={styles.ParticipantForm__Icon}
                style={{
                  backgroundColor: iconColours[i % 7],
                }}
              >
                <SantaHatIcon width={25} />
              </div>
              <Text appearance="h5">{`Participant ${i + 1}`}</Text>
            </div>
          </Col>
        </Row>
        <Row key={`participantKey${i}`}>
          <div className={styles.ParticipantForm__InputRow}>
            <Col xs={12} sm={6}>
              <div className={styles.ParticipantForm__Input}>
                <FormikTextInput
                  label="Name"
                  name={`participantName${i}`}
                  id={`participantName${i}`}
                  type="text"
                />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className={styles.ParticipantForm__Input}>
                <FormikTextInput
                  label="Email"
                  name={`participantEmail${i}`}
                  id={`participantEmail${i}`}
                  type="text"
                />
              </div>
            </Col>
          </div>
        </Row>
      </div>,
    );
  }

  return fields;
};
