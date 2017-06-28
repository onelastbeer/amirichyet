var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CurrencySchema = new Schema({

  created: {
    type: Date,
    default: Date.now
  },

  name: {
    type: String,
    maxlength: 64,
    required: 'Name is required',
    unique: true
  },

  acronym: {
    type: String,
    maxlength: 16,
    required: 'Acronym is required',
    unique: true
  }
});

module.exports = mongoose.model('Currency', CurrencySchema );
