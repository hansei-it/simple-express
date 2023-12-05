const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
  console.log("Init:", 1); // passport 초기화
  passport.count = 0;
  passport.serializeUser((user, done) => {        
    console.log("Login:", 6, ' serializeUser');
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log("request:", 1, ' deserializeUser');
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};
