import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        image: 'img-1.png',
        name: 'Ghost of Tsushima',
        price: 40,
        article: 'T1',
        available: true,
        category: 'PS4',
      },
      {
        image: 'img-2.png',
        name: 'The Last of Us II',
        price: 50,
        article: 'T2',
        available: true,
        category: 'PS4',
      },
      {
        image: 'img-3.png',
        name: 'Jedi Fallen Order',
        price: 35,
        article: 'T3',
        available: false,
        category: 'PS4',
      },
      {
        image: 'img-4.png',
        name: 'Resident Evil 3',
        price: 30,
        article: 'T4',
        available: true,
        category: 'PC',
      },
      {
        image: 'img-5.png',
        name: 'Mortal Kombat 11',
        price: 35,
        article: 'T5',
        available: false,
        category: 'PC',
      },
      {
        image: 'img-6.png',
        name: 'God of War',
        price: 40,
        article: 'T6',
        available: true,
        category: 'PS4',
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
