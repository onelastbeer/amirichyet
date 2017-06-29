const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var router = express.Router();

router.get('/self', function (req, res) {
  User.findOne({'id': req.decoded.id}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(409).json('Test Error');
    } else if (user) {
      return res.status(200).json({
        success: true,
        message: 'User information',
        user: user
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'User not found'
      });
    }
  })
});

/* TODO
router.get('/self_avatar', function (req, res) {
  User.findOne({'id': req.decoded.id}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(409).json('Test Error');
    } else if (user) {
      return res.status(200).json({
        success: true,
        message: 'User information',
        user: user
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'User not found'
      });
    }
  })
});*/

module.exports = router;
