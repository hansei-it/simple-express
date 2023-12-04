const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.send('test1');
});
router.post('/', (req, res, next) => {
      res.send({a:'test1_a',b:"test1_b"});
});

module.exports = router;