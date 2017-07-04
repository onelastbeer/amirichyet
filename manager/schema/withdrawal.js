var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var WithdrawalSchema = new Schema({

  created: {
    type: Date,
    default: Date.now
  },

  date: {
    type: Date,
    default: Date.now
  },

  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'A user is required for this withdrawal'
  },

  amounts: {
    usd: {
      type: Number,
      required: 'A USD rate is required for this withdrawal'
    },
    eur: {
      type: Number,
      required: 'A EUR rate is required for this withdrawal'
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

module.exports = mongoose.model('Withdrawal', WithdrawalSchema );
