const express = require('express');
const mongoose = require('mongoose');
const Currency = mongoose.model('Currency');

var router = express.Router();

router.post('/delete', function(req, res) {
  var currency = req.body.currency;
  Currency.update({ id: currency.id }, {deleted: true}, (err) => {
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
  var currency = req.body.currency;
  Currency.update({ id: currency.id }, {deleted: false}, (err) => {
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

module.exports = router;
