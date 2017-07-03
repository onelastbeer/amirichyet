const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

var router = express.Router();

router.use(function(req, res, next) {
  User.findOne({'id': req.decoded.id}, function(err, user) {
    if(!user.superUser) {
      return res.status(403).json({
            success   : false,
            message   : 'Insufficient priviledges to perform this request'
          });
    } else {
      next();
    }
  })
}

router.use('/user', require('./user'));
router.use('/currency', require('./currency'));

module.exports = router;
