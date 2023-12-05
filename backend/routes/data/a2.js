const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
      res.send('/data/a2');
});
router.post('/', (req, res) => {
      res.send({a:'data_a2_a',b:"data_a2_b"});
});

module.exports = router;