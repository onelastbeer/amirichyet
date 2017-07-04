<template>
  <div class="container">
    <h2 style="text-align: center;">Add Transaction</h2>
    <form class="form" @submit.prevent="transaction">
      <fieldset>
        <label class="color-1" for="transaction.currencyId"><h3>Select Currency</h3></label>
        <select id="currencyRangeField">
          <option v-for="currency in currencies" value="currency.id">{{currency.name}}</option>
        </select>
        <div class="column">
          <h3 class="color-1">Date</h3>
        </div>
        <input v-model="transaction.date" type="date">
        <div class="column">
          <h3 class="color-1">Amount</h3>
        </div>
        <input placeholder="amount" v-model="transaction.amount" type="number">
        <div class="row">
          <div class="column">
            <h3 class="color-1">Rates</h3>
          </div>
          <div class="column">
            <button class="button button-1" type="button" name="autofill">Auto Fill Rates</button>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="USD Rate" v-model="transaction.rates.usd" type="number">
          </div>
          <div class="column">
            USD
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="EUR Rate" v-model="transaction.rates.eur" type="number">
          </div>
          <div class="column">
            EUR
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="ETH Rate" v-model="transaction.rates.eth" type="number">
          </div>
          <div class="column">
            ETH
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="BTC Rate" v-model="transaction.rates.btc" type="number">
          </div>
          <div class="column">
            BTC
          </div>
        </div>
        <div class="row">
          <div class="column">
            Received
          </div>
          <div class="column">
            <input type="checkbox" id="checkbox" v-model="transaction.received">
          </div>
        </div>
        <div class="row">
          <div class="button-list">
            <input class="button button-1 " value="Save" type="submit">
          </div>
          <div class="button-list">
            <router-link to="/dashboard" class="button button-1">Cancel</router-link>
          </div>
        </div>
      </fieldset>
    </form>
    <div>
      * Auto Fill Rate will use the current rates to fill in the zero values
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //NEEDS TO BE NONSTATIC TODO
      currencies: {
        eth: {
          name: "ETH",
          id: "4312432421"
        },
        eos: {
          name: "EOS",
          id: "4312332421"
        },
        btc: {
          name: "BTC",
          id: "4312434421"
        }
      },
      transaction: {
        date: null,
        currencyId: "",
        amount: 0,
        rates: {
          usd: 0,
          eur: 0,
          eth: 0,
          btc: 0
        },
        received: false
      }
    }
  }
}
</script>
