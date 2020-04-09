'use strict';
const mongoose = require('mongoose');
const authSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
});

const Auth = (module.exports = mongoose.model('users', authSchema));
