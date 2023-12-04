const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.send('test2');
});
router.post('/', (req, res, next) => {
      res.send({a:'test2_a',b:"test2_b"});
});
module.exports = router;