new Vue({
  el: '#app',
  data: {
    message: 'Waiting for transmission',
    publicMessage: 'Waiting for public message',
    secureMessage: 'Waiting for secure message'
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
      get('/api/public/test', function(data) { v.publicMessage = data });
      get('/api/secure/cur', function(data) { v.secureMessage = data });
    }
  }
})
