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
/*
new Vue({
  router,
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
})*/
// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar" :event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
