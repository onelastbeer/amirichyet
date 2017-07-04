const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);;

var router = express.Router();

router.post('/delete', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id }, {deleted: true}, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete user'
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User deleted successfully'
          });
    }
  })
});

router.post('/reactivate', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id}, {deleted: false}, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to reactivate user'
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User reactivated successfully'
          });
    }
  })
});

router.post('/reset_password', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id}, {password: bcrypt.hashSync(user.password, salt)}, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to update password'
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User password resetted successfully'
          });
    }
  })
});

router.post('/promote', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id}, {superUser: true}, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : err.message
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User promoted successfully'
          });
    }
  })
});

router.post('/demote', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id}, {superUser: true}, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : err.message
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User demoted successfully'
          });
    }
  })
});

router.post('/edit', function(req, res) {
  var user = req.body.user;
  User.update({ id: user.id}, {
    lastName: user.lastName,
    firstName: user.firstName,
    username: user.username.toLowerCase(),
    email: user.email
    }, (err) => {
    if(err) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : err.message
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'User edited successfully'
          });
    }
  })
});

module.exports = router;
