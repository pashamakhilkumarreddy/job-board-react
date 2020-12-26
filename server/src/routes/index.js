const auth = require('./auth');
// const { BASE_URL } = require('../utils/constants');

module.exports = ({ app }) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
};
