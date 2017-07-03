<template>
<div id="app">
  <div class="container nav">
    <router-link to="/" class="nav-title">
      <img class="nav-logo" src="../../resources/AIRY3.png">
    </router-link>
    <ul class="float-right nav-list">
      <li class="nav-item" v-if="!authenticated">
        <router-link to="/login" class="button button-2">Log In</router-link>
      </li>
      <li class="nav-item" v-if="!authenticated">
        <router-link to="/signup" class="button button-2">Sign Up</router-link>
      </li>
      <li class="nav-item" v-if="authenticated">
        <router-link to="/dashboard" class="button button-2">Dashboard</router-link>
      </li>
      <li class="nav-item" v-if="authenticated">
        <router-link to="/settings" class="button button-2">Settings</router-link>
      </li>
      <li class="nav-item" v-if="authenticated">
        <router-link to="/logout" class="button button-2">Log Out</router-link>
      </li>
    </ul>
  </div>
  <router-view class="view"></router-view>
  <div class="container">
    <div v-if="error" class="error">
      <span style="font-weight:900">Error: </span>{{ error }}
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
} from 'vuex'
import store from '../store'

export default {
  name: 'app',
  computed: mapGetters({
    error: 'error',
    authenticated: 'authenticated',
    token: 'token'
  }),
  mounted: function() {
    this.checkLogin()
  },
  methods: {
    checkLogin: () => {
      store.dispatch('checkLogin')
    }
  },
}
</script>
