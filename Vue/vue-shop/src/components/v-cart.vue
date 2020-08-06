<template>
  <div class="v-cart">
    <div class="v-cart__link_to_catalog">
      <router-link :to="{ name: 'Catalog' }">
        <div class="main-btn shop">
          <font-awesome-icon :icon="['fas', 'shopping-bag']" size="3x" />
        </div>
      </router-link>
      <div class="v-cart__total">Total: {{ cartTotalCost }} $</div>
    </div>
    <h1 class="v-cart__header">Cart</h1>
    <p v-if="!cartData.length">There are no pruducts in cart ...</p>
    <app-cart-item
      v-for="(item, index) in cartData"
      :key="item.article"
      :cartItemData="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
  </div>
</template>

<script>
import VCartItem from './v-cart-item'
import { mapActions } from 'vuex'

export default {
  name: 'v-cart',
  props: {
    cartData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    appCartItem: VCartItem
  },
  computed: {
    cartTotalCost() {
      let result = []

      if (this.cartData.length) {
        for (let item of this.cartData) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => {
          return el + sum
        }, 0)

        return result
      } else return 0

      return result
    }
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'INC_CART_ITEM', 'DEC_CART_ITEM']),
    increment(index) {
      this.INC_CART_ITEM(index)
    },
    decrement(index) {
      this.DEC_CART_ITEM(index)
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 20px;

  &__link_to_catalog {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .shop {
    padding: $padding $padding * 1.5;
  }
  &__total {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: #ff713d;
    padding-bottom: $padding;
  }
}
</style>
