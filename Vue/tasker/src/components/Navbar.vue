<template>
  <div>
    <nav class="blue darken-4">
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo">Tasks</router-link>
        <ul class="right hide-on-med-and-down">
          <router-link tag="li" to="/" exact active-class="active"
            ><a href="sass.html">Create</a></router-link
          >
          <router-link tag="li" to="/list" active-class="active"
            ><a href="sass.html">List</a></router-link
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  padding: 0 2rem;
}
</style>
