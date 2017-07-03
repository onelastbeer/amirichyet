const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const salt = bcrypt.genSaltSync(10);;
const key = process.env.HASHING_KEY;
const rootUsername = process.env.ROOT_USERNAME;
const rootPassword = process.env.ROOT_PASSWORD;
const rootEmail = process.env.ROOT_EMAIL;

module.exports = () => {
  require('./user.js');
  require('./transaction.js');
  require('./investment.js');
  require('./currency.js');

  //setting up root
  const User = mongoose.model('User');
  User.findOne({ username: rootUsername } , (err, match) => {
    if (err) throw err;
    if(!match) {
      new User({
        username: rootUsername.toLowerCase(),
        password: bcrypt.hashSync(rootPassword, salt),
        email: rootEmail,
        lastName: 'God',
        superUser: true
      }).save(function (err) {
        if (err) return console.error(err);
        console.log("Root user created!");
      });
    } else {
      console.log("Root user exists with name " + match.username + " - skipping");
    }
  })
}
