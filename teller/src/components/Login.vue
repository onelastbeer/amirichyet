<template>
<div class="container">
  <form class="form" @submit.prevent="login">
    <fieldset>
      <input placeholder="username" v-model="username" type="text">
      <input placeholder="password" v-model="password" type="password">
      <input class="button-primary" value="Send" type="submit">
    </fieldset>
  </form>
</div>
</template>

<script>
import auth from '../store/modules/auth'
import {
  mapGetters,
} from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  computed: mapGetters({
    authenticated: 'authenticated'
  }),
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
        cb: success => {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}
</script>

<style>
.form {
  max-width: 450px;
  margin: 60px auto;
}
</style>
