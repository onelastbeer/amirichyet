const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Currency = mongoose.model('Currency');
const User = mongoose.model('User');

var router = express.Router();

const saltRounds = 10;
const key = process.env.HASHING_KEY
const tokenKey =  process.env.TOKEN_KEY;

//test for token match
router.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, key, function(err, decoded) {
        if (err) {
          return res.status(200).json({ success: false, message: 'Failed to authenticate token' });
        } else {
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(403).send({
          success: false,
          message: 'No token provided.'
      });
    }
  })

router.get('/check', function (req, res) {
  res.status(200).json(
    { success: true,
      message: 'Your token is valid' }
  )
})

router.use('/user', require('./user'));

router.use('/admin', require('./admin'));

router.use('/transaction', require('./transaction'));

router.use('/investment', require('./investment'));

router.use('/withdrawal', require('./withdrawal'));

module.exports = router;
