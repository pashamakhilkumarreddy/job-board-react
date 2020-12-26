const { isValidEmail, isValidPassword } = require('../utils/validations');
const { emptyEmailText, emptyPasswordText } = require('../utils/constants');

module.exports = {
  validateFields(ctx, next) {
    try {
      const { email, password } = ctx.request.body;
      const trimmedEmail = email && (typeof email === 'string') && email.trim();
      const trimmedPassword = password
        && (typeof password === 'string') && password.trim();
      const errors = [];
      if (!trimmedEmail) {
        errors.push(emptyEmailText);
      }
      if (!trimmedPassword) {
        errors.push(emptyPasswordText);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          errors: [
            ...errors,
          ],
        };
        return;
      }
      const validEmail = isValidEmail(trimmedEmail);
      const validPassword = isValidPassword(trimmedPassword);
      if (!validEmail.isValid) {
        errors.push(validEmail.message);
      }
      if (!validPassword.isValid) {
        errors.push(validPassword.message);
      }
      if (errors.length) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          statusMessages: [
            ...errors,
          ],
        };
        return;
      }
      ctx.request.body.user = {};
      ctx.request.body.user.email = trimmedEmail;
      ctx.request.body.user.password = trimmedPassword;
      return next(); // eslint-disable-line consistent-return
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        status: 500,
        success: false,
        errors: [
          'Internal server error',
        ],
      };
    }
  },
};
