/* eslint-disable */
const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '/api',
    proxy({
      target: 'https://santa-picker-api.herokuapp.com',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
      secure: false,
    }),
  );
};
