import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";

import App from "./App.vue";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);

// https://vuejs-http-f7cb3.firebaseio.com/ - the link was actual on time of writing this code
Vue.http.options.root = "https://vuejs-http-f7cb3.firebaseio.com/";

Vue.filter("currency", value => {
  return `$${value.toLocaleString()}`;
});

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
