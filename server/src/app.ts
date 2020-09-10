import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

import index from './routes/index';
import email from './routes/email';

const origin = process.env.WEB_ORIGIN;
const app = express();
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-k04yz4rs.eu.auth0.com/.well-known/jwks.json`,
  }),

  audience: 'https://santa-picker',
  issuer: `https://dev-k04yz4rs.eu.auth0.com/`,
  algorithms: ['RS256'],
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin }));
app.use(helmet());
app.use(helmet.hidePoweredBy());

app.use('/', index);
app.use(checkJwt);
app.use('/email', email);

export default app;
