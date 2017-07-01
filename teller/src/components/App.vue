<template>
<div id="app">
  <div class="container nav">
    <router-link to="/" class="nav-title">
      <h1 class="main-title">Am I Rich Yet ?</h1>
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
  <div class="container">
    <h3 class="text-postive">I'm going up</h3>
    <h3 class="text-negative">I'm going down</h3>
  </div>
  <router-view class="view"></router-view>
  <div class="container">
    <p>Token : {{ token || "nonexistent" }}</p>
  </div>
  <div class="container">
    <p v-if="error" class="error">{{ error }}</p>
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
      //console.log(this)
      store.dispatch('checkLogin')
    }
  },
}
</script>
