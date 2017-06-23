const express = require('express');

var router = express.Router();

const saltRounds = 10;
const key = process.env.hashingKey



router.get('/test', function (req, res) {
  res.send('This requires an authentication !')
})

module.exports = router;
