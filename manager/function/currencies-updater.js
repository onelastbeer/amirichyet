const mongoose = require('mongoose');
const https = require('https');
const Currency = require('../schema/currency.js');

module.exports = function() {
  console.log('API call:');
  try {
    https.get('https://api.coinmarketcap.com/v1/ticker/', function(res) {
      res.on('data', function (data) {
        /*for(var i=0; i < data.length; i++) {
          new Currency({
            name: data[i].name,
            symbol: data[i].symbol
          }).save();
          console.log(data[i].name + " updated");
        }*/
        console.log(data);
      });

    }).on('error', function(error) {
        console.log(error.message);
    });
  } catch(e) {
      console.log(e);
  }
}
