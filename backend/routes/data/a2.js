const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      //res.send('/data/a2');
      res.render('viewa2', { title: '/data/a2 패스', data:'data/a2 패스의 html을 랜더링 합니다.' });
});
router.post('/', (req, res) => {
      res.send({a:'data_a2_a',b:"data_a2_b"});
});

module.exports = router;