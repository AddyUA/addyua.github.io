import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/sass/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartPlus,
  faShoppingBag,
  faShoppingCart,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faShoppingCart, faCartPlus, faShoppingBag, faTimesCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
