<template>
<tr>
  <td class="first-col">{{ symbol }}</td>
  <td class="hide-portrait">1.0</td>
  <td class="hide-portrait">342.5</td>
  <td class="hide-portrait">2522.67</td>
  <td class="hide-portrait">342.5</td>
  <td class="hide-portrait">2522.67</td>
  <td class="hide-portrait">2180.17</td>
  <td>736.54%</td>
</tr>
</template>

<script>
export default {
  name: 'Currency',
  props: ['symbol']
}
</script>
