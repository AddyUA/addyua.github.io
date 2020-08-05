<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require(`../assets/img/${cartItemData.image}`)"
      alt="image"
    />
    <div class="v-cart-item__info">
      <p>"{{ cartItemData.name }}"</p>
      <p class="v-cart-item__category">{{ cartItemData.category }}</p>
      <p>
        Total:
        <span class="v-cart-item__total">{{ cartItemData.price * cartItemData.quantity }}$</span>
      </p>
      <p>{{ cartItemData.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>Qty:</p>
      <p>
        <span class="v-cart-item__quantity_button" @click="decItem">-</span>
        <span class="v-cart-item__quantity_qty">{{ cartItemData.quantity }}</span>
        <span class="v-cart-item__quantity_button" @click="incItem">+</span>
      </p>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  props: {
    cartItemData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    decItem() {
      this.$emit('decrement')
    },
    incItem() {
      this.$emit('increment')
    },
    deleteFromCart() {
      this.$emit('deleteFromCart')
    }
  },
  mounted() {
    this.$set(this.cartItemData, 'quantity', 1)
  }
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background-color: $item-color;
  max-height: 160px;

  box-shadow: 0 10px 5px #e0e0e0;
  padding: $padding * 2;
  margin: $margin * 2;

  &__image {
    max-width: 100px;
  }

  &__category {
    font-weight: bold;
  }
  &__total {
    font-size: 18px;
    color: #00aeff;
  }
  &__quantity_button {
    margin: $margin;
    padding: $padding;

    font-size: 20px;
    color: #00b7ff;

    cursor: pointer;
  }

  &__quantity_qty {
    cursor: pointer;
  }
}
</style>
