<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    appNavbar: Navbar
  }
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
