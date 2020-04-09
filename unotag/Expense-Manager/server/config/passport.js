'use strict';
const JwtStartegy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
let Auth = require('../models/AuthModel');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = (passport) => {
  passport.use(
    new JwtStartegy(opts, (jwt_payload, done) => {
      Auth.findOne({
        where: {
          email: jwt_payload.email,
        },
      })
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
