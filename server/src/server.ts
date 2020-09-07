import { createServer } from 'http';

import app from './app';

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val: any): any => {
  const p = parseInt(val, 10);

  if (isNaN(p)) {
    return val;
  }

  if (p >= 0) {
    return p;
  }

  return false;
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = (): void => {
  const addr = server.address();
  const bind =
    typeof addr === 'string' ? `pipe ${addr}` : `port ${addr && addr.port}`;
  console.log('Listening on ' + bind);
};

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: any): void => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  switch (error.code) {
    case 'EACCES': {
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    }
    case 'EADDRINUSE': {
      console.error(bind + ' is already in use');
      process.exit(1);
    }
    default: {
      throw error;
    }
  }
};

const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);
const server = createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
