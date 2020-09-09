import * as express from 'express';
import { assignRandomContacts } from '../utils/random';
const sgMail = require('@sendgrid/mail');

const router = express.Router();
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {
  const { contacts, organiserName, spendingLimit } = req.body;
  const pairedContacts = assignRandomContacts(contacts);

  console.log(pairedContacts);
  console.log(organiserName);
  console.log(spendingLimit);

  const status = 200;
  res.status(status).json(pairedContacts);
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
