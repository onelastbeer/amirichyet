export default {
  login (username, password, cb, errorCb) {
    this.$http.get('./api/public/user/authenticate').then(response => {
      this.someData = response.body;
      cb();
    }, response => {
      errorCb;
    });
  }
}
