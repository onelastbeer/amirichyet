<template>
  <div class="container">
    <h2>Settings</h2>
    <label class="color-1" for="transaction.currencyId">Select Reference Currency</label>
    <select id="currencyRangeField">
      <option v-for="currency in currencies" value="currency">{{currency}}</option>
    </select>
    <table class="settings-table">
      <thead>
        <tr class="color-1">
          <th>Dashboard options</th>
          <th>Activate</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Show Quantity</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showQuantity"></td>
        </tr>
        <tr>
          <td>Show Original Rate</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showOriginalRate"></td>
        </tr>
        <tr>
          <td>Show Current Rate</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showCurrentRate"></td>
        </tr>
        <tr>
          <td>Show Original Value</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showOriginalValue"></td>
        </tr>
        <tr>
          <td>Show Current Value</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showCurrentValue"></td>
        </tr>
        <tr>
          <td>Show Profit/Loss</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showProfitLoss"></td>
        </tr>
        <tr>
          <td>Show Profit/Loss Percentage</td>
          <td><input type="checkbox" id="checkbox" v-model="settings.showProfitLossPercentage"></td>
        </tr>
      </tbody>
    </table>

    <label class="color-1" for="settings.theme">Theme (More coming soon)</label>
    <select id="themeRangeField">
      <option value="Dark">Dark</option>
    </select>

    <button class="button button-1" v-on:click="saveSettings">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        showQuantity: true,
  	    showOriginalRate: true,
  	    showCurrentRate: true,
  	    showOriginalValue: false,
  	    showCurrentValue: false,
  	    showProfitLoss: true,
  	    showProfitLossPercentage: true,
  	    theme: "Dark",
        refCurrency: "USD"
      },
      error: false,
      currencies: ["EUR","USD","ETH","BTC"]
    }
  },
  methods: {
    saveSettings() {
      this.$store.dispatch('saveSettings', {
        settings: this.settings,
        cb: () => {
          this.$router.replace(this.$route.query.redirect || '/dashboard')
        }
      })
    }
  }
}
</script>
