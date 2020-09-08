import * as express from 'express';
import * as helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as cors from 'cors';

import index from './routes/index';
import email from './routes/email';

const origin = process.env.WEB_ORIGIN;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin }));
app.use(helmet());
app.use(helmet.hidePoweredBy());

app.use('/', index);
app.use('/email', email);

export default app;
