const mongoose = require('mongoose');
const https = require('https');
const Currency = mongoose.model('Currency');

module.exports = () => {
  try {
    https.get('https://api.coinmarketcap.com/v1/ticker/', (res) => {
      var currs = '';
      res.on('data', (d) => {
        currs += d;
      })
      res.on('end', () => {
        var parsed = JSON.parse(currs);
        for (var i = 0; i < parsed.length; i++) {
          update(parsed[i])
        }
      })
    }).on('error', (error) => {
      console.log(error.message);
    });
  } catch (e) {
    console.log(e);
  }
}

update = function(currency) {
  Currency.findOne({'symbol': currency.symbol} , (err, match) => {
    if (err) throw err;
    if(!match) {
      new Currency({
        name: currency.name,
        symbol: currency.symbol
      }).save();
      console.log(currency.name + " updated (" + currency.rank + ")");
    } else {
      console.log(currency.name + " exists (" + currency.rank + ") : skipped");
    }
  })
}
