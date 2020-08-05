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
        description:
          'В конце XIII века в ходе кампании по завоеванию Востока Монгольская империя стерла с лица земли целые народы. Остров Цусима – последнее, что лежит на пути мощного монгольского флота во главе с хитрым и безжалостным генералом Хотун-ханом до материковой Японии.',
        price: 40,
        article: 'T1',
        available: true,
        category: 'PS4',
      },
      {
        image: 'img-2.png',
        name: 'The Last of Us II',
        description:
          'После смертельно опасного путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Вайоминге. Обосновавшись в процветающей общине, они обрели желанную стабильность, несмотря на постоянную угрозу нападения зараженных и теряющих смысл жизни выживших.',
        price: 50,
        article: 'T2',
        available: true,
        category: 'PS4',
      },
      {
        image: 'img-3.png',
        name: 'Jedi Fallen Order',
        description:
          'В игре «Звёздные Войны Джедаи: Павший Орден», новом экшне с видом от третьего лица авторства Respawn Entertainment, вас ждут приключения галактического масштаба. Действие этой сюжетной одиночной игры разворачивается после событий ленты «Эпизод III – Месть ситхов».',
        price: 35,
        article: 'T3',
        available: false,
        category: 'PS4',
      },
      {
        image: 'img-4.png',
        name: 'Resident Evil 3',
        description:
          'Только Джилл Валентайн знает о преступлениях корпорации «Амбрелла». Чтобы остановить ее, «Амбрелла» использует секретное оружие: Немезис! В комплект входит новая сетевая игра Resident Evil Resistance, в которой четверо выживших бросают вызов зловещему высшему разуму и пытаются сбежать из его плена.',
        price: 30,
        article: 'T4',
        available: true,
        category: 'PC',
      },
      {
        image: 'img-5.png',
        name: 'Mortal Kombat 11',
        description:
          'Mortal Kombat возвращается во всей красе! Начинается следующий виток эволюции легендарной серии. Совершенно новые варианты персонализации героя обеспечат беспрецедентные возможности для настройки бойцов и придания им неповторимых индивидуальных черт.',
        price: 35,
        article: 'T5',
        available: false,
        category: 'PC',
      },
      {
        image: 'img-6.png',
        name: 'God of War',
        description:
          'Все изменилось. Закончился круговорот насилия, недоверия и обмана. Завершена череда ошибок, связанных с богами греческого пантеона, – злополучное соглашение с Аресом, убийство семьи, ненависть и безумие, а в итоге грандиозное разрушение Олимпа. Ярость Кратоса стала причиной множества бед. Но что будет, когда он сделает правильный выбор? И почему он решил так поступить?',
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
