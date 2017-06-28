const express = require('express');
const User = require('../schema/user.js');

var router = express.Router();

const saltRounds = 10;
const key = process.env.HASHING_KEY



router.get('/test', function (req, res) {
  /*User.findOne({username: 'CryptoGod'}, function(err, user) {
    console.log("hi");
    console.log(user);
    if (err) {
      console.log(err);
      res.status(409).send('Test Error');
    } else {
      res.status(200).send(user.email);
    }
  })*/
  User.findOne({username: 'CryptoGod'}, function(err, user) {
    if (err) return handleError(err);
    console.log(user);
  })
  res.send("good");
})

module.exports = router;
