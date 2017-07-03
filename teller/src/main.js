import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'
import App from './components/App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Home from './components/Home.vue'
import Settings from './components/Settings.vue'
import Dashboard from './components/dashboard/Dashboard.vue'
import Verify from './components/Verify.vue'

Vue.use(VueRouter)

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

router.beforeEach((to, from, next) => {
  store.dispatch('clearError');
  next();
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
