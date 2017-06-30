import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import { sync } from 'vuex-router-sync'
import App from './components/App.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const Home = { template: '<div class="container">Home</div>' }
const Signup = { template: '<div class="container">Sign Up</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

sync(store, router);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
