const express = require('express');
const mongoose = require('mongoose');
const Currency = mongoose.model('Currency');

var router = express.Router();

router.get('/all', function (req, res) {
  Currency.find({'deleted': false}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'List of all currencies that can be used on this platform',
        currencies: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No currency found'
      });
    }
  })
});

router.get('/findByID/:id', function (req, res) {
  Currency.findOne({'_id': req.params.id}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'Currency for information for id ' + req.params.id,
        currencies: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No currency found for id ' + req.params.id
      });
    }
  })
});

router.get('/findBySymbol/:symbol', function (req, res) {
  Currency.find({'symbol': req.params.symbol}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'Currency for information for symbol ' + req.params.symbol,
        currencies: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No currency found for symbol ' + req.params.symbol
      });
    }
  })
});

router.get('/findBySymbol/:name', function (req, res) {
  Currency.find({'name': req.params.name}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'Currency for information with name ' + req.params.name,
        currencies: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No currency found with name ' + req.params.name
      });
    }
  })
});


router.get('/findByCoinMarketCapID/:cmcid', function (req, res) {
  Currency.find({'coinmarketcapId': req.params.cmcid}, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(409).json({
        success: false,
        message: 'Internal server error'
      });
    } else if (result) {
      return res.status(200).json({
        success: true,
        message: 'Currency for information for id ' + req.params.cmcid,
        currencies: result
      });
    } else {
      return res.status(200).json({
        success: false,
        message: 'No currency found for id ' + req.params.cmcid
      });
    }
  })
});

module.exports = router;
