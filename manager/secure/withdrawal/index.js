const express = require('express');
const mongoose = require('mongoose');
const Withdrawal = mongoose.model('Withdrawal');

var router = express.Router();

router.get('/all', function (req, res) {
  Withdrawal.find({'user': req.decoded.userId, 'deleted': false}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'List of all withdrawals from this user',
        withdrawals: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No withdrawal found for this user'
      });
    }
  })
});

router.post('/add', function (req, res) {
  var data = req.body.withdrawal;
  var user = req.decoded;
  new Withdrawal({
    date: data.date,
    userId: user.id,
    amounts: {
      usd: data.amounts.usd,
      eur: data.amounts.eur,
      eth: data.amounts.eth,
      btc: data.amounts.btc
    }
  }).save(function (err) {
  if (err) {
    console.error(err);
    return res.status(200).json({
          success   : false,
          message   : err.message

        });
  } else {
    return res.status(200).json({
          success   : true,
          message   : 'Withdrawal added'
        });
  }});
});

router.post('/edit', function (req, res) {
  var data = req.body.withdrawal;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own this withdrawal' + data.id
        });
  } else {
    Withdrawal.update({id: data.id}, {
      date: data.date,
      userId: user.id,
      amounts: {
        usd: data.amounts.usd,
        eur: data.amounts.eur,
        eth: data.amounts.eth,
        btc: data.amounts.btc
      }
    } ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : err.message
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Withdrawal ' + data.id + ' edited'
          });
    }});
  }
});

router.post('/delete', function (req, res) {
  var data = req.body.withdrawal;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own withdrawal ' + data.id
        });
  } else {
    Withdrawal.update({id: data.id}, {deleted: true} ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete withdrawal ' + data.id
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Withdrawal ' + data.id + ' deleted'
          });
    }});
  }
});

module.exports = router;
