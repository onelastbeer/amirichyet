import manager from '../../api/manager'
import * as types from '../mutation-types'

// initial state
const state = {
  authenticated: null,
  error: null
}

// getters
const getters = {
  authenticated: state => state.authenticated,
  error: state => state.error
}

// actions
const actions = {
  login ({ commit, state }, { username, password, cb }) {
    commit(types.LOGIN_REQUEST)
    manager.login(
      username,
      password,
      () => commit(types.LOGIN_SUCCESS, { cb }),
      message => commit(types.LOGIN_FAILURE, { username, message }));
  },

  logout ({ commit, state }) {
    console.log("NOT YET IMPLEMENTED")
  }
}

// mutations
const mutations = {
  [types.LOGIN_REQUEST] (state) {
    state.username = ''
    state.authenticated = null
    state.error = null
  },

  [types.LOGIN_SUCCESS] (state, { cb }) {
    state.authenticated = true
    cb()
  },

  [types.LOGIN_FAILURE] (state, { username, message }) {
    state.username = username
    state.authenticated = false
    state.error = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
