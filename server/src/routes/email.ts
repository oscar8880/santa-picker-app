import * as express from 'express';
import { assignRandomContacts } from '../utils/random';
const sgMail = require('@sendgrid/mail');

const router = express.Router();
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {
  const { contacts, organiserName, spendingLimit } = req.body;
  const pairedContacts = assignRandomContacts(contacts);
  const emails = pairedContacts.map((contactPair) => {
    return {
      to: contactPair.contact.email,
      from: 'secretsantacourierelf@gmail.com',
      subject: 'Your Secret Santa Nomination',
      templateId: 'd-b1e6786eee434135a63f3a106eabf4ad',
      dynamicTemplateData: {
        contactName: contactPair.contact.name,
        organiserName: organiserName,
        assignedContactName: contactPair.assignedContact.name,
        spendingLimit:
          spendingLimit !== undefined
            ? `There's a recommended spend limit of ${spendingLimit}.`
            : '',
      },
    };
  });
  console.log(pairedContacts);
  console.log(organiserName);
  console.log(spendingLimit);
  sgMail
    .send(emails[0])
    .then((response) => {
      console.log(response);
      const status = 200;
      res.status(status).json({ status });
    })
    .catch((error) => {
      console.log(error);
      const status = 500;
      res.status(status).json(error);
    });
});

export default router;

// const msg = {
//   to: 'oscar@zealley.com',
//   from: 'secretsantacourierelf@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);
