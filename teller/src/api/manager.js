import axios from 'axios'

export default {

  // AUTHENTICATION
  login (username, password, cb, errorCb) {
    axios.post('/api/public/user/authenticate', {
      username: username,
      password: password
    }).then(response => {
      response.data.success ? cb(response.data.token) : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error");
    });
  },
  signup (user, cb, errorCb) {
    axios.post('/api/public/user/new', {
      user: user
    }).then(response => {
      response.data.success ? cb() : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    });
  },
  checkLogin (ax, cb, errorCb) {
    ax.get('/api/secure/check').then(response => {
      response.data.success ? cb() : errorCb()
    }).catch(error => {
      errorCb();
    })
  },

  // TRANSACTIONS
  getTransactions (ax, cb, errorCb) {
    ax.get('/api/secure/transaction/all').then(response => {
      response.data.success ? cb(response.data.transactions) : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },
  addTransaction (ax, transaction, cb, errorCb) {
    ax.post('/api/secure/transaction/add', {transaction: transaction}).then(response => {
      response.data.success ? cb() : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },

  // WITHDRAWALS
  getWithdrawals (ax, cb, errorCb) {
    ax.get('/api/secure/withdrawal/all').then(response => {
      response.data.success ? cb(response.data.withdrawals) : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },
  addWithdrawal (ax, withdrawal, cb, errorCb) {
    ax.post('/api/secure/withdrawal/add', {withdrawal: withdrawal}).then(response => {
      response.data.success ? cb() : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },

  // INVESTMENTS
  getInvestments (ax, cb, errorCb) {
    ax.get('/api/secure/investment/all').then(response => {
      response.data.success ? cb(response.data.investments) : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },
  addInvestment (ax, investment, cb, errorCb) {
    ax.post('/api/secure/investment/add', {investment: investment}).then(response => {
      response.data.success ? cb() : errorCb(response.data.message)
    }).catch(error => {
      errorCb("Connection Error")
    })
  },

  // SETTINGS
  getSettings (ax, cb, errorCb) {
    ax.get('/api/secure/user/settings').then(response => {
      response.data.success ? cb(response.data.settings) : errorCb(response.data.message)
    }).catch(error => {
      errorCb();
    })
  },
  saveSettings (settings, cb, errorCb) {
    ax.post('/api/secure/user/settings', {
      settings: settings
    }).then(response => {
      response.data.success ? cb(response.data.settings) : errorCb(response.data.message)
    }).catch(error => {
      errorCb();
    })
  }
}
