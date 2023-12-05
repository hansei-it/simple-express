const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
  console.log("Init:", 2); // passport 초기화
  passport.use(new LocalStrategy({
    usernameField: 'userkey',
    passwordField: 'password',
  }, async (userkey, password, done) => {
    console.log("Login:", 2, ' localstrategy');
    try {
      const exUser = await User.findOne({ where: { userkey } });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.password);
        if (result) {
          console.log("Login:", 3, ' password ok');
          done(null, exUser);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};
