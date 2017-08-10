import * as types from '../mutation-types'
import manager from '../../api/manager'

// initial state
const state = {
  currencies: ['ETH', 'BTC', 'EOS'],
  transactions: [],
  investments: [],
  withdrawals: []
}

// getters
const getters = {
  currencies: state => state.currencies,
  investments: state => state.investments
}

// actions
const actions = {
}

// mutations
const mutations = {
  [types.RECIEVE_TRANSACTIONS] (state, { transactions }) {
    state.transactions = transactions || []
  },

  [types.RECIEVE_INVESTMENTS] (state, { investments }) {
    state.investments = investments || []
  },

  [types.RECIEVE_WITHDRAWALS] (state, { withdrawals }) {
    state.withdrawals = withdrawals || []
  },

  [types.ADD_TRANSACTION_SUCCESS] (state, { transaction }) {
    state.transactions.push(transaction)
  },

  [types.ADD_WITHDRAWAL_SUCCESS] (state, { withdrawal }) {
    state.withdrawals.push(withdrawal)
  },

  [types.ADD_INVESTMENT_SUCCESS] (state, { investment }) {
    state.transactions.push(investment)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
