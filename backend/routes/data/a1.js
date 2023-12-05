const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      //res.send('/data/a1');
      res.render('viewa1', { title: '/data/a1 패스', data:'data/a1 패스의 html을 랜더링 합니다.' });
});
router.post('/', (req, res) => {
      res.send({a:'data_a1_a',b:"data_a1_b"});
});

module.exports = router;