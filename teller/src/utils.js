// Useful utilities for amirichyet
// Great inspiration from http://youmightnotneedjquery.com/

export default {
  // Simple http GET method
  get(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        callback(this.response);
      } else {
        serverError(url, this.status);
      }
    };
    request.onerror = function() {
      connectionError(url);
    };
    request.send();
  },

  // Simple http POST method
  post(url, data) {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
  },

  // Handle server error
  serverError(url, status) {
    console.log("Server reached, but returned an error " + status + " for " + url);
  },

  // Handle connection error
  connectionError(url) {
    console.log("Connection error for " + url);
  }
}
