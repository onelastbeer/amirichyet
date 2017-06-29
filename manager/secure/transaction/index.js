const express = require('express');
const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction');

var router = express.Router();

router.get('/all', function (req, res) {
  Transaction.find({'user': req.decoded.userId, 'deleted': false}, function(err, transactions) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (transactions) {
      return res.status(200).json({
        success: true,
        message: 'List of all transactions from this user'
        transactions: transactions
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No transactions found for this user'
      });
    }
  })
});

router.post('/add', function (req, res) {
  var data = req.body.transaction;
  var user = req.decoded;
  new Transaction({
    date: data.date,
    userId: user.id,
    currencyId: data.currencyId,
    amount: data.amount,
    rate: {
      usd: data.rates.usd,
      eur: data.rates.eur,
      eth: data.rates.eth,
      btc: data.rates.btc
    }
  }).save(function (err) {
  if (err) {
    console.error(err);
    return res.status(200).json({
          success   : false,
          message   : 'Unable to add new transaction'
        });
  } else {
    return res.status(200).json({
          success   : true,
          message   : 'Transaction added'
        });
  }});
});

router.post('/edit', function (req, res) {
  var data = req.body.transaction;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own this transaction' + data.id
        });
  } else {
    Transaction.update({id: data.id}, {
      date: data.date,
      userId: user.id,
      currencyId: data.currencyId,
      amount: data.amount,
      rate: {
        usd: data.rates.usd,
        eur: data.rates.eur,
        eth: data.rates.eth,
        btc: data.rates.btc
      }
    } ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete transaction ' + data.id
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Transaction ' + data.id + ' deleted'
          });
    }});
  }
});

router.post('/delete', function (req, res) {
  var data = req.body.transaction;
  var user = req.decoded;
  if((user.id != data.userId && !user.superUser)) {
    return res.status(403).json({
          success   : false,
          message   : 'You don\'t own transaction ' + data.id
        });
  } else {
    Transaction.update({id: data.id}, {deleted: true} ,function (err, match) {
    if (!match || err || (user.id != data.userId && !user.superUser)) {
      console.error(err);
      return res.status(200).json({
            success   : false,
            message   : 'Unable to delete transaction ' + data.id
          });
    } else {
      return res.status(200).json({
            success   : true,
            message   : 'Transaction ' + data.id + ' deleted'
          });
    }});
  }
});

module.exports = router;
