'use strict';
let Auth = require('../models/AuthModel');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.create = async (req, res) => {
  let result = {};
  const { email, name, password, confirmPassword } = req.body;

  let authModel = new Auth({
    email,
    name,
    password,
    confirmPassword,
  });

  bycrypt.genSalt(10, (err, salt) => {
    bycrypt.hash(authModel.password, salt, async (err, hash) => {
      if (err) console.log(err);
      authModel.password = hash;
      authModel.confirmPassword = hash;
      try {
        await authModel.save();
        res
          .status(200)
          .json({ success: true, message: 'successfully Inserted' });
      } catch (error) {
        res.status(400).json({ success: false, message: 'already exists' });
      }
    });
  });
};

module.exports.findOne = async (req, res) => {
  const { email, password } = req.body;

  let errResponse = {
    success: false,
    message: 'Incorrect credentials',
  };

  let user = await Auth.findOne({ email });
  if (!user) {
    res.status(400).json(errResponse);
  }
  try {
    const isMatch = await bycrypt.compare(password, user.password);
    if (isMatch) {
      const payLoad = {
        email: user.email,
        name: user.name,
      };
      jwt.sign(
        payLoad,
        'secret',
        {
          expiresIn: 86400,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            success: true,
            token: 'Bearer ' + token,
          });
        }
      );
    } else {
      res.status(400).json(errResponse);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
