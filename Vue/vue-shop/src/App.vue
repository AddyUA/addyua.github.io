<template>
  <div id="app">
    <app-main-wrapper />
  </div>
</template>

<script>
import VMainWrapper from './components/v-main-wrapper'

export default {
  name: 'app',
  components: {
    appMainWrapper: VMainWrapper,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
