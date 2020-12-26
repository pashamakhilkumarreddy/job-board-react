const { User } = require('../models');

module.exports = {
  async register(ctx) {
    try {
      const { email, password } = ctx.request.body.user;
      const isExistingUser = await User.findOne({
        email,
      });
      if (!isExistingUser) {
        const newUser = new User({
          email,
          password,
        });
        if (!newUser) {
          throw new Error('Unable to create a new user');
        }
        await newUser.save();
        ctx.response.status = 201;
        ctx.body = {
          status: 201,
          success: true,
          data: {
            user: newUser.formattedUserObj(),
          },
          statusMessages: [
            'Successfully created a new user',
          ],
        };
        return;
      }
      ctx.response.status = 403;
      ctx.body = {
        status: 403,
        success: false,
        errors: [
          'A user already exists with the provided email',
          'Please login in!',
        ],
      };
      return;
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
  async login(ctx) {
    try {
      const { email, password } = ctx.request.body.user;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          errors: [
            'A user does not exist with the provided email',
          ],
        };
        return;
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        ctx.response.status = 401;
        ctx.body = {
          status: 401,
          success: false,
          errors: [
            'Invalid user information. Please check your input',
          ],
        };
        return;
      }
      ctx.response.status = 200;
      ctx.body = {
        status: 200,
        success: true,
        data: {
          user: user.formattedUserObj(),
          tokens: {
            refreshToken: user.genRefreshToken(),
            accessToken: user.genAccessToken(),
          },
        },
        statusMessages: [
          'Login is successfull',
        ],
      };
      return;
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
