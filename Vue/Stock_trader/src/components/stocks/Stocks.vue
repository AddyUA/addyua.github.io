<template>
  <div>
    <app-stock v-for="stock in stocks" :stock="stock" :key="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
