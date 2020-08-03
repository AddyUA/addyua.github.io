import Vue from 'vue'
import Router from 'vue-router'

import VCatalog from '../components/v-catalog'
import VCart from '../components/v-cart'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: VCatalog,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: VCart,
    props: true,
  },
]

const router = new Router({
  routes,
})

export default router
