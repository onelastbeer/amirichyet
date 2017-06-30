import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

Vue.use(VueRouter)

const Home = { template: '<div class="container">Home</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
  ]
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
