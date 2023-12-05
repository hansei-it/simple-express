const passport = require('passport');
const local = require('./localStrategy');
const User = require('../models/user');

module.exports = () => {
  passport.count = 0;
  passport.serializeUser((user, done) => {        
    console.log('----------passport.serializeUser ',passport.count++);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('----------passport.deserializeUser ',passport.count++);
    User.findOne({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local();
};
