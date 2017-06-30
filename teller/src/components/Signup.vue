<template>
<div class="container">
  <form class="form" @submit.prevent="signup">
    <fieldset>
      <input placeholder="email" v-model="email" type="text">
      <div class="row">
        <div class="column column-50">
          <input placeholder="first name" v-model="first" type="text">
        </div>
        <div class="column column-50">
          <input placeholder="last name" v-model="last" type="text">
        </div>
      </div>
      <input placeholder="username" v-model="username" type="text">
      <input placeholder="password" v-model="password" type="password">
      <input placeholder="retype password" v-model="password2" type="password">
      <input class="button button-1" value="Signup" type="submit">
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
      first: '',
      last: '',
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', {
        username: this.username,
        first: this.first,
        last: this.last,
        email: this.email,
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
