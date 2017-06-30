export default {
  login (username, password, cb, errorCb) {
    setTimeout(() => {
      // simulate random login failure.
      (Math.random() > 0.5)
        ? cb()
        : errorCb()
    }, 100)
  }
}
