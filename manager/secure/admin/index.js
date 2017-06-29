const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

router.use(function(req, res, next) {
  if(!req.decoded.superUser) {
    return res.status(403).json({
          success   : false,
          message   : 'Insufficient priviledges to perform this request'
        });
  } else {
    next();
  }
}

router.use('/user', require('./user'));
router.use('/currency', require('./currency'));

module.exports = router;
