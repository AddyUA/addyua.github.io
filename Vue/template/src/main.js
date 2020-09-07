import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ----- Vue-Fontawesome library
import { library } from "@fortawesome/fontawesome-svg-core";
// names of icons adds to the brackets below
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {
  faFontAwesome,
  faVuejs,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./assets/sass/main.scss";

// First you must add names of icons to the library below
library.add(faUserSecret, faFontAwesome, faVuejs, faTwitter);
// To add icon in DOM use:
// for solid <font-awesome-icon :icon="['fas', 'user-secret']" />
// for brands <font-awesome-icon :icon="['fab', 'font-awesome']" />
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
