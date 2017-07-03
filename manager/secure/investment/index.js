const express = require('express');
const mongoose = require('mongoose');
const Investment = mongoose.model('Investment');

var router = express.Router();

router.get('/all', function (req, res) {
  Investment.find({'user': req.decoded.userId, 'deleted': false}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'List of all investments from this user',
        investments: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No investments found for this user'
      });
    }
  })
});

router.post('/add', function (req, res) {
  var data = req.body.investment;
  var user = req.decoded;
  console.log(user._id);
  new Investment({
    date: data.date,
    userId: user._id,
    amounts: {
      usd: data.amounts.usd,
      eur: data.amounts.eur,
      eth: data.amounts.eth,
      btc: data.amounts.btc
    },
    received: data.received
  }).save(function (err) {
  if (err) {
    console.error(err);
    return res.status(200).json({
          success   : false,
          message   : 'Unable to add new investment'
        });
  } else {
    return res.status(200).json({
          success   : true,
          message   : 'Investment added'
        });
  }});
});

router.post('/edit', function (req, res) {
  var data = req.body.investment;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own this investment' + data.id
        });
  } else {
    Investment.update({id: data.id}, {
      date: data.date,
      userId: user.id,
      amounts: {
        usd: data.amounts.usd,
        eur: data.amounts.eur,
        eth: data.amounts.eth,
        btc: data.amounts.btc
      },
      received: data.received
    } ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete investment ' + data.id
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Investment ' + data.id + ' deleted'
          });
    }});
  }
});

router.post('/delete', function (req, res) {
  var data = req.body.investment;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own investment ' + data.id
        });
  } else {
    Investment.update({id: data.id}, {deleted: true} ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete investment ' + data.id
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Investment ' + data.id + ' deleted'
          });
    }});
  }
});

module.exports = router;
