<template>
  <div class="container">
    <h2 style="text-align: center;">Add Investment</h2>
    <form class="form" @submit.prevent="investment">
      <fieldset>
        <div class="column">
          <h3 class="color-1">Date</h3>
        </div>
        <input v-model="investment.date" type="date">
        <div class="row">
          <div class="column">
            <h3 class="color-1">Amounts</h3>
          </div>
          <div class="column">
            <button class="button button-1" type="button" name="autofill">Auto Fill Amounts</button>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="USD Rate" v-model="investment.amounts.usd" type="number">
          </div>
          <div class="column">
            USD
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="EUR Rate" v-model="investment.amounts.eur" type="number">
          </div>
          <div class="column">
            EUR
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="ETH Rate" v-model="investment.amounts.eth" type="number">
          </div>
          <div class="column">
            ETH
          </div>
        </div>
        <div class="row">
          <div class="column">
            <input placeholder="BTC Rate" v-model="investment.amounts.btc" type="number">
          </div>
          <div class="column">
            BTC
          </div>
        </div>
        <div class="row">
          <input class="button button-1" value="Save" type="submit">
        </div>
      </fieldset>
    </form>
    <div>
      * Auto Fill Amounts will use the current rates to fill in the zero values
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      investment: {
        date: null,
        amounts: {
          usd: 0,
          eur: 0,
          eth: 0,
          btc: 0
        }
      }
    }
  }
}
</script>
