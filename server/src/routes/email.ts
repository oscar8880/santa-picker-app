import * as express from 'express';
import { SantaPickerRequestDetails } from '../model/contactDetails.model';
const sgMail = require('@sendgrid/mail');

const router = express.Router();
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/', async (req, res) => {
  const requestDetails: SantaPickerRequestDetails = req.body;
  console.log(requestDetails);
  const status = 200;
  res.status(status).json(requestDetails);
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
