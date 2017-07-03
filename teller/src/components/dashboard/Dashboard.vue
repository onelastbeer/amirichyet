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
      <!--<tr>
        <td class="first-col">BTC</td>
        <td class="hide-portrait">1.0</td>
        <td class="hide-portrait">342.5</td>
        <td class="hide-portrait">2522.67</td>
        <td class="hide-portrait">342.5</td>
        <td class="hide-portrait">2522.67</td>
        <td class="hide-portrait">2180.17</td>
        <td>736.54%</td>
      </tr>-->
    </tbody>
  </table>
  <a class="button button-1">Add Transaction</a>
  <a class="button button-1">Add Investment</a>
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
    currencies: 'currencies'
  }),
}
</script>
