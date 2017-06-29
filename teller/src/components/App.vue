<template>
<div id="app">
  <div class="container nav">
    <router-link to="/" class="nav-title">
      <h1>Am I Rich Yet ?</h1>
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
  <div class="container">
    <router-view class="view"></router-view>
  </div>
</div>
</template>

<script>
import utils from '../utils'
export default {
  name: 'app',
  data() {
    return {
      message: 'Waiting for transmission'
    }
  },
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
  }
}
</script>

<style>
.nav {
  display: block;
  line-height: 5.2rem;
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
