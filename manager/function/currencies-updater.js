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
        var skipped = 0;
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
  Currency.findOne({ coinmarketcapId: currency.id } , (err, match) => {
    if (err) throw err;
    if(!match) {
      new Currency({
        name: currency.name,
        symbol: currency.symbol,
        coinmarketcapId: currency.id
      }).save(function (err) {
        if (err) return console.error(err);
        console.log(currency.name + " ["+ currency.symbol +"]"+ " added (" + currency.is + ")");
      });
    } else {
      if(match.name != currency.name || match.symbol != currency.symbol) {
        Currency.update({ coinmarketcapId: currency.id }, {
            name : currency.name,
            symbol : currency.symbol
          }, (err) => {
            if (err) return console.error(err);
            console.log(currency.name + " ["+ currency.symbol +"]"+ " updated (" + currency.id + ")");
        })
      }
    }
  })
}
