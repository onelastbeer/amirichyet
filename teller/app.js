Vue.use(VueRouter)

// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

new Vue({
  router,
  el: '#app',
  template: `
    <div id="app">
      <div class="container header">
        <img src="https://news.bitcoin.com/wp-content/uploads/2016/01/ethereum-logo-205x300.png" alt="Ethereum logo"></img>
        <h1>{{ message }}</h1>
      </div>
      <div class="container">
        <router-link to="/">/</router-link>
        <router-link to="/foo">/foo</router-link>
        <router-link to="/bar">/bar</router-link>
        <router-view class="view"></router-view>
      </div>
    </div>
  `,
  data: {
    message: 'Waiting for transmission',
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
