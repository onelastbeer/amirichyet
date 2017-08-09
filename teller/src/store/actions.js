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
