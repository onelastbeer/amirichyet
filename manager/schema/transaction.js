var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransactionSchema = new Schema({

  created: {
    type: Date,
    default: Date.now
  },

  date: {
    type: Date,
    default: Date.now
  },

  userId: {
    type: Schema.ObjectId,
    ref: 'User',
    required: 'A user is required for this transaction'
  },

  currencyId: {
    type: Schema.ObjectId,
    ref: 'Currency',
    required: 'A currency is required for this transaction'
  },

  amount: {
    type: Number,
    required: 'An amount is required for this transaction'
  },

  rates: {
    usd: {
      type: Number,
      required: 'A USD rate is required for this transaction'
    },
    eur: {
      type: Number,
      required: 'A EUR rate is required for this transaction'
    },
    eth: {
      type: Number
    },
    btc: {
      type: Number
    }
  },

  deleted: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema );
