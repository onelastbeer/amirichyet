const express = require('express');
const mongoose = require('mongoose');
const Currency = mongoose.model('Currency');
const User = mongoose.model('User');

var router = express.Router();

const saltRounds = 10;
const key = process.env.HASHING_KEY

router.get('/test', function (req, res) {
  User.findOne({'username': 'CryptoGod'}, function(err, user) {
    if (err) {
      console.log(err);
      res.status(409).send('Test Error');
    } else if (user) {
      res.status(200).send(user);
    } else {
      res.status(200).send('User Not Found')
    }
  })
})

router.get('/cur', function (req, res) {
  Currency.findOne({acronym: 'ETH'}, function(err, cur) {
    if (err) {
      console.log(err);
      res.status(409).send('Test Error');
    } else if (cur) {
      res.status(200).send(cur);
    } else {
      res.status(200).send('Currency Not Found')
    }
  })
})

module.exports = router;
