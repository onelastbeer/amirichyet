import * as types from '../mutation-types'

// initial state
const state = {
  error: null,
}

// getters
const getters = {
  error: state => state.error
}

// actions
const actions = {
  setError ({ commit, state }, { error }) {
    commit(types.SET_ERROR, { error })
  },

  clearError ({ commit, state }) {
    commit(types.CLEAR_ERROR)
  }
}

// mutations
const mutations = {
  [types.SIGNUP_FAILURE] (state, { message }) {
    state.error = message
  },

  [types.LOGIN_FAILURE] (state, { username, message }) {
    state.error = message
  },

  [types.GET_FAILURE] (state, {username, message}) {
    state.error = message
  },

  [types.ADD_TRANSACTION_FAILURE] (state, { message }) {
    state.error = message
  },

  [types.CLEAR_ERROR] (state) {
    state.error = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
