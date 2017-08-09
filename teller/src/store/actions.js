import manager from '../api/manager'
import * as types from './mutation-types'

export const getAllTransactions = ({commit, state}) => {
  manager.getTransactions(state.auth.ax, transactons => {
    commit(types.RECIEVE_TRANSACTIONS, {transactons})
  }, message => commit(types.GET_FAILURE, {message}));
}

export const addTransaction = ({
  commit, state
}, {transaction}) => {
  manager.addTransaction(state.auth.ax, transaction, () => commit(types.ADD_TRANSACTION_SUCCESS, {transaction}), message => commit(types.ADD_TRANSACTION_FAILURE, {message}))
}

export const addWithdrawal = ({
  commit, state
}, {withdrawal}) => {
  manager.addWithdrawal(state.auth.ax, withdrawal, () => commit(types.ADD_WITHDRAWAL_SUCCESS, {withdrawal}), message => commit(types.ADD_WITHDRAWAL_FAILURE, {message}))
}

export const addInvestment = ({
  commit, state
}, {investment}) => {
  manager.addInvestment(state.auth.ax, investment, () => commit(types.ADD_INVESTMENT_SUCCESS, {investment}), message => commit(types.ADD_INVESTMENT_FAILURE, {message}))
}
