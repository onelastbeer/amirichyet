const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt-nodejs');
const tokenKey =  process.env.TOKEN_KEY;

var router = express.Router();

router.post('/authenticate', function (req, res) {
  var data = req.body;
  User.findOne({'username': data.username, deleted: false}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        error: 'Internal server error'
      });
    } else if (user) {
      bcrypt.compare(data.password, user.password, function(err, match) {
        if(match) {

          var sign = {
            id: data.id,
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

router.use('/user', require('./user'));

module.exports = router;
