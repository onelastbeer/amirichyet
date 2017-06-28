const mongoose = require('mongoose');
const http = require('http');

module.exports = function() {
  http.get({
    hostname: 'https://api.coinmarketcap.com',
    port: 80,
    path: '/v1/ticker/',
    agent: false
  }, function(res) {
    console.log(res);
  };
}
