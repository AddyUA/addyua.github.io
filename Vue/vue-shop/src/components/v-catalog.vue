<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'Cart', params: { cartData: CART } }">
      <div class="v-catalog__link_to_cart main-btn">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" size="3x" />
        <span class="v-catalog__link_to_cart-item">{{ CART.length }}</span>
      </div>
    </router-link>
    <h1 class="v-catalog__header">SHOP</h1>
    <div class="v-catalog__list">
      <app-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import VCatalogItem from './v-catalog-item'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  components: {
    appCatalogItem: VCatalogItem
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  }
  // For API
  // mounted() {
  //   this.GET_PRODUCTS_FROM_API().then((response) => {
  //     if (response.data) {
  //       console.log('Data resived!')
  //     }
  //   })
  // },
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  &__link_to_cart {
    padding: $padding;
    padding-right: $padding * 1.5;

    &-item {
      position: absolute;
      top: 30%;
      left: 48%;
      font-size: 16px;
      color: #777;
      font-weight: bold;
    }
  }
}
</style>
