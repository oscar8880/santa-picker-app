/* eslint-disable */
const proxy = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '/api',
    proxy({
      target:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://santa-picker.netlify.app',
      pathRewrite: {
        '^/api': '',
      },
      changeOrigin: true,
      secure: false,
    }),
  );
};
