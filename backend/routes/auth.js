const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('../lib/middlewares');
const User = require('../models/user');

const router = express.Router();

router.post('/join', isNotLoggedIn, async (req, res, next) => {
  const { userkey, password } = req.body;
  try {
    console.log(userkey);
    console.log({ userkey });
    console.log({ where: { userkey } });
    const exUser = await User.findOne({ where: { userkey } });
    if (exUser) {
      return res.redirect('/join?error=exist');
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      userkey,
      password: hash,
    });
    return res.send('join ok');
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  console.log('Login:',1,' post /login');

  passport.authenticate('local', (authError, user, info) => {
    console.log('Login:', 4,' authenticate ok or fail');
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.redirect(`/?loginError=${info.message}`);
    }
    console.log('Login:', 5,' req.login()');
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      console.log('Login:', 7,' response ok');
      return res.send('login ok : '+ user.userkey);
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logout(()=>{
    res.send('logout ok');
  });  
});

module.exports = router;
