<template>
<div id="app">
  <div class="container nav">
    <router-link to="/" class="nav-title">
      <h3>Am I Rich Yet ?</h3>
    </router-link>
    <ul class="float-right nav-list">
      <li class="nav-item">
        <router-link to="/login" class="button">Log In</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/signup" class="button">Sign Up</router-link>
      </li>
    </ul>
  </div>
  <div class="container">
    <h3>{{ message }}</h3>
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

<style>
 @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
}

.container {
  animation: fadeIn 1s;
}

.nav {
  display: block;
  line-height: 5.2rem;
  z-index: 1;
}

.nav-title {
  display: inline-block;
}

.nav-list {
  list-style: none;
}

.nav-item {
  float: left;
  margin-bottom: 0;
  margin-left: 1.5rem;
  position: relative;
}
</style>
