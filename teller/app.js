new Vue({
  el: '#app',
  data: {
    greeting: 'Welcome to your Vue.js app!',
    message: 'Waiting for transmission',
    docsURL: 'http://vuejs.org/guide/',
    gitterURL: 'https://gitter.im/vuejs/vue',
    forumURL: 'http://forum.vuejs.org/'
  },
  created: function() {
    this.fetchMessage()
  },
  methods: {
    humanizeURL: function(url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, '')
    },
    fetchMessage: function() {
      var v = this;
      get('/api/hi', function(data) { v.message = data });
    }
  }
})
