import VueResource from 'vue-resource'

export default {
  login (username, password, cb, errorCb) {
    this.$http.get('./api/public/user/authenticate').then(response => {
      this.loginResponse = response.body;
      cb();
    }, response => {
      errorCb();
    });
  },
  signup (user, cb, errorCb) {
    this.$http.get('./api/public/user/new', {user: user}).then(response => {
      this.signupResponse = response.body;
      cb();
    }, response => {
      errorCb();
    });
  }
}
