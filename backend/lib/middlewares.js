exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("middleware:", 2, ' isLoggedIn()');  
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log("middleware:", 1, ' isNotLoggedIn()');
    next();
  } else {
    const message = encodeURIComponent('로그인한 상태입니다.');
    res.redirect(`/?error=${message}`);
  }
};
