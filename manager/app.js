const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//adding useful blocks
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));

//allows cross origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");
  if ('OPTIONS' == req.method) {
      res.sendStatus(204);
    }
    else {
      next();
    }
});

app.get('/hi', function (req, res) {
  res.send('Message from your overlord !')
})

app.use('/public', require('./public'));

app.use('/secure', require('./secure'));
