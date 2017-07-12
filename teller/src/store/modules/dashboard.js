import * as types from '../mutation-types'
import manager from '../../api/manager'

// initial state
const state = {
  currencies: ['ETH', 'BTC', 'EOS'],
  transactions: [],
  investments: []
}

// getters
const getters = {
  currencies: state => state.transactions
}

// actions
const actions = {
}

// mutations
const mutations = {
  [types.RECIEVE_TRANSACTIONS] (state, { transactions }) {
    state.transactions = transactions || []
  },
  [types.ADD_TRANSACTION_SUCCESS] (state, { transaction }) {
    state.transactions.push(transaction)
  },
  [types.ADD_TRANSACTION_FAILURE] (state, { username, message }) {
    state.username = username
    state.authenticated = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
