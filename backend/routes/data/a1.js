const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      res.send('/data/a1');
});
router.post('/', (req, res) => {
      res.send({a:'data_a1_a',b:"data_a1_b"});
});

module.exports = router;