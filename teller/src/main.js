import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.use(VueRouter)

const Home = { template: '<div>Home</div>' }
const Login = { template: '<div>Log In</div>' }
const Signup = { template: '<div>Sign Up</div>' }

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
  el: '#app',
  render: h => h(App)
})
