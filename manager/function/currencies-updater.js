const mongoose = require('mongoose');
const https = require('https');
//const Currency = require('../schema/currency.js');
const Currency = mongoose.model('Currency');

module.exports = () => {
  console.log('API call:');
  try {
    https.get('https://api.coinmarketcap.com/v1/ticker/', (res) => {
      var currs = '';
      res.on('data', (d) => {
        currs += d;
      })
      res.on('end', () => {
        var parsed = JSON.parse(currs);
        for (var i = 0; i < parsed.length; i++) {
          new Currency({name: parsed[i].name, symbol: parsed[i].symbol}).save();
          console.log(parsed[i].name + " updated (" + parsed[i].rank + ")");
        }
      })
    }).on('error', (error) => {
      console.log(error.message);
    });
  } catch (e) {
    console.log(e);
  }
}
