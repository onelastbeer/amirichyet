var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InvestmentSchema = new Schema({

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

  amounts: {
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

module.exports = mongoose.model('Investment', InvestmentSchema );
