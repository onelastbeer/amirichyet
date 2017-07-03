import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Home from './components/Home.vue'
import Setting from './components/Settings.vue'
import Dashboard from './components/Dashboard.vue'
import Verify from './components/Verify.vue'

Vue.use(VueRouter)

const Verify = { template: '<div class="container">Please check your email to start using Am I Rich Yet (NOT YET IMPLEMENTED, GO TO LOGIN !)</div>' }
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
    { path: '/verify', component: Verify },
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
