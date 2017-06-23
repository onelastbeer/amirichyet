const express = require('express');

var router = express.Router();

router.get('/test', function (req, res) {
  res.send('This is public !')
})

module.exports = router;
