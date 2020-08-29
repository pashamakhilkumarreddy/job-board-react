const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
  username: {},
  email: {},
  name: {},
  password: {},
  mobile: {},
  dob: {},
  doj: {},
  gender: {},
  isAdmin: {},
  isUserVerified: {},
  isUserPremium: {},
}, {
  strict: true,
  timestamps: true,
});

module.exports = mongoose.model('User', User);