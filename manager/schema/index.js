const bcrypt = require('bcrypt-nodejs');
const salt = bcrypt.genSaltSync(10);;
const key = process.env.HASHING_KEY;
const rootPassword = process.env.ROOT_PASSWORD;

module.exports = () => {
  var User = require('./user.js');
  require('./transaction.js');
  require('./investment.js');
  require('./currency.js');

  //setting up root
  new User({
    username: 'CryptoGod',
    password: bcrypt.hashSync(rootPassword, salt),
    email: 'cryptogod@wakeup.coffee',
    lastName: 'God',
    superUser: true
  }).save();
}
