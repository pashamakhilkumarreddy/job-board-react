const Router = require('koa-router');
const {
  register,
  login,
} = require('../controllers');
const {
  validateFields,
} = require('../middlewares');

const router = new Router();

router.post('/auth/register', validateFields, register)
  .post('/auth/login', validateFields, login);

module.exports = router;
