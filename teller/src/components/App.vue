<template>
<div id="app">
  <div class="container nav">
    <router-link to="/" class="nav-title">
      <h1 class="main-title">Am I Rich Yet ?</h1>
    </router-link>
    <ul class="float-right nav-list">
      <li class="nav-item">
        <router-link to="/login" class="button button-2">Log In</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup" class="button button-2">Sign Up</router-link>
      </li>
    </ul>
  </div>
  <div class="container">
    <h3 class="text-postive">I'm going up</h3>
    <h3 class="text-negative">I'm going down</h3>
  </div>
  <router-view class="view"></router-view>
  <div class="container">
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</div>
</template>

<script>
import utils from '../utils'
import {
  mapGetters,
} from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      message: 'Waiting for transmission'
    }
  },
  computed: mapGetters({
    error: 'error'
  }),
  created: function() {
    this.fetchMessage()
  },
  methods: {
    humanizeURL: function(url) {
      return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    },
    fetchMessage: function() {
      var v = this;
      utils.get('/api/hi', function(data) {
        v.message = data
      });
    }
  },
}
</script>
