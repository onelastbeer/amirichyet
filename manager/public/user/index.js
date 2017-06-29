const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);;

var router = express.Router();

router.post('/new', function(req, res) {
  var data = req.body.user;
  User.findOne({'username': data.username}, function(err, match) {
    if (err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to create user'
          });
    } else if (!match) {
      new User({
        username: data.username,
        password: bcrypt.hashSync(data.password, salt),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName
      }).save(function (err) {
      if (err) {
        console.error(err);
        return res.status(200).json({
              success   : false,
              message   : 'Unable to create user'
            });
      } else {
        return res.status(200).json({
              success   : true,
              message   : 'Used created'
            });
      }});
    } else {
      return res.status(200).json({
            success   : false,
            message   : 'Username already exists'
          });
      }
  });
});

module.exports = router;
