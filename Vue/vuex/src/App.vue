<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <p>
          <b>result</b>
        </p>
        <app-result></app-result>
        <hr />
        <p>
          <b>another result</b>
        </p>
        <app-an-result></app-an-result>
        <hr />
        <app-counter></app-counter>
        <hr />
        <app-an-counter></app-an-counter>
        <hr />
        <input type="text" v-model="value" />
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnCounter from "./components/AnCounter.vue";
import Result from "./components/Result.vue";
import AnResult from "./components/AnResult.vue";

import * as types from "./store/types";

export default {
  computed: {
    value: {
      get() {
        return this.$store.getters[types.VALUE];
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  components: {
    appCounter: Counter,
    appAnCounter: AnCounter,
    appResult: Result,
    appAnResult: AnResult
  }
};
</script>
