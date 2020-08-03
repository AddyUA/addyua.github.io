import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        image: '1.jpg',
        name: 'T-shirt 1',
        price: 100,
        article: 'T1',
        available: true,
        category: 'Мужские',
        checked: false,
      },
      {
        image: '2.jpg',
        name: 'T-shirt 2',
        price: 150,
        article: 'T2',
        available: true,
        category: 'Женские',
        checked: false,
      },
      {
        image: '3.jpg',
        name: 'T-shirt 3',
        price: 200,
        article: 'T3',
        available: false,
        category: 'Женские',
        checked: false,
      },
      {
        image: '4.jpg',
        name: 'T-shirt 4',
        price: 250,
        article: 'T4',
        available: true,
        category: 'Мужские',
        checked: false,
      },
      {
        image: '5.jpg',
        name: 'T-shirt 5',
        price: 300,
        article: 'T5',
        available: false,
        category: 'Женские',
        checked: false,
      },
      {
        image: '6.jpg',
        name: 'T-shirt 6',
        price: 350,
        article: 'T6',
        available: true,
        category: 'Женские',
        checked: false,
      },
    ],
    cart: [],
  },
  mutations: {
    SET_TO_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false

        state.cart.map((item) => {
          if (item.article === product.article) {
            isProductExist = true
          }
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else state.cart.push(product)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_TO_CART', product)
    },
    INC_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index)
    },
    DEC_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
  modules: {},
})
