import manager from '../../api/manager'
import * as types from '../mutation-types'
//import jwt from 'jsonwebtoken'


// initial state
const state = {
  token: localStorage.token,
  authenticated: null,
  error: null
}

// getters
const getters = {
  authenticated: state => state.authenticated,
  token: state => state.token,
  error: state => state.error
}

// actions
const actions = {
  login ({ commit, state }, { username, password, cb }) {
    commit(types.LOGIN_REQUEST)
    manager.login(
      username,
      password,
      token => commit(types.LOGIN_SUCCESS, { cb, token }),
      message => commit(types.LOGIN_FAILURE, { username, message }));
  },

  logout ({ commit, state }) {
    commit(types.LOGOUT);
  }
}

// mutations
const mutations = {
  [types.LOGIN_REQUEST] (state) {
    state.username = ''
    state.authenticated = null
    state.error = null
  },

  [types.LOGIN_SUCCESS] (state, { cb, token }) {
    state.authenticated = true
    state.token = token
    localStorage.token = token
    cb()
  },

  [types.LOGIN_FAILURE] (state, { username, message }) {
    state.username = username
    state.authenticated = false
    state.error = message
  },

  [types.LOGOUT] (state) {
    state.token = null
    localStorage.token = null
    state.authenticated = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
