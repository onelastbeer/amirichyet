const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const tokenKey =  process.env.TOKEN_KEY;
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
        username: data.username.toLowerCase(),
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
              message   : 'User created'
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

router.post('/authenticate', function (req, res) {
  var data = req.body;
  User.findOne({'username': data.username.toLowerCase(), deleted: false}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        error: 'Internal server error' 
      });
    } else if (user) {
      console.log(user);
      bcrypt.compare(data.password, user.password, function(err, match) {
        if(match) {
          var sign = {
            _id: user._id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            superUser: user.superUser,
            created: user.created
          }

          var token = jwt.sign(sign, tokenKey, {expiresIn: "15d"});
          return res.status(200).json({
                success   : true,
                message   : 'Enjoy your token!',
                token     : token
              });
        } else {
          return res.status(200).json({
                success   : false,
                message   : 'Wrong password'
              });
        }
      });
    } else {
      return res.status(200).json({
            success   : false,
            message   : 'Wrong username'
          });
        }
  })
});

module.exports = router;
