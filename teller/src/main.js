import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

Vue.use(VueRouter)

const Home = { template: '<div class="container">Home</div>' }
const Settings = { template: '<div class="container">Settings (PROTECTED !)</div>' }
const Dashboard = { template: '<div class="container">Dashboard (PROTECTED !)</div>' }

function requireAuth (to, from, next) {
  if (!store.state.auth.authenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth},
    { path: '/settings', component: Settings, beforeEnter: requireAuth},
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/logout',
      beforeEnter (to, from, next) {
        store.dispatch('logout')
        next('/')
      }
    }
  ]
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
