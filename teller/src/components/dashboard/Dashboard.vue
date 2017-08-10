<template>
<div class="container">
  <table class="currency-table">
    <thead>
      <tr>
        <th class="first-col">Currency</th>
        <th class="hide-portrait">Quantity</th>
        <th class="hide-portrait">Original Rate</th>
        <th class="hide-portrait">Current Rate</th>
        <th class="hide-portrait">Original Value</th>
        <th class="hide-portrait">Current Value</th>
        <th class="hide-portrait">Profit/Loss [USD]</th>
        <th>Profit/Loss [%]</th>
      </tr>
    </thead>
    <tbody >
      <currency v-for="currency in currencies" :key="currency" :symbol="currency"></currency>
    </tbody>
  </table>
  <h3>Number of investments : {{ investments.length }}</h3>
  <router-link to="/add_transaction" class="button button-1">Add Transaction</router-link>
  <router-link to="/add_investment" class="button button-1">Add Investment</router-link>
</div>
</template>

<script>
import {
  mapGetters,
} from 'vuex'
import Currency from './Currency.vue'

export default {
  components: { Currency },
  computed: mapGetters({
    currencies: 'currencies',
    investments: 'investments'
  }),
  methods: {
    getTransactions() {
      this.$store.dispatch('getAllTransactions')
      this.$store.dispatch('getAllInvestments')
      this.$store.dispatch('getAllWithdrawals')
    }
  },
  mounted: function() {
    this.getTransactions()
  }
}
</script>
